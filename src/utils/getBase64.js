const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            let img = new Image();
            img.onload = function () {
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                let width = img.width;
                canvas.width = width;
                canvas.height = width * (img.height / img.width);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                //图片压缩
                let data = canvas.toDataURL(file.type, 0.5);
                console.log(data);
                resolve({ fileName: file.name, fileObj: data });
            };
            img.src = event.target.result;
        }
        reader.onerror = (error) => reject(error);
    });

export default getBase64;
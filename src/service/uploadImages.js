import http from "../utils/axios";

export function uploadImgList(imgList) {
    const formdata = new FormData();
    imgList.map(item => {
        formdata.append("file", item);
    })
    const res = http.post("dev/nvoice/reg", formdata);
    return res;
}

export function uploadImg(img) {
    const formdata = new FormData();
    formdata.append("file", img)
    return http.post("dev/invoice/reg", formdata);
}

export function uploadImgLocal(img) {
    const formdata = new FormData();
    formdata.append("file", img)
    return http.post("local/upload", formdata);
}

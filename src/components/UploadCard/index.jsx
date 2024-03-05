import { Upload } from "antd";
import { useStore } from "@/store/index";
import { useNavigate } from "react-router-dom";

const UploadCard = () => {
    const store = useStore();
    const navigate = useNavigate();

    const handleBeforeUpload = (file) => {
        // 检查其中的文件并返回file
        // file为fromdata类型可以添加需要的单项
        return false;
    };

    //声明标志变量保证在上传多张图片时handleChange只执行一次
    let isHandlingChange = false;
    const handleChange = (info) => {
        if (isHandlingChange) return;
        console.log(info.fileList);
        if (info.file.status !== "uploading") {
            info.fileList.map(i => store.UploadImgStore.addImg(i));
            // store.UploadImgStore.initImg(info.fileList);
            isHandlingChange = true;
            navigate("/upload");
        }
    };

    return (
        <div className="flex flex-col gap-4 rounded-2xl shadow-2xl items-center justify-center h-96 w-96">
            <Upload
                multiple={true}
                accept=".png,.jpg,.jpeg,.bmps,.gif,.tiff,.webp,.pdf,.ofd"
                beforeUpload={handleBeforeUpload}
                onChange={handleChange}
                showUploadList={false}
            >
                <button className="text-xl rounded-3xl shadow-lg h-20 w-40 py-2 px-4 mt-2 border font-semibold bg-cyan-500 hover:bg-cyan-700">
                    上传图片
                </button>
            </Upload>
            <div className="text-lg  p-2 text-center font-semibold">
                或者拖放一个文件
                <br />
                粘贴图片或者url
            </div>
        </div>
    );
};

export default UploadCard;

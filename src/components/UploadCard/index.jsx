import { Upload } from "antd";
import { useStore } from "@/store/index";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { observer } from "mobx-react-lite";
import "./index.scss";

const UploadCard = ({ func, url, msg }) => {
    const { UploadFileStore } = useStore();
    const navigate = useNavigate();

    const handleBeforeUpload = (file) => {
        // 检查其中的文件并返回file
        // file为fromdata类型可以添加需要的单项
        return false;
    };

    let flag = false;
    //声明标志变量保证在上传多张图片时handleChange只执行一次
    const handleChange = (info) => {
        if (flag) {
            return;
        }
        if (info.file.status !== "uploading") {
            // 上传File
            info.fileList.map(({ originFileObj }) =>
                func(UploadFileStore, originFileObj)
            );
            flag = true;
            navigate(url);
        }
    };

    return (
        <Fragment>
            <Upload
                multiple={true}
                accept=".png, .jpg, .jpeg, .pdf"
                beforeUpload={handleBeforeUpload}
                onChange={handleChange}
                showUploadList={false}
            >
                <button className="block min-w-[430px] bg-custom-red rounded-[15px] min-h-[100px]  text-[27px] font-semibold text-white tracking-wider">
                    {msg}
                </button>
            </Upload>
        </Fragment>
    );
};

export default observer(UploadCard);

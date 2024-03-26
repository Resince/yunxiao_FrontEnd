import { FloatButton, Upload } from "antd";
import { useStore } from "@/store/index";
import { useNavigate } from "react-router-dom";

const FileSelectorCard = ({ func, url, msg }) => {
    const { UploadFileStore } = useStore();
    const navigate = useNavigate();

    let flag = false;
    const handleFileChange = (info) => {
        if (flag) return;
        if (info.file.status !== "uploading") {
            // 上传File
            info.fileList.map(({ originFileObj }) =>
                func(UploadFileStore, originFileObj)
            );
            flag = true;
            navigate(url);
        }
    };

    const handleMailChange = (info) => {
        console.log("clicked");
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 mr-3">
            <Upload
                multiple={true}
                accept=".pdf"
                beforeUpload={() => {
                    return false;
                }}
                onChange={handleFileChange}
                showUploadList={false}
            >
                <FloatButton
                    className="relative right-0 bottom-0"
                    tooltip={<div>选择发票文件(pdf)上传</div>}
                />
            </Upload>
            <Upload
                multiple={true}
                accept=".pdf"
                beforeUpload={() => {
                    return false;
                }}
                onChange={handleMailChange}
                showUploadList={false}
            >
                <FloatButton
                    className="relative right-0 bottom-0"
                    tooltip={<div>从邮箱中选择发票邮件上传</div>}
                />
            </Upload>
        </div>
    );
};

export default FileSelectorCard;

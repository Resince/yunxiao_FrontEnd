import UploadCard from "@/components/UploadCard";
import FileSelectorCard from "@/components/FileSelectorCard";
import { observer } from "mobx-react-lite";

const UploadVerifyFile = () => {
    const func = (store, originFileObj) => {
        store.addFile(originFileObj);
    };
    const msg = "选择发票文件";
    const url = "/user/resDisply";

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-7 mt-12 gap-4">
                <h1 className="text-[27px] font-semibold">
                    选择你的要验证的发票文件
                </h1>
                <h2 className="text-xl ">
                    通过官方验证，确保验证来源的准确性！
                </h2>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="selectCard-wrapper">
                    <FileSelectorCard />
                </div>
                <div className="uploadCard-wrapper">
                    <UploadCard func={func} msg={msg} url={url} />
                </div>
            </div>
        </div>
    );
};

export default observer(UploadVerifyFile);

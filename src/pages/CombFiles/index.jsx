import OperatePic from "./components/OperatePic";
import CombSilde from "./components/Silde";
import { useEffect, useState } from "react";
import { useStore } from "@/store";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import uploadFileStore from "@/store/uploadFileStore";

const CombFiles = () => {
    const [data, setData] = useState([]);
    const { UploadFileStore, PdfDownStore } = useStore();
    const navigate = useNavigate();

    const handleCombButton = () => {
        uploadFileStore
            .sendFileList(uploadFileStore.getFileList)
            .then((res) => {
                PdfDownStore.setPdf(res.data.pdfFile);
                PdfDownStore.setPdfData(res.data.pdfData);
                console.log(PdfDownStore.getPdf);
                navigate("/user/downloadFile");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // 将不同的文件类型分开，并且生成预览
    const genPreViewData = (file) => {
        const type = file.type;
        if (type === "application/pdf") {
            return {
                type: "pdf",
                file: file,
                name: file.name,
            };
        } else if (type === "image/jpeg" || type === "image/png") {
            return {
                type: "img",
                file: URL.createObjectURL(file),
                name: file.name,
            };
        } else {
            return {
                type: "other",
                file: file,
                name: file.name,
            };
        }
    };

    useEffect(() => {
        setData(
            UploadFileStore.getFileList.map((file) => genPreViewData(file))
        );
    }, [UploadFileStore.getFileList]);

    return (
        <div className="grid grid-cols-8 h-container-height overflow-hidden gap-0">
            <div className="combFiles-card col-span-6 justify-self-center px-16 pt-6 overflow-y-auto overflow-x-hidden w-full">
                <OperatePic data={data} />
            </div>
            <div className="col-span-2 bg-slate-100 shadow-xl">
                <CombSilde func={handleCombButton} />
            </div>
        </div>
    );
};

export default observer(CombFiles);

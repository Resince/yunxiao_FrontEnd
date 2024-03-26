import { useEffect, useState } from "react";
import PreviewPdf from "./components/PreviewPdf";
import DownloadSilde from "./components/Slide";
import { useStore } from "@/store";
import pdfDownStore from "@/store/pdfDownStore";
import { observer } from "mobx-react-lite";

const DownloadFile = () => {
    const { PdfDownStore } = useStore();

    const handleDownButton = () => {
        const link = document.createElement("a");
        if (!pdfDownStore.getPdf) return;
        link.href = pdfDownStore.getPdf;
        link.download = PdfDownStore.getPdf.name || "download.pdf";
        link.click();
    };

    return (
        <div className="grid grid-cols-8 h-container-height overflow-hidden gap-0">
            <div className="combFiles-card col-span-6 justify-self-center px-16 pt-6 overflow-y-auto overflow-x-hidden w-full">
                <PreviewPdf data={pdfDownStore.getPdf} />
            </div>
            <div className="col-span-2 bg-slate-100 shadow-xl">
                <DownloadSilde
                    func={handleDownButton}
                    data={PdfDownStore.getPdfData}
                />
            </div>
        </div>
    );
};

export default observer(DownloadFile);

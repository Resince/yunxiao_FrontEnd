import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import clamp from "lodash-es/clamp";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { observer } from "mobx-react-lite";
import "./index.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PreviewPdf = ({ data }) => {
    const [pageAllNum, setPageAllNum] = useState(1);
    const [pageCurrentNum, setPageCurrentNum] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setPageAllNum(numPages);
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="fixed top-[400px] z-10 flex flex-row gap-[900px]">
                <button
                    onClick={() => {
                        setPageCurrentNum((i) => {
                            return clamp(i - 1, 1, pageAllNum);
                        });
                    }}
                >
                    <svg
                        className="w-10 h-10 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="#dc2626"
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                        />
                    </svg>
                </button>
                <button
                    onClick={() => {
                        setPageCurrentNum((i) => {
                            return clamp(i + 1, 1, pageAllNum);
                        });
                    }}
                >
                    <svg
                        className="w-10 h-10 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="#dc2626"
                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        />
                    </svg>
                </button>
            </div>
            <Document
                file={data}
                onLoadSuccess={onDocumentLoadSuccess}
                className="flex flex-col items-center justify-center overflow-auto mt-6 border-2 shadow-md shadow-gray-300"
            >
                <Page
                    width={800}
                    pageNumber={pageCurrentNum}
                    renderAnnotationLayer={true}
                    renderTextLayer={true}
                    scale={1}
                />
            </Document>
            <div className="font-bold py-5 ">
                Page <span className="text-red-600">{pageCurrentNum}</span> of{" "}
                <span className="text-red-600">{pageAllNum}</span>
            </div>
        </div>
    );
};

export default observer(PreviewPdf);

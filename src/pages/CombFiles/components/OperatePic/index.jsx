import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Document, Page, pdfjs } from "react-pdf";
import "./index.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const OperatePic = ({ data }) => {
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
        const genView = (data) => {
            const temp = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === "pdf") {
                    temp.push(
                        <Document file={data[i].file}>
                            <Page
                                pageNumber={1}
                                width={270}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                            <div className="ope-text-div">
                                <span className="ope-text">{data[i].name}</span>
                            </div>
                        </Document>
                    );
                } else if (data[i].type === "img") {
                    temp.push(
                        <img
                            className="rounded-lg shadow-xl"
                            src={data[i].file}
                        />
                    );
                } else {
                    temp.push(<h1>暂不支持显示</h1>);
                }
            }
            return temp;
        };
        setFileList(genView(data));
    }, [data]);
    
    return (
        <div className="ope-contain">
            {fileList.map((item, index) => {
                return (
                    <div
                        className="flex items-center justify-center w-[300px]"
                        key={index}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    );
};

export default observer(OperatePic);

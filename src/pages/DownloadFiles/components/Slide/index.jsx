import CombButton from "@/components/combButton";
import { Fragment, useEffect, useState } from "react";

const DownloadSilde = ({ func, data }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const temp = [
            {
                key: "发票代码",
                value: data.invoiceCode,
            },
            {
                key: "开票日期 ",
                value: data.invoiceDate,
            },
            {
                key: "发票号码",
                value: data.invoiceNumber,
            },
            {
                key: "购买方名称",
                value: data.purchaserName,
            },
            {
                key: "销售方名称",
                value: data.sellerName,
            },
            {
                key: "销售方纳税人识别号",
                value: data.sellerTaxNumber,
            },
            {
                key: "总金额",
                value: data.totalAmount,
            },
        ];
        setTableData(temp);
    }, [data]);

    return (
        <Fragment>
            <div className="grid h-full items-center gap-4 p-3 ">
                <div className="flex flex-col gap-3 pt-6 items-center">
                    <div className="shadow-lg shadow-red-400 rounded-lg w-[250px] h-[90px] flex items-center justify-self-center relative bottom-[90px]">
                        <h1 className="text-2xl font-bold w-[200px] text-center p-auto m-auto">
                            预览合并完成的文件
                        </h1>
                    </div>
                    <div className="shadow-lg rounded-lg flex-col items-center justify-self-center relative bottom-[80px]">
                        <table className="w-full table-fixed max-h-[200px] ">
                            <thead>
                                <tr>
                                    <th className="w-1/2 px-4 py-2 border-r">
                                        项名
                                    </th>
                                    <th className="w-1/2 px-4 py-2">值</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="w-1/2 px-4 py-2 border-r">
                                            {item.key}
                                        </td>
                                        <td className="w-1/2 px-4 py-2 truncate hover:text-clip">
                                            {item.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="absolute right-[40px] bottom-12">
                <CombButton func={func} msg="下载你的文件" />
            </div>
        </Fragment>
    );
};
export default DownloadSilde;

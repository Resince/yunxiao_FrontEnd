import CombButton from "@/components/combButton";
import { Fragment } from "react";

const CombSilde = ({ func }) => {
    return (
        <Fragment>
            <div className="grid h-full items-center justify-center grid-rows-5 justify-items-center gap-4 p-3 ">
                <div className="flex flex-col gap-3 pt-9 items-center ">
                    <div className="shadow-lg shadow-red-400 rounded-lg w-[250px] h-[90px] flex items-center justify-self-center">
                        <h1 className="text-2xl font-bold w-[200px] text-center p-auto m-auto">
                            预览你即将合并组合的文件
                        </h1>
                    </div>

                    <div className="shadow-lg mt-10 rounded-lg flex-col items-center justify-self-center">
                        <p className="text-lg mt-5 p-5 font-light">
                            图片组合会将发票和对应的消费凭证组合在一页中，如果没有消费凭证，将会单独显示发票
                        </p>
                        <p className="pt-8 text-lg p-5 font-light">
                            通过点击查看文件是否上传正确
                            上传后将会按照文件中的发票的日期排序组合
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute right-[40px] bottom-12">
                <CombButton func={func} msg="组合识别" />
            </div>
        </Fragment>
    );
};
export default CombSilde;

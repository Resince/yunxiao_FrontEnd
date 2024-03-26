import { IMG_THREE } from "@/constants/home";
import "./index.scss";
import StartButton from "@/components/StartButton";

const PageTwo = () => {
    const handleOnClick = () => {
        console.log("click");
    };

    return (
        <div className="contentWindows Page-2">
            <div className="spread">
                <div className="spread-left">
                    <img src={IMG_THREE} />
                </div>
                <div className="spread-right">
                    <div className="content">
                        <h1 className="title">发票统一识别</h1>
                        <p>
                            Create professional looking estimates in just a few
                            seconds. Whether you're on the go or working from
                            home, Invoice Fly is the easiest way to manage your
                            invoicing.
                        </p>
                    </div>
                    <div className="button-wrapper">
                        <StartButton callBack={handleOnClick} text="开始使用" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTwo;

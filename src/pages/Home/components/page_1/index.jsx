import { IMG_ONE, IMG_TWO } from "@/constants/home";
import StartButton from "@/components/StartButton";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const PageOne = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/user/uploadFile");
    };
    return (
        <div className="page-1">
            <div className="main-header">
                <h1 className="main-titleName">云端报销用云销</h1>
                <p className="main-subtitle">
                    It’s perfect for small businesses, freelancers and
                    contractors. Whether you need to create and invoice or
                    estimate, Invoice Fly is the best Invoice App.
                </p>
            </div>
            <div className="main-images">
                <img className="images-primary" src={IMG_ONE} />
                <img className="images-secondary" src={IMG_TWO} />
            </div>
            <div className="StartButton-wrapper">
                <StartButton callBack={handleOnClick} text="开始使用" />
            </div>
        </div>
    );
};

export default PageOne;

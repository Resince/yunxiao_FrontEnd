import { Button, Image } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const Navitegate = useNavigate();

    const handleOnClick = () => {
        Navitegate("/uploadFile");
    };

    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <Image preview={false} src="src\assets\homeShowpic.png" />
            <div className="my-16">
                <Button onClick={handleOnClick}>开始使用</Button>
                <div>功能展示部分</div>
            </div>
        </div>
    );
};

export default Home;

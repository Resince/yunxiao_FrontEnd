import { useNavigate } from "react-router-dom";

const NoFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="">404</h1>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Home
            </button>
        </div>
    );
};

export default NoFoundPage;

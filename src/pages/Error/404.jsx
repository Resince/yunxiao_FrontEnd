import { useNavigate } from "react-router-dom";

const Error404 = () => {
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

export default Error404;

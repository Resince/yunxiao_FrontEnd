import { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [toggleState, useToggleState] = useState(false);
    const navigate = useNavigate();

    // 测试审核端
    const handleAdmin = () => {
        navigate("/admin");
    };

    return (
        <div className="login_container">
            <div
                className={
                    toggleState ? "right-panel-active container" : "container"
                }
            >
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className="text-2xl mb-3">创建账户</h1>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>注册</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 className="text-2xl mb-3">登录系统</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        {/* <a href="#">忘记密码?</a> */}
                        <button>登录</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>你好！</h1>
                            <p>
                                请输入邮箱作为你的登录名，并取一个合适的名称作为你的昵称吧
                            </p>
                            <button
                                className="ghost"
                                onClick={() => {
                                    useToggleState(false);
                                }}
                            >
                                登录
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>你好，尊敬的用户</h1>
                            <p>
                                欢迎使用云销，请输入你的邮箱地址和密码进行登录
                            </p>
                            <button
                                className="ghost "
                                onClick={() => {
                                    useToggleState(true);
                                }}
                            >
                                注册
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={handleAdmin}>进入审核</button>
            </div>
        </div>
    );
};
export default Login;

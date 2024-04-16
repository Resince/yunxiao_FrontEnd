import { useEffect, useState } from "react";
import { useStore } from "@/store";
import { useNavigate, useLocation } from "react-router-dom";
import { message } from "antd";
import { observer } from "mobx-react-lite";
import "./index.scss";

const Login = () => {
    const [toggleState, useToggleState] = useState(false);
    const [loginEmail, useLoginEmail] = useState("");
    const [loginPwd, useLoginPwd] = useState("");
    const [registerEmail, useRegisterEmail] = useState("");
    const [registerPwd, useRegisterPwd] = useState("");
    const [registerName, useRegisterName] = useState("");
    const [role, useRole] = useState("");
    const [restart, useRestart] = useState(true);
    const [regesiterRole, useRegesiterRole] = useState(true);
    const { AuthStore } = useStore();
    const navigate = useNavigate();
    const location = useLocation();

    const emailReg = new RegExp(
        "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$"
    );
    const passwordReg = new RegExp("^(?=.*[a-zA-Z])(?=.*d).{8,18}$");

    const { from } = location.state || { from: { pathname: "/" } };

    const isValidEmail = (email) => {
        if (!emailReg.test(email)) {
            message.error("邮箱格式不正确");
            return false;
        }
        return true;
    };

    const handleLogin = () => {
        if (!role) {
            handleCheckEmail();
        } else {
            AuthStore.login(loginEmail, loginPwd).then((res) => {
                console.log(role);
                if (res && role === "用户") navigate(from);
                else if (res && role === "审核员") navigate("/admin");
            });
        }
    };

    const handleRegister = (role) => {
        if (!isValidEmail(registerEmail)) {
            return;
        }
        if (!passwordReg.test(registerPwd)) {
            message.error("密码格式不正确");
            return;
        }
        AuthStore.register(registerEmail, registerPwd, role).then(() => {
            //清空
            useRegisterName("");
            useRegisterEmail("");
            useRegisterPwd("");
            useToggleState(false);
            useRegesiterRole(true);
        });
    };

    const handleCheckEmail = () => {
        if (!isValidEmail(loginEmail)) {
            return;
        }
        AuthStore.checkEmail(loginEmail).then((res) => {
            useRole(
                res.role === "admin"
                    ? "审核员"
                    : res.role === "user"
                    ? "用户"
                    : "访客"
            );
            // 重新开始span的动画
            useRestart(true);
        });
    };

    useEffect(() => {
        if (!loginEmail) {
            useRole("");
            useLoginPwd("");
        }
    }, [loginEmail]);

    return (
        <div className="login_container">
            <div className="fixed "></div>
            <div
                className={
                    toggleState ? "right-panel-active container" : "container"
                }
            >
                <div className="form-container sign-up-container">
                    <div className="form">
                        <h1 className="text-2xl mb-3">创建账户</h1>
                        <input
                            type="text"
                            placeholder="Name"
                            value={registerName}
                            onChange={(e) => useRegisterName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={registerEmail}
                            onChange={(e) => useRegisterEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={registerPwd}
                            onChange={(e) => useRegisterPwd(e.target.value)}
                        />
                        {regesiterRole ? (
                            <button
                                onClick={() => {
                                    useRegesiterRole(false);
                                }}
                            >
                                注册
                            </button>
                        ) : (
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        handleRegister("user");
                                    }}
                                >
                                    用户
                                </button>
                                <button
                                    onClick={() => {
                                        handleRegister("admin");
                                    }}
                                >
                                    审核员
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="form-container sign-in-container">
                    <div className="form">
                        <h1 className="text-2xl mb-3">登录</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            value={loginEmail}
                            onChange={(e) => useLoginEmail(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleCheckEmail();
                            }}
                        />
                        {!role ? (
                            <div></div>
                        ) : (
                            <input
                                type="password"
                                placeholder="Password"
                                value={loginPwd}
                                onChange={(e) => useLoginPwd(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleLogin();
                                }}
                            />
                        )}
                        {/* <a href="#">忘记密码?</a> */}
                        <button onClick={handleLogin}>
                            {role ? "登录" : "继续"}
                        </button>
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>你好！</h1>
                            <p>请输入邮箱作为登录名，并取一个合适的昵称吧</p>
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
                            <h1>
                                <span
                                    className={restart ? "myAnimation" : ""}
                                    onAnimationEnd={() => {
                                        useRestart(false);
                                    }}
                                >
                                    你好，尊敬的{role ? role : "访客"}
                                </span>
                            </h1>
                            <p>
                                欢迎使用云销，请输入邮箱和密码进行登录。没有账号？请点击下方按钮进行注册
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
            </div>
        </div>
    );
};
export default observer(Login);

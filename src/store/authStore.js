import { action, makeAutoObservable, runInAction, toJS } from "mobx";
import { myToken } from "@/utils/token";
import myAxios from "@/utils/axios";
import { message } from "antd";

class AuthStore {
    userInformation = {};

    constructor() {
        makeAutoObservable(this)
    }

    // 登录,返回用户信息
    async login(email, password) {
        // 登录
        return await myAxios.post("/user/login", { email, password }).then((res) => {
            runInAction(() => {
                myToken.setToken(res.data.token);
                this.userInformation = res.data.userInfo;
            })
            message.success("登录成功", 1);
            return res.data;
        }).catch((err) => {
            message.error("密码有误,请重新输入", 1);
            return null;
        });
    }

    // 注册
    async register(email, password, role) {
        const res = await myAxios.post("/user/register", { email, password, role });
        return res;
    }

    // 登出
    logout() {
        myToken.removeToken();
        this.userInformation = undefined;
    }

    // 检查对应邮件地址是用户还是管理员或者说不存在
    async checkEmail(email) {
        console.log(email);
        return await myAxios.post("/user/checkEmail", { "email": email }).then((res) => {
            if (res)
                return res.data;
            else
                return null;
        });
    }

    // 查询当前用户,直接使用token
    async getCurrentUser() {
        const res = await myAxios.get("/user/currentUser");
        if (res) {
            runInAction(() => {
                this.userInformation = res.data.userInfo;
            });
            return res.data.userInfo;
        }
        else
            return null;
    }

    // 获取用户信息
    getUserInfo(userId) {
        return myAxios.post("/user/userInfo", { userId }).then((res) => {
            if (!res) {
                return null;
            } else {
                return res.data;
            }
        });
    }

    // 用户是否登录
    isLogin() {
        return myToken.getToken();
    }

    get userInfo() {
        return toJS(this.userInformation);
    }

    set setUserInfo(value) {
        this.userInformation = value;
    }
}

export default new AuthStore();
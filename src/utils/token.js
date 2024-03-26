export const myToken = new class {
    getToken() {
        return localStorage.getItem("token")
    }
    setToken(token) {
        localStorage.setItem("token", token)
    }
    removeToken() {
        localStorage.removeItem("token")
    }
}
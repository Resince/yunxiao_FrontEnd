import axios from "../store/utils/axios";

export function uploadImgList(imgList) {
    const formdata = new FormData();
    imgList.map(item => {
        formdata.append("file", item);
    })
    const res = axios.post("dev/nvoice/reg", formdata);
    return res;
}

export function uploadImg(img) {
    const formdata = new FormData();
    formdata.append("file", img)
    return axios.post("dev/invoice/reg", formdata);
}

export function uploadImgLocal(img) {
    const formdata = new FormData();
    formdata.append("file", img)
    return axios.post("local/upload", formdata);
}

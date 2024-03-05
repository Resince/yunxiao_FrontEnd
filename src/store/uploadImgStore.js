import { runInAction, computed, makeAutoObservable, toJS } from 'mobx';
import getBase64 from './utils/getBase64';

let storage = window.sessionStorage;

class UploadImgStore {
    imgList = []

    constructor() {
        makeAutoObservable(this, {
            getImgList: computed,
            getImgListLength: computed
        })
    }

    // initImg(list) {
    //     this.imgList = list.map(i => i.originFileObj ? i.originFileObj : i);
    // }

    addImg(file) {
        console.log(file);
        const temp = file.originFileObj ? file.originFileObj : file;
        getBase64(temp).then(res => {
            // console.log(res);
            runInAction(() => {
                this.imgList.push(res);
                storage.setItem('imgList', JSON.stringify(this.imgList));
            })
        })
    }

    // addImgList(list) {
    //     list.map(file => {
    //         this.imgList.push(file.originFileObj ? file.originFileObj : file)
    //     })
    // }

    deleteImg(index) {
        const deletedItem = this.imgList.splice(index, 1)[0];
        delete sessionStorage.imgList;
        storage.setItem('imgList', JSON.stringify(this.imgList));
        console.log(deletedItem);
    }

    get getImgList() {
        return toJS(this.imgList);
    }

    get getImgListLength() {
        return this.imgList.length;
    }

}

export default new UploadImgStore()
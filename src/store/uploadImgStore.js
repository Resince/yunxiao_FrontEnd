import { computed, makeAutoObservable, toJS } from 'mobx';

class UploadImgStore {
    imgList = []

    constructor() {
        makeAutoObservable(this, {
            getImgList: computed,
            getImgListLength: computed
        })
    }

    initImg(list) {
        this.imgList = list.map(i => i.originFileObj ? i.originFileObj : i);
    }

    addImg(file) {
        const temp = file.originFileObj ? file.originFileObj : file;
        this.imgList.push(temp);
    }

    addImgList(list) {
        list.map(file => {
            this.imgList.push(file.originFileObj ? file.originFileObj : file)
        })
    }

    deleteImg(fileName) {
        this.imgList = this.imgList.filter(item =>
            item.name != fileName
        )
    }

    get getImgList() {
        return toJS(this.imgList);
    }

    get getImgListLength() {
        return this.imgList.length;
    }

} 

export default new UploadImgStore()
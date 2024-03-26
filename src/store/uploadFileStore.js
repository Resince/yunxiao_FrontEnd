import { runInAction, computed, makeAutoObservable, toJS } from 'mobx';
import getBase64 from '../utils/getBase64';
import myAxios from '@/utils/axios';

class UploadFileStore {
    // 其中的是File对象
    fileList = []

    constructor() {
        makeAutoObservable(this);
    }

    // 添加单张图片
    addFile(file) {
        this.fileList.push(file)
    }

    // 删除文件
    deleteFile(index) {
        const deletedItem = this.fileList.splice(index, 1)[0];
    }

    get getFileList() {
        return toJS(this.fileList);
    }

    // 返回的是可以直接用于img标签的base64字符串
    // 需要改进，应该考虑pdf的问题，还有对图片的压缩展示
    get getImgBase64List() {
        return this.fileList.map((file) => getBase64(toJS(file)));
    }

    get getFileListLength() {
        return this.fileList.length;
    }

    // 发送文件列表
    // 返回一个url
    sendFileList = async (files) => {
        const formData = new FormData();
        formData.append('files', files);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const response = await myAxios.post('/file/upload', formData, config);
        return response;
    }

}

export default new UploadFileStore()
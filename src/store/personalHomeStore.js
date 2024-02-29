import { makeAutoObservable } from "mobx";

const data = 
    {
        key: 1,
        name: '李华',
        workId: '20212241111',
        department: '软件学院',
        office: '行政处302',
        position: '审计',
        status: "实习生",
        avatar: 'https://i.loli.net/2022/05/16/1621182149137.jpg',
        registerDate: '2021-05-16',
        positionIntroduction: '负责发票的报销审核',
        phoneNumber: '13800000000',
        wechat: 'hhh123',
        email: '123@qq.com',
        brithday: '1999-01-01',
        nation: '汉族',
        sex: '男',
        residence: '江西省',
        id: '360124200378911223',
        politicalAspects: '党员',
        enrollDate1: '2021-09-01',
        enrollDate2: '2022-12-01',
        education: '本科',
        health: '良好',
        height: 172,
        weight: 46,
        address: '北京市海淀区',
        sos: '1234567891',
    };

class PersonalHomeStore {
    // 默认选中的菜单
    dataInfo = data;
    // 是否编辑
    editFlag = false;

    constructor() {
        makeAutoObservable(this)
    }
    getPersonalInfo() {
        // this.dataInfo = data;
        return this.dataInfo;
    }
    showModal() {
        this.editFlag = true;
        return this.editFlag;
    }
    closeModal() {
        this.editFlag = false;
    }
    setPersonalInfo(data) {
        this.dataInfo = { ...this.dataInfo, ...data };
    }
    submitForm() {
        this.editFlag = false;
    }
}

export default new PersonalHomeStore();
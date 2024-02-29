import { makeAutoObservable } from "mobx";

const data = [
    {
        key: 1,
        invoicingDate: '2023-01-01',
        number: '123456789123',
        department: '软件学院',
        name: '梨花',
        money: 123.29,
        status: 1,
        result: '审核通过',
    },
    {
        key: 2,
        invoicingDate: '2023-01-01',
        number: '123456789123',
        department: '软件学院',
        name: '梨花',
        money: 123.29,
        status: 2,
        result: '被打回',
    },
    {
        key: 3,
        invoicingDate: '2023-01-01',
        number: '123456789123',
        department: '微电子学院',
        name: '梨花',
        money: 1234.36,
        status: 1,
        result: '审核通过',
    },

];
for (let i = 4; i < 50; i++) {
    data.push({
        key: i,
        invoicingDate: '2023-01-01',
        number: i + '123456789123',
        department: '软件学院',
        name: '梨花',
        money: 123.29,
        status: 1,
        result: '审核通过',
    })
}

class RbmApprovalStore {
    // 默认选中的菜单
    datalist = data;

    constructor() {
        makeAutoObservable(this)
    }
    getDatalistInfo(select) {
        console.log(select);
        this.datalist = [];
        let j = 0;
        //从后端获取，暂时用静态数据
        if (select === '全部') {
            j = 50;
        } else if (select === '已审核') {
            j = 45;
        } else {
            j = 5;
        }
        for (let i = 0; i < j; i++) {
            this.datalist.push({
                key: i,
                invoicingDate: '2023-01-01',
                number: i + '123456789123',
                department: '软件学院',
                name: '梨花',
                money: 123.29,
                status: i%3,
                result: (i%3 == 1 || i%3 == 2) ? '审核通过': '被打回',
            })
        }
        return this.datalist;
    }

    
}

export default new RbmApprovalStore();
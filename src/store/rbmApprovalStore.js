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
        status: 0,
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
    searchTerm = '';
    searchResults = [];
    selected = '全部';
    open = false;

    constructor() {
        makeAutoObservable(this);
    }

    getDatalistInfo(select) {
        console.log(select);
        this.selected = select;
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
                status: i%2,
                result: (i%3 === 1 || i%3 === 2) ? '审核通过': '被打回',
            })
        }
        return this.datalist;
    }
    
    setSearchTerm(term) {
        this.searchTerm = term;
        this.searchDataInfo();
    } 

    searchDataInfo() {
        if (this.number === '') this.searchResults = [];
        else {
            this.searchResults = data.filter(item => item.number.includes(this.searchTerm));
        }
    }

    get isSearchEmpty() {
        console.log(this.searchTerm);
        return this.searchTerm === '';
    }

    showInfo() {
        this.open = true;
    }

    closeInfo() {
        this.open = false;
    }

    handleResult(values, number) {
        console.log(values);
        // if (this.selected === '全部') {
        //     // this.datalist[number].result = values.result;
        //     for (let i = 0; i < data.length; i++) {
        //         if (data[i].number === number) {
        //             data[i].result = values.result;
        //         }
        //     }
        // } else if (this.selected === '已审核') {
        //     for (let i = 0; i < data.length; i++) {
        //         if (data[i].number === number) {
        //             data[i].result = values.result;
        //         }
        //     }
        // } else{
        //     for (let i = 0; i < data.length; i++) {
        //         if (data[i].number === number) {
        //             data[i].result = values.result;
        //         }
        //     }
        // }
        for (let i = 0; i < this.datalist.length; i++) {
            if (this.datalist[i].number === number) {
                this.datalist[i].result = values.result;
            }
        }
        this.open = false;
    }
}

export default new RbmApprovalStore();
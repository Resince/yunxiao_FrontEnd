import { makeAutoObservable } from "mobx";

class MyMessageStore {
    constructor() {
        makeAutoObservable(this);
        this.messages = [
            {
                id: 1,
                time: "2023-03-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '研发部',
                rbmTime: '2022-12-01',
                money: 888,
                status: 'Processed',
            },
            {
                id: 2,
                time: "2022-11-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '软件学院',
                rbmTime: '2022-05-01',
                money: 666,
                status: 'Disprocessed',
            },
            {
                id: 3,
                time: "2022-11-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '软件学院',
                rbmTime: '2022-05-01',
                money: 666,
                status: 'Disprocessed',
            },
            {
                id: 4,
                time: "2022-03-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '软件学院',
                rbmTime: '2022-02-01',
                money: 678,
                status: 'Processed',
            },
        ];
    }

    fetchMessage() {
        // 实际API获取，API获取的数据按照时间倒序
        this.messages = [
            {
                id: 1,
                time: "2023-03-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '研发部',
                rbmTime: '2022-12-01',
                money: 888,
                status: 'Processed',
            },
            {
                id: 2,
                time: "2022-11-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '软件学院',
                rbmTime: '2022-05-01',
                money: 666,
                status: 'Disprocessed',
            },
            {
                id: 3,
                time: "2022-11-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '软件学院',
                rbmTime: '2022-05-01',
                money: 666,
                status: 'Disprocessed',
            },
            {
                id: 4,
                time: "2022-03-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '软件学院',
                rbmTime: '2022-02-01',
                money: 678,
                status: 'Processed',
            },
            {
                id: 1,
                time: "2023-03-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '研发部',
                rbmTime: '2022-12-01',
                money: 888,
                status: 'Processed',
            },
            {
                id: 2,
                time: "2022-11-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '软件学院',
                rbmTime: '2022-05-01',
                money: 666,
                status: 'Disprocessed',
            },
            {
                id: 3,
                time: "2022-11-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '软件学院',
                rbmTime: '2022-05-01',
                money: 666,
                status: 'Disprocessed',
            },
            {
                id: 4,
                time: "2022-03-01 10:00",
                title: "审批任务",
                creator: '李华',
                department: '软件学院',
                rbmTime: '2022-02-01',
                money: 678,
                status: 'Processed',
            },
        ];
    }

    getMessage() {
        // this.fetchMessage();
        return this.messages;
    }

    addMessage(message) {
        this.messages.push(message);
    }

    removeMessage(message) {
        this.messages = this.messages.filter((item) => item !== message);
    }

    clearMessage() {
        console.log("clearMessage");
        this.messages = [];
    }
}

export default new MyMessageStore();
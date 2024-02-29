import { makeAutoObservable } from "mobx";
import moment from 'moment'

class AdminMenuStore {
    // 默认选中的菜单
    activeMenu = '财务门户';
    currentTime = moment();

    constructor() {
        makeAutoObservable(this)
    }

    setActiveMenu(menu) {
        this.activeMenu = menu;
    }

    get date() {
        return this.currentTime.format('YYYY-MM-DD');
    }

    get weekDay() {
        return this.currentTime.format('dddd');
    }
    
    getAttendanceInfo() {
        //从后端获取，暂时用静态数据
        return {
            onDutyTime: '9:00',
            onDutyCardTime: '8:50:35',
            offDutyTime: '17:00',
            offDutyCardTime: '17:02:35',
            totalDays: 20,
        };
    }
}

export default new AdminMenuStore();
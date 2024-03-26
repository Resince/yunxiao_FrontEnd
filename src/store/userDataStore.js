import { runInAction, makeAutoObservable, toJS } from "mobx";
import myAxios from "@/utils/axios";

class UserDataStore {

    amount = [0, 0, 0]
    sevenMonths = [0, 0, 0, 0, 0, 0, 0]
    recentAmount = [{}, {}, {}, {}, {}, {}, {}]
    accept = false

    constructor() {
        makeAutoObservable(this);
    }

    getAllData() {
        myAxios.get('/userdata').then(res => {
            return res.data;
        }).then(data => {
            runInAction(() => {
                this.amount = data.amount;
                this.sevenMonths = data.sevenMonths;
                this.recentAmount = data.recentAmount;
                this.accept = true;
            });
        });
    }

    get getAmount() {
        return toJS(this.amount);
    }

    get getSevenMonths() {
        return toJS(this.sevenMonths);
    }

    get getRecentAmount() {
        return toJS(this.recentAmount);
    }
}

export default new UserDataStore();
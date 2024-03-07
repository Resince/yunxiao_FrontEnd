import React from 'react';

import UploadImgStore from './uploadImgStore';
import AdminMenuStore from './adminMenuStore';
import RbmApprovalStore from './rbmApprovalStore';
import PersonalHomeStore from './personalHomeStore';
import MyMessageStore from './myMessageStore';
import FinancialHomeStore from './financialHomeStore';

class Store {
    constructor() {
        this.UploadImgStore = UploadImgStore;
        this.AdminMenuStore = AdminMenuStore;
        this.RbmApprovalStore = RbmApprovalStore;
        this.PersonalHomeStore = PersonalHomeStore;
        this.MyMessageStore = MyMessageStore;
        this.FinancialHomeStore = FinancialHomeStore;
    }
}

const store = new Store();
const context = React.createContext(store);

const useStore = () => React.useContext(context);

export { useStore }
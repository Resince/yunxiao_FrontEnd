import React from 'react';

import UploadFileStore from './uploadFileStore';
import AdminMenuStore from './adminMenuStore';
import RbmApprovalStore from './rbmApprovalStore';
import PersonalHomeStore from './personalHomeStore';
import MyMessageStore from './myMessageStore';
import AuthStore from './authStore';
import PdfDownStore from './pdfDownStore';
import UserDataStore from './userDataStore';

class Store {
    constructor() {
        this.UploadFileStore = UploadFileStore;
        this.AdminMenuStore = AdminMenuStore;
        this.RbmApprovalStore = RbmApprovalStore;
        this.PersonalHomeStore = PersonalHomeStore;
        this.MyMessageStore = MyMessageStore;
        this.AuthStore = AuthStore;
        this.PdfDownStore = PdfDownStore;
        this.UserDataStore = UserDataStore;
    }
}

const store = new Store();
const context = React.createContext(store);

const useStore = () => React.useContext(context);

export { useStore }
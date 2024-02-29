import React from 'react';

import UploadImgStore from './uploadImgStore';
import AdminMenuStore from './adminMenuStore';
import RbmApprovalStore from './rbmApprovalStore';
import PersonalHomeStore from './personalHomeStore';

class Store {
    constructor() {
        this.UploadImgStore = UploadImgStore
        this.AdminMenuStore = AdminMenuStore
        this.RbmApprovalStore = RbmApprovalStore
        this.PersonalHomeStore = PersonalHomeStore
    }
}

const store = new Store()
const context = React.createContext(store)

const useStore = () => React.useContext(context)

export { useStore }
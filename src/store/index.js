import React from 'react';

import UploadImgStore from './uploadImgStore';

class Store {
    constructor() {
        this.UploadImgStore = UploadImgStore
    }
}

const store = new Store()
const context = React.createContext(store)

const useStore = () => React.useContext(context)

export { useStore }
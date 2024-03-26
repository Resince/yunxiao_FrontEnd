import { toJS } from "mobx";
import { makeAutoObservable } from "mobx";

class PdfDownStore {
    pdf = "";
    pdfData = null;

    constructor() {
        makeAutoObservable(this);
    }

    setPdf(pdf) {
        this.pdf = pdf;
    }

    setPdfData(pdfData) {
        this.pdfData = pdfData;
    }

    get getPdfData() {
        return toJS(this.pdfData);
    }

    get getPdf() {
        return toJS(this.pdf);
    }
}

export default new PdfDownStore();
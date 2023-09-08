import React, {useState} from "react";
import { Button, Upload, Modal } from "antd";
import { useStore } from "../../store";
import PreviewData from "./PreviewData";
import http from "../../utils/axios";

        
const bodyStyle = {
    height: '450px',
    overflow: 'hidden',
    overflowY: 'scroll',
}        
        
const UploadSide = () => {
    const store = useStore();
    const [viewFlag, setViewFlag] = useState(false);

    const handleOnClick = () => {
        const formdata = new FormData();
        store.UploadImgStore.getImgList.map((item) => {
            formdata.append("image", item);
        });
        http.post("/dev/nvoice/reg", formdata).then((ans) => {
            console.log(ans);
        });
        http.post("/dev/nvoice/reg", formdata).then((ans) => {
            console.log(ans);
        });
        setViewFlag(true);
    };

    return (
        <div className="flex flex-col items-center justify-end h-full">
            <Button
                type="primary"
                size="large"
                className="bg-black mb-28"
                onClick={handleOnClick}
            >
                点击识别
            </Button>
            <Modal
                title="识别结果"
                open={viewFlag}
                onCancel={() => setViewFlag(false)}
                footer={null}
                bodyStyle={bodyStyle}
            >
                <PreviewData/>
            </Modal>
        </div>
    );
};

export default UploadSide;

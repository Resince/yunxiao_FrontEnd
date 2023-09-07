import React from "react";
import { Button } from "antd";
import { useStore } from "../../store";
import http from "../../utils/axios";

const UploadSide = () => {
    const store = useStore();

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
    };

    return (
        <div className="flex flex-col items-center justify-end h-full">
            <Button
                type="primary"
                size="large"
                className="bg-black mb-28"
                onClick={handleOnClick}
            >
                click here
            </Button>
        </div>
    );
};

export default UploadSide;

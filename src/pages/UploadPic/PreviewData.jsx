import React, { useState, useEffect } from "react";
import { useStore } from "../../store";
import { Carousel, Table, Image, Button } from "antd";
import getBase64 from "@/utils/getBase64";

const contentStyle = {
    margin: 0,
    height: "300px",
    color: "#fff",
    lineHeight: "300px",
    textAlign: "center",
    background: "#94A3B8",
};

const PreviewData = () => {
    const [curSlide, setCurSlide] = useState(0);
    const [imgUrlList, setImgUrlList] = useState([]);
    const store = useStore();
    const data = [{ key: 0, Invoice_parameter: "发票号码", Invoice_data: "123456" },
        { key: 1, Invoice_parameter: "金额", Invoice_data: curSlide },
        { key: 2, Invoice_parameter: "金额", Invoice_data: curSlide },
        { key: 3, Invoice_parameter: "金额", Invoice_data: curSlide },
        { key: 4, Invoice_parameter: "金额", Invoice_data: curSlide },
        { key: 5, Invoice_parameter: "金额", Invoice_data: curSlide },]

    useEffect(() => {
        const getImgUrl = async () => {
            console.log("change");
            const imglist = store.UploadImgStore.getImgList;
            setImgUrlList(await Promise.all(imglist.map((i) => getBase64(i))));
            console.log(imgUrlList);
        };
        getImgUrl();
    },[])
    
    const onChange = (currentSlide) => {
        console.log(currentSlide);
        setCurSlide(currentSlide);
        console.log(imgUrlList);
    };

    const handleComClick = () => {
        console.log("组合");
    };

    const columns = [
        {
            title: '名称',
            dataIndex: 'Invoice_parameter',
            key: '1',
        },
        {
            title: "值",
            dataIndex: "Invoice_data",
            key: "2",
        },
    ];

    return (
        <div className="preview_box" >
            <Carousel afterChange={onChange}>
                {imgUrlList.map((value, index) => (
                    <div key={index}>
                        <div style={contentStyle}>
                            <Image src={value.fileObj} />
                        </div>
                    </div>
                ))}
            </Carousel>

            <div>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>

            <div className="text-center mt-10 h-20">
                <Button
                    type="primary"
                    size="large"
                    className="bg-black mb-28 "
                    onClick={handleComClick}
                >
                    确定组合
                </Button>
            </div>
        </div>
    );
};

export default PreviewData;

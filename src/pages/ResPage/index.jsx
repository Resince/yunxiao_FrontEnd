import React, { useState, useEffect } from "react";
import { useStore } from "../../store";
import { Carousel, Table, Image } from "antd";
import getBase64 from "@/utils/getBase64";
import { uploadImg, uploadImgLocal } from "../../service/uploadImages";

const ResPage = () => {
    const [dataCache, setDataCache] = useState([]);
    const [imgUrlList, setImgUrlList] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [tableData, setTableData] = useState([]);
    const store = useStore();

    useEffect(() => {
        const getImgUrl = async () => {
            const imglist = store.UploadImgStore.getImgList;
            setImgUrlList(await Promise.all(imglist.map((i) => getBase64(i))));
        };
        getImgUrl();
    }, []);

    useEffect(() => {
        function genData(res) {
            const data = [
                {
                    key: "1",
                    img_key: "code",
                    value: res.code,
                },
                {
                    key: "2",
                    img_key: "date",
                    value: res.date,
                },
                {
                    key: "3",
                    img_key: "money",
                    value: res.money,
                },
                {
                    key: "4",
                    img_key: "tel",
                    value: res.tel,
                },
                {
                    key: "5",
                    img_key: "name",
                    value: res.fileName,
                },
            ];
            setTableData(data);
        }

        function loadFromLocal() {
            setLoading(true);
            const res = dataCache
                .filter((i) => i.currentSlide == currentSlide)
                .at(0);
            genData(res);
            setLoading(false);
        }

        function loadFromServer() {
            uploadImgLocal(store.UploadImgStore.getImgList.at(currentSlide))
                .then((res) => res.data)
                .then((res) => {
                    setLoading(false);
                    genData(res);
                    res.currentSlide = currentSlide;
                    setDataCache((i) => [...i, res]);
                    console.log(dataCache);
                });
        }

        dataCache.some((i) => i.currentSlide == currentSlide)
            ? loadFromLocal()
            : loadFromServer();
    }, [currentSlide]);

    const columns = [
        {
            title: "名称",
            dataIndex: "img_key",
            key: "1",
        },
        {
            title: "值",
            dataIndex: "value",
            key: "2",
        },
    ];

    return (
        <div className="grid grid-cols-11 gap-2 h-full">
            <div className="col-start-1 col-end-9 m">
                <Carousel afterChange={(item) => setCurrentSlide(item)}>
                    {imgUrlList.map((value, index) => (
                        <div key={index} className="ml-28">
                            <Image
                                src={value.fileObj}
                                width={850}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className="col-start-9 col-end-12">
                <div>
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        pagination={false}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
};

export default ResPage;

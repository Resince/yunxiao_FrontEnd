import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import { Image } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import getBase64 from "@/utils/getBase64";

function SwiperCard() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [slide, setSlide] = useState([]);
    const store = useStore();

    useEffect(() => {
        const updateSlide = async () => {
            const imglist = store.UploadImgStore.getImgList;
            setSlide(await Promise.all(imglist.map((i) => getBase64(i))));
        };
        updateSlide();
    }, [store.UploadImgStore.getImgListLength]);

    function handleClick(e) {
        store.UploadImgStore.deleteImg(e.fileName);
    }

    function handleFocus(e) {
        console.log(e);
    }

    return (
        <div className="w-full h-full m-0 overflow-hidden">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="m-5"
            >
                {slide.map((value, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <Image
                                    src={value.fileObj}
                                    width={450}
                                    preview={true}
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className=" font-serif subpixel-antialiased text-xl">
                                    {value.fileName}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {slide.map((value, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="group/item">
                                <button
                                    onClick={() => handleClick(value)}
                                    className="flex items-center justify-center relative
                                        left-44 top-7 z-50 h-6 w-6 bg-black rounded-full bg-transparent
                                         hover:bg-orange-900 invisible group-hover/item:visible "
                                >
                                    <DeleteOutlined />
                                </button>
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src={value.fileObj}
                                        preview={false}
                                        width={200}
                                        className="rounded-2xl shadow-2xl"
                                    />
                                    <div className=" font-serif subpixel-antialiased text-lg mt-1 mb-4">
                                        {value.fileName}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default observer(SwiperCard);

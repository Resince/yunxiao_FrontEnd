import React from "react";
import { CommentOutlined } from "@ant-design/icons";
import { FloatButton, Upload } from "antd";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";

const AddButton = () => {
    const store = useStore();

    return (
        <div className="flex flex-col items-center justify-center">
            <FloatButton.Group
                type="primary"
                style={{
                    right: 400,
                }}
                className="top-24 absolute flex flex-col gap-4 h-10"
            >
                <Upload
                    multiple={true}
                    accept=".png,.jpg,.jpeg,.bmps,.gif,.tiff,.webp,.pdf,.ofd"
                    beforeUpload={() => {
                        return false;
                    }}
                    showUploadList={false}
                    onChange={(info) => {
                        if (info.file.status !== "uploading") {
                            store.UploadImgStore.addImg(info.file);
                        }
                    }}
                >
                    <FloatButton
                        tooltip={<div>从本地中添加</div>}
                        badge={{
                            count: store.UploadImgStore.getImgListLength,
                            color: "blue",
                        }}
                    />
                </Upload>
                <Upload>
                    <FloatButton
                        icon={<CommentOutlined />}
                        tooltip={<div>从微信发票夹中添加</div>}
                    />
                </Upload>
            </FloatButton.Group>
        </div>
    );
};

export default observer(AddButton);

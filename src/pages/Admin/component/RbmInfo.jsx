import React, { useState } from "react";
import { Form, Input, Select, Button, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import PDFViewer from "./PDFViewer";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../store";
import { set } from "mobx";

const { Option } = Select;

const RbmInfo = observer(({number}) => {
    const store = useStore();
    const [showPDF, setShowPDF] = useState(false);
    const pdfUrl = '/src/assets/1.pdf'

    const onFinish = (values) => {
        console.log('Success:', values);
        store.RbmApprovalStore.handleResult(values, number);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handlePreviewClick = () => {
        setShowPDF(true);
    };
    const handleCancel = () => {
        console.log('取消编辑');
        setShowPDF(false);
    };


    return (
        <>
            {/* 显示组合后的报销单信息 */}
            <h2>报销单审批</h2>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {/* <img src={store.RbmApprovalStore.getDatalistInfo(number).img} alt="图片" /> */}
                {/* <a onClick={handlePreviewClick}>查看报销单</a> */}
                {/* {
                    showPDF && (
                        <Modal
                            open={true}
                            onRequestClose={() => setShowPDF(false)}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    取消
                                </Button>,
                            ]}
                        >
                            <PDFViewer pdfUrl={pdfUrl} />
                        </Modal>
                    )
                } */}
                <FormItem
                    label="审核结果"
                    name="result"
                    rules={[{ required: true, message: '请选择审核结果' }]}
                >
                    <Select
                        placeholder="请选择"
                        allowClear
                    >
                        <Option value="审核通过">通过</Option>
                        <Option value="未通过">未通过</Option>
                        <Option value="被打回">打回</Option>
                    </Select>
                </FormItem>
                <FormItem l
                    label="具体意见"
                    name="detailedComments"
                >
                    <Input.TextArea />
                </FormItem>
                <FormItem>
                    <Button className='bg-tag-purple text-white hover:text-white-900' htmlType="submit">
                        确定
                    </Button>
                </FormItem>
            </Form>
            
        </>
    )
});

export default RbmInfo;
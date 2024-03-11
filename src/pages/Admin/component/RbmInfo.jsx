import React from "react";
import { Form, Input, Select, Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../store";

const { Option } = Select;

const RbmInfo = observer(() => {
    const store = useStore();

    const onFinish = (values) => {
        console.log('Success:', values);
        store.RbmApprovalStore.handleResult(values);

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
                <FormItem
                    label="审核结果"
                    name="result"
                    rules={[{ required: true, message: '请选择审核结果' }]}
                >
                    <Select
                        placeholder="请选择"
                        allowClear
                    >
                        <Option value="pass">通过</Option>
                        <Option value="fall">未通过</Option>
                        <Option value="return">打回</Option>
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
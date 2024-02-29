import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Form, Input, Button, DatePicker, Row, Col, Upload, message, Select } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const {Option} = Select;

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const InfoEdit = observer(({ store }) => {
    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue(store.PersonalHomeStore.dataInfo);
    }, [form]);

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
                console.log(url);
            });
        }
    };
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    const onFinish = (values) => {
        store.PersonalHomeStore.setPersonalInfo(values);
        store.PersonalHomeStore.submitForm();
        message.success('更改成功');
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off" className="m-4">
            <Form.Item label="头像" name="avatar">
                <Upload
                    name="avatar1"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                                width: '100%',
                            }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
            </Form.Item>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="姓名" name="name">
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="工号" name="workId">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="部门" name="department">
                        <Select
                            placeholder="请选择部门"
                            allowClear
                        >
                            <Option value="d1">软件学院</Option>
                            <Option value="d2">集成电路学院</Option>
                            <Option value="d3">国际信息与软件学院</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="岗位" name="position">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="status"
                        label="状态"
                    >
                        <Select
                            placeholder="请选择在职状态"
                            allowClear
                        >
                            <Option value="regular">正式员工</Option>
                            <Option value="intern">实习生</Option>
                            <Option value="other">临时工</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="注册日期" name="registerDate1">
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item
                        label="职位描述"
                        name="positionIntroduction"
                    >
                        <Input.TextArea />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="移动电话" name="phoneNumber">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="办公室" name="office">
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="微信号" name="wechat">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="电子邮箱" name="email">
                        <Input type="email" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="出生日期" name="birthday1">
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="民族" name="nation">
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="性别" name="sex">
                        <Select
                            placeholder="请选择性别"
                            allowClear
                        >
                            <Option value="male">男</Option>
                            <Option value="female">女</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="户籍地" name="residence">
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="身份证号" name="id">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="政治面貌" name="politicalAspects">
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="入团日期" name="enrollDate11">
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="入党日期" name="enrollDate21">
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="学历" name="education">
                        <Select
                            placeholder="请选择在职状态"
                            allowClear
                        >
                            <Option value="doctor">博士</Option>
                            <Option value="master">硕士</Option>
                            <Option value="undergraduate">本科</Option>
                            <Option value="junior">专科</Option>
                            <Option value="middle">中学</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="健康状况" name="health">
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="身高" name="height">
                        <Input type='number'/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="体重" name="weight">
                        <Input type='number' />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="现居住地" name="address">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={48}>
                <Col xs={24} md={12}>
                    <Form.Item label="紧急联系" name="sos">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button key="submit" style={{ backgroundColor: '#7A88FE' }} className='text-white hover:text-yellow-100' htmlType='submit'>
                    确定
                </Button>
            </Form.Item>
        </Form>
    );
});
export default InfoEdit;
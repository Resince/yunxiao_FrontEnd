import React from 'react';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import InfoEdit from './InfoEdit';

const PersonalHome = observer(({ store }) => {

    const [open, setOpen] = useState(false);
    // const [confirmLoading,setConfirmLoading] = useState(false);

    useEffect(() => {
        store.PersonalHomeStore.getPersonalInfo();
    }, []);
    const data = store.PersonalHomeStore.getPersonalInfo();

    // 表单弹窗打开状态和操作函数
    const showModal = () => {
        store.PersonalHomeStore.showModal()
    }
    const handleCancel = () => {
        console.log('取消编辑');
        store.PersonalHomeStore.closeModal();
    }

    // InfoItem组件用来展示每项信息
    const InfoItem = ({ title, value }) => (
        <div className="flex justify-between mt-6 w-72">
            <h3 className="text-left text-gray-500">{title}：</h3>
            <p className="text-center text-black border-b border-gray-300 w-0 flex-grow">{value}</p>
        </div>
    );

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between p-2 mx-2 rounded-md bg-white">
                <div className="flex items-center">
                    <img src={data.avatar} alt="头像" className="rounded-full w-10 h-10 ml-4" />
                    <div className="ml-3">
                        <div className='text-sm'>
                            <span className='mr-3'>{data.name}</span>
                            <span>({data.workId})</span></div>
                        <div className='text-xs'>{data.department} / {data.position}</div>
                    </div>
                </div>
                <button
                    className="py-1.5 px-4 mx-6 text-white rounded"
                    style={{ backgroundColor: '#7A88FE' }}
                    onClick={showModal}
                >编 辑</button>
                <Modal
                    title="修改信息"
                    open={store.PersonalHomeStore.editFlag}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            取消
                        </Button>,
                    ]}
                >
                    <InfoEdit store = {store} />
                </Modal>
            </div>
            <div className="flex flex-row flex-grow">
                <div className="p-2 pr-0 w-1/3">
                    <div className='bg-white p-3 place-content-center '>
                        <img src='/src/assets/logo.png' className='h-96 w-4/5 mx-auto pt-4' />
                        <div className='w-4/5 mx-auto flex flex-col space-y-2 pt-4 text-gray-500 text-xl mb-2'>
                            <div>工号：{data.workId}</div>
                            <div>职位：{data.position}</div>
                            <div>状态：{data.status}</div>
                            <div>注册日期：{data.registerDate}</div>
                        </div>
                    </div>
                </div>
                <div className="p-2 w-2/3 ">
                    <div className='bg-white h-full'>
                        <div className='w-24 h-8 flex items-center justify-center' style={{ backgroundColor: '#7A88FE', color: '#FFC300' }}>基本信息</div>
                        <div className="flex flex-wrap -mx-2  justify-center mx-10">
                            {/* 基本信息列（左边） */}
                            <div className="w-full md:w-1/2">
                                <InfoItem title="岗位" value={data.position} />
                                <InfoItem title="移动电话" value={data.phoneNumber} />
                                <InfoItem title="微信" value={data.wechat} />
                            </div>
                            {/* 基本信息列（右边） */}
                            <div className="w-full md:w-1/2">
                                <InfoItem title="职位描述" value={data.positionIntroduction} />
                                <InfoItem title="办公室" value={data.office} />
                                <InfoItem title="电子邮箱" value={data.email} />
                            </div>
                        </div>

                        <div className='w-24 h-8 mt-2 flex items-center justify-center' style={{ backgroundColor: '#7A88FE', color: '#FFC300' }}>个人信息</div>
                        <div className="flex flex-wrap -mx-2  justify-center mx-10">
                            {/* 基本信息列（左边） */}
                            <div className="w-full md:w-1/2">
                                <InfoItem title="出生日期" value={data.brithday} />
                                <InfoItem title="性别" value={data.sex} />
                                <InfoItem title="身份证号" value={data.id} />
                                <InfoItem title="入团日期" value={data.enrollDate1} />
                                <InfoItem title="学历" value={data.education} />
                                <InfoItem title="身高(cm)" value={data.height} />
                                <InfoItem title="现居住地" value={data.address} />
                            </div>
                            {/* 基本信息列（右边） */}
                            <div className="w-full md:w-1/2">
                                <InfoItem title="民族" value={data.nation} />
                                <InfoItem title="户籍地" value={data.residence} />
                                <InfoItem title="政治面貌" value={data.politicalAspects} />
                                <InfoItem title="入党日期" value={data.enrollDate2} />
                                <InfoItem title="健康状况" value={data.health} />
                                <InfoItem title="体重(kg)" value={data.weight} />
                                <InfoItem title="紧急联系" value={data.sos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default PersonalHome;
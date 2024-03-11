import React from "react";
import { observer } from "mobx-react-lite";
import FinancialHome from "./FinancialHome";
import RbmApproval from "./RbmApproval";
import PersonalHome from "./PersonalHome";
import MyMessage from "./MyMessage";
import RbmTable from "./component/RbmTable";
import { ScheduleOutlined, CaretDownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Input, Popover, Tag } from 'antd';
import { useNavigate } from "react-router-dom";
const { Search } = Input;


const ContentView = observer(({ store }) => {
    const attendanceInfo = store.AdminMenuStore.getAttendanceInfo();
    const navigate = useNavigate();

    const timecard = (
        <div className="flex flex-col p-1">
            <div className="flex items-center">
                <ScheduleOutlined />
                <span className="ml-2">{store.AdminMenuStore.date} {store.AdminMenuStore.weekDay}</span>
            </div>
            <div className="border-t border-gray-300 my-2 w-full"></div>
            <div>上班时间: {attendanceInfo.onDutyTime}</div>
            <div>打卡时间: {attendanceInfo.onDutyCardTime}</div>
            <div>下班时间: {attendanceInfo.offDutyTime}</div>
            <div>打卡时间: {attendanceInfo.offDutyCardTime}</div>
            <div className="border-t border-gray-300 my-2"></div>
            <div>当月累计正常打卡天数: </div>
            <div className="text-center text-lg">
                <Tag bordered={false} color="blue" >
                    {attendanceInfo.totalDays}
                </Tag>
            </div>
        </div>
    )

    const outLogin = () => {
        navigate('/');
    }

    const personInfo = (
        <div>
            <div className="flex items-end mb-2">
                <img src="src\assets\logo.png" className="h-10 w-10 mr-2 rounded-full" alt="Logo" />
                <div className="flex flex-col">
                    <span>
                        <span className="text-blue-500 cursor-pointer"onClick={() => store.AdminMenuStore.setActiveMenu('个人主页')}>小黄鸭</span>
                        <span className="ml-3 text-sm text-gray-800">审计</span>
                    </span>
                    <span className="text-xs text-gray-800">软件学院/行政处</span>
                </div>
            </div>
            <div className="border-t border-gray-300 my-2 w-full"></div>
            <div className="flex items-center justify-start cursor-pointer">
                <LogoutOutlined className="flex items-center justify-center ml-2"/>
                <span className="pl-2" onClick={() => outLogin()}>退出登录</span>
            </div>
        </div>
    )

    const onSearch = (value) => {
        console.log(value);
        store.RbmApprovalStore.setSearchTerm(value);
    }

    const getContent = (menuItem) => {
        switch (menuItem) {
            case '报销审批': return (<RbmApproval store={store} />);
            case '个人主页': return (<PersonalHome store={store} />);
            case '我的消息': return (<MyMessage store={store} />);
            case '财务门户': return (<FinancialHome store={store} />);
        }
    }

    return (
        <div className="flex-1 p-1 bg-contentbg">
            <div className="flex items-center justify-between p-3 rounded-md">
                <h1 className="text-2xl font-semibold pl-6" style={{ color: '#25396F' }}>{store.AdminMenuStore.activeMenu}</h1>
                <Search
                    placeholder="输入发票代码搜索"
                    allowClear
                    onSearch={onSearch}
                    className="w-96"
                />
                <Popover content={timecard} placement="bottomRight" title={null} trigger="click">
                    <div className="inline-flex items-center bg-white px-4 py-1 ml-8 rounded-full shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                        <ScheduleOutlined />
                        <span className="ml-1">考勤</span>
                    </div>
                </Popover>
                <div className="relative">
                    <Popover content={personInfo} placement="bottomRight" title={null} trigger="click">
                        <div className="flex items-center justify-center text-center bg-white pl-2 py-1 rounded-md shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                            <img src="src/assets/homePic4.png" alt="个人头像" className="w-5 h-5 rounded-full" />
                            <span className="pl-2 pr-2 mr-6">小黄鸭</span>
                            <span className="flex items-center justify-center pr-4"><CaretDownOutlined /></span>
                        </div>
                    </Popover>
                </div>
            </div>
            {
                store.RbmApprovalStore.isSearchEmpty ?
                    getContent(store.AdminMenuStore.activeMenu) : 
                    (
                        <RbmTable data={store.RbmApprovalStore.searchResults} />
                    )
            }
        </div>
    )
});

export default ContentView;
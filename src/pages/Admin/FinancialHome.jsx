import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Fee_Review_ICON, Settle_Accounts_ICON, Total_Reimburse_ICON, Total_Summary_ICON, Daily_Reimburse_ICON, Travel_Reimburse_ICON } from "@/constants";
import { Select } from "antd";
import LineChart from "./component/LineChart";
import RbmTable from "./component/RbmTable";

const FinancialHome = observer(({ store }) => {
    // const data = store.FinancialHomeStore.FeeReviewData();
    const [tableData, setTableData] = useState([]);
    const handleYearChange = (val) => {
        store.FinancialHomeStore.setSelectedYear(val);
    }

    useEffect(() => {
        setTableData(store.RbmApprovalStore.getDatalistInfo('未审核'));
    }, [])

    return (
        <div className="container mx-auto overflow-y-auto  h-screen">
            {/* 任务数量统计 */}
            <div className="flex space-x-3 mx-2">
                <div className="flex-1 bg-white shadow-lg rounded p-4 pt-3 h-36">
                    <div className="text-lg font-semibold pb-2">费审任务</div>
                    <p>已处理：{store.FinancialHomeStore.feeReviewData.finished}项</p>
                    <div className="flex space-x-20">
                        <p className="">待处理：{store.FinancialHomeStore.feeReviewData.unfinished}项</p>
                        <img src={Fee_Review_ICON} alt="Fee_Review_ICON"/>
                    </div>
                </div>

                <div className="flex-1 bg-white shadow-lg rounded p-6 pt-3 h-36">
                    <div className="text-lg font-semibold pb-2">结算任务</div>
                    <p>已处理：{store.FinancialHomeStore.feeReviewData.finished}项</p>
                    <div className="flex space-x-20">
                        <p className="">待处理：{store.FinancialHomeStore.settleAccountsData.unfinished}项</p>
                        <img src={Settle_Accounts_ICON} alt="Settle_Accounts_ICON" />
                    </div>
                </div>

                <div className="flex-1 bg-white shadow-lg rounded p-6 pt-3 h-36">
                    <div className="text-lg font-semibold pb-2">总报销金额</div>
                    <p>金额：{store.FinancialHomeStore.totalReimburseData.money.toFixed(2)}元</p>
                    <div className="flex space-x-20">
                        <p className="">笔数：{store.FinancialHomeStore.totalReimburseData.number}笔</p>
                        <img src={Total_Reimburse_ICON} alt="Total_Reimburse_ICON" />
                    </div>
                </div>

                <div className="flex-1 bg-white shadow-lg rounded p-6 pt-3 h-36">
                    <div className="text-lg font-semibold pb-2">总结算金额</div>
                    <p>金额：{store.FinancialHomeStore.totalSummaryData.money.toFixed(2)}元</p>
                    <div className="flex space-x-20">
                        <p className="">笔数：{store.FinancialHomeStore.totalSummaryData.number}笔</p>
                        <img src={Total_Summary_ICON} alt="Total_Summary_ICON" />
                    </div>
                </div>
            </div>

            {/* 曲线图和快捷报账 */}
            <div className="flex space-x-3 m-2">
                <div className="w-3/4 bg-white rounded shadow-lg p-2">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold pb-2">报销金额数据曲线</div>
                        <div className="flex">
                            <p className="pt-1">选择年份：</p>
                            <Select
                                defaultValue={store.FinancialHomeStore.selectedYear}
                                style={{ width: 100 }}
                                onChange={handleYearChange}>
                                {['2010', '2011', '2012', '2013', '2014', '2015'].map((item) => (
                                    <Select.Option key={item} value={item}>{item}</Select.Option>
                                ))}
                            </Select>
                        </div>
                        
                    </div>
                    <div className="h-52"><LineChart store={ store } /></div>
                </div>
                <div className="w-1/4 bg-white rounded shadow-lg p-2">
                    <div className="text-lg font-semibold">快捷报账</div>
                    <div className="flex">
                        <img src={Daily_Reimburse_ICON} className="w-16 m-5"></img>
                        <div className="flex-1 m-5 ml-2">
                            <p className="p-1">日常报销</p>
                            <button className="bg-custom-purple w-2/3 p-2 rounded-lg text-tagtext-yellow">立即发起</button>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={Travel_Reimburse_ICON} className="w-16 m-5 mt-2"></img>
                        <div className="flex-1 m-5 ml-2 mt-2">
                            <p className="p-1">差旅报销</p>
                            <button className="bg-custom-purple w-2/3 p-2 rounded-lg text-tagtext-yellow">立即发起</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 待办事项 */}
            <div className="overflow-y-auto bg-white shadow-lg rounded shadow-lg p-2 m-2 mb-16">
                <div className="text-lg font-semibold">财务待办</div>
                <RbmTable data={tableData} />
            </div>
        </div>
    );
});

export default FinancialHome;
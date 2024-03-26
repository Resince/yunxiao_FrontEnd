import React, { useEffect, useState } from "react";
import { Statistic } from "antd";
import { useStore } from "@/store";
import "./index.scss";

const DataListPage = () => {
    const MAX_PAGE = 4;
    const { UserDataStore } = useStore();
    const [data_1, setData_1] = useState("0");
    const [data_2, setData_2] = useState("0");
    const [data_3, setData_3] = useState("0");
    const [recentData, setRecentData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // 获取数据
        setData_1(UserDataStore.getAmount[0]);
        setData_2(UserDataStore.getAmount[1]);
        setData_3(UserDataStore.getAmount[2]);
        setRecentData(UserDataStore.getRecentAmount);
    }, []);

    // 分页初始化
    useEffect(() => {
        setCurrentData(recentData.slice(0, MAX_PAGE));
        setCurrentPage(1);
    }, [recentData]);

    const nextPage = () => {
        const handleNextOnClick = () => {
            setCurrentData(
                recentData.slice(
                    MAX_PAGE * currentPage,
                    MAX_PAGE * (currentPage + 1)
                )
            );
            setCurrentPage(currentPage + 1);
        };
        const handleBackOnClick = () => {
            setCurrentData(
                recentData.slice(
                    MAX_PAGE * (currentPage - 2),
                    MAX_PAGE * (currentPage - 1)
                )
            );
            setCurrentPage(currentPage - 1);
        };
        let temp = [];
        if (currentPage > 1) {
            temp.push(
                <div className="payment-section-footer">
                    <button className="save-button" onClick={handleBackOnClick}>
                        上一页
                    </button>
                </div>
            );
        }
        if (currentPage === 1 && recentData.length <= MAX_PAGE) {
            temp.push(
                <div className="payment-section-footer">
                    <button className="save-button">最后一页</button>
                </div>
            );
        }
        if (recentData.length > currentPage * MAX_PAGE) {
            temp.push(
                <div className="payment-section-footer">
                    <button className="save-button" onClick={handleNextOnClick}>
                        下一页
                    </button>
                </div>
            );
        }
        return temp;
    };

    const genLastestData = (data, index) => {
        const month = data.dateBegin.split("-")[1];
        const day = data.dateBegin.split("-")[2];
        let color = "green";
        if (data.state === "已报销") {
            color = "green";
        } else if (data.state === "正在审批") {
            color = "olive";
        } else {
            color = "gray";
        }

        return (
            <div className="payment" key={index}>
                <div className={"card " + color}>
                    <span>发起时间: {month + "/" + day}</span>
                    <span>{data.state}</span>
                </div>
                <div className="payment-details">
                    <h3>{data.title}</h3>
                    <div>
                        <span>{"￥" + data.money}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="app-body">
            <div className="app-body-navigation">
                <nav className="navigation">
                    <a href="/user/dataTablePage">
                        <i className="ph-browsers"></i>
                        <span>报销展板</span>
                    </a>
                    <a href="#">
                        <i className="ph-check-square"></i>
                        <span>报销详情</span>
                    </a>
                </nav>
            </div>
            <div className="app-body-main-content">
                <section className="payment-section">
                    <h2>最近报销</h2>
                    <div className="payment-section-header">
                        <p>显示最近报销的金额与状态</p>
                    </div>
                    <div className="payments">
                        {currentData.map((data, index) =>
                            genLastestData(data, index)
                        )}
                    </div>
                    {nextPage()}
                </section>
            </div>
            <div className="app-body-sidebar">
                <section className="service-section">
                    <h2>金额统计</h2>
                    <div className="tiles">
                        <article className="tile">
                            <div className="tile-header">
                                <h3>
                                    <span>全部报销金额</span>
                                    <span>Total reimbursement amount</span>
                                </h3>
                            </div>
                            <div className="pl-2">
                                <Statistic value={data_1} />
                            </div>
                            <a href="#">
                                <span>查看详情</span>
                                <span className="icon-button">
                                    <i className="ph-caret-right-bold"></i>
                                </span>
                            </a>
                        </article>
                        <article className="tile">
                            <div className="tile-header">
                                <h3>
                                    <span>已报销金额</span>
                                    <span>Amount reimbursed</span>
                                </h3>
                            </div>
                            <div className="pl-2">
                                <Statistic value={data_2} />
                            </div>
                            <a href="#">
                                <span>查看详情</span>
                                <span className="icon-button">
                                    <i className="ph-caret-right-bold"></i>
                                </span>
                            </a>
                        </article>
                        <article className="tile">
                            <div className="tile-header">
                                <h3>
                                    <span>正在审批的金额</span>
                                    <span>Amount being approved</span>
                                </h3>
                            </div>
                            <div className="pl-2">
                                <Statistic value={data_3} />
                            </div>
                            <a href="#">
                                <span>查看详情</span>
                                <span className="icon-button">
                                    <i className="ph-caret-right-bold"></i>
                                </span>
                            </a>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DataListPage;

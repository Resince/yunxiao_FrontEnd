import "./index.scss";
import ReactEcharts from "echarts-for-react";
import React, { useEffect, useState } from "react";
import { Statistic } from "antd";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store";
import { use } from "echarts";

const DataTablePage = () => {
    const navigate = useNavigate();
    const { UserDataStore } = useStore();
    const [data_1, setData_1] = useState("0");
    const [data_2, setData_2] = useState("0");
    const [data_3, setData_3] = useState("0");
    const [recentData, setRecentData] = useState([]);
    const [lineData, setLineData] = useState([0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        // 获取数据
        setData_1(UserDataStore.getAmount[0]);
        setData_2(UserDataStore.getAmount[1]);
        setData_3(UserDataStore.getAmount[2]);
        setRecentData(UserDataStore.getRecentAmount.slice(0, 3));
        setLineData(UserDataStore.getSevenMonths);
    }, []);

    const getOption = () => {
        let option = {
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: lineData,
                    type: "line",
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: "#dc2626",
                            },
                        },
                    },
                    areaStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#e3ffa8",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0, 0, 0, 0.1)",
                                },
                            ],
                            global: false,
                        },
                    },
                },
            ],
        };
        return option;
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

    const handleOnclickMore = () => {
        navigate("/user/dataListPage");
    };

    return (
        <div className="app-body">
            <div className="app-body-navigation">
                <nav className="navigation">
                    <a href="#">
                        <i className="ph-browsers"></i>
                        <span>报销展板</span>
                    </a>
                    <a href="/user/dataListPage">
                        <i className="ph-check-square"></i>
                        <span>报销详情</span>
                    </a>
                </nav>
            </div>
            <div className="app-body-main-content">
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
                <section className="transfer-section">
                    <div className="transfer-section-header">
                        <h2>近七个月报销统计</h2>
                    </div>
                    <div className="Chart">
                        <ReactEcharts option={getOption()} />
                    </div>
                </section>
            </div>
            <div className="app-body-sidebar">
                <section className="payment-section">
                    <h2>最近报销</h2>
                    <div className="payment-section-header">
                        <p>显示最近报销的金额与状态</p>
                    </div>
                    <div className="payments">
                        {recentData.map((data, index) =>
                            genLastestData(data, index)
                        )}
                    </div>
                    <div className="payment-section-footer">
                        <button
                            className="save-button"
                            onClick={handleOnclickMore}
                        >
                            查看更多
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DataTablePage;

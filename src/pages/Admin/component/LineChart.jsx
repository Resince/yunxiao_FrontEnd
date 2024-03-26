import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
import { observer } from "mobx-react-lite";


const LineChart = observer(({store}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        store.FinancialHomeStore.fetchLinechartData();
        setData(store.FinancialHomeStore.linechartData);
        console.log(store.FinancialHomeStore.linechartData);
    }, []);
    const config = {
        data,
        xField: 'Date',
        yField: 'scales',
        yAxis: {
            label: {
                formatter: (v) => `${v}k`,
            }
        },
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff 0.5:FFEB3B 1:#7948EA',
            };
        },
        // lineStyle: {
        //     // stroke: 'l(270) 0:#ffffff 0.5:FFEB3B 1:#7948EA',
        // },
        line: {
            style: {
                stroke: 'purple',
                lineWidth: 1,
                strokeOpacity: 0.5,
            }
        },
        smooth: true,
    };

    return <Area {...config} />;
});

export default LineChart;
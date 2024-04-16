import { makeAutoObservable } from "mobx";

class FinancialHomeStore {
    feeReviewData = {
        'finished': 120,
        'unfinished': 30
    };
    settleAccountsData = {
        'finished': 80,
        'unfinished': 50
    };  
    totalReimburseData = {
        'money': 178923.56,
        'number': 66
    };
    totalSummaryData = {
        'money': 68923.56,
        'number': 30
    };

    linechartData = [
        {
            "Date": "2013-01",
            "scales": 19
        },
        {
            "Date": "2023-02",
            "scales": 18
        },
        {
            "Date": "2023-03",
            "scales": 17
        },
        {
            "Date": "2023-04",
            "scales": 18
        },
        {
            "Date": "2023-05",
            "scales": 10
        },
        {
            "Date": "2023-06",
            "scales": 18
        },
        {
            "Date": "2023-07",
            "scales": 45
        },
        {
            "Date": "2023-08",
            "scales": 16
        },
        {
            "Date": "2023-09",
            "scales": 27
        },
        {
            "Date": "2023-10",
            "scales": 21
        },
        {
            "Date": "2023-11",
            "scales": 11
        },
        {
            "Date": "2023-12",
            "scales": 19
        },
        {
            "Date": "2024-01",
            "scales": 17
        },
        {
            "Date": "2024-02",
            "scales": 14
        },
        {
            "Date": "2024-03",
            "scales": 11
        },
        {
            "Date": "2024-04",
            "scales": 21
        },
    ];
    selectedYear = '2010';

    constructor() {
        makeAutoObservable(this);
    }

    fetchData() {
        // 调用API
         
    }

    fetchLinechartData() {
        // this.selectedYear = year;
        // 调用API
        // fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        //     .then((response) => response.json())
        //     .then((json) => {
        //         console.log(json);
        //         this.linechartData = json.filter(item => {
        //             const dateParts = item.Date.split('-');
        //             return dateParts[0] === this.selectedYear;
        //         })
        //         console.log(this.linechartData);
        //     })
        //     .catch((error) => {
        //         console.log('fetch data failed', error);
        //     });
        // console.log(this.linechartData);
        // return this.linechartData; 
        // this.linechartData = this.linechartData.filter(item => item.year === this.selectedYear)
    }

    get FeeReviewData() {
        console.log('FeeReviewData');
        return this.feeReviewData;
    }

    setSelectedYear(year) {
        this.selectedYear = year;
    }

}

export default new FinancialHomeStore();
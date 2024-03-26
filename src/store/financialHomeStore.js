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
        // {
        //     "year": "2010",
        //     "month": 1,
        //     "scales": 10
        // },
        // {
        //     "year": "2010",
        //     "month": 2,
        //     "scales": 23
        // },
        // {
        //     "year": "2010",
        //     "month": 3,
        //     "scales": 33
        // },
        // {
        //     "year": "2011",
        //     "month": 1,
        //     "scales": 1
        // },
        // {
        //     "year": "2011",
        //     "month": 2,
        //     "scales": 28
        // },
        {
            "Date": "2010-01",
            "scales": 19
        },
        {
            "Date": "2010-02",
            "scales": 18
        },
        {
            "Date": "2010-03",
            "scales": 17
        },
        {
            "Date": "2010-04",
            "scales": 18
        },
        {
            "Date": "2010-05",
            "scales": 10
        },
        {
            "Date": "2010-06",
            "scales": 18
        },
        {
            "Date": "2010-07",
            "scales": 45
        },
        {
            "Date": "2010-08",
            "scales": 16
        },
        {
            "Date": "2010-09",
            "scales": 27
        },
        {
            "Date": "2010-10",
            "scales": 21
        },
        {
            "Date": "2010-11",
            "scales": 11
        },
        {
            "Date": "2010-12",
            "scales": 19
        },
        {
            "Date": "2011-01",
            "scales": 17
        },
        {
            "Date": "2011-02",
            "scales": 14
        },
        {
            "Date": "2011-03",
            "scales": 11
        },
        {
            "Date": "2011-04",
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
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.linechartData = json.filter(item => {
                    const dateParts = item.Date.split('-');
                    return dateParts[0] === this.selectedYear;
                })
                console.log(this.linechartData);
            })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
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
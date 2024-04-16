import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";

const ResDisply = () => {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };
    const data = [
        {
            key: "1",
            attribute: "sellerBankAccountInfo",
            original: "招商银行股份有限公司天津自由贸易试验区分行",
            search: "招商银行股份有限公司天津自由贸易试验区分行",
        },
        {
            key: "2",
            attribute: "sellerName",
            original: "滴滴出行科技有限公司",
            search: "滴滴出行科技有限公司",
        },
        {
            key: "3",
            attribute: "invoiceTax",
            original: "0.00",
            search: "0.00",
        },
        {
            key: "4",
            attribute: "title",
            original: "天津增值税电子普通发票",
            search: "天津增值税电子普通发票",
        },
        {
            key: "5",
            attribute: "totalAmountInWords",
            original: "肆拾肆圆壹角叁分",
            search: "肆拾肆圆壹角叁分",
        },
        
    ];
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1677ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: "属性名",
            dataIndex: "attribute",
            key: "attribute",
            width: "33%",
            ...getColumnSearchProps("attribute"),
        },
        {
            title: "原始值",
            dataIndex: "original",
            key: "original",
            width: "33%",
            ...getColumnSearchProps("original"),
        },
        {
            title: "查询值",
            dataIndex: "search",
            key: "search",
            ...getColumnSearchProps("search"),
        },
    ];
    return (
        <div className="grid grid-cols-8 h-container-height overflow-hidden gap-0">
            <div className="col-span-6 justify-self-center px-4  w-full mt-12 ">
                <Table columns={columns} dataSource={data} />
            </div>
            <div className="col-span-2 bg-slate-100 shadow-xl">
                <div className="flex flex-col items-center justify-center">
                    <div className="shadow-lg rounded-lg w-[250px] h-[90px] flex items-center justify-self-center mt-10">
                        <h1 className="text-2xl font-bold w-[200px] text-center p-auto m-auto">
                            查验结果说明
                        </h1>
                    </div>
                    <div className="shadow-lg rounded-lg flex flex-col gap-9 m-7 mt-20 p-5">
                        <p>
                            1、若可以在税务机关的电子信息中查到，则显示识别结果和税务机关的信息前后对比
                        </p>
                        <p>
                            2、否则显示说明，可能是税务机关的信息未更新，或者是发票信息有误
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResDisply;

import { Table, Tag, Button } from 'antd';
import { useState } from 'react';
import { observer } from "mobx-react-lite";

const columns = [
    {
        title: '报销日期',
        dataIndex: 'invoicingDate',
        key: 'invoicingDate',
    },
    {
        title: '发票代码',
        dataIndex: 'number',
        key: 'number',
        render: (text) => <a className='text-blue-500 hover:text-blue-60'>{text}</a>,
    },
    {
        title: '报销部门',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: '报销人',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '报销金额',
        dataIndex: 'money',
        key: 'money',
    },
    {
        title: '查验结果',
        key: 'status',
        dataIndex: 'status',
        render: (status) => {
            let color = status === 1 ? 'green' : 'red';
            let content = status === 1 ? '有效' : '无效'
            return (
                <Tag color={color} key={status}>
                    {content}
                </Tag>
            )
        },
    },
    {
        title: '报销状态',
        key: 'result',
        dataIndex: 'result',
        render: (result) => <a>{result}</a>
    },
];
const RbmApproval = observer(({ store }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [filter, setFilter] = useState('全部'); // 筛选条件，默认为"All"
    const [data, getData] = useState(store.RbmApprovalStore.datalist);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const deleteInvoice = () => {
        selectedRowKeys.map((index) => {
            data.splice(index, 1);
            console.log(data[index]);
        })
    }
    return (
        <div>
            <div className="flex justify-between bg-white mb-1.5 rounded-md" >
                {/* 筛选条件选项 */}
                <div className='h-10'>
                    {['全部', '已审核', '未审核'].map((select) => (
                        <button
                            key={select}
                            onClick={() => { setFilter(select); getData(store.RbmApprovalStore.getDatalistInfo(select)); }}
                            className={`m-1 px-3 py-1 ${filter === select ? 'text-custom-purple border-b-2 border-b-custom-purple' : 'text-gray-600'}`}
                        >
                            {select}
                        </button>
                    ))}
                </div>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                rowSelection={rowSelection}
                pagination={{
                    position: "bottomRight",
                    pageSize: 15,
                }}
                scroll={{
                    y: 440,
                }}
            />
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <Button type="primary" onClick={deleteInvoice} disabled={!hasSelected} danger>
                    删除
                </Button>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `已选中 ${selectedRowKeys.length} 条` : ''}
                </span>
            </div>
        </div>
    );
});
export default RbmApproval;
import { Table, Tag, Button, Modal } from 'antd';
import { useState,useEffect } from 'react';
import RbmInfo from './RbmInfo';
import { useStore } from "../../../store";
import { observer } from 'mobx-react-lite';

const RbmTable = observer(({data}) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [tableData, setData] = useState(data);
    const [number, setNumber] = useState('');
    const store = useStore();

    useEffect(() => {
        setData(data);
    }, [data]);

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
        const newData = [...tableData]; // 创建一个新的数据副本
        selectedRowKeys.forEach((index) => {
            newData.splice(index, 1); // 删除选中行
        });
        setData(newData); // 更新tableData
        setSelectedRowKeys([]); // 清空选中行
    };

    const showModal = (val) => {
        console.log('点击' + val)
        store.RbmApprovalStore.showInfo();
        setNumber(val);
    };
    const handleCancel = () => {
        console.log('取消编辑');
        store.RbmApprovalStore.closeInfo();
    };

    const columns = [
        {
            title: '报销日期',
            dataIndex: 'invoicingDate',
            key: 'invoicingDate',
        },
        {
            title: '报销单号',
            dataIndex: 'number',
            key: 'number',
            render: (text) => <button className='text-blue-500 hover:text-blue-60' onClick={() => { showModal(text) }}>{text}</button>,
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


    return (
        <div>
            <Table
                columns={columns}
                dataSource={tableData}
                rowSelection={rowSelection}
                pagination={{
                    position: "bottomRight",
                    pageSize: 15,
                }}
                scroll={{
                    y: 440,
                }}
            />
            <Modal
                title="修改信息"
                open={store.RbmApprovalStore.open}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        取消
                    </Button>,
                ]}
            >
                <RbmInfo number={number} />
            </Modal>
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
export default RbmTable;
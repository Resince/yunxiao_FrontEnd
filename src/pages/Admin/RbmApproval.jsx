import { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import RbmTable from './component/RbmTable'

const RbmApproval = observer(({ store }) => {
    const [filter, setFilter] = useState('全部'); // 筛选条件，默认为"All"
    const [data, getData] = useState(store.RbmApprovalStore.datalist);

    useEffect(() => {
        getData(store.RbmApprovalStore.getDatalistInfo(filter));
    }, [])

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
            <RbmTable data = {data} />
        </div>
    );
});
export default RbmApproval;
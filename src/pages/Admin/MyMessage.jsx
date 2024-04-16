import { useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';

const MyMessage = observer(({ store }) => {
    const containerRef = useRef(null);
    const [showShadow, setShowShadow] = useState(false);

    const onScroll = () => {
        if (containerRef.current) {
            const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
            setShowShadow(scrollTop + clientHeight < scrollHeight);
        }
    };

    useEffect(() => {
        console.log(store.MyMessageStore.messages);
        store.MyMessageStore.getMessage();
        // onScroll(); // 初始化检查
        const checkForShadow = () => {
            const { clientHeight, scrollHeight } = containerRef.current;
            setShowShadow(clientHeight < scrollHeight);
        };

        checkForShadow();
        // 添加监听事件
        containerRef.current.addEventListener('scroll', onScroll);
        // 清除监听事件
        // return () => containerRef.current.removeEventListener('scroll', onScroll);
    }, [])

    const data = store.MyMessageStore.getMessage();

    return (
        <div
            ref={containerRef}
            onScroll={onScroll}
            className="p-2 relative bg-white mx-2 overflow-y-auto ${showShadow ? 'ring-1 ring-black ring-opacity-5' : ''}" style={{ maxHeight: '85vh' }}
        >
            <ul>
                {data.map((item) => {
                    return (
                        <li key={item.id}>
                            <div className="flex flex-col space-y-1 pb-1 items-center">
                                <div className='text-gray-400'>{item.time}</div>
                                <div key={item.id} className="border-2 rounded-lg p-2 w-1/2" style={{ borderColor: '#7A88FE' }}>
                                    <div className="border-b-2 flex justify-between items-center pb-2">
                                        <span className="font-bold text-lg ">
                                            {item.title} | 有流程到达
                                        </span>
                                        <button className='cursor-pointer text-blue-400' onClick={() => { } }>点击查看{'>>'}</button>
                                        {item.status === 'Processed' ? (
                                            <span className='text-custom-purple'>已处理</span>
                                        ) : (
                                            <span className='text-gray-500'>待处理</span>
                                        )}
                                    </div>
                                    <div className="text-gray-700 py-1">
                                        创建人：{item.creator}
                                    </div>
                                    <div className="text-gray-700 py-1">
                                        报销部门：{item.department}
                                    </div>
                                    <div className="text-gray-700 py-1 flex justify-between items-center w-1/2">
                                        <span>创建时间：{item.rbmTime}</span>
                                        <span className="font-bold">金额：{item.money}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {showShadow && (
                    <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none bg-gradient-to-b from-transparent to-gray-300 opacity-70" />
            )}
        </div>
    )
});

export default MyMessage;
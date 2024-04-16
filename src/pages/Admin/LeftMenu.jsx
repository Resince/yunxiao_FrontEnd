import React from "react";
import { observer } from "mobx-react-lite";
import { HomeOutlined, AuditOutlined, BarChartOutlined, MessageOutlined, UserOutlined} from "@ant-design/icons";
import { SITE_LOGO_P2 } from "@/constants"


const LeftMenu = observer(({ store }) => {
    // const menuItems = ['财务门户', '报销审批', '数据分析', '我的消息', '个人主页'];
    const menuItems = [
        {icon: <HomeOutlined />, title: '财务门户'},
        {icon: <AuditOutlined />, title: '报销审批'},
        // {icon: <BarChartOutlined />, title: '数据分析'},
        {icon: <MessageOutlined />, title: '我的消息'},
        {icon: <UserOutlined />, title: '个人主页'},
    ];
    
    return (
        <div className="w-64 h-screen flex flex-col items-center pt-8">
            <div className="flex items-end mb-2">
                <img src={SITE_LOGO_P2} className="h-16 mr-2 rounded-lg" alt="Logo" />
                {/* <div className="flex flex-col">
                    <span className="font-semibold text-lg text-gray-800">云销</span>
                    <span className="font-semibold text-sm text-gray-800">YUNXIAO</span>
                </div> */}
            </div>
            <div className="mb-2 mx-2 h-px bg-gray-400 w-2/3 self-center"></div>
            <ul className="w-full px-4">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`flex items-center justify-center py-2 my-1 text-center cursor-pointer text-purple-600 rounded-lg transition-colors duration-150 ${store.AdminMenuStore.activeMenu === item.title
                                ? 'bg-custom-purple text-white'
                                : 'hover:bg-purple-100'
                            }`}
                        style={{ margin: '2% 10%' }}
                        onClick={() => store.AdminMenuStore.setActiveMenu(item.title)}
                    >
                        <span className="flex items-center justify-center">{item.icon}</span>
                        <span className="ml-2">{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
});

export default LeftMenu;
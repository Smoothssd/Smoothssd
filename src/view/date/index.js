import React from 'react';
import { Badge, Calendar, ConfigProvider } from 'antd';
import './style.css'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import { useSelector } from "react-redux";
dayjs.locale('zh-cn');

const getListData = (value) => {
    let listData = []; // Specify the type of listData

    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};
const App = () => {
    const { type } = useSelector((state) => state)
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    const onSelect = (date, info) => {
        console.log(date, info);
    }

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };
    return <ConfigProvider
        locale={type === 'en' ? '' : zhCN}
        theme={{
            token: {
                colorPrimary: '#333',
                controlItemBgActive: 'rgba(0, 0, 0, 0.04)'
            },
        }}
    >
        <div className='date_box'>
            <h1>{type === 'en' ? 'Experience art up close! Book your visit now to our exclusive art exhibition, featuring captivating masterpieces. Reserve your spot today!' : '近距离体验艺术！立即预订我们的独家艺术展览，展出迷人的杰作。今天预订您的位置！'}</h1>
            <Calendar cellRender={cellRender} onSelect={onSelect} /></div>
    </ConfigProvider>;
};
export default App;


import React, { useState, useEffect } from 'react';
import { Descriptions, ConfigProvider } from 'antd';
import {
    TwitterSquareFilled, GithubFilled, YoutubeFilled, FacebookFilled
} from '@ant-design/icons';
import { Space } from 'antd';
import './style.css'
import logo from '../../assets/logo.png'
import { useSelector } from "react-redux";

const App = () => {
    const { type } = useSelector((state) => state)
    const item = [
        {
            key: '1',
            label: 'Phone',
            children: '+1 (100)222-XX-33',
            span: 3,
        },
        {
            key: '2',
            label: 'Email ',
            children: 'info@example.com',
            span: 3,
        },
        {
            key: '3',
            label: 'Address',
            children: 'InterstateXXX',
            span: 3,
        },
        {
            key: '4',
            label: 'Follow Us',
            children: <Space>
                <TwitterSquareFilled /><GithubFilled /><YoutubeFilled /><FacebookFilled />
            </Space>,
        },

    ];
    const NewItem = [
        {
            key: '1',
            label: '手机',
            children: '+1 (100)222-XX-33',
            span: 3,
        },
        {
            key: '2',
            label: '邮箱 ',
            children: 'info@example.com',
            span: 3,
        },
        {
            key: '3',
            label: '地址',
            children: 'InterstateXXX',
            span: 3,
        },
        {
            key: '4',
            label: '跟着我们',
            children: <Space>
                <TwitterSquareFilled /><GithubFilled /><YoutubeFilled /><FacebookFilled />
            </Space>,
        },

    ];
    const item2 = [
        {
            key: '1',
            children: 'About art exhibitions',
            span: 1,
        },
        {
            key: '2',
            children: 'Support',
            span: 1,
        },
        {
            key: '3',
            children: 'Career Opportunities',
            span: 1,
        },
        {
            key: '4',
            children: 'Mission and History',
            span: 1,
        },
        {
            key: '5',
            children: 'Membership',
            span: 1,
        },
        {
            key: '6',
            children: 'Volunteers',
            span: 1,
        },
        {
            key: '7',
            children: 'Collection Areas',
            span: 1,
        },
        {
            key: '8',
            children: 'Host an Event',
            span: 1,
        },
        {
            key: '9',
            children: 'Fellowships',
            span: 1,
        },
        {
            key: '10',
            children: 'Conservation Departments',
            span: 1,
        },
    ];
    const NewItem2 =
        [
            {
                "key": "1",
                "children": "关于艺术展览",
                "span": 1,
            },
            {
                "key": "2",
                "children": "支持",
                "span": 1,
            },
            {
                "key": "3",
                "children": "职业机会",
                "span": 1,
            },
            {
                "key": "4",
                "children": "使命与历史",
                "span": 1,
            },
            {
                "key": "5",
                "children": "会员",
                "span": 1,
            },
            {
                "key": "6",
                "children": "志愿者",
                "span": 1,
            },
            {
                "key": "7",
                "children": "收藏领域",
                "span": 1,
            },
            {
                "key": "8",
                "children": "举办活动",
                "span": 1,
            },
            {
                "key": "9",
                "children": "奖学金",
                "span": 1,
            },
            {
                "key": "10",
                "children": "保护部门",
                "span": 1,
            },
        ];

    const [items, setitems] = useState(item)
    const [items2, setitems2] = useState(item2)

    useEffect(() => {
        if (type === 'en') {
            setitems(item)
            setitems2(item2)
        } else {
            setitems(NewItem)
            setitems2(NewItem2)
        }
    }, [type])
    return <ConfigProvider
        theme={{
            token: {
                fontSize: 18
            },
            components: {
                Descriptions: {

                },
            },
        }}
    >
        <div className='footer'>
            <div className='footer_left'>
                <h3 className='footer_logo'> <img src={logo} alt="" /> Meteor Painting Exhibition</h3>

                <Descriptions className='footer_box' items={items} />

            </div>
            <Descriptions className='footer_box' items={items2} />
        </div>
    </ConfigProvider>
};
export default App;
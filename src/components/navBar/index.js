import React, { useState, useEffect } from 'react';
import { Menu, ConfigProvider } from 'antd';
import { useNavigate, useLocation, } from 'react-router-dom'
import './index.css'
import { useSelector } from "react-redux";
const items = [
    {
        label: 'Home',
        key: 'Home',

    },
    {
        label: 'About',
        key: 'About',


    },
    {
        label: 'Exhibition',
        key: 'Exhibition',

    },
    {
        label: 'Artist',
        key: 'Artist',


    }, {
        label: 'Contact',
        key: 'Contact',

    },

];
const items2 = [
    {
        label: '首页',
        key: 'Home',

    },
    {
        label: '关于我们',
        key: 'About',


    },
    {
        label: '展览',
        key: 'Exhibition',

    },
    {
        label: '艺术家',
        key: 'Artist',


    }, {
        label: '联系我们',
        key: 'Contact',

    },

];

const App = () => {
    const navigate = useNavigate();
    const hash = useLocation()
    const { type } = useSelector((state) => state)
    const [current, setCurrent] = useState('Home');
    const [changeItems, setChangeItems] = useState(items)
    console.log(type);
    useEffect(() => {
        if (type === 'en') {
            setChangeItems(items)
        } else {
            setChangeItems(items2)
        }
    }, [type])
    useEffect(() => {
        if (hash.state !== null) {
            setCurrent(hash.state.key)


        }

        if (hash.pathname === "/ProductDetails") {
            setCurrent('Exhibition')
        }
        console.log(hash);
    }, [])
    const onClick = async (e) => {
        console.log('click ', e);
        navigate(`/${e.key}`, { state: { key: e.key } });
        await setCurrent(e.key);

    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        horizontalItemSelectedColor: '#333',
                        horizontalItemHoverColor: '#333'
                    },
                },
            }}
        >
            <div className='navBar'>

                <Menu className='Menu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={changeItems} />
            </div>
        </ConfigProvider>

    );
};
export default App;
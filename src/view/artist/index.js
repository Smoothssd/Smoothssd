import React, { useState, useEffect } from 'react';
import { HighlightOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Menu, ConfigProvider, Card, Image, Pagination } from 'antd';
import { useNavigate, } from 'react-router-dom'
import img1 from '../../assets/1.webp'
import img28 from '../../assets/28.jpg'
import img29 from '../../assets/29.jpg'
import img30 from '../../assets/30.webp'
import img31 from '../../assets/31.jpg'
import img32 from '../../assets/32.jpg'
import img33 from '../../assets/33.jpg'
import img34 from '../../assets/34.webp'
import img35 from '../../assets/35.jpg'
import img36 from '../../assets/38.jpg'
import img37 from '../../assets/39.jpg'
import img38 from '../../assets/40.jpg'
import img39 from '../../assets/41.jpg'
import './style.css'
import { useSelector } from "react-redux";
import zhCN from 'antd/locale/zh_CN';
const { Meta } = Card;

const App = () => {
    const { type } = useSelector((state) => state)
    const items = [
        {
            key: 'Name',
            icon: <UserOutlined />,
            label: type === 'en' ? 'A-Z PROGRAMS' : 'A-Z 姓',
            children: [
                {
                    key: '1-1',
                    type: 'group',
                    children:
                        [
                            { key: 'A', label: 'A' },
                            { key: 'B', label: 'B' },
                            { key: 'C', label: 'C' },
                            { key: 'D', label: 'D' },
                            { key: 'E', label: 'E' },
                            { key: 'F', label: 'F' },
                            { key: 'G', label: 'G' },
                            { key: 'H', label: 'H' },
                            { key: 'I', label: 'I' },
                            { key: 'J', label: 'J' },
                            { key: 'K', label: 'K' },
                            { key: 'L', label: 'L' },
                            { key: 'M', label: 'M' },
                            { key: 'N', label: 'N' },
                            { key: 'O', label: 'O' },
                            { key: 'P', label: 'P' },
                            { key: 'Q', label: 'Q' },
                            { key: 'R', label: 'R' },
                            { key: 'S', label: 'S' },
                            { key: 'T', label: 'T' },
                            { key: 'U', label: 'U' },
                            { key: 'V', label: 'V' },
                            { key: 'W', label: 'W' },
                            { key: 'X', label: 'X' },
                            { key: 'Y', label: 'Y' },
                            { key: 'Z', label: 'Z' }
                        ],
                },

            ],
        },
        {
            key: 'Factions',
            icon: <HighlightOutlined />,

            label: type === 'en' ? 'Factions' : '派系',
            children: [
                {
                    key: 'realism',
                    label: type === 'en' ? 'realism' : '写实主义',
                },
                {
                    key: 'impressionism',
                    label: type === 'en' ? 'impressionism' : '印象主义',
                },
                {
                    key: 'abstractionism',
                    label: type === 'en' ? 'abstractionism' : '抽象主义',

                },
            ],
        },
        {
            key: 'Country',
            label: type === 'en' ? 'Country' : '国家',
            icon: <EnvironmentOutlined />,
            children: [
                {
                    key: 'America',
                    label: type === 'en' ? 'America' : '美国',
                },
                {
                    key: 'Britain',
                    label: type === 'en' ? 'Britain' : '英国',
                },
                {
                    key: 'Denmark',
                    label: type === 'en' ? 'Denmark' : '丹麦',
                },

            ],
        },
    ];

    const ArrList = [
        {
            img: img28,
            name: 'Claude Monet',
            NewName: '克劳德·莫奈',
            initial: 'C',
            Factions: 'realism',
            Country: 'Britain'
        },
        {
            img: img29,
            name: 'Vincent Van Gogh',
            NewName: '文森特·梵高',
            initial: 'V',
            Factions: 'abstractionism',
            Country: 'Denmark'
        },
        {
            img: img30,
            name: 'Jean-Michel Basquiat',
            NewName: '巴斯奎特',
            initial: 'J',
            Factions: 'impressionism',
            Country: 'Denmark'
        },
        {
            img: img31,
            name: 'Andy Warhol',
            NewName: '安迪·沃霍尔',
            initial: 'A',
            Factions: 'realism',
            Country: 'Britain'
        },
        {
            img: img32,
            name: 'John James Audubon',
            NewName: '约翰·詹姆斯·奥杜邦',
            initial: 'J',
            Factions: 'impressionism',
            Country: 'America'
        },
        {
            img: img33,
            name: 'Gustav Klimt',
            NewName: '约翰·詹姆斯·奥杜邦',
            initial: 'G',
            Factions: 'abstractionism',
            Country: 'America'
        },
        {
            img: img34,
            name: 'Norman Rockwell',
            NewName: '诺曼·洛克威尔',
            initial: 'N',
            Factions: 'impressionism',
            Country: 'Britain'
        },
        {
            img: img35,
            name: 'Pablo Picasso',
            NewName: '巴勃罗·毕加索',
            initial: 'P',
            Factions: 'abstractionism',
            Country: 'America'
        },
        {
            img: img36,
            name: 'Lilia Orlova Holmes',
            NewName: '莉莉娅·奥尔洛娃·霍姆斯',
            initial: 'L',
            Factions: 'impressionism',
            Country: 'America'
        },
        {
            img: img37,
            name: 'Eva Watts',
            NewName: '伊娃·瓦茨',
            initial: 'E',
            Factions: 'abstractionism',
            Country: 'Denmark'
        },
        {
            img: img38,
            name: 'Aaron Bevan-Bailey',
            NewName: '亚伦·贝文·贝利',
            initial: 'A',
            Factions: 'impressionism',
            Country: 'America'
        },
        {
            img: img39,
            name: 'Emma Scarvey',
            NewName: '艾玛·斯卡维',
            initial: 'E',
            Factions: 'abstractionism',
            Country: 'Denmark'
        },
    ]
    const [list, setList] = useState(ArrList)
    const [NewList, setNewList] = useState(ArrList)
    const [page, setpage] = useState(1)
    const onClick = (e) => {
        console.log('click', e);
        const { keyPath } = e
        let value = keyPath[0]
        console.log(value);
        let name = keyPath[1]
        let arr = ArrList.filter(item => {
            if (name === 'Name') {
                console.log(item.name);
                return item.initial === value
            }
            if (name === 'Factions') {
                return item.Factions === value
            }
            if (name === 'Country') {
                return item.Country === value
            }
        })
        setList(arr)
    };
    const setPageNumber = (e, s) => {
        setpage(e)
        console.log(e);
    }
    useEffect(() => {
        let res = list.slice((page - 1) * 8, page * 8)
        setNewList(res)
    }, [page, list])
    const navigate = useNavigate();
    const routerLink = () => {
        navigate(`/Exhibition`,);
    }
    return (

        <ConfigProvider
            locale={type === 'en' ? '' : zhCN}
            theme={{
                components: {
                    Menu: {
                        horizontalItemSelectedColor: '#333',
                        horizontalItemHoverColor: '#333'
                    },
                },
            }}
        >
            <div className='Artist_box'>
                <div className='Artist_box_select'>
                    <Menu
                        onClick={onClick}
                        style={{
                            width: '200px',
                            textAlign: 'left'
                        }}
                        mode="vertical"
                        items={items}
                    />
                    <img src={img1} style={{ flex: 1, height: '150px' }} alt="" />
                </div>
                <div className='Artist_list'>
                    {
                        NewList.length === 0 ? <p>{type === 'en' ? 'There is currently no data available!' : '暂时没有数据！'}</p> : NewList.map(item => {
                            return <Card
                                hoverable
                                style={{ width: 350, margin: 10 }}
                                key={item.name}
                                cover={<Image
                                    width={'100%'}
                                    height={350}
                                    src={item.img}
                                />
                                }
                            >

                                <Meta title={type === 'en' ? item.name : item.NewName} onClick={routerLink} />
                            </Card>
                        })
                    }




                </div>
                <Pagination style={{ margin: '60px 0 ' }} align="center" defaultCurrent={1} defaultPageSize={8} total={list.length} onChange={setPageNumber} />
            </div>
        </ConfigProvider>
    )
};
export default App;
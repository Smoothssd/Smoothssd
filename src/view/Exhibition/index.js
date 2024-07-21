import React, { useState, useEffect } from 'react'
import './style.css'
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Checkbox, ConfigProvider, Pagination } from 'antd';
import { Card } from 'antd';
import { useNavigate, } from 'react-router-dom'
import { useSelector } from "react-redux";
import img20 from '../../assets/20.jpg'
import img21 from '../../assets/21.jpg'
import img22 from '../../assets/22.jpg'
import img23 from '../../assets/23.jpg'
import img24 from '../../assets/24.jpg'
import img25 from '../../assets/25.jpg'
import img26 from '../../assets/26.jpg'
import img27 from '../../assets/27.jpg'
import img28 from '../../assets/36.jpg'
import img29 from '../../assets/37.jpg'
const { Meta } = Card;

export default function Index() {
    const { type } = useSelector((state) => state)
    const [CheckBoxArr, setCheckBoxArr] = useState([
        { id: 25, name: 'Less than $25', checked: false },
        { id: 75, name: '$25 - $75', checked: false },
        { id: 150, name: '$75 - $150', checked: false }])
    const [CheckBoxArr2, setCheckBoxArr2] = useState([
        { id: 1, name: 'Fine Art', checked: false },
        { id: 2, name: 'Decorative Art', checked: false },
        { id: 3, name: 'Vintage Art', checked: false }])
    const [CheckBoxArr3, setCheckBoxArr3] = useState([
        { id: 1, name: 'Small', checked: false },
        { id: 2, name: 'Middle', checked: false },
        { id: 3, name: 'Large', checked: false }])


    const items = [
        {
            key: 25,
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 0, 'items')}>1$-$25</Checkbox>
            ),
        },
        {
            key: 75,
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 1, 'items')}>$25 - $75</Checkbox>
            ),
        },
        {
            key: 150,
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 2, 'items')}>$75 - $150</Checkbox>
            ),
        },


    ];
    const items2 = [
        {
            key: 'Fine Art',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 0, 'items2')}>{type === 'en' ? 'Fine Art' : '美术'} </Checkbox>
            ),
        },
        {
            key: 'Decorative Art',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 1, 'items2')}>{type === 'en' ? 'Decorative Art' : '装饰艺术'}</Checkbox>
            ),
        },
        {
            key: 'Vintage Art',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 2, 'items2')}>{type === 'en' ? 'Vintage Art' : '复古艺术'}</Checkbox>
            ),
        },


    ];
    const items3 = [
        {
            key: 'Small',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 0, 'items3')}>{type === 'en' ? 'Small' : '小尺寸'}</Checkbox>
            ),
        },
        {
            key: 'Middle',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 1, 'items3')}>{type === 'en' ? 'Middle' : '中尺寸'}</Checkbox>
            ),
        },
        {
            key: 'Large',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 2, 'items3')}>{type === 'en' ? 'Large' : '大尺寸'}</Checkbox>
            ),
        },


    ];

    const cardItmes = [
        {
            Title: 'Me Time Moment',
            text: 'Raissa Oltmanns',
            Title2: '我的时刻',
            text2: 'i赖莎·奥尔特晏',
            img: img20,
            status: true,
            type: 'Fine Art',
            price: 25, range: '$25 - $75',
            size: 'Small'
        },
        {
            Title: 'Boats',
            text: 'Jukyong Park',
            Title2: '船',
            text2: '朱京公园',
            img: img21,
            status: false,
            type: 'Decorative Art',
            price: 25, range: '$25 - $75',
            size: 'Middle'
        },
        {
            Title: 'Cheetah Charm',
            text: 'Sasha',
            Title2: '猎豹咒',
            text2: '萨沙',
            img: img22,
            status: true,
            type: 'Vintage Art',
            price: 30, range: '$25 - $75',
            size: 'Large'
        },
        {
            Title: 'Tea Time',
            text: 'Unknown Chiu',
            Title2: '下午茶时间',
            text2: '无名赵',
            img: img23,
            status: true,
            type: 'Vintage Art',
            price: 20, range: 'Less than $25',
            size: 'Large'
        },
        {
            Title: 'Alpine Trail',
            text: 'Maxine Shore',
            Title2: '阿尔卑斯山步道',
            text2: '玛克辛·肖尔',
            img: img24,
            status: true,
            type: 'Vintage Art',
            price: 60, range: '$25 - $75',
            size: 'Middle'
        },
        {
            Title: 'Kimone',
            text: 'Unknown Woodworth',
            Title2: 'Kimone',
            text2: '无名伍德沃思',
            img: img25,
            status: false,
            type: 'Vintage Art',
            price: 40, range: '$25 - $75',
            size: 'Middle'
        },
        {
            Title: 'Wander',
            text: 'Iris Lehnhardt',
            Title2: '漫步',
            text2: 'Iris Lehnhardt',
            img: img26,
            status: true,
            type: 'Decorative Art',
            price: 50, range: '$25 - $75',
            size: 'Small'
        },
        {
            Title: 'Dalmatian',
            text: 'Uma Gokhale',
            Title2: '达尔马西亚狗乌玛',
            text2: '乌玛·戈卡莱',
            img: img27,
            status: true,
            type: 'Decorative Art',
            price: 140, range: '$75 - $150',
            size: 'Large'
        },
        {
            Title: 'Amalfi Oranges',
            text: 'Petra Lizde',
            Title2: '阿马尔菲橙',
            text2: '佩特拉·利兹德',
            img: img28,
            status: true,
            type: 'Fine Art',
            price: 60, range: '$25 - $75',
            size: 'Large'
        },
        {
            Title: 'Book Cafe',
            text: 'Jukyong Park',
            Title2: '图书咖啡馆',
            text2: '朱京公园',
            img: img29,
            status: true,
            type: 'Decorative Art',
            price: 20, range: 'Less than $25',
            size: 'Small'
        },
    ]


    const [open, setopen] = useState(false)
    const [open2, setopen2] = useState(false)
    const [open3, setopen3] = useState(false)
    const [list, setList] = useState(cardItmes)
    const [NewListArr, setNewListArr] = useState(cardItmes)
    const [page, setpage] = useState(1)
    useEffect(() => {
        setNewArr()

    }, [page, list])
    const onChangeCheckbox = (e, i, arr) => {
        console.log(e.target.checked, i);
        let value = e.target.checked
        let CheckArr = []

        if (arr === 'items') {
            CheckArr = CheckBoxArr
            console.log(CheckArr[i]);
            CheckArr[i].checked = value
            setCheckBoxArr(CheckArr)

        }
        if (arr === 'items2') {
            CheckArr = CheckBoxArr2
            CheckArr[i].checked = value
            setCheckBoxArr2(CheckArr)

        }
        if (arr === 'items3') {
            CheckArr = CheckBoxArr3
            CheckArr[i].checked = value
            setCheckBoxArr3(CheckArr)

        }

    }
    const clickSetOpen = (id) => {
        if (id === 1) {
            setopen(!open)
            setopen2(false)
            setopen3(false)
        }
        if (id === 2) {
            setopen2(!open2)
            setopen(false)
            setopen3(false)
        }
        if (id === 3) {
            setopen3(!open3)
            setopen(false)
            setopen2(false)
        }


    }
    const showModal = () => {

        let NewC1 = CheckBoxArr.filter(item => item.checked)
        let NewC2 = CheckBoxArr2.filter(item => item.checked)
        let NewC3 = CheckBoxArr3.filter(item => item.checked)
        console.log(NewC1, NewC2, NewC3);
        let Newlist = []
        let Newlist2 = []
        let Newlist3 = []
        if (NewC1.length !== 0) {

            NewC1.filter((item) => {
                cardItmes.filter(i => {
                    if (i.range === item.name) {
                        Newlist.push(i)
                    }

                })

            })
            setList(Newlist)
            if (NewC2.length !== 0) {
                NewC2.filter((item) => {
                    Newlist.filter(i => {
                        if (i.type === item.name) {
                            Newlist2.push(i)
                        }

                    })

                })

                setList(Newlist2)
                if (NewC3.length !== 0) {
                    NewC3.filter((item) => {
                        Newlist2.filter(i => {
                            if (i.size === item.name) {
                                Newlist3.push(i)
                            }

                        })

                    })
                    setList(Newlist3)
                }
                console.log(Newlist3);
            } else {
                if (NewC3.length !== 0) {
                    NewC3.filter((item) => {
                        Newlist.filter(i => {
                            if (i.size === item.name) {
                                Newlist3.push(i)
                            }

                        })

                    })
                    setList(Newlist3)
                }
            }


        } else {

            if (NewC2.length !== 0) {
                NewC2.filter((item) => {
                    cardItmes.filter(i => {
                        if (i.type === item.name) {
                            Newlist2.push(i)
                        }

                    })

                })
                setList(Newlist2)

                if (NewC3.length !== 0) {
                    NewC3.filter((item) => {
                        Newlist2.filter(i => {
                            if (i.size === item.name) {
                                Newlist3.push(i)
                            }

                        })

                    })
                    setList(Newlist3)
                }
                console.log(Newlist3);
            } else {
                if (NewC3.length !== 0) {
                    NewC3.filter((item) => {
                        cardItmes.filter(i => {
                            if (i.size === item.name) {
                                Newlist3.push(i)
                            }

                        })

                    })
                    setList(Newlist3)
                    console.log(Newlist3);
                } else {
                    setList(cardItmes)
                }
            }

        }
        setPage(1)

    }
    const setNewArr = () => {
        let arr = list.slice((page - 1) * 8, 8 * page)


        setNewListArr(arr)
    }
    const setPage = (e, s) => {
        setpage(e)
    }
    const navigate = useNavigate();
    const routerLink = () => {
        navigate(`/ProductDetails`,);
    }
    return (
        <ConfigProvider

            theme={{
                components: {
                    Button: {
                        defaultHoverColor: '#333',
                        defaultHoverBorderColor: '#333',


                    },
                },
            }}
        >
            <div className='Exhibition_box'>
                <h1>{type === 'en' ? 'All clearance and sale of art inspired items' : '所有清仓和销售艺术灵感的物品'}</h1>
                <p>{type === 'en' ? 'Welcome to our renowned art exhibition store,' : '欢迎光临我们著名的艺术展的专卖店，'}</p>
                <p>{type === 'en' ? 'Here, art enthusiasts and collectors can find a unique fusion of creativity and elegance in every piece of work.' : '在这里，艺术爱好者和收藏家都可以在每一件作品中找到创意和优雅的独特融合。'} </p>
                <p> {type === 'en' ? 'Our collection showcases carefully curated items inspired by the stunning artworks on display,' : '我们的收藏展示了受展出的令人惊叹的艺术品启发而精心策划的物品，'}</p>
                <p> {type === 'en' ? 'Provided an opportunity to bring home a part of this extraordinary exhibition.' : '提供了一个将这个非凡展览的一部分带回家的机会。'}</p>

                <div className='Dropdown_box'>
                    <Space size={30}>
                        <Dropdown menu={{ items, selectable: false, }}
                            open={open}
                            onClick={() => clickSetOpen(1)}
                            trigger={['click']}
                        >
                            <Button>
                                <Space>
                                    {type === 'en' ? 'Price' : '价格'}
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>

                        <Dropdown menu={{ items: items2, selectable: false, }}
                            open={open2}
                            onClick={() => clickSetOpen(2)}
                            trigger={['click']}
                        >
                            <Button>
                                <Space>
                                    {type === 'en' ? 'Product Type' : '产品类型'}
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>

                        <Dropdown menu={{ items: items3, selectable: false, }}
                            open={open3}
                            onClick={() => clickSetOpen(3)}
                            trigger={['click']}
                        >
                            <Button>
                                <Space>
                                    {type === 'en' ? 'Size' : '大小'}
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </Space>

                    <Button onClick={showModal}  >
                        Search
                    </Button>
                </div>
            </div>
            <div className='Exhibition_img'>
                {NewListArr.map((item) => {
                    if (item.status) {
                        return (<Card
                            hoverable
                            style={{
                                width: 340,
                                height: 530,
                                margin: 20
                            }}
                            key={item.Title}
                            onClick={routerLink}
                            cover={<div className='Exhibition_img_list'><img style={{ width: '70%' }} alt="example" src={item.img} /></div>}
                        >
                            <Meta description={
                                <div className='Exhibition_list_text'>
                                    <h2>{type === 'en' ? item.Title : item.Title2}</h2>
                                    <p>{type === 'en' ? item.text : item.text2}</p>
                                    <p>{type === 'en' ? 'price' : '价格'}:{item.price}$</p>
                                    <p>{type === 'en' ? 'size' : '尺寸'}:{item.size}</p>
                                    <Button style={{ marginTop: 20 }}>
                                        {type === 'en' ? 'READ MORE' : '查看更多'}
                                    </Button>
                                </div>
                            } />
                        </Card>)
                    } else {
                        return (
                            <Card
                                hoverable
                                style={{
                                    width: 340,
                                    height: 530,
                                    margin: 20
                                }}
                                onClick={routerLink}
                                key={item.Title}
                                cover={<div className='Exhibition_img_list'><img style={{ width: '100%' }} alt="example" src={item.img} /></div>}
                            >
                                <Meta description={
                                    <div className='Exhibition_list_text'>
                                        <h2>{type === 'en' ? item.Title : item.Title2}</h2>
                                        <p>{type === 'en' ? item.text : item.text2}</p>
                                        <p>{type === 'en' ? 'price' : '价格'}:{item.price}$</p>
                                        <p>{type === 'en' ? 'size' : '尺寸'}:{item.size}</p>
                                        <Button style={{ marginTop: 20 }}>

                                            {type === 'en' ? 'READ MORE' : '查看更多'}
                                        </Button>
                                    </div>
                                } />
                            </Card>
                        )
                    }

                })}





            </div>
            <Pagination style={{ margin: '30px 0 60px' }} align="center" defaultCurrent={1} total={list.length} defaultPageSize={8} onChange={setPage} />
        </ConfigProvider>
    )
}

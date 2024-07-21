import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../view/home'
import About from '../view/about'
import Exhibition from '../view/Exhibition'
import Artist from '../view/artist'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import { Input, FloatButton, Card, Popover, Button, ConfigProvider, message } from 'antd';
import Img from '../assets/car.png'
import Img2 from '../assets/ch.png'
import Img3 from '../assets/en.png'
import logo from '../assets/logo.png'
import img20 from '../assets/20.jpg'
import Contact from '../view/contact'
import Date from '../view/date'
import ProductDetails from '../view/ProductDetails'
import { CustomerServiceOutlined, CloseOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { changeAction, delCarAction } from '../store/action'
import FullScreen from '../components/full screen'
import './style.css'
export default function Index() {
    const { Search } = Input;
    const onSearch = (value, _e, info) => {
        console.log(value, _e, info);
    };
    const [isShow, setIsShow] = useState(false)
    const [open, setOpen] = useState(false);
    const [value, setvalue] = useState()
    const [CustomerArr, setCustomerArr] = useState([])
    const hide = () => {
        setOpen(false);
    };
    const show = () => {
        setOpen(true);
        console.log(123);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const { type, list } = useSelector((state) => state)
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();
    const setTypeFn = () => {

        if (type === 'en') {

            dispatch(changeAction('ch'))
        } else {

            dispatch(changeAction('en'))
        }
        // console.log(type);

    }
    const clickClose = (id) => {
        console.log(id);
        dispatch(delCarAction(id))
        messageApi.open({
            type: 'success',
            content: type === 'en' ? 'Published Delete successfully' : '删除成功！',
        });
    }
    const onchangeValue = (e) => {
        setvalue(e.target.value)
    }
    const SendFn = () => {
        if (!value) {
            messageApi.open({
                type: 'warning',
                content: type === 'en' ? 'Please enter the content...' : '请输入内容...',
            });
            return
        }
        let res = [...CustomerArr]
        console.log(123);
        res.push(value)

        setCustomerArr(res)
        setvalue('')


    }
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultGhostBorderColor: 'rgb(241, 238, 233)',
                        defaultHoverBorderColor: 'rgb(241, 238, 233)',
                        defaultActiveBorderColor: 'rgb(241, 238, 233)',
                        defaultShadow: 'rgb(241, 238, 233)',
                        groupBorderColor: 'rgb(241, 238, 233)',
                        defaultHoverColor: '#333',
                        defaultActiveColor: '#333'
                    },
                },
            }}
        >
            <div>
                {contextHolder}
                <div className='title'>
                    <div className='logo'><img src={logo} alt="" />{type === 'en' ? 'Meteor Painting Exhibition' : '流星绘画展'}</div>
                    <div className='title_right'>
                        <Search
                            placeholder={type === 'en' ? "Please enter the content..." : '请输入内容...'}
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }}
                        />

                        <Popover
                            content={
                                <div className='popover_box'>
                                    <ul>
                                        {list.length === 0 ? <p>{type === 'en' ? 'There is currently no purchase record!' : '当前没有购买记录！'}</p> :
                                            list.map((item) => {
                                                return <li>
                                                    <img src={img20} alt="" />
                                                    <div className='popover_text'>
                                                        <h3>{type === 'en' ? item.name : item.name2}</h3>
                                                        <h5>{item.Author}</h5>
                                                        <h5>{item.price}$</h5>
                                                        <CloseOutlined className='list_close' onClick={() => clickClose(item.id)} />
                                                    </div>
                                                </li>
                                            })
                                        }


                                        {/*  */}
                                    </ul>
                                    <div className='popover_box_footer'>
                                        <Button onClick={hide}>OK</Button>
                                    </div>
                                </div>}
                            title={<h2 >{type === 'en' ? 'Shopping Cart' : '购物车'}</h2>}
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}
                        >
                            <Button ghost icon={<img className='car' src={Img} alt="" />} onClick={show} ></Button>

                        </Popover>
                        <img className='en' src={type === 'ch' ? Img3 : Img2} alt="" style={{ margin: '0  20px ' }} onClick={setTypeFn} />
                        <FullScreen></FullScreen>
                    </div>

                </div>
                <div>
                    <FloatButton
                        shape="circle"
                        onClick={() => setIsShow(true)}
                        style={{
                            right: 24,
                        }}
                        icon={<CustomerServiceOutlined />}
                    />
                    <NavBar></NavBar>
                    <div className='conter'>
                        <Routes>
                            <Route path={"/"} element={<Home />}></Route>
                            <Route path={"/Home"} element={<Home />}></Route>
                            <Route path={"/About"} element={<About />}></Route>
                            <Route path={"/Exhibition"} element={<Exhibition />}></Route>
                            <Route path={"/Artist"} element={<Artist />}></Route>
                            <Route path={"/Contact"} element={<Contact />}></Route>
                            <Route path={"/Date"} element={<Date />}></Route>
                            <Route path={"/ProductDetails"} element={<ProductDetails />}></Route>
                        </Routes>
                    </div>
                    <Footer></Footer>
                </div>
                <Card
                    className='card_box'
                    title={type === 'en' ? "Customer service" : '客户服务'}
                    extra={<CloseOutlined onClick={() => setIsShow(false)} />}
                    style={{ display: isShow ? 'block' : 'none' }}
                >
                    <div className='card_text'>
                        <ul>
                            {CustomerArr.map(((item, i) => {
                                return <li key={i}>
                                    <Card
                                        style={{
                                            width: '90%',
                                            padding: '10px',
                                            textAlign: 'left'
                                        }}
                                    >
                                        <p style={{ width: '100%', textAlign: 'left' }}>{item}</p>

                                    </Card>
                                    <div className='icon_img'> <UserOutlined /></div>

                                </li>
                            }))}



                        </ul>
                        <Search
                            placeholder={type === 'en' ? "Please enter the content..." : '请输入内容...'}
                            enterButton={<SendOutlined />}
                            onChange={onchangeValue}
                            onSearch={SendFn}
                            value={value}
                            style={{
                                width: '100%',
                            }}
                        />
                    </div>


                </Card>
            </div>
        </ConfigProvider>

    )
}

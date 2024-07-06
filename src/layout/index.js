import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../view/home'
import About from '../view/about'
import Exhibition from '../view/Exhibition'
import Artist from '../view/artist'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import { Input, FloatButton, Card, Popover, Button,ConfigProvider } from 'antd';
import Img from '../assets/car.png'
import logo from '../assets/logo.png'
import Contact from '../view/contact'
import Date from '../view/date'
import ProductDetails from '../view/ProductDetails'
import { CustomerServiceOutlined, CloseOutlined, SendOutlined } from '@ant-design/icons';
import './style.css'
export default function Index() {
    const { Search } = Input;
    const onSearch = (value, _e, info) => {
        console.log(value, _e, info);
    };
    const [isShow, setIsShow] = useState(false)
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultGhostBorderColor:'rgb(241, 238, 233)',
                        defaultHoverBorderColor:'rgb(241, 238, 233)',
                        defaultActiveBorderColor:'rgb(241, 238, 233)',
                        defaultShadow:'rgb(241, 238, 233)',
                        groupBorderColor:'rgb(241, 238, 233)',
                        defaultHoverColor:'#333',
                        defaultActiveColor:'#333'
                    },
                },
            }}
        >
            <div>

                <div className='title'>
                    <div className='logo'><img src={logo} alt="" />Meteor Painting Exhibition</div>
                    <div className='title_right'>
                        <Search
                            placeholder="Please enter the content..."
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }}
                        />

                        <Popover
                            content={
                            <div className='popover_box'>
                              <ul>
                             <p>There is currently no purchase record!</p>
                              </ul>
                              <div className='popover_box_footer'>
                              <Button   onClick={hide}>OK</Button>
                              </div>
                            </div>}
                            title={<h2 >Shopping Cart</h2>}
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}
                        >
                            <Button ghost icon={<img className='car' src={Img} alt="" />} ></Button>
                        </Popover>
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
                    title="Customer service"
                    extra={<CloseOutlined onClick={() => setIsShow(false)} />}
                    style={{ display: isShow ? 'block' : 'none' }}
                >
                    <div className='card_text'>
                        <ul>

                        </ul>
                        <Search
                            placeholder="Please enter the content..."
                            enterButton={<SendOutlined />}
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

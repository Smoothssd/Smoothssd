import React from 'react';
import './style.css'
import img2 from '../../assets/2.webp'
import { Button, Form, Input, ConfigProvider } from 'antd';
import { useSelector } from "react-redux";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        Email: '${label} is not a valid Email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};
const App = () => {
    const { type } = useSelector((state) => state)
    return (
        <div className='contact_box'>
            <img src={img2} />
            <h1>{type === 'en' ? 'Contact Us' : "联系我们"} </h1>
            <p>
                {type === 'en' ? 'Discover the captivating world of art at our upcoming exhibition! Showcasing a diverse array of masterpieces, our gallery invites you to embark on a visual journey. Stay connected with us for updates, exclusive sneak peeks, and to book your personal viewing experience. Join our community and be inspired by the beauty of art. Connect with us now to embark on this artistic adventure!' : "在即将到来的展览中探索迷人的艺术世界！我们的画廊展示了各种各样的杰作，邀请您踏上视觉之旅。与我们保持联系，了解最新动态、独家预览，并预订您的个人观看体验。加入我们的社区，受到艺术之美的启发。现在就与我们联系，开始这场艺术冒险吧！"}


            </p>
            <ConfigProvider
                theme={{
                    components: {
                        Form: {
                            labelFontSize: 30,
                            itemMarginBottom: 100
                        },
                        Button: {
                            defaultHoverColor: 'rgb(166, 25, 46)',
                            defaultHoverBorderColor: 'rgb(166, 25, 46)',
                            defaultGhostBorderColor: '#333',
                            defaultGhostColor: '#333'

                        },
                    },
                }}
            >
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                        width: '80%',
                    }}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={['user', 'Name']}
                        label={type === 'en' ? "Name" : '姓名'}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'Email']}
                        label={type === 'en' ? "Email" : '邮箱'}

                        rules={[
                            {
                                type: 'Email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name={['user', 'Address']}

                        label={type === 'en' ? "Address" : '地址'}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'Message']}
                        label={type === 'en' ? "Message" : '留言'}

                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >

                        <Button ghost htmlType="submit">
                            {type === 'en' ? "Submit" : '提交'}
                        </Button>
                    </Form.Item>
                </Form>
            </ConfigProvider>


        </div>
    );
};


export default App;
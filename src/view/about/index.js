import Chart from "../../components/echarts";
import './style.css'
import React, { useState, } from 'react';
import { Button, Modal, ConfigProvider } from 'antd';
import img10 from '../../assets/19.webp'
import { useSelector } from "react-redux";

function App() {
    const options = {
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [30, 180],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [

                    { value: 40, name: 'realism' },
                    { value: 38, name: 'Abstract Art' },
                    { value: 32, name: 'Expressionism' },
                    { value: 30, name: 'Surrealism' },
                    { value: 28, name: 'Pop Art' },
                    { value: 26, name: 'Minimalism' },
                ]
            }
        ]
    };
    const options2 = {
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: '南丁格尔图',
                type: 'pie',
                radius: [30, 180],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 40, name: '写实主义' },
                    { value: 38, name: '抽象艺术' },
                    { value: 32, name: '表现主义' },
                    { value: 30, name: '超现实主义' },
                    { value: 28, name: '波普艺术' },
                    { value: 26, name: '极简主义' },
                ]
            }
        ]
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const { type } = useSelector((state) => state)

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultHoverColor: 'rgb(166, 25, 46)',
                            defaultHoverBorderColor: 'rgb(166, 25, 46)',
                            defaultGhostBorderColor: '#333',
                            defaultGhostColor: '#333'

                        },
                    },
                }}
            >
                <div className='about_title'>

                    <div className='about_title_img'>
                        <img src={img10} alt="" />
                    </div>
                    <div className='about_title_right'>
                        <h1>{type === 'en' ? 'About The Met' : '关于大都会'} </h1>
                        <p>{type === 'en' ? `Tracing back centuries, this art exhibition showcases a rich tapestry of visual narratives, evolving from masters' strokes to contemporary innovations.` : '追溯几个世纪以来，这个艺术展展示了丰富的视觉叙事，从大师的笔触到当代的创新。'}</p>
                    </div>
                </div>
                <div className='artBox'>
                    <h1 className='about_h1'>{type === 'en' ? 'Artistic Style' : '艺术风格'} </h1>
                    <p>{type === 'en' ? `This exhilarating art exhibition is a vibrant tapestry of diverse artistic styles, each canvas a testament to the boundless creativity of its maker. From the meticulous brushstrokes of realism, capturing life's finest details with uncanny precision, to the bold and expressive forms of modernism, where colors and shapes collide in a symphony of visual emotion, the exhibition takes visitors on a thrilling journey. Abstract works invite contemplation, their ambiguous shapes and hues evoking a sense of wonder and infinite interpretation, while impressionist pieces capture fleeting moments of light and atmosphere, imbuing the gallery with a sense of timelessness. Each style stands as a unique language, conveying profound emotions and ideas, uniting viewers in a shared appreciation for the power of art.` : '这场令人振奋的艺术展览是一幅充满活力的挂毯，展示了各种艺术风格，每一幅画布都证明了其创作者的无限创造力。从现实主义的细致笔触，以惊人的精确度捕捉生活中最美好的细节，到现代主义大胆而富有表现力的形式，色彩和形状在视觉情感的交响乐中碰撞，展览将带领游客踏上一段激动人心的旅程。抽象作品令人沉思，其模糊的形状和色调唤起了一种惊奇感和无限的诠释，而印象派作品则捕捉到了转瞬即逝的光线和氛围，使画廊充满了永恒感。每种风格都是一种独特的语言，传达着深刻的情感和思想，将观众团结在一起，共同欣赏艺术的力量。'} </p>
                    <Button onClick={showModal} ghost >
                        {type === 'en' ? 'View statistics' : '查看统计信息'}
                    </Button>
                </div>

                <Modal
                    open={isModalOpen}
                    title={type === 'en' ? 'View statistics' : '查看统计信息'}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={850}
                    footer={[
                        <Button key="OK" onClick={handleCancel}>
                            {type === 'en' ? 'OK' : '确认'}
                        </Button>,


                    ]}
                >

                    <div style={{ display: type === 'en' ? 'block' : 'none' }}> <Chart options={options} Width={800} Height={500} /></div>
                    <div style={{ display: type === 'en' ? 'none' : 'block' }}> <Chart options={options2} Width={800} Height={500} /></div>
                </Modal>
            </ConfigProvider>

        </>
    );
}

export default App;

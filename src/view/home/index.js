import React from 'react';
import { Carousel, ConfigProvider, Card, Image } from 'antd';
import { useNavigate, } from 'react-router-dom'
import { useSelector } from "react-redux";
import { CalendarTwoTone } from '@ant-design/icons';
import './style.css'
import video from '../../assets/video/1.mp4'
import img1 from '../../assets/1.webp'
import img2 from '../../assets/2.webp'
import img3 from '../../assets/3.webp'
import img4 from '../../assets/4.webp'
import img5 from '../../assets/5.webp'
import img6 from '../../assets/6.webp'
import img7 from '../../assets/7.webp'
import img8 from '../../assets/8.webp'
import img9 from '../../assets/9.webp'
import img10 from '../../assets/10.webp'
import img11 from '../../assets/11.webp'
import img12 from '../../assets/12.webp'
import img13 from '../../assets/13.webp'
import img14 from '../../assets/14.webp'
import img15 from '../../assets/15.webp'
import img16 from '../../assets/16.webp'
import img17 from '../../assets/17.webp'
import img18 from '../../assets/18.webp'
import zhCN from 'antd/locale/zh_CN';
const { Meta } = Card;
const contentStyle = {
    height: '700px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const App = () => {


    const { type } = useSelector((state) => state)
    const navigate = useNavigate();
    const onRouter = () => {
        navigate(`/Date`);
    }
    return (
        <ConfigProvider
            locale={type === 'en' ? '' : zhCN}
            theme={{
                components: {
                    Carousel: {
                        arrowSize: 30,
                    },

                },
            }}
        >
            <Carousel autoplay arrows infinite={true}>
                <div>
                    <h3 style={contentStyle}>
                        <img src={img15} style={{ width: '100%', height: '100%' }} alt="" />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src={img16} style={{ width: '100%', height: '100%' }} alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src={img17} style={{ width: '100%', height: '100%' }} alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img src={img18} style={{ width: '100%', height: '100%' }} alt="" /></h3>
                </div>
            </Carousel>

            <Card
                hoverable
                style={{
                    width: '90%',
                    height: 400,
                    padding: 50,
                }}
                className='video_box'

            >
                <video className='video' src={video} controls></video>
                <div className='video_text'><Card
                    title={type === 'en' ? "Art Tour" : '艺术之旅'}
                    bordered={false}
                    style={{
                        width: '100%',
                        height: 300
                    }}
                >
                    <p>{type === 'en' ? `a captivating exhibition showcasing the vibrant creativity and diverse perspectives of today's art scene. This showcase brings together a selection of paintings, drawings, and mixed-media installations by renowned and emerging artists from around the globe. Each work is a testament to the artist's unique vision, exploring themes ranging from the abstract realm of emotions and dreams to the intricate details of everyday life. As visitors step into this vibrant gallery, they'll embark on a sensory journey, immersed in colors that dance on canvas, lines that tell stories, and textures that evoke a profound connection to the artistic process. "Vibrant Visions" promises to inspire, challenge, and delight art enthusiasts and casual observers alike, offering a window into the boundless imagination of the contemporary artistic mind.` : '一场引人入胜的展览，展示了当今艺术界充满活力的创造力和多样化的视角。这个展览汇集了来自世界各地的知名和新兴艺术家的精选绘画、素描和混合媒体装置。每一件作品都证明了艺术家独特的视野，探索了从抽象的情感和梦想领域到日常生活的复杂细节的主题。当参观者走进这个充满活力的画廊时，他们将开始一段感官之旅，沉浸在画布上舞动的色彩、讲述故事的线条和唤起与艺术过程深刻联系的纹理中。“充满活力的愿景”承诺激励、挑战和取悦艺术爱好者和普通观察者，为当代艺术头脑的无限想象力提供了一扇窗户。'}
                    </p>

                </Card>
                </div>
            </Card>

            <div className='Home_imgList'>
                <h1 className='Home_title'>{type === 'en' ? 'Now On View ' : '现在正在查看'}<span>{type === 'en' ? 'View all ' : '查看全部'} &gt; </span></h1>
                <div className='HomeImg'>
                    <Card
                        hoverable
                        style={{ width: 500, height: 408 }}
                        cover={<Image
                            width={'100%'}
                            height={277}
                            src={img1}
                        />}
                    >
                        <Meta title={type === 'en' ? 'The Harlem Renaissance and Transatlantic Modernism' : '哈莱姆文艺复兴与跨大西洋现代主义'} description={<div>
                            <p>{type === 'en' ? 'Through July 28 ' : '至7月28日'}</p>
                            <p>{type === 'en' ? 'The Met Fifth Avenue ' : '大都会第五大道'}</p>
                        </div>} />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 500, height: 408 }}
                        cover={<Image
                            width={'100%'}
                            height={277}
                            src={img4}
                        />}
                    >
                        <Meta title={type === 'en' ? 'Sleeping Beauties: Reawakening Fashion' : '睡美人：重新唤醒时尚'} description={<div>
                            <p>{type === 'en' ? 'Through September 2 ' : '至9月2日'}</p>
                            <p>{type === 'en' ? 'The Met Fifth Avenue' : '大都会第五大道'}</p>

                        </div>} />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 500, height: 408 }}
                        cover={<Image
                            width={'100%'}
                            height={277}
                            src={img5}
                        />}
                    >
                        <Meta title={type === 'en' ? 'Collecting Inspiration: Edward C. Moore at Tiffany & Co.' : '收集灵感：蒂芙尼公司的爱德华·C·摩尔”'} description={<div>

                            <p>{type === 'en' ? 'Through October 20' : '至10月20日'}</p>
                            <p>{type === 'en' ? 'The Met Fifth Avenue' : '大都会第五大道'}</p>
                        </div>} />
                    </Card>


                </div>

            </div>
            <div className='Home_Locations'>
                <h1 className='Home_title'>{type === 'en' ? 'Locations and Hours' : '地点和时间'} </h1>
                <div className='LocationsHours'>
                    <Card
                        hoverable
                        style={{ width: '49%' }}

                        cover={<Image
                            width={'100%'}
                            height={425}
                            src={img2}
                        />}
                    >
                        <Meta onClick={onRouter} style={{ textAlign: 'left', width: '100%' }} title={<><h1>{type === 'en' ? 'The Met Fifth Avenue' : '大都会第五大道'}</h1></>} description={<div className='Home_mate_style'>
                            <p>{type === 'en' ? 'Over 5,000 years of art from around the world.' : '来自世界各地的5000多年艺术。'}</p>
                            <p style={{ color: '#a6192e' }}><CalendarTwoTone twoToneColor="#a6192e" />{type === 'en' ? 'Next open at 10 am' : '下一次开放时间为上午10点'}  </p>
                            <p><span>{type === 'en' ? 'Hours' : '小时'}: </span>{type === 'en' ? 'Sunday–Tuesday and Thursday: 10 am–5 pm' : '周日至周二和周四：上午10点至下午5点'}
                            </p>
                            <p><span>{type === 'en' ? 'Extended Hours' : '延长的时间'}: </span>{type === 'en' ? 'Friday and Saturday: 10 am–9 pm' : '周五和周六：上午10点至晚上9点'}
                            </p>
                            <p><span>{type === 'en' ? 'Closed' : '关闭'}: </span>{type === 'en' ? 'Wednesday' : '星期三'}
                            </p>


                            <p>{type === 'en' ? 'Closed Thanksgiving Day, December 25, January 1, and the first Monday in May.' : '感恩节、12月25日、1月1日和5月的第一个星期一休息。'}</p>

                        </div>} />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: '49%' }}
                        cover={<Image
                            width={'100%'}
                            height={425}
                            src={img6}
                        />}

                    >
                        <Meta onClick={onRouter} style={{ textAlign: 'left', width: '100%' }} title={<><h1>{type === 'en' ? 'The Met Cloisters' : '大都会修道院'}</h1></>} description={<div className='Home_mate_style'>
                            <p>{type === 'en' ? 'Art, architecture, and gardens of medieval Europe.' : '中世纪欧洲的艺术、建筑和花园。'}</p>
                            <p style={{ color: '#a6192e' }}><CalendarTwoTone twoToneColor="#a6192e" /> {type === 'en' ? 'Next open at 10 am' : '下一次开放时间为上午10点'} </p>
                            <p><span>{type === 'en' ? 'Hours' : '小时'}Hours: </span>{type === 'en' ? 'Thursday–Tuesday: 10 am–5 pm' : '周四至周二：上午10点至下午5点'}
                            </p>

                            <p><span>{type === 'en' ? 'Closed' : '关闭'}: </span>{type === 'en' ? 'Wednesday' : '星期三'}
                            </p>
                            <p>{type === 'en' ? 'Closed Thanksgiving Day, December 25, January 1.' : '感恩节休息日，12月25日，1月1日。'}</p>

                        </div>} />
                    </Card>
                </div>
            </div>
            <div className='Home_Contemporary '>
                <div className='Contemporary_img'>
                    <img src={img3} alt="" />
                </div>
                <div className='Contemporary_Text'>
                    <h1>
                        {type === 'en' ? 'An Exciting Milestone for the Redesign of The Met’s Galleries for Modern and Contemporary Art' : '大都会现代和当代艺术画廊重新设计的激动人心的里程碑'}
                    </h1>
                    <p>{type === 'en' ? 'Director and CEO Max Hollein celebrates an important moment as the Museum moves forward with renovation plans for the new Oscar L. and H.M. Agnes Hsu-Tang Wing with architect Frida Escobedo, the first woman to design a wing in the Museum’s 154-year history.' : '博物馆馆长兼首席执行官Max Hollein与建筑师Frida Escobedo共同庆祝了一个重要时刻，博物馆正在推进新的Oscar L.和H.M.Agnes Hsu Tang Wing的翻修计划，Frida Escebedo是博物馆154年历史上第一位设计翼楼的女性。'}</p>
                    <span>{type === 'en' ? 'Read more' : '阅读更多'}</span>
                </div>
            </div>
            <div className='Home_Contemporary '>

                <div className='Contemporary_Text'>
                    <h1>
                        {type === 'en' ? 'Immaterial: Stone' : '非材料：石头'}
                    </h1>
                    <p>{type === 'en' ? 'What happens when the unbreakable shatters? Find out in this new episode of The Met’s podcast.' : '当坚不可摧的碎片破碎时会发生什么？在《大都会报》播客的这一期中了解更多。'}</p>
                    <span>{type === 'en' ? 'Listen Now' : '听我说'}</span>
                </div>
                <div className='Contemporary_img'>
                    <img src={img7} alt="" />
                </div>
            </div>
            <div className='Home_Contemporary '>
                <div className='Contemporary_img'>
                    <img src={img8} alt="" />
                </div>
                <div className='Contemporary_Text'>
                    <h1>
                        {type === 'en' ? 'Membership at The Met' : 'The Met会员'}
                    </h1>
                    <p>{type === 'en' ? 'Met Members enjoy a rich variety of specialized benefits—from free guest passes to Member Preview Days for new exhibitions—all while supporting our mission.' : 'Met会员享受各种各样的特殊福利——从免费访客通行证到新展览的会员预览日——同时支持我们的使命。'}</p>
                    <span>{type === 'en' ? 'See the benefits' : '查看好处'}</span>
                </div>
            </div>
            <div className='Home_Contemporary '>

                <div className='Contemporary_Text'>
                    <h1>
                        {type === 'en' ? ' Summer at The Met Store' : 'Met商店的夏天'}
                    </h1>
                    <p>{type === 'en' ? 'Discover fresh finds for the season ahead, including jewelry, apparel, home decor, and more.' : '发现未来一季的新发现，包括珠宝、服装、家居装饰等。'}</p>
                    <span>{type === 'en' ? 'Shop now' : '立即购物'}</span>
                </div>
                <div className='Contemporary_img'>
                    <img src={img9} alt="" />
                </div>
            </div>
            <div className='Home_Explore'>
                <h1 className='Home_title'>{type === 'en' ? 'More to Explore' : '更多的探索'} </h1>
                <div className='ExploreImg'>
                    <div className='ExploreImg_list'>
                        <img src={img10} alt="" />
                        <span>{type === 'en' ? 'Perspectives' : '视角'}</span>
                    </div>
                    <div className='ExploreImg_list'>
                        <img src={img11} alt="" />
                        <span>{type === 'en' ? 'Audio Guides' : '音频指南'}</span>
                    </div>
                    <div className='ExploreImg_list'>
                        <img src={img12} alt="" />
                        <span>{type === 'en' ? 'Collection Areas' : '收集区'}</span>
                    </div>
                    <div className='ExploreImg_list'>
                        <img src={img13} alt="" />
                        <span>{type === 'en' ? 'Learning Resources' : '学习资源'}</span>
                    </div>
                    <div className='ExploreImg_list'>
                        <img src={img14} alt="" />
                        <span>{type === 'en' ? 'Group Tours' : '团体旅游'}</span>
                    </div>
                </div>
            </div>
        </ConfigProvider>

    );
}


export default App;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css'
import { Image, Breadcrumb, ConfigProvider, Button, Collapse, Input, message } from 'antd';
import dayjs from 'dayjs'
import img20 from '../../assets/20.jpg'
import img23 from '../../assets/23.jpg'
import {
  PlusOutlined, MinusOutlined, LikeOutlined
} from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import zhCN from 'antd/locale/zh_CN';
import { setshopCarAction } from '../../store/action'
const { TextArea } = Input;
const App = () => {
  const { type, list } = useSelector((state) => state)
  const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      {type === 'en' ? `This captivating illustration depicts a woman enveloped in a cozy white blanket, indulging in a moment of tranquility as she savors a cup of coffee. Her golden hair, soft and radiant, frames her face, while her eyes are closed in a state of blissful repose. In her hand, she holds a brown mug, poised to take a sip, her fingers wrapped around it for warmth. The backdrop, adorned with lush green plants, likely part of an indoor décor, complements the cozy ambiance. The entire scene exudes a sense of warmth and relaxation, inviting the viewer to share in the woman's serene moment.` : '这幅迷人的插图描绘了一个被舒适的白色毯子裹着的女人，在享受一杯咖啡的同时，沉浸在宁静的时刻。她金色的头发，柔软而容光焕发，衬托着她的脸，而她的眼睛则闭着，处于幸福的休息状态。她手里拿着一个棕色的杯子，准备抿一口，手指裹着杯子取暖。背景装饰着郁郁葱葱的绿色植物，可能是室内装饰的一部分，与舒适的氛围相得益彰。整个场景散发着一种温暖和放松的感觉，邀请观众分享这位女性的宁静时刻。'}
    </p>
  );
  const items = [
    {
      key: '1',
      label: <h2 style={{ textAlign: 'left' }}> {type === 'en' ? 'Description' : '描述'}  </h2>,
      children: text,
    },

  ];
  const tdstyle = {
    width: '50%',
    textAlign: 'left'

  }
  const tdstyle2 = {
    width: '50%',
    textAlign: 'right'

  }
  const text2 = (
    <div >
      <table border="0" textAlign='left'>
        <tbody>
          <tr>
            <td style={tdstyle}>{type === 'en' ? 'Standard flat-rate shipping' : '标准统一运费'}   ({type === 'en' ? '3–8 days' : '3–8天'})</td>
            <td style={tdstyle2}>$12.95</td>
          </tr>
          <tr>
            <td style={tdstyle}>{type === 'en' ? 'Expedited US shipping ' : '美国加急发货'} ({type === 'en' ? '2 days' : '2天'} )</td>
            <td style={tdstyle2}>  {type === 'en' ? '$13.95 extra' : '额外的 $13.95'} </td>
          </tr>
          <tr>
            <td style={tdstyle}>{type === 'en' ? 'Standard flat-rate shipping' : '标准统一运费'} Overnight shipping</td>
            <td style={tdstyle2}> {type === 'en' ? '$22.95 extra' : '额外的 $22.95'} </td>
          </tr>
        </tbody></table>
      <p>{type === 'en' ? 'The above rates apply to orders shipped within the contiguous 48 US states. For rates to Alaska, Hawaii, Canada, and other countries, please see our Shipping  Handling page.' : '上述费率适用于在美国48个州内发货的订单。有关阿拉斯加、夏威夷、加拿大和其他国家的运费，请参阅我们的运输处理页面。'} </p>
      <p>{type === 'en' ? 'If for any reason you are not fully satisfied with your order, you may return the merchandise within 90 days from the date of purchase. See our Returns page.' : '如果出于任何原因，您对订单不完全满意，您可以在购买之日起90天内退货。请参阅我们的退货页面。'} </p>
    </div>
  );
  const items2 = [
    {
      key: '1',
      label: <h2 style={{ textAlign: 'left' }}>{type === 'en' ? 'Shipping & Returns' : '配送与退货'}  </h2>,
      children: text2,
    },

  ];
  const [value, setValue] = useState('')
  const [arr, setarr] = useState([
    {
      id: 1,
      name: 'Tori',
      img: img23,
      text: type === 'en' ? `"This art exhibition is a captivating journey through the artist's vivid imagination, where each piece tells a unique story that lingers in the viewer's mind. The intricate brushwork and harmonious use of colors create a mesmerizing visual symphony, inviting contemplation and admiration. A must-see for art enthusiasts seeking to be inspired."` : `“这次艺术展是艺术家生动想象力的一次迷人之旅，每一件作品都告诉了一个萦绕在观众脑海中的独特故事。复杂的笔法和色彩的和谐运用创造了一首令人着迷的视觉交响乐，引人沉思和钦佩。这是寻求灵感的艺术爱好者的必去之地。”`,
      time: '5/7/2024'

    }
  ])

  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const ClickSubmit = () => {
    let res = dayjs().format('DD/MM/YYYY')
    let newArr = [...arr]
    let obj = {
      id: newArr[newArr.length - 1].id + 1,
      name: 'Me',
      img: img23,
      text: value,
      time: res
    }
    if (!value) {
      messageApi.open({
        type: 'warning',
        content: type === 'en' ? 'Published Please enter the content!' : '请输入内容!',
      });
      return
    }
    newArr.unshift(obj)
    console.log(newArr);
    setarr(newArr)
    console.log(res);

    messageApi.open({
      type: 'success',
      content: type === 'en' ? 'Published successfully！' : '发表成功！',
    });
    setValue('')
  }
  const setTextArea = (e) => {
    console.log(e.target.value);
    setValue(e.target.value)
  }
  const addCar = () => {
    let obj = {
      name: 'Me Time Moment',
      name2: '我时刻',
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      Author: 'Raissa Oltmanns',
      price: 29.9
    }
    dispatch(setshopCarAction(obj))
    messageApi.open({
      type: 'success',
      content: type === 'en' ? 'Added successfully!' : '添加成功！',
    });
  }
  return <div className='Details_box'>
    <ConfigProvider
      locale={type === 'en' ? '' : zhCN}
      theme={{
        components: {
          Button: {
            defaultColor: 'rgb(166, 25, 46)',
            defaultBorderColor: 'rgb(166, 25, 46)',
            defaultHoverColor: '#fff',
            defaultHoverBorderColor: 'rgb(166, 25, 46)',
            defaultHoverBg: 'rgb(166, 25, 46)',


          },
          Input: {
            activeBorderColor: '#333',
            hoverBorderColor: '#333'
          }
        },

      }}
    >
      {contextHolder}
      <Breadcrumb
        items={[
          {
            title: <Link to={'/Exhibition'}>{type === 'en' ? 'Exhibition' : '展览'}</Link>,

          },
          {
            title: type === 'en' ? 'ProductDetails' : '产品详细信息',

          }
        ]}
      />

      <div className='Details_top'>
        <div className='Details_img'>

          <Image
            width={350}
            // height={500}
            src={img20}
          />
        </div>
        <div className='Details_text'>
          <h1>{type === 'en' ? 'Me Time Moment' : '我时刻'}</h1>
          <p>{type === 'en' ? 'Painting works ID' : '绘画作品ID'}: <span>1 </span></p>

          <p> {type === 'en' ? 'Painting type' : '涂装类型'}：<span>{type === 'en' ? 'Portrait Painting' : '肖像画'}</span></p>
          <p>{type === 'en' ? 'Author' : '作者'}:  <span>{type === 'en' ? 'Raissa Oltmanns' : 'Raissa Oltmanns'}</span></p>
          <p>{type === 'en' ? 'price' : '价格'}:  <span>$29.9</span></p>
          <div style={{ display: 'flex', justifyContent: 'start' }}>
            <Button style={{ margin: '30px 0' }} onClick={addCar} >
              {type === 'en' ? 'Add to cart' : '添加到购物车'}
            </Button>
          </div>
          <div className='line'></div>
          <Collapse style={{ width: '80%' }} items={items} bordered={false} expandIconPosition={'end'} ghost
            expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}
          />
          <Collapse style={{ width: '80%' }} items={items2} bordered={false} expandIconPosition={'end'} ghost
            expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}
          />

        </div>
      </div>

      <div className='evaluate'>
        <div className='evaluate_title'>
          {type === 'en' ? 'User comment' : '用户评论'}
        </div>
        <ul>
          {
            arr.map(item => {
              return <li key={item.id}>
                <div className='evaluateList_img'>
                  <img src={item.img} />
                </div>

                <div className='evaluateList_text'>
                  <h2>{item.name}  <span>{item.time}</span></h2>
                  <p>{item.text}</p>
                  <div className='like'><LikeOutlined /> <span>10</span> </div>
                </div>
              </li>
            })
          }
        </ul>

        <div className='textArea_box'>
          <TextArea
            showCount
            maxLength={100}
            value={value}
            onChange={setTextArea}
            placeholder={type === 'en' ? "Please enter the content..." : '请输入内容...'}
            style={{ height: 120, resize: 'none' }}
          />
          <Button style={{ margin: '30px 0', width: 80 }} onClick={ClickSubmit}  >
            {type === 'en' ? 'Submit' : '提交'}
          </Button>
        </div>
      </div>
    </ConfigProvider>
  </div>

};
export default App;


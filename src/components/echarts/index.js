import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function Chart({ options, Width, Height }) {
    const chartRef = useRef(null);
    let chartInstance = null;


    // 定义渲染函数
    function renderChart() {
        console.log(123);
        console.log(options);
        try {

            const renderedInstance = echarts.getInstanceByDom(chartRef.current);
            if (renderedInstance) {
                chartInstance = renderedInstance;
            } else {
                chartInstance = echarts.init(chartRef.current);
            }
            chartInstance.setOption(options);
        } catch (error) {
            console.error("error", error.message);
            chartInstance && chartInstance.dispose();
        }
    }





    useEffect(() => {
        renderChart();

        return () => {

            chartInstance && chartInstance.dispose();
        };
    }, []);



    return (
        <div>

            <div style={{ height: Height, width: Width }} ref={chartRef} />
        </div>
    );
}

export default Chart;

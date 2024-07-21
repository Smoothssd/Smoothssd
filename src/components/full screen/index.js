// full.tsx
import React, { memo, useEffect, useState } from "react";
import { Tooltip, Button } from "antd";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import './index.css'
function FullScreenHeaderButton() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const toggleFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };
    const { type } = useSelector((state) => state)
    useEffect(() => {

        const handleChangeIsFullScreen = () => {
            console.log(document.fullscreenElement);
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleChangeIsFullScreen);
        return () => {

            document.removeEventListener("fullscreenchange", handleChangeIsFullScreen);
        };
    }, []);
    return (
        <Tooltip placement="bottom"
            title={isFullscreen ? (type === 'en' ? 'Exit Full Screen' : "退出全屏") : (type === 'en' ? 'Enter full screen mode' : '进入全屏')
            }
            arrow >
            <Button type="text"
                className="screen"
                icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                onClick={toggleFullscreen} />
        </Tooltip >
    );
}

export default memo(FullScreenHeaderButton);
/**
 * title: 自定义操作栏元素组件
 * desc:  基础示例 单击图片 将等比拉伸至可能的屏幕最大尺寸, 无菜单
 */

import React, { useState } from 'react';
import { ImagePreview } from '../ImagePreview';
import './demo.less';

const sampleImage = 'https://cdn.pixabay.com/photo/2020/03/08/11/21/british-4912211_960_720.jpg';

const ImagePreviewDemo = () => {
    const [show, setShow] = useState<boolean>(false);

    const close = () => {
        setShow(false);
    };

    const toolbar = (
        <div className="highly-styled-toolbar">
            <button data-gear-image-method="zoom-in" className="highly-styled-button">
                zoom
            </button>
            <button data-gear-image-method="rotate" className="highly-styled-button">
                rotate
            </button>
            <button data-gear-image-method="free-rotate" className="highly-styled-button">
                try
            </button>
            <button data-gear-image-method="reset" className="highly-styled-button">
                reset
            </button>
        </div>
    );

    return (
        <div className="g-table">
            <img alt="图片" src={sampleImage} className="g-sample-image" onClick={() => setShow(true)} />
            <ImagePreview url={sampleImage} visible={show} onClose={close} operatorBar={toolbar} />
        </div>
    );
};

export default () => {
    return <ImagePreviewDemo />;
};
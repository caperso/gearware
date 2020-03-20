import React from 'react';
import './index.less';

export const WebFrame = (props: { url: string }) => {
    const { url = '' } = props;
    return <iframe src={url} className="g-frame" title='placeholder'></iframe>;
};
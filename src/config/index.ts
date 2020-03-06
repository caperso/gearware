// components
import { CodePaperDemo } from 'components/code-paper/demo';
import { ImagePreviewDemo } from 'components/image-preview/demo';
import { LevelsDemo } from 'components/levels/demo';
import { LoadingDemo } from 'components/loading/demo';
import Component from 'pages/Component';
import Home from '../pages/Home';

export interface IRouteSubs {
    key: string;
    title: string;
    path: string;
    icon?: string;
    exact?: boolean;
    component: React.ComponentType<any>;
}

export interface IRouteConfigs {
    key: string;
    title: string;
    path: string;
    icon?: string;
    exact?: boolean;
    component: React.ComponentType<any>;
    inMenu?: boolean;
    hide?: boolean;
    routes?: Array<IRouteSubs>;
}

export const routeConfig: IRouteConfigs[] = [
    {
        key: 'home',
        icon: 'home',
        title: '首页',
        exact: true,
        component: Home,
        inMenu: true,
        path: '/',
    },
    {
        key: 'comp',
        icon: 'gold',
        title: '组件',
        inMenu: true,
        component: Component,
        path: '/comp',
        routes: [
            {
                key: 'image-preview',
                title: '图片预览 · ImagePreview',
                component: ImagePreviewDemo,
                path: '/comp/image-preview',
            },
            {
                key: 'levels',
                title: '阶级导航 · Levels',
                component: LevelsDemo,
                path: '/comp/levels',
            },
            {
                key: 'code-paper',
                title: '代码块 · CodePaper',
                component: CodePaperDemo,
                path: '/comp/code-paper',
            },
            {
                key: 'loading',
                title: '加载 · Loading',
                component: LoadingDemo,
                path: '/comp/loading',
            },
        ],
    },
];
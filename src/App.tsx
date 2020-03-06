import { CheckCircleTwoTone, SettingTwoTone } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import { IRouteConfigs, routeConfig } from './config/index';
import { NotFound } from './pages/NotFound';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

/**
 * returns nested routes
 * @param {IRouteConfigs} route
 * @returns
 */
export function RouteWithSubRoutes(route: IRouteConfigs) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);

    const menuTitle = (routeItem: IRouteConfigs) => (
        <span>
            <SettingTwoTone />
            {/* {routeItem.icon && <SmileTwoTone />} */}
            <span>{routeItem.title}</span>
        </span>
    );

    const renderItems = () => {
        return routeConfig.map(routeItem => {
            return routeItem.routes ? (
                <SubMenu key={routeItem.key} title={menuTitle(routeItem)}>
                    {routeItem.routes.map(subItem => (
                        <Menu.Item key={subItem.key}>
                            <NavLink to={subItem.path}>
                                {subItem.icon && <CheckCircleTwoTone />}
                                <span>{subItem.title}</span>
                            </NavLink>
                        </Menu.Item>
                    ))}
                </SubMenu>
            ) : routeItem.component ? (
                <Menu.Item key={routeItem.key}>
                    <NavLink to={routeItem.path}>
                        {routeItem.icon && <CheckCircleTwoTone />}
                        <span>{routeItem.title}</span>
                    </NavLink>
                </Menu.Item>
            ) : null;
        });
    };

    return (
        <div className="App">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']} defaultOpenKeys={['comp']}>
                        {renderItems()}
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <CheckCircleTwoTone className="trigger" onClick={toggle} />
                    </Header>
                    <Content className="App-content">
                        <Switch>
                            123
                            {routeConfig.map(route => (
                                <RouteWithSubRoutes key={route.key} {...route} />
                            ))}
                            <Route component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default withRouter(App);

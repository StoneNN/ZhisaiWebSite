import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';
import 'antd/dist/antd.css';
import {connect} from 'dva';


const SubMenu = Menu.SubMenu;


class userInfoBlock extends Component{
    
    state = {
        collapsed: false,
    }
    
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render(){
        return(
            <div style={{ width: 200 , marginTop:'10px'}}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom:5, marginTop:8, marginLeft:5 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="userI">
                        <Icon type="user" />
                        <span>个人中心</span>
                    </Menu.Item>

                    <SubMenu key="userE" title={<span><Icon type="edit" /><span>个人设置</span></span>}>
                        <Menu.Item key="baseE">基本设置</Menu.Item>
                        <Menu.Item key="pedE">密码修改</Menu.Item>
                        <Menu.Item key="contactE">联系方式</Menu.Item>
                        <Menu.Item key="idE">身份认证</Menu.Item>
                        <Menu.Item key="phoneE">手机号修改</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default userInfoBlock;
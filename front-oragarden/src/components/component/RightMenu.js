import React from 'react';
import {Menu, Space} from 'antd';



function RightMenu() {
    return (
        <div>
            <Menu mode="horizontal">
                <Space size={'small'}>

                <Menu.Item key="signin">
                    <a href="/">SignIn</a>
                </Menu.Item>
                <Menu.Item key="signup">
                    <a href="/">| SignUp |</a>
                </Menu.Item>
                </Space>
            </Menu>
        </div>
    )
}

export default RightMenu

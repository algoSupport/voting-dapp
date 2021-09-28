import React from "react";
import { login, logout } from "../../utils";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default class SiderBar extends React.Component {
  handleClick = (e) => {
    console.log("click ", e);
  };

  render() {
    return (
      <>
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Voting Info">
            <Menu.Item key="1">Vote Now</Menu.Item>
            <Menu.Item key="2">Current News</Menu.Item>
          </SubMenu>
          <Menu.Item
            onClick={window.address === "" ? login : logout}
            icon={<AppstoreOutlined />}
            key="5"
          >
            {window.address === "" ? "login" : window.address}
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />} key="9">
            New Poll
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

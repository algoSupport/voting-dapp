import React from "react";
import { login, logout } from "../../utils";
import { Link } from "react-router-dom";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MoneyCollectOutlined,
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
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Voting Info">
            <Menu.Item key="1">
              <Link to="/">Vote Now</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/currentNews">Current News</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            onClick={window.accountId === "" ? login : logout}
            icon={<AppstoreOutlined />}
            key="5"
          >
            {window.accountId === "" ? "Login" : window.accountId}
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />} key="6">
            <Link to="/new-poll">New Poll</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} key="7">
            <Link to="/donation">Donate Now</Link>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

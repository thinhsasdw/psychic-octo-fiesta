import React from "react";
import { Row, Col } from "antd";
import "./main.css";
import Search from "antd/es/transfer/search";
import logo from "../../images/logo1.png";
import baner from " ../../images/banner.jpg";
const HeadComponents = () => {
  return (
    <div>
      <img className="baner" src={baner} alt="h1" />
      <Row className=" row">
        <Col span={6}>
          <img className="logo" src={logo} alt="h1" />
        </Col>
        <Col span={12}>
          <div className="search">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
            />
          </div>
        </Col>
        <Col span={6}>col-8</Col>
      </Row>
    </div>
  );
};
export default HeadComponents;


import { Card } from 'antd';
import React, { Component } from 'react'


const { Meta } = Card;
const NewsItem = ({urlToImage,description,title}) => {
    return ( 
        <Card
    hoverable
    style={{ width: 240, height: 360, marginBottom:"30px" }}
    cover={<img alt="images" src={urlToImage} />}
  >
    <Meta title={title} description={description.slice(0,120)} />
  </Card>
 
     );
}
 
export default NewsItem;
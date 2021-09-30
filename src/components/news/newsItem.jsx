
import { Card } from 'antd';
import React, { Component } from 'react'


const { Meta } = Card;
const NewsItem = ({urlToImage,description,title}) => {
    return ( 
        <Card
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="images" src={urlToImage} />}
  >
    <Meta title={title} description={description} />
  </Card>
 
     );
}
 
export default NewsItem;
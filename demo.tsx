import React from 'react';
import './index.css';
import { Drawer, Card, Row, Col, Button, List } from 'antd';

let data = [
  {
    title: '2345678',
    value: '',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

import Barcode from 'react-barcode';
import TextArea from 'antd/es/input/TextArea';

export const BarcodeData = () => {
  // let item = { key: k, value: i, barcode: <Barcode size={50} value={i} /> };
  return <Barcode size={50} value={value} />;
};

const AppD: React.FC = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item key={item.key}>
        <Barcode value={item.title} width={1} height={50} />
      </List.Item>
    )}
  />
);

const App: React.FC = (data: any[]) => {
  // .split('\n').map((i: any,k:any) => BarcodeData(i,k))

  return (
    <>
      <AppD />
      <Drawer title={'Config'} footer={<>Save</>}>
        Config, size, format...
      </Drawer>
    </>
  );
};

export default App;

import React from 'react';
import { Line } from '@ant-design/charts';

const Option2 = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    title: {
      visible: true,
      text: 'Line Chart',
    },
    xField: 'year',
    yField: 'value',
    point: {
      visible: true,
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };
  return (
    <div>
      <h2>I'm a AntD Component</h2>
      <p>It's important to know how to use my components...</p>
      {/*AntD Component*/}
      <Line {...config} />
    </div>
  );
};
export default Option2;
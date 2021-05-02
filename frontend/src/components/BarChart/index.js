import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Comercial',
    uv: 4000,
    'Quantidade de cadastros': 4100,
    amt: 2400,
  },
  {
    name: 'Residencial',
    uv: 3000,
    'Quantidade de cadastros': 1398,
    amt: 2210,
  },
  {
    name: 'Rural',
    uv: 2000,
    'Quantidade de cadastros': 7200,
    amt: 2290,
  },
  {
    name: 'Casa de praia',
    uv: 2000,
    'Quantidade de cadastros': 6200,
    amt: 2290,
  }
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

  render() {
    return (
      <ResponsiveContainer width="50%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barSize={100}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 75, right: 75 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Quantidade de cadastros" fill="#0088FE" background={{ fill: '#dcdde1' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

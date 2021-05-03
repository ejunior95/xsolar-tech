import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Comercial',
    'Quantidade de cadastros': 10,
  },
  {
    name: 'Residencial',
    'Quantidade de cadastros': 22,
  },
  {
    name: 'Rural',
    'Quantidade de cadastros': 7,
  },
  {
    name: 'Casa de praia',
    'Quantidade de cadastros': 3,
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

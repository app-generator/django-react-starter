import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function Chart () {
  const COUNTRIES_COUNT = JSON.parse(document.getElementById('country_count').textContent);
  
  function colors () {
    const hex = "789ABCDEF";
    let color = "";
    for (color; color.length < 6; )
    color = color + hex[Math.floor(Math.random() * hex.length)];
    return '#' + color;
  }
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontWeight="800">
        {`${COUNTRIES_COUNT[index].country}\t${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{height:400}}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={COUNTRIES_COUNT}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="count"
          >
            {COUNTRIES_COUNT.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors()} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
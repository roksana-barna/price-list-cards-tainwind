import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashBoard = () => {
    let students = [
        {
          id: 1,
          name: "Alice",
          physics: 80,
          chemistry: 75,
          math: 90
        },
        {
          id: 2,
          name: "Bob",
          physics: 70,
          chemistry: 85,
          math: 80
        },
        {
          id: 3,
          name: "Charlie",
          physics: 90,
          chemistry: 80,
          math: 70
        },
        {
          id: 4,
          name: "David",
          physics: 75,
          chemistry: 90,
          math: 85
        },
        {
          id: 5,
          name: "Emily",
          physics: 85,
          chemistry: 70,
          math: 80
        },
        {
          id: 6,
          name: "Frank",
          physics: 90,
          chemistry: 85,
          math: 75
        },
        {
          id: 7,
          name: "Grace",
          physics: 80,
          chemistry: 90,
          math: 85
        },
        {
          id: 8,
          name: "Henry",
          physics: 70,
          chemistry: 80,
          math: 90
        },
        {
          id: 9,
          name: "Isabelle",
          physics: 85,
          chemistry: 75,
          math: 90
        },
        {
          id: 10,
          name: "Jack",
          physics: 90,
          chemistry: 70,
          math: 85
        },
        {
          id: 11,
          name: "Katie",
          physics: 80,
          chemistry: 85,
          math: 75
        },
        {
          id: 12,
          name: "Liam",
          physics: 75,
          chemistry: 90,
          math: 80
        }
      ];
      
    return (
        <div>
            <LineChart
            width={500}
            height={300}
            data={students}
            
            >
                <Line dataKey="physics"></Line>
                <Line stroke='#8884d8' dataKey="math"></Line>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
            
        </div>
    );
};

export default DashBoard;
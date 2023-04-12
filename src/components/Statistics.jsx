import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const Statistics = () => {
    
    const data = [
        {
          name: "Assignment 1",
          marks: 60
        },
        {
          name: "Assignment 2",
          marks: 60
        },
        {
          name: "Assignment 3",
          marks: 60
        },
        {
          name: "Assignment 4",
          marks: 60
        },
        {
          name: "Assignment 5",
          marks: 56
        },
        {
          name: "Assignment 7",
          marks: 50
        },
        {
          name: "Assignment 8",
          marks: 58
        },
        
      ];

    return (
        <div className='w-[80%] mx-auto'>
        <AreaChart
                width={1100}
                height={400}
                data={data}
                margin={{
                top: 50, right: 30, left: 0, bottom: 0
                }}>

            <CartesianGrid strokeDasharray="3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="marks" stroke="#00008B" fill="#8884d8" />
        </AreaChart>
        </div>

    );
};

export default Statistics;

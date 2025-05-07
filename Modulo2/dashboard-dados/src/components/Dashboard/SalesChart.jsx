import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Dados de exemplo
const data = [
  { month: 'Jan', vendas: 4000, custos: 2400 },
  { month: 'Fev', vendas: 3000, custos: 1398 },
  { month: 'Mar', vendas: 2000, custos: 9800 },
  { month: 'Abr', vendas: 2780, custos: 3908 },
  { month: 'Mai', vendas: 1890, custos: 4800 },
  { month: 'Jun', vendas: 2390, custos: 3800 },
  { month: 'Jul', vendas: 3490, custos: 4300 },
];

const SalesChart = () => {
  return (
    <Paper
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Vendas vs. Custos
      </Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="vendas"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="custos" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default SalesChart;
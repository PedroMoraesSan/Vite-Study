import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import StatCard from '../components/Dashboard/StatCard';
import SalesChart from '../components/Dashboard/SalesChart';
import RecentTransactions from '../components/Dashboard/RecentTransactions';

// Ícones
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      {/* Cards estatísticos */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Vendas Mensais" 
            value="R$ 42.500" 
            icon={<AttachMoneyIcon />} 
            color="#4caf50"
            percentChange={12.5}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Novos Pedidos" 
            value="356" 
            icon={<ShoppingCartIcon />} 
            color="#2196f3"
            percentChange={-2.7}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Novos Clientes" 
            value="138" 
            icon={<PeopleIcon />} 
            color="#ff9800"
            percentChange={8.1}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Taxa de Conversão" 
            value="3.42%" 
            icon={<TrendingUpIcon />} 
            color="#9c27b0"
            percentChange={1.2}
          />
        </Grid>
      </Grid>
      
      {/* Gráfico principal */}
      <Box mt={4}>
        <SalesChart />
      </Box>
      
      {/* Transações recentes */}
      <Box mt={4}>
        <RecentTransactions />
      </Box>
    </Box>
  );
};

export default Dashboard;
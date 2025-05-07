import React from 'react';
import { Paper, Typography, Box, Avatar } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const StatCard = ({ title, value, icon, color, percentChange }) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 140,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography color="text.secondary" variant="body2">
            {title}
          </Typography>
          <Typography variant="h4" component="div">
            {value}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            {percentChange >= 0 ? (
              <TrendingUpIcon fontSize="small" sx={{ color: 'success.main' }} />
            ) : (
              <TrendingDownIcon fontSize="small" sx={{ color: 'error.main' }} />
            )}
            <Typography
              variant="body2"
              sx={{
                ml: 0.5,
                color: percentChange >= 0 ? 'success.main' : 'error.main',
              }}
            >
              {Math.abs(percentChange)}%
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              desde o último mês
            </Typography>
          </Box>
        </Box>
        <Avatar
          sx={{
            bgcolor: color,
            height: 56,
            width: 56,
          }}
        >
          {icon}
        </Avatar>
      </Box>
    </Paper>
  );
};

export default StatCard;
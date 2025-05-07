import React from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';

// Dados de exemplo
const transactions = [
  {
    id: 1,
    customer: 'João Silva',
    date: '15 Maio, 2025',
    amount: 'R$ 145,80',
    status: 'Completo',
  },
  {
    id: 2,
    customer: 'Maria Oliveira',
    date: '15 Maio, 2025',
    amount: 'R$ 320,50',
    status: 'Pendente',
  },
  {
    id: 3,
    customer: 'Carlos Santos',
    date: '14 Maio, 2025',
    amount: 'R$ 89,90',
    status: 'Completo',
  },
  {
    id: 4,
    customer: 'Ana Lima',
    date: '14 Maio, 2025',
    amount: 'R$ 212,30',
    status: 'Cancelado',
  },
  {
    id: 5,
    customer: 'Roberto Pereira',
    date: '13 Maio, 2025',
    amount: 'R$ 176,25',
    status: 'Completo',
  },
];

// Função para determinar a cor do status
const getStatusColor = (status) => {
  switch (status) {
    case 'Completo':
      return 'success';
    case 'Pendente':
      return 'warning';
    case 'Cancelado':
      return 'error';
    default:
      return 'default';
  }
};

const RecentTransactions = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Transações Recentes
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cliente</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.customer}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>
                  <Chip
                    label={transaction.status}
                    color={getStatusColor(transaction.status)}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentTransactions;
import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useRootStore } from "../../../stores/rootStore";
import { observer } from "mobx-react-lite";
import { PaymentToolbar } from "../PaymentToolbar";

export const PaymentsTable = observer(() => {
  const {
    paymentsStore: { payments, totalPaymentsUSD, totalPaymentsGel },
    paymentTableStore: {
      handleDeleteClick,
      handleSelectAllRows,
      selectedRows,
      handleSelectRow,
      isRowSelected,
    },
  } = useRootStore();

  if (payments.length === 0) {
    return null;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <PaymentToolbar
          numSelected={selectedRows.length}
          handleDeleteClick={handleDeleteClick}
          selected={selectedRows}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length < payments.length
                    }
                    checked={
                      payments.length > 0 &&
                      selectedRows.length === payments.length
                    }
                    onChange={handleSelectAllRows}
                    inputProps={{
                      "aria-label": "select all desserts",
                    }}
                  />
                </TableCell>
                <TableCell align="center">#</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="right">Rate</TableCell>
                <TableCell align="right">Currency</TableCell>
                <TableCell align="right">Value</TableCell>
                <TableCell align="right">GEL Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment, index) => {
                const isItemSelected = isRowSelected(payment.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={() => handleSelectRow(payment.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                    key={payment.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="left">{payment.date}</TableCell>
                    <TableCell align="right">{payment.rate}</TableCell>
                    <TableCell align="right">{payment.currency}</TableCell>
                    <TableCell align="right">
                      {payment.parentValue.toFixed(2)}
                    </TableCell>
                    <TableCell align="right">
                      {payment.gelValue.toFixed(2)}
                    </TableCell>
                  </TableRow>
                );
              })}
              {!!payments.length && (
                <TableRow>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">{totalPaymentsUSD}</TableCell>
                  <TableCell align="right">{totalPaymentsGel}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
});

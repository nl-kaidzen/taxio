import { Button, MenuItem, TextField, Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { CURRENCIES_MAP } from "../../../models/Declaration";
import { useRootStore } from "../../../stores/rootStore";

export const AddPaymentHeader = observer(() => {
    const {
        convertationStore: {
            isLoading,
            convertPayment,
            date,
            formattedDate,
            handleDateChange,
            currency,
            handleCurrencyChange,
            amount,
            handleAmountChange,
        },
        paymentsStore: { addPayment },
    } = useRootStore();

    const handleAddClick = useCallback(
        async (event) => {
            event.preventDefault();
            const value = Number(amount)
            if (value && value > 0) {
                const payment = await convertPayment(formattedDate, currency, value);

                if (payment) {
                    addPayment(payment);
                }
            }
        },
        [addPayment, amount, convertPayment, currency, formattedDate]
    );

    return (
        <form onSubmit={handleAddClick}>
            <Box sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Select a date"
                        views={["day"]}
                        value={date}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                        disableFuture
                        disabled={isLoading}
                    />
                </LocalizationProvider>
                <TextField
                    id="currency"
                    label="Currency"
                    value={currency}
                    select
                    onChange={handleCurrencyChange}
                    disabled={isLoading}
                    required
                >
                    <MenuItem value={CURRENCIES_MAP.USD.currency}>
                        {CURRENCIES_MAP.USD.title}
                    </MenuItem>
                    <MenuItem value={CURRENCIES_MAP.EUR.currency}>
                        {CURRENCIES_MAP.EUR.title}
                    </MenuItem>
                    <MenuItem value={CURRENCIES_MAP.GBP.currency}>
                        {CURRENCIES_MAP.GBP.title}
                    </MenuItem>
                </TextField>
                <TextField
                    required
                    id="amount"
                    label="Amount"
                    variant="outlined"
                    value={amount}
                    onChange={handleAmountChange}
                    disabled={isLoading}
                />
                <Button type={"submit"} disabled={isLoading} variant={"contained"}>
                    Add payment
                </Button>
            </Box>
        </form>
    );
});

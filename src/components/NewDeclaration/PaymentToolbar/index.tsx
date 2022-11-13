import { Delete } from '@mui/icons-material';
import { IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { alpha } from '@mui/material/styles';


interface IEnchancedPaymentTableToolbar {
    numSelected: number,
    handleDeleteClick: (selected: string[]) => void,
    selected: string[]
}

export const PaymentToolbar = observer(({ numSelected, handleDeleteClick, selected }: IEnchancedPaymentTableToolbar) => {
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Payments
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton onClick={() => handleDeleteClick(selected)}>
                        <Delete />
                    </IconButton>
                </Tooltip>
            ) : null}
        </Toolbar>
    )

})
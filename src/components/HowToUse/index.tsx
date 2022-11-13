import React from 'react'
import {Box, Container, Typography} from "@mui/material";

export const HowToUse = () => {
    return (
        <Box sx={{
            py: 2,
            px: 2,
            marginTop: 3
        }}>
            <Container>
                <Typography variant={'h3'} component={'h1'} sx={{mb:2}}>
                    How to use this service?
                </Typography>
                <Typography paragraph={true}>1. Select the date on which the payment was transferred to your card.</Typography>
                <Typography paragraph={true}>2. Select the currency of your payment.</Typography>
                <Typography paragraph={true}>3. Enter the payment amount.</Typography>
                <Typography paragraph={true}>4. Click the <strong>ADD PAYMENT</strong> button. The payment amount will be converted and added to the table.</Typography>
            </Container>
        </Box>
    )
}
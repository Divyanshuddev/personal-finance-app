import { Box, Grid, Stack, Typography } from "@mui/material"

const styles={
    title:{
        color:"gray",
        fontSize:12,
    },
    balance:{
        fontSize:25,
        fontWeight:"bolder"
    }
}
const PotsData = [
    {
        color: "#90C67C",
        title: "Savings",
        balance: "$159"
    },
    {
        color: "#AFDDFF",
        title: "Gift",
        balance: "$40"
    },
    {
        color: "#FFF085",
        title: "Concert Ticket",
        balance: "$110"
    },
    {
        color: "#FF9A9A",
        title: "New Laptop",
        balance: "$10"
    },
]
const PotsBalance = () => {
    return (
        <Grid container spacing={2}>
            {
                PotsData.map((data,index) => {
                    return (
                        <Grid size={6} key={index}>
                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                <Box sx={{width:"3%",height:60,borderRadius:5,backgroundColor:data.color}}   />
                                <Stack direction={'column'}>
                                    <Typography sx={styles.title}>{data.title}</Typography>
                                    <Typography sx={styles.balance}>{data.balance}</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}

export default PotsBalance

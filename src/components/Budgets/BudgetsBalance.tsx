import {  Grid, Stack, Typography } from "@mui/material"
const styles = {
    root: {
        backgroundColor: "white",
        padding: 3,
        borderRadius: 3
    },
    title: {
        color: "gray",
        fontSize: 12,
    },
    balance: {
        fontSize: 20,
        fontWeight: "bold"
    }
};
const BudgetsData = [
    {
        "color": "#990099",
        "title": "Entertainment",
        "balance": "$" + (Math.random() * 100 + 20).toFixed(2)
    },
    {
        "color": "#00b386",
        "title": "Bills",
        "balance": "$" + (Math.random() * 800 + 500).toFixed(2)
    },
    {
        "color": "#0099ff",
        "title": "Dining Out",
        "balance": "$" + (Math.random() * 150 + 30).toFixed(2)
    },
    {
        "color": "#000099",
        "title": "Personal Care",
        "balance": "$" + (Math.random() * 120 + 30).toFixed(2)
    },
    {
        "color": "#ff6600",
        "title": "Groceries",
        "balance": "$" + (Math.random() * 300 + 100).toFixed(2)
    },
    {
        "color": "#ff3399",
        "title": "Transportation",
        "balance": "$" + (Math.random() * 200 + 50).toFixed(2)
    },
    {
        "color": "#996633",
        "title": "Rent/Mortgage",
        "balance": "$" + (Math.random() * 1500 + 800).toFixed(2)
    },
    {
        "color": "#339966",
        "title": "Utilities",
        "balance": "$" + (Math.random() * 200 + 100).toFixed(2)
    },
    {
        "color": "#003366",
        "title": "Health Insurance",
        "balance": "$" + (Math.random() * 400 + 200).toFixed(2)
    },
    {
        "color": "#cc3300",
        "title": "Gym Membership",
        "balance": "$" + (Math.random() * 80 + 20).toFixed(2)
    },
    {
        "color": "#6600cc",
        "title": "Streaming Services",
        "balance": "$" + (Math.random() * 50 + 10).toFixed(2)
    },
    {
        "color": "#ffcc00",
        "title": "Clothing",
        "balance": "$" + (Math.random() * 150 + 50).toFixed(2)
    },
    {
        "color": "#33cccc",
        "title": "Education",
        "balance": "$" + (Math.random() * 300 + 100).toFixed(2)
    },
    {
        "color": "#ff5050",
        "title": "Gifts",
        "balance": "$" + (Math.random() * 100 + 20).toFixed(2)
    },
    {
        "color": "#669900",
        "title": "Home Maintenance",
        "balance": "$" + (Math.random() * 200 + 50).toFixed(2)
    },
    {
        "color": "#cc99ff",
        "title": "Pet Care",
        "balance": "$" + (Math.random() * 120 + 30).toFixed(2)
    },
    {
        "color": "#0066cc",
        "title": "Travel",
        "balance": "$" + (Math.random() * 500 + 100).toFixed(2)
    },
    {
        "color": "#ff9933",
        "title": "Hobbies",
        "balance": "$" + (Math.random() * 150 + 30).toFixed(2)
    },
    {
        "color": "#99cc00",
        "title": "Charity",
        "balance": "$" + (Math.random() * 100 + 20).toFixed(2)
    },
    {
        "color": "#cc0066",
        "title": "Electronics",
        "balance": "$" + (Math.random() * 300 + 100).toFixed(2)
    },
    {
        "color": "#00cc99",
        "title": "Subscriptions",
        "balance": "$" + (Math.random() * 50 + 15).toFixed(2)
    },
    {
        "color": "#ff6666",
        "title": "Car Maintenance",
        "balance": "$" + (Math.random() * 200 + 50).toFixed(2)
    },
    {
        "color": "#3366ff",
        "title": "Investments",
        "balance": "$" + (Math.random() * 1000 + 200).toFixed(2)
    },
    {
        "color": "#993366",
        "title": "Childcare",
        "balance": "$" + (Math.random() * 600 + 200).toFixed(2)
    },
    {
        "color": "#66ccff",
        "title": "Emergency Fund",
        "balance": "$" + (Math.random() * 2000 + 500).toFixed(2)
    }
];
const BudgetsBalance = () => {
    return (
        <Grid container sx={styles.root} spacing={3}>
            {
                BudgetsData.map((data,index) => {
                    return (
                        <Grid size={{lg:2,md:2,sm:6,xs:6}} key={index}>
                        <Stack direction={'row'} alignItems={'center'} spacing={2} >
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

export default BudgetsBalance

import { Grid, Stack, Typography } from "@mui/material"
import BalanceCard from "./BalanceCard";
import Pots from "./Pots";
import Transaction from "./Transaction";
import Budgets from "./Budgets";
import RecurringBills from "./RecurringBills";

const styles={
    root:{
        boxSizing:"border-box",
        padding:3,
        width:"100%"
    },
    title:{
        fontSize:40,
        fontWeight:"bold"
    }
};

const BalanceData=[
    {
        title:"Current Balance",
        balance:"$4,836.00"
    },
    {
        title:"Income",
        balance:"$3,814.35"
    },
    {
        title:"Expense",
        balance:"$1,700.50"
    },
]
const OverviewDashboard = () => {
  return (
    <Stack sx={styles.root} spacing={3}>
        <Typography sx={styles.title}>Overview</Typography>
        <Grid container spacing={3}>
            {
                BalanceData.map((data,index)=>{
                    return(
                        <Grid size={{lg:4,md:4,sm:12,xs:12}} key={index}>
                            <BalanceCard data={data} />
                        </Grid>
                    )
                })
            }
            
            <Grid size={{lg:8,md:8,sm:12,xs:12}}>
                <Stack spacing={3}>
                <Pots />
                <Transaction />
                </Stack>
            </Grid>
            <Grid size={{lg:4,md:4,sm:12,xs:12}}>
                <Stack spacing={3}>
                    <Budgets />
                    <RecurringBills />
                </Stack>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default OverviewDashboard

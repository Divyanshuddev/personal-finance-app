import { Stack, Typography } from "@mui/material"
import Header from "../Common/Header";
import BillsData from "./Bills.json";
const styles={
    root: {
        backgroundColor: "white",
        padding: 2,
        borderRadius: 3
    },
    billsBox:{
        backgroundColor:"#F8F5F0",
        borderRadius:3,
        padding:2
    },
    billName:{
        color:"rgba(122, 116, 119, 0.8)",
        fontWeight:"550"
    },
    amount:{
        fontWeight:"bold"
    }

};


const RecurringBills = () => {
  return (
    <Stack sx={styles.root} spacing={3}>
      <Header title="Recurring Bills" link="See Details" navigateLink="/recurring-bills" />
      <Stack direction={'column'} spacing={3.5}>
      {
        BillsData.slice(0,4).map((data,index)=>{
            return(
                <Stack key={index} sx={styles.billsBox} borderLeft={`4px solid ${data.color}`} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography sx={styles.billName}>{data.billName}</Typography>
                    <Typography sx={styles.amount}>${data.amount}</Typography>
                </Stack>
            )
        })
      }
      </Stack>
    </Stack>
  )
}

export default RecurringBills

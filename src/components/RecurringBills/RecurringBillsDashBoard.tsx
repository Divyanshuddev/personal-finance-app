import { Pagination, Stack, Typography } from "@mui/material";
import BillsData from '../Overview/Bills.json'
import { useState } from "react";
const styles = {
    root: {
        boxSizing: "border-box",
        padding: 3,
        width: "100%"
    },
    title: {
        fontSize: 40,
        fontWeight: "bold"
    },
    billsBox:{
        backgroundColor:"white",
        borderRadius:3,
        padding:2
    },
    billName:{
        color:"Black",
        fontWeight:"550"
    },
    amount:{
        fontWeight:"bold"
    }
};
const RecurringBillsDashBoard = () => {
    const [page, setPage] = useState<number>(1);
      const [start, setStart] = useState<number>(0);
      const [end, setEnd] = useState<number>(6);
      const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        console.log(event.target)
        setPage(value);
        setStart((value - 1) * 6);
        setEnd(value * 6)
    
      };
    return (
        <Stack sx={styles.root} spacing={3}>
            <Typography sx={styles.title}>Recurring Bills</Typography>
            <Stack direction={'column'} spacing={3.5}>
                  {
                    BillsData.slice(start,end).map((data,index)=>{
                        return(
                            <Stack key={index} sx={styles.billsBox} borderLeft={`4px solid ${data.color}`} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography sx={styles.billName}>{data.billName}</Typography>
                                <Typography sx={styles.amount}>${data.amount}</Typography>
                            </Stack>
                        )
                    })
                  }
                  </Stack>
                  <Pagination count={Math.ceil(BillsData.length / 6)} color="primary" page={page} onChange={handleChange} sx={{ alignSelf: "center" }} />

        </Stack>
    )
}

export default RecurringBillsDashBoard

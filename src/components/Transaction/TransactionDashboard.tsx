import { Avatar, Divider, Pagination, Stack, Typography } from "@mui/material";
import transactionData from '../Overview/TransitionData.json'
import {  useState } from "react";
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
  name: {
    fontWeight: "549",
    fontSize: 18
  },
  avatar: {
    width: 50,
    height: 50
  },
  date: {
    color: "gray",
    fontSize: 12,
    fontWeight: "bold"
  },
  creditMoney: {
    color: "#90C67C",
    fontWeight: "bold"
  },
  debitMoney: {
    color: "#F7374F",
    fontWeight: "bold"
  }
};
const TransactionDashboard = () => {
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
      <Typography sx={styles.title}>Transaction</Typography>
      <Stack direction={'column'} spacing={2} padding={2} sx={{ backgroundColor: "white", borderRadius: 3 }}>
        {
          transactionData.slice(start, end).map((data, index) => {
            return (
              <>
                <Stack key={index} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                  <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Avatar src={data.user_profile_image} sx={styles.avatar} />
                    <Typography sx={styles.name}>{data.user_name}</Typography>
                  </Stack>
                  <Stack direction={'column'}>
                    {
                      data.transaction[0] === "+" ? (
                        <Typography sx={styles.creditMoney} alignSelf={'flex-end'}>{data.transaction}</Typography>
                      ) : (
                        <Typography sx={styles.debitMoney} alignSelf={'flex-end'}>{data.transaction}</Typography>
                      )
                    }

                    <Typography sx={styles.date}>{data.transaction_date.day} {data.transaction_date.month} {data.transaction_date.year}</Typography>
                  </Stack>
                </Stack>
                <Divider />
              </>
            )
          })
        }
      </Stack>
      <Pagination count={Math.ceil(transactionData.length / 6)} color="primary" page={page} onChange={handleChange} sx={{ alignSelf: "center" }} />

    </Stack>
  )
}

export default TransactionDashboard

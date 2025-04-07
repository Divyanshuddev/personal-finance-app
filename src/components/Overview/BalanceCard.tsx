import { Stack, Typography } from "@mui/material"

const styles={
    root:{
        padding:2,
        backgroundColor:"white",
        borderRadius:3
    },
    title:{
        color:"gray",
        fontSize:15
    },
    balance:{
        color:"black",
        fontSize:30,
        fontWeight:"bolder"
    }
}
type BalanceData={
    title:string,
    balance:string
}
type BalanceCardProps={
    data:BalanceData
}
const BalanceCard:React.FC<BalanceCardProps> = ({data}) => {
  return (
    <Stack sx={styles.root} spacing={2}>
      <Typography sx={styles.title}>{data.title}</Typography>
      <Typography sx={styles.balance}>{data.balance}</Typography>
    </Stack>
  )
}

export default BalanceCard

import { Stack } from "@mui/material"
import SideBar from "../components/SideBar/SideBar"
import TransactionDashboard from "../components/Transaction/TransactionDashboard"
const styles={
    root:{
        width:"100%",
        backgroundColor:"rgba(231, 236, 246, 0.8)",
        height:"115vh"
    }
}
const Transaction = () => {
  return (
    <Stack sx={styles.root} direction={'row'}>
       <SideBar />
       <TransactionDashboard />
    </Stack>
  )
}

export default Transaction

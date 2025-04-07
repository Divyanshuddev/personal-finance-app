import { Stack } from "@mui/material"
import SideBar from "../components/SideBar/SideBar"
import RecurringBillsDashBoard from "../components/RecurringBills/RecurringBillsDashBoard"

const styles={
    root:{
        width:"100%",
        backgroundColor:"rgba(231, 236, 246, 0.8)",
        height:"120vh"
    }
}
const RecurringBills = () => {
  return (
    <Stack sx={styles.root} direction={'row'}>
       <SideBar />
       <RecurringBillsDashBoard />
    </Stack>
  )
}

export default RecurringBills

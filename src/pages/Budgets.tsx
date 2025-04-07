import { Stack } from "@mui/material"
import SideBar from "../components/SideBar/SideBar"
import BudgetsDashBoard from "../components/Budgets/BudgetsDashBoard"

const styles={
    root:{
        width:"100%",
        backgroundColor:"rgba(231, 236, 246, 0.8)",
        height:"115vh"
    }
}
const Budgets = () => {
  return (
    <Stack sx={styles.root} direction={'row'}>
    <SideBar />
    <BudgetsDashBoard />
 </Stack>
  )
}

export default Budgets

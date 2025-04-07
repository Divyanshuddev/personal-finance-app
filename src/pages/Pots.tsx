import { Stack } from "@mui/material"
import SideBar from "../components/SideBar/SideBar"
import PotsDashBoard from "../components/Pots/PotsDashBoard"

const styles={
    root:{
        width:"100%",
        backgroundColor:"rgba(231, 236, 246, 0.8)",
        height:"120vh"
    }
}
const Pots = () => {
  return (
    <Stack sx={styles.root} direction={'row'}>
    <SideBar />
    <PotsDashBoard />
 </Stack>
  )
}

export default Pots

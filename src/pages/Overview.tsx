import {  Stack } from "@mui/material"
import SideBar from "../components/SideBar/SideBar"
import OverviewDashboard from "../components/Overview/OverviewDashboard"

const styles={
    root:{
        width:"100%",
        backgroundColor:"rgba(231, 236, 246, 0.8)"
    }
}
const Overview = () => {
  return (
    <Stack sx={styles.root} direction={{lg:"row",md:"row",sm:"column-reverse",xs:"column-reverse"}} >
      <SideBar />
      <OverviewDashboard />
    </Stack>
  )
}

export default Overview

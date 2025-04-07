import { Grid, Stack } from "@mui/material"
import Header from "../Common/Header"
import TotalSavedBox from "./TotalSavedBox"
import PotsBalance from "./PotsBalance"

const styles = {
  root: {
    backgroundColor: "white",
    padding: 2,
    borderRadius: 3
  }
}
const Pots = () => {
  return (
    <Stack sx={styles.root} spacing={2}>
      <Header title="Pots" link="See Details" navigateLink="/pots" />
      <Grid container spacing={3} direction={{lg:"row",md:"row",sm:"column",xs:"column"}}
        sx={{
          alignItems: "center",
        }}>
        <Grid size={{lg:8,md:8,sm:12,xs:12}}>
          <TotalSavedBox />
        </Grid>
        <Grid size={{lg:4,md:4,sm:12,xs:12}}>
          <PotsBalance />
        </Grid>

      </Grid>
    </Stack>
  )
}

export default Pots

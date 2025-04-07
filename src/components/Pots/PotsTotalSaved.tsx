import { Stack } from "@mui/material"
import TotalSavedBox from "../Overview/TotalSavedBox"

const styles={
    root: {
        backgroundColor: "white",
        padding: 2,
        borderRadius: 3
    },
}
const PotsTotalSaved = () => {
  return (
    <Stack sx={styles.root}>
      <TotalSavedBox />
    </Stack>
  )
}

export default PotsTotalSaved

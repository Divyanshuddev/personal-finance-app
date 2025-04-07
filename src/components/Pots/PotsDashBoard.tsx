import { Stack, Typography } from "@mui/material"
import PotsTotalSaved from "./PotsTotalSaved";
import PotsGraph from "./PotsGraph";
const styles = {
    root: {
        boxSizing: "border-box",
        padding: 3,
        width: "100%"
    },
    title: {
        fontSize: 40,
        fontWeight: "bold"
    }
};
const PotsDashBoard = () => {
    return (
        <Stack sx={styles.root} spacing={3}>
            <Typography sx={styles.title}>Pots</Typography>
            <PotsTotalSaved />
            <PotsGraph />
        </Stack>
    )
}

export default PotsDashBoard

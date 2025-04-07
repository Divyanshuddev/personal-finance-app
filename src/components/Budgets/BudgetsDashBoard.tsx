import { Stack, Typography } from "@mui/material"
import BudgetsGraph from "./BudgetsGraph";
import BudgetsBalance from "./BudgetsBalance";
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
const BudgetsDashBoard = () => {
    return (
        <Stack sx={styles.root} spacing={3}>
            <Typography sx={styles.title}>Budgets</Typography>
            <BudgetsGraph />
            <BudgetsBalance />
        </Stack>
    )
}

export default BudgetsDashBoard

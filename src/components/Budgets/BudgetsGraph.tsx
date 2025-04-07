import { Stack } from "@mui/material";
import { LineChart } from "@mui/x-charts";
const styles={
    root: {
        backgroundColor: "white",
        padding: 2,
        borderRadius: 3
    },
};
const budgetDataset = [
    { date: new Date(2023, 0, 1), entertainment: 50, bills: 750, dining: 75, personal: 100 },
    { date: new Date(2023, 1, 1), entertainment: 55, bills: 800, dining: 80, personal: 110 },
    { date: new Date(2023, 2, 1), entertainment: 60, bills: 780, dining: 85, personal: 105 },
    { date: new Date(2023, 3, 1), entertainment: 45, bills: 820, dining: 90, personal: 115 },
    { date: new Date(2023, 4, 1), entertainment: 70, bills: 750, dining: 75, personal: 120 },
    { date: new Date(2023, 5, 1), entertainment: 65, bills: 790, dining: 85, personal: 110 },
    { date: new Date(2023, 6, 1), entertainment: 50, bills: 830, dining: 95, personal: 100 },
    { date: new Date(2023, 7, 1), entertainment: 55, bills: 800, dining: 100, personal: 105 },
    { date: new Date(2023, 8, 1), entertainment: 75, bills: 780, dining: 90, personal: 115 },
    { date: new Date(2023, 9, 1), entertainment: 80, bills: 820, dining: 85, personal: 125 },
    { date: new Date(2023, 10, 1), entertainment: 70, bills: 850, dining: 95, personal: 120 },
    { date: new Date(2023, 11, 1), entertainment: 65, bills: 900, dining: 110, personal: 130 },
];
const BudgetsGraph = () => {
  return (
    <Stack sx={styles.root}>
       <LineChart
      dataset={budgetDataset}
      xAxis={[
        {
          id: 'Months',
          dataKey: 'date',
          scaleType: 'time',
          valueFormatter: (date) => date.toLocaleString('default', { month: 'short' }),
        },
      ]}
      series={[
        {
          id: 'entertainment',
          label: 'Entertainment',
          dataKey: 'entertainment',
          color: '#990099',
          area: true,
          showMark: true,
        },
        {
            id: 'bills',
            label: 'Bills',
            dataKey: 'bills',
            color: '#00b386',
            area: true,
            showMark: true,
          },
          {
            id: 'dining',
            label: 'Dining Out',
            dataKey: 'dining',
            color: '#0099ff',
            area: true,
            showMark: true,
          },
          {
            id: 'personal',
            label: 'Personal Care',
            dataKey: 'personal',
            color: '#000099',
            area: true,
            showMark: true,
          },
        ]}
        height={300}
        margin={{ left: 70 }}
      />
    </Stack>
  )
}

export default BudgetsGraph

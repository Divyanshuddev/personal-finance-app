import { Box, Stack, Typography } from "@mui/material"
import Header from "../Common/Header"
import { PieChart } from '@mui/x-charts/PieChart';

const styles = {
    root: {
        backgroundColor: "white",
        padding: 2,
        borderRadius: 3
    },
    title:{
        color:"gray",
        fontSize:12,
    },
    balance:{
        fontSize:20,
        fontWeight:"bold"
    }
};

const BudgetsData=[
    {
        color: "#990099",
        title: "Entertainment",
        balance: "$50.00"
    },
    {
        color: "#00b386",
        title: "Bills",
        balance: "$750.00"
    },
    {
        color: "#0099ff",
        title: "Dining Out",
        balance: "$75.00"
    },
    {
        color: "#000099",
        title: "Personal Care",
        balance: "$100.00"
    },
]
const Budgets = () => {
    return (
        <Stack sx={styles.root} spacing={2}>
            <Header title='Budgets' link="See Details" navigateLink="/budgets" />
            <Stack direction={'row'} spacing={1} justifyContent={'space-between'} padding={1}>
            <Stack  direction={'column'} spacing={2} width={'70%'}>
            {
                BudgetsData.map((data,index) => {
                    return (
                            <Stack direction={'row'} alignItems={'center'} spacing={2} key={index}>
                                <Box sx={{width:"3%",height:60,borderRadius:5,backgroundColor:data.color}}   />
                                <Stack direction={'column'}>
                                    <Typography sx={styles.title}>{data.title}</Typography>
                                    <Typography sx={styles.balance}>{data.balance}</Typography>
                                </Stack>
                            </Stack>
                    )
                })
            }
            </Stack>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, },
                            { id: 1, value: 15, },
                            { id: 2, value: 20,  },
                            { id: 0, value: 9, },
                            { id: 1, value: 12, },
                            { id: 2, value: 17,  },
                        ],
                        innerRadius: 30,
                        outerRadius: 180,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -185,
                        endAngle: 225,
                        cx: 230,
                        cy: 120,
                    },
                    
                ]}
                width={450}
                height={300}
                
            />
            
            </Stack>
        </Stack>
    )
}

export default Budgets

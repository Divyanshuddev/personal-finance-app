import { Avatar, Divider, Stack, Typography } from "@mui/material"
import Header from "../Common/Header"
import transitionData from './TransitionData.json'
const styles = {
    root: {
        backgroundColor: "white",
        padding: 2,
        borderRadius: 3
    },
    name:{
        fontWeight:"549",
        fontSize:18
    },
    avatar:{
        width:50,
        height:50
    },
    date:{
        color:"gray",
        fontSize:12,
        fontWeight:"bold"
    },
    creditMoney:{
        color:"#90C67C",
        fontWeight:"bold"
    },
    debitMoney:{
        color:"#F7374F",
        fontWeight:"bold"
    }
};

const Transaction = () => {
    return (
        <Stack sx={styles.root} spacing={2}>
            <Header title="Transaction" link="View All" navigateLink="/transaction"  />
            <Stack direction={'column'} spacing={3} padding={2}>
            {
                transitionData.slice(0,5).map((data, index) => {
                    return (
                        <>
                        <Stack key={index} direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'} justifyContent={'space-between'}>
                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                <Avatar src={data.user_profile_image} sx={styles.avatar} />
                                <Typography sx={styles.name}>{data.user_name}</Typography>
                            </Stack>
                            <Stack direction={'column'}>
                                {
                                    data.transaction[0]==="+"?(
                                        <Typography sx={styles.creditMoney} alignSelf={'flex-end'}>{data.transaction}</Typography>
                                    ):(
                                        <Typography sx={styles.debitMoney} alignSelf={'flex-end'}>{data.transaction}</Typography>
                                    )
                                }
                               
                                <Typography sx={styles.date}>{data.transaction_date.day} {data.transaction_date.month} {data.transaction_date.year}</Typography>
                            </Stack>
                        </Stack>
                        <Divider />
                        </>
                    )
                })
            }
            </Stack>
        </Stack>
    )
}

export default Transaction

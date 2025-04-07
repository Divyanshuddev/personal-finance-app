import { Box, Stack, Typography } from "@mui/material"
import money_logo from '../../assets/money_logo.png';
const styles={
    root:{
        padding:2,
        backgroundColor:"#F8F5F0",
        borderRadius:3
    },
    totalSaved:{
        color:"gray",
        fontSize:15
    },
    balance:{
        fontWeight:"bolder",
        fontSize:50
    },
    image:{
        width:100,
        height:100
    }
}
const TotalSavedBox = () => {
  return (
    <Stack sx={styles.root} direction={'row'} alignItems={'center'}>
      <Box component={'img'} src={money_logo} sx={styles.image} />
      <Stack direction={'column'}>
        <Typography sx={styles.totalSaved}>Total Saved</Typography>
        <Typography sx={styles.balance}>$850</Typography>
      </Stack>
    </Stack>
  )
}

export default TotalSavedBox

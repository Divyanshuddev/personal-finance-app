import { Button,  Stack, Typography } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
type HeaderProps={
    title:string;
    link:string;
    navigateLink:string;
};

const styles={
    title:{
        fontSize:25,
        fontWeight:"bold"
    },
    link:{
        backgroundColor:"white",
        color:"gray",
        textTransform:"capitalize"
    }
}
const Header:React.FC<HeaderProps> = ({title,link,navigateLink}) => {
  const navigate = useNavigate();
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <Typography sx={styles.title}>{title}</Typography>
      <Button endIcon={<ArrowRightIcon  />} sx={styles.link} onClick={()=>navigate(navigateLink)}>{link}</Button>
    </Stack>
  )
}

export default Header

import { Button, IconButton, Stack, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const styles = {
    root: {
        backgroundColor: "#201F24",
        boxSizing: "border-box",
        paddingRight: 6,
        height: "150vh",
    },
    root2: {
        backgroundColor: "#201F24",
        height: "150vh",
    },
    text: {
        color: "white"
    },
    icon: {
        color: "white"
    },
    finance: {
        color: "white",
        fontSize: 35,
        padding: 4,
        fontWeight: "bold"
    },
    hamBurgerIcon: {
        padding: 4
    },
    menuIcons: {
        width: 50,
        height: 50,
        "&:hover": {
            backgroundColor: "white",
            borderRadius: "50% !important",
        }
    },
    menuIconsStyle: {
        color: "white",
        "&:hover": {
            color: "black"
        }
    },
    menuButton: {
        display: "flex",
        justifyContent: "flex-start",
        color: "white",
        paddingLeft: 4,
        paddingTop: 2,
        paddingBottom: 2,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        "&:hover": {
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            "& .MuiSvgIcon-root": {
                color: "#237C78",
            },
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            borderLeft: "10px solid #237C78"
        }
    },
    backButton: {
        "&:hover": {
            backgroundColor: "white",
        }
    },
    backIcon: {
        color: "white",
        "&:hover": {
            color: "black"
        }
    },
    root3: {
        height: 70,
        backgroundColor: "black",
        borderTopLeftRadius:50,
        borderTopRightRadius:50
    }
};

const menuItems = [
    {
        icon: <HomeIcon sx={styles.icon} />,
        menuName: "Home",
        navigate: "/"
    },
    {
        icon: <ImportExportIcon sx={styles.icon} />,
        menuName: "Transaction",
        navigate: "/transaction"
    },
    {
        icon: <DonutSmallIcon sx={styles.icon} />,
        menuName: "Budgets",
        navigate: "/budgets"
    },
    {
        icon: <RequestQuoteIcon sx={styles.icon} />,
        menuName: "Pots",
        navigate: "/pots"
    },
    {
        icon: <ReceiptIcon sx={styles.icon} />,
        menuName: "Recurring Bills",
        navigate: "/recurring-bills"
    },
]
const menuIcons = [
    {
        icon: <HomeIcon sx={styles.menuIconsStyle} />,
        navigate: "/"
    },
    {
        icon: <ImportExportIcon sx={styles.menuIconsStyle} />,
        navigate: "/transaction"
    },
    {
        icon: <DonutSmallIcon sx={styles.menuIconsStyle} />,
        navigate: "/budgets"
    },
    {
        icon: <RequestQuoteIcon sx={styles.menuIconsStyle} />,
        navigate: "/pots"
    },
    {
        icon: <ReceiptIcon sx={styles.menuIconsStyle} />,
        navigate: "/recurring-bills"
    },
]
const SideBar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    return (
        <Stack>
            {
                open ? (
                    <Stack sx={styles.root} display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}>
                        <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'}>
                            <Typography sx={styles.finance}>finance</Typography>
                            <IconButton onClick={() => setOpen(false)} sx={styles.backButton}>
                                <KeyboardBackspaceIcon sx={styles.backIcon} />
                            </IconButton>
                        </Stack>
                        <Stack direction={'column'} spacing={1}>
                            {
                                menuItems.map((data, index) => {
                                    return (
                                        <Button key={index} startIcon={data.icon} sx={styles.menuButton} onClick={() => navigate(data.navigate)}>
                                            {data.menuName}
                                        </Button>
                                    )
                                })
                            }
                        </Stack>
                    </Stack>
                ) : (
                    <Stack sx={styles.root2} display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}>
                        <IconButton sx={styles.hamBurgerIcon} onClick={() => setOpen(true)}>
                            <MenuIcon style={{ color: "white" }} />
                        </IconButton>
                        <Stack spacing={3} alignItems={'center'}>
                            {
                                menuIcons.map((data, index) => {
                                    return (
                                        <IconButton key={index} sx={styles.menuIcons} onClick={() => navigate(data.navigate)}>
                                            {data.icon}
                                        </IconButton>
                                    )
                                })
                            }
                        </Stack>
                    </Stack>
                )
            }
            <Stack position={'fixed'} sx={styles.root3} display={{ lg: "none", md: "none", sm: "flex", xs: "flex" }} zIndex={100} bottom={-1} width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                {
                    menuIcons.map((data, index) => {
                        return(
                        <IconButton key={index} sx={styles.menuIcons} onClick={() => navigate(data.navigate)}>
                            {data.icon}
                        </IconButton>
                        )
                    })
                }
            </Stack>

        </Stack>
    )
}

export default SideBar

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';

const drawerWidth = 280;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [auth, setAuth] = React.useState(true);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleCLick = () => {
        localStorage.removeItem("UserLogin");
        window.location.reload();
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography sx={{ my: 2 }} className="text-lg font-bold">
                EXAMINATION SYSTEM
            </Typography>
            <Divider />

            {auth ?
                <Stack>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <Button sx={{ color: 'black' }} className="text-lg font-serif mr-2">
                            Login
                        </Button>
                    </Link>
                </Stack> :
                <Stack>
                    <Link to="/forgetpassword" style={{ textDecoration: "none" }}>
                        <Button sx={{ color: 'black' }} className="text-lg font-serif mr-2">
                            Change password
                        </Button>
                    </Link>
                    <Button sx={{ color: 'black' }} className="text-lg font-serif mr-2" onClick={handleCLick}>
                        Log out
                    </Button>
                </Stack>}
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    React.useEffect(() => {
        localStorage.getItem("UserLogin") === null ? setAuth(true) : setAuth(false);
    }, [auth])

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" className='bg-black'>
                <Toolbar sx={{ justifyContent: "space-between", width: '95%' }}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Typography
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                            className="text-xl font-bold font-serif text-white"
                        >Demo College
                        </Typography>
                    </Link>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon className="float-right" />
                    </IconButton>
                    {auth ?
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="justify-around">
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <Button sx={{ color: '#fff' }} className="text-lg font-serif mr-2">
                                    Login
                                </Button>
                            </Link>
                            <Button sx={{ color: '#fff' }} className="text-lg font-serif">
                                EXAMINATION SYSTEM
                            </Button>
                        </Box> :
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="justify-around">
                            <Link to="/forgetpassword" style={{ textDecoration: "none" }}>
                                <Button sx={{ color: '#fff' }} className="text-lg font-serif mr-2">
                                    Change password
                                </Button>
                            </Link>
                            <Button sx={{ color: '#fff' }} className="text-lg font-serif mr-2" onClick={handleCLick}>
                                Log out
                            </Button>
                        </Box>}
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default DrawerAppBar;

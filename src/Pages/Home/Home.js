import React from 'react';
import { Grid } from '@mui/material';
import CardComp from '../../Components/Cards/CardComp';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <Grid className='text-6xl pt-28' container spacing={2}>
            <Grid item xs={6} md={4}>
                <Link to='/studentlogin' className='no-underline'>
                    <CardComp icon={<PersonIcon className='w-10 h-10' />} name={"Student Portal"} des={"Click here to login portal.."} />
                </Link>
            </Grid>
            <Grid item xs={6} md={4}>
                <Link to='/login' className='no-underline'>
                    <CardComp icon={<AccountBalanceIcon className='w-10 h-10' />} name={"Administrator Portal"} des={"To login click here..."} />
                </Link>
            </Grid>
            <Grid item xs={6} md={4}>
                <Link to='/login' className='no-underline'>
                    <CardComp icon={<AccountCircleIcon className='w-10 h-10' />} name={"Teacher Login"} des={"To login click here..."} />
                </Link>
            </Grid>
            <Grid item xs={6} md={4}>
                <Link to='/login' className='no-underline'>
                    <CardComp icon={<SchoolIcon className='w-10 h-10' />} name={"College Center Login"} des={"To login click here..."} />
                </Link>
            </Grid>
            <Grid item xs={6} md={4}>
                <Link to='/result' className='no-underline'>
                    <CardComp icon={<NoteAltIcon className='w-10 h-10' />} name={"Result"} des={"To login click here..."} />
                </Link>
            </Grid>
            <Grid item xs={6} md={4}>
                <Link to='/' className='no-underline'>
                    <CardComp icon={<HelpIcon className='w-10 h-10' />} name={"Help Desk"} des={"To login click here..."} />
                </Link>
            </Grid>
        </Grid>
    )
}

export default Home
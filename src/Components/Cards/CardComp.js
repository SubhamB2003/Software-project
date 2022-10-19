import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton, Divider } from '@mui/material';


export default function BasicCard(props) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div" className=''>
                    <IconButton>
                        {props.icon}
                    </IconButton>
                    {props.name}
                </Typography>
                <Divider />
                <Typography variant="body2" className='pl-14 pt-5'>
                    {props.des}
                </Typography>
            </CardContent>
        </Card>
    );
}

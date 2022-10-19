import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, Subject_1, Subject_2, Subject_3, Subject_4) {
    return { name, Subject_1, Subject_2, Subject_3, Subject_4 };
}

const rows = [
    createData('Subject_1', 89, 60, 94, 85),
    createData('Subject_2', 67, 90, 73, 78),
    createData('Subject_3', 62, 60, 85, 96),
    createData('Subject_4', 80, 70, 67, 75),
    createData('Subject_5', 96, 80, 72, 88),
];

export default function Result() {
    return (
        <TableContainer component={Paper} className="mt-28">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell ></StyledTableCell>
                        <StyledTableCell align="right">Exam 1</StyledTableCell>
                        <StyledTableCell align="right">Exam 2</StyledTableCell>
                        <StyledTableCell align="right">Exam 3</StyledTableCell>
                        <StyledTableCell align="right">Exam 4</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.Subject_1}</StyledTableCell>
                            <StyledTableCell align="right">{row.Subject_2}</StyledTableCell>
                            <StyledTableCell align="right">{row.Subject_3}</StyledTableCell>
                            <StyledTableCell align="right">{row.Subject_4}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

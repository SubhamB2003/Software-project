import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

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


export default function StudentCom() {
    return (
        <>
            <TableContainer component={Paper} className="mt-20 font-serif">
                <Typography className='text-4xl text-center font-serif'>CA</Typography>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Subject</StyledTableCell>
                            <StyledTableCell align="right">CA 1</StyledTableCell>
                            <StyledTableCell align="right">CA 2</StyledTableCell>
                            <StyledTableCell align="right">CA 3</StyledTableCell>
                            <StyledTableCell align="right">CA 4</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Subject 1</StyledTableCell>
                            <StyledTableCell align="right">20</StyledTableCell>
                            <StyledTableCell align="right">25</StyledTableCell>
                            <StyledTableCell align="right">18</StyledTableCell>
                            <StyledTableCell align="right">24</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Subject 2</StyledTableCell>
                            <StyledTableCell align="right">22</StyledTableCell>
                            <StyledTableCell align="right">24</StyledTableCell>
                            <StyledTableCell align="right">20</StyledTableCell>
                            <StyledTableCell align="right">19</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Subject 3</StyledTableCell>
                            <StyledTableCell align="right">21</StyledTableCell>
                            <StyledTableCell align="right">19</StyledTableCell>
                            <StyledTableCell align="right">24</StyledTableCell>
                            <StyledTableCell align="right">25</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Subject 4</StyledTableCell>
                            <StyledTableCell align="right">24</StyledTableCell>
                            <StyledTableCell align="right">20</StyledTableCell>
                            <StyledTableCell align="right">19</StyledTableCell>
                            <StyledTableCell align="right">23</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Subject 5</StyledTableCell>
                            <StyledTableCell align="right">25</StyledTableCell>
                            <StyledTableCell align="right">24</StyledTableCell>
                            <StyledTableCell align="right">21</StyledTableCell>
                            <StyledTableCell align="right">20</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer component={Paper} className="mt-20 mb-10 font-serif">
                <Typography className='text-4xl text-center font-serif'>PCA</Typography>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Subject</StyledTableCell>
                            <StyledTableCell align="right">CA 1</StyledTableCell>
                            <StyledTableCell align="right">CA 2</StyledTableCell>
                            <StyledTableCell align="right">CA 3</StyledTableCell>
                            <StyledTableCell align="right">CA 4</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Subject 1</StyledTableCell>
                            <StyledTableCell align="right">20</StyledTableCell>
                            <StyledTableCell align="right">25</StyledTableCell>
                            <StyledTableCell align="right">18</StyledTableCell>
                            <StyledTableCell align="right">24</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Subject 2</StyledTableCell>
                            <StyledTableCell align="right">22</StyledTableCell>
                            <StyledTableCell align="right">24</StyledTableCell>
                            <StyledTableCell align="right">20</StyledTableCell>
                            <StyledTableCell align="right">19</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Subject 3</StyledTableCell>
                            <StyledTableCell align="right">21</StyledTableCell>
                            <StyledTableCell align="right">19</StyledTableCell>
                            <StyledTableCell align="right">24</StyledTableCell>
                            <StyledTableCell align="right">25</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Subject 4</StyledTableCell>
                            <StyledTableCell align="right">24</StyledTableCell>
                            <StyledTableCell align="right">20</StyledTableCell>
                            <StyledTableCell align="right">19</StyledTableCell>
                            <StyledTableCell align="right">23</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">Subject 5</StyledTableCell>
                            <StyledTableCell align="right">25</StyledTableCell>
                            <StyledTableCell align="right">24</StyledTableCell>
                            <StyledTableCell align="right">21</StyledTableCell>
                            <StyledTableCell align="right">20</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

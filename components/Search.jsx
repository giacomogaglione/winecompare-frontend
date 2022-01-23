import { InstantSearch, connectSearchBox } from "react-instantsearch-dom";
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';

function SearchBox({ refine }) {
    return (
        <>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Wine to compare"
                    inputProps={{ 'aria-label': 'search wine to compare ' }}
                    onChange={(e) => refine(e.currentTarget.value)} />
                <IconButton
                    type="submit"
                    sx={{ p: '10px' }}
                    aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </>
    )

}

export default connectSearchBox(SearchBox);
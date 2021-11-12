import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@material-ui/core";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  searchStyle: {
    backgroundColor: "black !important",
    color: "white",
    fill: "white",
    padding: "20px 0px",
    width: "100%",
  },
  header: {
    fontSize: "5rem",
    display: "flex",
    padding: "0px 50px",
    textShadow: "3px 2px 5px gray",
  }
}));

export default function SearchAppBar(props) {
  const { searchStyle, header } = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar elevation={0} position="static" className={searchStyle}>
        <Toolbar>
        <div className={header} boxShadow>What to Watch</div>
          <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onClick={props.handleFormSubmit}
              onChange={props.handleInputChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
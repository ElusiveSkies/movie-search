import React, { useState } from 'react';
import Nav from './Nav';
import Movies from './pages/Movies';
import Home from './pages/Home';
import { makeStyles } from '@material-ui/core';

const contentStyles = makeStyles(() => ({
  content: {
    paddingTop: '50px',
  }
}))

export default function ContentContainer() {
  const [displayedPage, setPage] = useState('Home');

  const renderPage = () => {
    if (displayedPage === 'Movies') {
      return <Movies />;
    }
    if (displayedPage === 'Home') {
      return <Home />;
    }
  };


  const handlePageChange = (event, page) =>{setPage(page)};
  const { content } = contentStyles();

  return (
    <div className={content}>
      <Nav currentPage={displayedPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

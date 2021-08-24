import React from 'react';
import MainContainer from '../../MainContainer/MainContainer';
import Navbar from '../../Navbar/Navbar';

const Favorites = () => {
  return (
    <>
      <Navbar />
      <MainContainer favorite={true} />
    </>
  );
};

export default Favorites;

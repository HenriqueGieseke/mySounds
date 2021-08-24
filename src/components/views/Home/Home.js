import React from 'react';
import MainContainer from '../../MainContainer/MainContainer';
import Navbar from '../../Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <MainContainer favorite={false} />
    </>
  );
};

export default Home;

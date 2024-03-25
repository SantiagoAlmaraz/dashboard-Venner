import React from 'react';
import MenuWrap from './MenuWrap';
import ContentWrap from './ContentWrap';
import SearchWrap from './SearchWrap';

function Home() {
  return (
    <div className='dashboard'>
      <SearchWrap/>
      <MenuWrap/>
      <ContentWrap />
    </div>
  );
}

export default Home;

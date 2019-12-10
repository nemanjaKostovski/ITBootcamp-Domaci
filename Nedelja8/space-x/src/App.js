import React, { useState } from 'react';
import './App.css';
import PastLList from './components/past-l-list';
import UpcomingLList from './components/upcoming-l-list';
import Content from './layout/content';
import Footer from './layout/footer';
import { Header } from './layout/header';

function App() {

  const [pastData] = useState([])
  const [upcomingData] = useState([])



  return (
    <div className="App">
      <Header />
      <Content />
      <PastLList data={pastData} />
      <br />
      <UpcomingLList data={upcomingData} />
      <Footer />
    </div>
  );
}

export default App;

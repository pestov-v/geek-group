import React from 'react';
import './App.css';
import './style';
import Header from './components/Header/Header';
import AdTop from './components/AdTop/AdTop';
import MainContent from './pages/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AdTop />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

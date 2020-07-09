import React from 'react';
import Header from './components/Header';
import MenuNav from './components/MenuNav';
import Carousel from './components/Carousel';

const imagesArray = [
  'https://dkprodimages.gumlet.com/AMTM2503_Cover.jpg?format=webp&w=400&dpr=2.6',
  'https://bluecrossofindia.org/wp-content/uploads/2017/06/3.jpg',
  'https://kalyaniawf.org.in/images/G05.jpg',
  'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/09/Animal_shelters.jpg?w=1200&h=628&fill=blur&fit=fill',
  'https://i.pinimg.com/originals/05/64/25/05642599e307500e58746d0ad8d2de7f.jpg'
  ];

function App() {
  return (
    <div className="app">
      <Header></Header>
      <MenuNav></MenuNav>
      <div>
        <Carousel images={imagesArray}></Carousel>
      </div>
      <div className="welcome-content-container"></div>
    </div>
  );
}

export default App;

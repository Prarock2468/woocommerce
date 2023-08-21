import './App.css';
import React from 'react'
import  Header  from './layout/header';
import Category from './layout/category';
import Offer1 from './layout/offer1';
import Tshirt from './layout/tshirt';
import Featured from './layout/featuredProduct';
import Banner1 from './layout/addBanner1';
import NewProduct from './layout/newProduct'
import Collection from './layout/collection';
import Subscribe from './layout/subscribe';
import Offer from './layout/Offer';
import Footer from './layout/footer';
function App() {
  return (
    
     <>
          <Header />
          <Category />
          <Offer1 />
          <Tshirt />
          <Featured />
          <Banner1 />
          <NewProduct />
          <Collection />
          <Offer />
          <Subscribe />
          <Footer />

     </>

  );
}

export default App;

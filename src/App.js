import React, { lazy, Suspense } from 'react'
import './App.css';
import  Header  from './layout/header';
import ErrorBoundary from './layout/errorBoundary';
import BestSellingProduct from './layout/bestSellingProduct';
import Offer1 from './layout/offer1';
import Tshirt from './layout/tshirt';
import Featured from './layout/featuredProduct';
import Banner1 from './layout/addBanner1';
import NewProduct from './layout/newProduct'
import Collection from './layout/collection';
import Subscribe from './layout/subscribe';
import Offer from './layout/Offer';
import Footer from './layout/footer';
const Category = lazy(() => import('./layout/category'));
function App() {
  return (

    <>
     <Header />

      <ErrorBoundary>
        <Suspense fallback={<div className='loader-box'><div className='loader'>Loading...</div></div> }>
          <Category />
        </Suspense>
      </ErrorBoundary>

      <Offer1 />
      <Tshirt />
      <Featured />
      <Banner1 />
      <NewProduct />
      <BestSellingProduct />
      <Collection />
      <Offer />
      <Subscribe />
      <Footer />

    </>

  );
}

export default App;

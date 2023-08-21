import React, { lazy, Suspense } from 'react'
import './App.css';
// import  Header  from './layout/header';
// import Category from './layout/category';
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
const LazyHeader = lazy(() => import('./layout/header'));
const Category = lazy(() => import('./layout/category'));
function App() {
  return (

    <>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyHeader />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>

        <Suspense fallback={<div>Loading...</div>}>
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

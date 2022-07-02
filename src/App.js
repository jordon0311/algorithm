import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Footer from './components/Footer'
import Algorithms from './pages/Algorithms';
import CreateData from './pages/CreateData';
import Home from './pages/Home';
import LinearSearchAlg from './pages/LinearSearchAlg';
import NotFound from './pages/NotFound';
import SearchAlg from './pages/SearchAlg';
import './styling/App.css'
import SearchAlgSplash from './components/SearchAlgSplash';
import JumpSearchAlg from './pages/JumpSearchAlg';
import BinarySearchAlg from './pages/BinarySearchAlg';
import BreadthSearchAlg from './pages/BreadthSearchAlg';

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <div className='mainBody'>
      <Suspense fallback={<div>loading...</div>}>
        <SideNavbar />
        <div className='projectWindow'>
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location} >
              <Route index element={<Home />} />
              <Route path='algorithms/*' element={<Algorithms />}>
                <Route index element={<Navigate to='create' replace />} />
                <Route path='create/*' element={<CreateData />} />
                <Route path='searching/*' element={<SearchAlg />}>
                  <Route index element={<SearchAlgSplash />} />
                  <Route path='linear' element={<LinearSearchAlg />} />
                  <Route path='jump' element={<JumpSearchAlg />} />
                  <Route path='binary' element={<BinarySearchAlg />} />
                  <Route path='breadth' element={<BreadthSearchAlg />} />
                  <Route path='depth' element={<Home />} />
                  <Route path='*' element={<NotFound />} />
                </Route>
                <Route path='sorting/*' element={<Home />} />
                <Route path='general/*' element={<Home />} />
                <Route path='arrays/*' element={<Home />} />
                <Route path='graphs/*' element={<Home />} />
                <Route path='*' element={<NotFound />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;


import './App.css';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import { Route, Routes } from 'react-router-dom'
import Home from './views/home/Home';
import Platform from './views/platform/Platform';
import Cloud from './views/cloud/Cloud';
import Documentation from './views/documentation/Documentation';
import Services from './views/services/Services';
import Install from './views/install/Install';
import Error from './views/error/Error';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/platform' element={<Platform />} />
        <Route path='/cloud' element={<Cloud />} />
        <Route path='/documentation' element={<Documentation />} />
        <Route path='/services' element={<Services />} />
        <Route path='/install' element={<Install />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
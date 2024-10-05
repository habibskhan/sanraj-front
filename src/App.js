import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MetaDecorator from './components/MetaDecorator/MetaDecorator';
import Routing from './Routing';
import './styles/common.scss';
// Swiper styles
import { ToastContainer } from 'react-toastify';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

function App() {
  return (
    <>
      <ToastContainer />
      <MetaDecorator
        metaTitle='SanRaj'
        metaDesc='SanRaj'
        canonicalLink={window.location}
      />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// git push origin beta

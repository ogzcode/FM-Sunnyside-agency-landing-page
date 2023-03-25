import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import TestimonialSection from './components/Testimonial/TestimonialSection';
import ImageGallery from "./components/ImageGallery";
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-w-screen min-h-screen'>
      <Header />
      <Main />
      <TestimonialSection />
      <ImageGallery />
      <Footer />
    </div>
  )
}

export default App

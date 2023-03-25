import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import TestimonialSection from './components/Testimonial/TestimonialSection';
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div className='min-w-screen min-h-screen'>
      <Header />
      <Main />
      <TestimonialSection />
      <ImageGallery/>
    </div>
  )
}

export default App

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import TestimonialSection from './components/Testimonial/TestimonialSection';

function App() {
  return (
    <div className='min-w-screen min-h-screen'>
      <Header />
      <Main />
      <TestimonialSection />
    </div>
  )
}

export default App

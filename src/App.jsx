import './App.css';
import Home from './components/Home';
import About from './About';
import Service from './Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="service"><Service /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  )
}

export default App

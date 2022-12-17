import './App.css';
import About from './component/About/About';
import Banner from './component/Banner/Banner';
import Footer from './component/Footer/Footer';
import Navigation from './component/Navigation';
import News from './component/News/News';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';

function App() {
  return (
    <div >
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <News></News>
      <Footer></Footer>
    </div>
  );
}

export default App;

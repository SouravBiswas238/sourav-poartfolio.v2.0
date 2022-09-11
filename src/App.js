import './App.css';
import Banner from './component/Banner/Banner';
import Navigation from './component/Navigation';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';

function App() {
  return (
    <div >
      <Navigation></Navigation>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;

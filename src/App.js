import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Stats from './component/Stats';
import Curriculum from './component/Curriculum';
import Refund from './component/Refund';
import Companies from './component/Companies';
import Certificate from './component/Certificate';
import Working from './component/Working';

function App() {
  return (
    <div className=" poppins-regular">
      <Navbar title="Logo"/>
      <Hero/>
      <Stats/>
      <Curriculum/>
      <Refund/>
      <Companies/>
      <Certificate/>
      <Working/>
    </div>
  );
}

export default App;

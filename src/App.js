import Routes from './Routes';
import "./components/nav.css"
import Footer from './components/footer';
import Navmenu from './components/navmenu';


function App() {
  return (
    <div>
      <Navmenu/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;

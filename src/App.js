import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "../src/component/Header/Header";
import Footer from "../src/component/Footer/Footer";
import Investor from "./component/Pages/Investor/Investor";
import Localizacija from "./component/Pages/Lokalizacija/Localizacija";
import Apartamenty from "./component/Pages/Apartamenty/Apartamenty";
import Garaze from "./component/Pages/Garaze/Garaze";
import Podbrania from "./component/Pages/Podbrania/Podbrania";
import Galeria from "./component/galeria/Galeria";


const App=()=> {
  let myRoute = (
      <Switch>
        <Route exact={true} path="/" render={()=><Investor/>}/>
        <Route exact={true} path="/localizacija" render={()=><Localizacija/>}/>
        <Route exact={true} path="/apartamenty" render={()=><Apartamenty/>}/>
        <Route exact={true} path="/garaze" render={()=><Garaze/>}/>
        <Route exact={true} path="/podbrania" render={()=><Podbrania/>}/>
        <Route exact={true} path="/zdjecia" render={()=><Galeria/>}/>
        <Redirect to={'/'} />
      </Switch>
  )

  return (
      <div className="App">
        <Header />
        {myRoute}
        <Footer />
      </div>
  )
}

export default App;

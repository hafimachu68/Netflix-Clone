import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import{banner,Orginals,Action,Comedy,Romance,Document,horror} from'./Urls'
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/Row Post/Rowpost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner url={banner}/>
      <Rowpost url={Orginals} title='Netflix Orginals'/>
      <Rowpost url={Action} title='Action' isSmall />
      <Rowpost url={Comedy} title='Comedy Movies' isSmall />
      <Rowpost url={Romance} title='Romance Movies' isSmall />
      <Rowpost url={horror} title='Horror Movies' isSmall />
      <Rowpost url={Document} title='Documentaries' isSmall />
    </div>
  );
}

export default App;

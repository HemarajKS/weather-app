
import { HomePage } from "./views/homePage/homePage";
import { useState,useEffect } from "react";
import Search from "./components/search/search";
import "./style.css"
import Page1 from "./views/homePage/page1";
import Page2 from "./views/homePage/page2";
import Page3 from "./views/homePage/page3";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";




function App() {

  

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('india');

  const searchToApp = (search:any) => {
    setSearch(search);
  }

  useEffect(() => {
    
      fetch(`https://api.weatherapi.com/v1/current.json?q=${search}`,{
        method:'GET',
        headers:{
            key: "592298edce264a739c9103050221110"
        }
    })
    .then((response) => response.json())
    .then((data) => setData(data));
    
  },[search])

  useEffect(()=>{
    console.log(data)
  },[data])


  return (
    <div className="App">
      
     <div>
     <Search searchToApp={searchToApp}/>
    </div>
    <HomePage data={data}/>
    <BrowserRouter>
    <Routes>
    <Route path="/page1"  element={<Page1/>} />
    <Route path="/page2" element={<Page2/>} />
    <Route path="/page3" element={<Page3/>} />
    </Routes>
    
    </BrowserRouter>
    <a href="/page1">page1</a>
    <br />
   
    <br />
    <a href="/page3">page3</a>

    
   

    </div>
   
  );
}

export default App;

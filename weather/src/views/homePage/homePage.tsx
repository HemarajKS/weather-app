import { useState, useEffect } from "react"
import "./homePage.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useNavigate } from "react-router-dom";






export const HomePage = (data: any) => {

  
  const navigate=useNavigate();

  const [location, setLocation] = useState<any>({})
  useEffect(() => {
    setLocation(data.data);
  })

  console.log("first", location)

  return (
    <div className="home">
      {location.error ? <div>{location.error.message}</div> :
        <div className="homeContainer">{(data !== JSON.stringify([])) ? <div>{!location.location ?  <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <p>Loading...</p>
    </div>: <div className="homeContent" >
      <div className="first">
        <div><img src={location.current.condition.icon} alt="meow" className="icon"/>
      </div>
      <div className="temp">{location.current.temp_c} <sup>0</sup>C</div>
      </div>
          <div className="place">{location.location.name}</div>
          <div className="country">{location.location.country}</div>
          
          <div className="weather">{location.current.condition.text}</div>
          
          <div>{location.location.localtime}</div>
        </div>}</div> : "meowww"}</div>}
 <div className="tabs">
  <Tabs>
    <TabList className="tablist">
      <Tab>Ananya</Tab>
      <Tab>Deepthi</Tab>
      <Tab>Anusha</Tab>
    </TabList>
    <TabPanel>Ananyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</TabPanel>
    <TabPanel>Deeepthiiiiiiiiiiiiiiiiiiiiiiiii</TabPanel>
    <TabPanel></TabPanel>
  </Tabs>
  <button onClick={()=>{
      navigate("/page2")
    }}>clicki me</button>
 </div>
    </div>
  )
}


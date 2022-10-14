import { useState,useEffect } from "react"
import "./search.css"

const Search = ({searchToApp}:any) => {
    const [search,setSearch] = useState("");
    const onSearch=(e:any)=>{
        e.preventDefault();
        setSearch(e.target.search.value)
       
    }

    useEffect(() => {
      searchToApp(search);
    }, [search])

   
  return (
    <div className="search">
      <form onSubmit={(e)=>{onSearch(e)}} >
        <input type="text" name="search" id="search" className="searchBar" placeholder="Search here..."/>
      </form>
    </div>
  )
}

export default Search

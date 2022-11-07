import React, {useState, useEffect} from "react"
import { search } from "../BooksAPI";
import Searchoutput from "./comp/Searchoutput";

const  Search =(props) => {
   const [posts, setPosts] = useState([]);
   useEffect( () => { 
     async function fetchData() {
         if(props.searchValue !== '' && props.searchValue !== undefined){
               const res = await search(props.searchValue);
               setPosts(res);
              
      }
   }
      fetchData();
  
},[props.searchValue] );


    return (
      
  <Searchoutput posts = {posts} setDisplay = {props.setDisplay}/>
     );
}
 
export default Search;

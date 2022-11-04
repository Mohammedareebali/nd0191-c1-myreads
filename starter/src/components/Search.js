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

//console.log('it ran')
    return (
      
  <Searchoutput posts = {posts}/>
     );
}
 
export default Search;

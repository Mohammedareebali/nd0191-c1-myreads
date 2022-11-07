import { useState , useEffect } from "react";
import { getAll , get } from "../BooksAPI";
import Searchoutput from "./comp/Searchoutput";

function Display(props) {
    const [posts ,setPosts] = useState([]);

    useEffect( () => { 
      async function fetchData() {
          
                const res = await getAll();
               
                setPosts(res);
               
       
    }
       fetchData();
   
 },[props.display] );
 
    return (
        <>
    
        <Searchoutput  section = {props.section} posts = {posts} display = {props.display} setDisplay = {props.setDisplay} /> :
       
        
        </>
    );
}
 
export default Display;
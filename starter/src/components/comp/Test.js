import { update } from "../../BooksAPI";

const Test = (props) => {
        return props.posts.map((val) => {
                
    return (  
        
        <li key={val.id}>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${val.imageLinks.thumbnail || ''})`,
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select id = {val.id} onChange={async function(){
                                let e  = document.getElementById(`${val.id}`);
                                let value = e.options[e.selectedIndex].value;
                                console.log(value);
                                console.log(val.id);
                                let a = await update(val,value);
                                props.setDisplay(a);
                               
                            }}>
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead"  >Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{val.title}</div>
                <div className="book-authors">{val.authors}</div>
            </div>
        </li>
    
        
                        
)
}
    );
    }


 
export default Test;
   
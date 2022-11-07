import { update } from "../../BooksAPI";

const Searchoutput = (props) => {
        let a = props.posts.filter(val => ( val.shelf === props.section));
    return a.map((val) => {
    return (  
        <>
        
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
                    <select 
                     id = {val.id} 
                     onChange={async function(){
                                let e  = document.getElementById(`${val.id}`);
                                e.options[e.selectedIndex].setAttribute('selected' , 'selected');
                                let value = e.options[e.selectedIndex].value;            
                                let a = await update(val,value);
                                props.setDisplay(a);
                                
                            
                            }}>
                            <option value="none" disabled >
                                Move to...
                            </option>
                            <option value="currentlyReading"  >
                                Currently Reading
                            </option>
                            <option value="wantToRead"  >Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none" >None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{val.title}</div>
                <div className="book-authors">{val.authors}</div>
            </div>
        </li>
</>
    )
}
    );

}

export default Searchoutput
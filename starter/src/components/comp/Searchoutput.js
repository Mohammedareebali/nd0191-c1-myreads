const Searchoutput = (props) => {
    if( props.posts !== undefined && props.posts.length > 0){
        
    return props.posts.map((val) => {
        console.log(val)
    return (  
        <li key={val.id}>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${val.imageLinks.thumbnail && ''})`,
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
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
else{
    return <>
    </>
}
}

export default Searchoutput
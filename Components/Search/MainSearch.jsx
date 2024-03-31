import react, { useState } from 'react';
import Card from './Cards';
import axios from 'axios';
import './cards.css';
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <div className="front-logged-in">
                <div className="row2">
                    <div className="rectangle-8">
                        <input type="text" placeholder='Enter Your Book Name' value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook} />
                        <button><i className="fas fa-search"></i></button>
                    </div>

                </div>
            </div>
            <div className="containerMS">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    )
}

export default Main;
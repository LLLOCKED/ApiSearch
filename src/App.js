import {Container} from "./appStyles";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import AnimeList from "./components/AnimeList/AnimeList";
import axios from "axios";
import {useEffect, useState} from "react";
import Pagination from "./components/Pagination/Pagination";

function App() {

    const [anime, setAnime] = useState();
    const [totalItems, setTotalItems] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const animeAPI = async () => {
            try {
                const search = searchValue ? `&filter[text]=${searchValue}` : '';
                const {data} = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=${itemOffset}${search}`);
                setAnime(data.data)
                setTotalItems(data.meta.count);
            } catch (e) {
                console.log(e)
            }
        };
        animeAPI();
    }, [itemOffset, searchValue]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 8) % totalItems;
        setItemOffset(newOffset);
    };

    return (
        <Container>
            <Header/>
            <div>
                <SearchInput setSearchValue={setSearchValue} />
                <AnimeList anime={anime}/>
                <Pagination items={totalItems} handlePageClick={handlePageClick} />
            </div>
        </Container>
    );
}

export default App;

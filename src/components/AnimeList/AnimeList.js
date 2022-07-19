import {ListAnime, ListContainer} from "./AnimeListStyle";
import AnimeItem from "../AnimeItem/AnimeItem";

const AnimeList = ({anime}) => {
    return (
        <ListContainer>
            {anime ?
                <ListAnime>
                    {anime.map((obj) =>
                        <AnimeItem obj={obj}/>
                    )}
                </ListAnime>
                : <h2>Пошук...</h2>}
        </ListContainer>
    )
}

export default AnimeList;
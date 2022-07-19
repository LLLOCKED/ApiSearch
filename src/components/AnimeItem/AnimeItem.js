import {Item, TextH3} from "./AnimeItemStyles";

const AnimeItem = ({obj}) => {
    return (
        <>
            <Item key={obj.id}>
                <img width="300" src={obj.attributes.posterImage.large} alt={obj.attributes.titles.en_jp}/>
                <TextH3>{obj.attributes.titles.en_jp} </TextH3>
            </Item>
        </>
    )
}

export default AnimeItem;
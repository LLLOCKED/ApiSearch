import {HeaderContainer, HeaderText} from "./HeaderStyles";
import image from "../../assets/search.svg"

const Header = () => {
    return(
        <HeaderContainer>
            <HeaderText>SearchAnimeAPi</HeaderText>
            <img width="30" src={image} alt="search"/>
        </HeaderContainer>
    )
}

export default Header;
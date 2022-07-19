import {Input, InputContainer} from "./SearchInputStyles";
import debounce from 'lodash.debounce'
import {useMemo} from "react";

const SearchInput = ({setSearchValue}) => {

    const debounceInput = useMemo(() => {
        return debounce((str) => setSearchValue(str), 300)
    }, [setSearchValue])

    const onChangeInput = (str) => {
        debounceInput(str);
    }

    return (
        <InputContainer>
            <Input placeholder="Пошук..." onChange={(e) => onChangeInput(e.target.value)}/>
        </InputContainer>
    )
}

export default SearchInput;
import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const PaginationItems = styled(ReactPaginate)`
  display: flex;

  a {
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid black;
    background: #ffcebf;
    cursor: pointer;
  }
`;


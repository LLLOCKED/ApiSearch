import {PaginationContainer, PaginationItems} from "./PaginationStyles";

const Pagination = ({items, handlePageClick}) => {
    return(
        <PaginationContainer>
            <PaginationItems
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={Math.ceil(items/8)}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </PaginationContainer>
    )
}

export default Pagination;
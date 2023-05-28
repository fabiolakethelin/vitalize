import React from "react";
import ReactPaginate from "react-paginate";
import { Container } from "./Pagination.style";

export const Pagination = ({items, currentPage, setCurrentPage}) => {
    const pageCount = Math.ceil(items.length / 8);

    const handleChange = ({selected}) => {
        setCurrentPage(selected + 1)
    };

    return (
        <Container>
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                forcePage={currentPage - 1}
                onPageChange={handleChange}
                previousLabel='<'
                nextLabel='>'
                breakLabel='...'
                activeClassName='pagination-active'
            />
        </Container>
    );
};

export default Pagination
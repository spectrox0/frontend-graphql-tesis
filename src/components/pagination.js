import React from "react";
import { MDBCol, MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import { Link, animateScroll as scroll } from "react-scroll";
export default function Pagination({
  totalElements,
  currentPage,
  elementsPerPage,
  paginate,
  id
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <MDBCol>
      {pageNumbers.length > 1 && (
        <MDBPagination className="mb-5">
          {currentPage !== 1 && (
            <MDBPageItem>
              <MDBPageNav
                className="page-link"
                aria-label="Previous"
                tag={Link}
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={e => {
                  e.preventDefault();
                  paginate(currentPage - 1);
                }}
              >
                <span aria-hidden="true">&laquo;</span>
              </MDBPageNav>
            </MDBPageItem>
          )}
          {pageNumbers.map(number => (
            <MDBPageItem
              key={number}
              className="page-link"
              active={number === currentPage}
            >
              <MDBPageNav
                tag={Link}
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={e => {
                  e.preventDefault();
                  paginate(number);
                }}
              >
                {number}
              </MDBPageNav>
            </MDBPageItem>
          ))}{" "}
          {currentPage !== pageNumbers.length && (
            <MDBPageItem>
              <MDBPageNav
                className="page-link"
                aria-label="Previous"
                tag={Link}
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={e => {
                  e.preventDefault();
                  paginate(currentPage + 1);
                }}
              >
                <span aria-hidden="true">&raquo;</span>
              </MDBPageNav>
            </MDBPageItem>
          )}
        </MDBPagination>
      )}
    </MDBCol>
  );
}

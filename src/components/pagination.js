import React from "react"
import { Link } from "gatsby"

const style = {
  marginRight: '5px'
};

const Pagination = ({ pageContext }) => {
  // (1)
  const { numberOfPages, humanPageNumber, previousPagePath, nextPagePath } = pageContext;
  // (2)
  const pages = Array.from({ length: numberOfPages }, (v, i) => i + 1);

  return (
    <div class="flex justify-center">
      {
        previousPagePath
          ? <Link to={previousPagePath} style={style}>prev</Link>
          : null
      }
      {
        pages.map(page => (
          humanPageNumber !== page
            ? <Link key={page} to={page === 1 ? "/" : `/page/${page}`} style={style}>{page}</Link>
            : <span style={style}>{page}</span>
        ))
      }
      {
        nextPagePath
          ? <Link to={nextPagePath} style={style}>next</Link>
          : null
      }
    </div>
  );
}

export default Pagination
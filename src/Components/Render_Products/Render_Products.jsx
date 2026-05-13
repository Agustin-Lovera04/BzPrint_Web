import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import { useEffect } from "react";

const Render_Products = ({ prods, page, setSearchParams, category }) => {
  const itemsPerPage = 16;
  const itemOffset = (page - 1) * itemsPerPage; 
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = prods.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(prods.length / itemsPerPage);

  useEffect(() => {
    if (page > pageCount && pageCount > 0) {
      setSearchParams(
        (prev) => {
          prev.set("page", "1");
          return prev;
        },
        { replace: true }
      );
    }
  }, [category, page, pageCount, setSearchParams]);

  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    setSearchParams(
      (prev) => {
        prev.set("page", newPage.toString());
        return prev;
      },
      { replace: true }
    );
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center gap-2 flex-wrap mb-5">
      {currentItems.map((p) => (
        <Card key={p.codigo} prod={p} />
      ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Sig. >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        forcePage={page - 1} 
        previousLabel="< Ant."
        renderOnZeroPageCount={null}
        containerClassName={"pagination"} 
        pageClassName={"page-item"} 
        pageLinkClassName={"page-link"} 
        previousClassName={"page-item"} 
        previousLinkClassName={"page-link"} 
        nextClassName={"page-item"} 
        nextLinkClassName={"page-link"} 
        breakClassName={"page-item"} 
        breakLinkClassName={"page-link"} 
        activeClassName={"active"} 
      />
    </div>
  );
};

export default Render_Products;
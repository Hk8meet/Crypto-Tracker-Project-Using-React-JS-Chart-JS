import {useState} from "react";
import Pagination from "@mui/material/Pagination";
import "./styles.css";

export default function PaginationComponent({ page, handlePageChange}) {
  
  return (
    <div className="pagination-component">
      <Pagination 
        count={10} 
        page={page} 
        onChange={(event, value) => handlePageChange(event, value)}

        sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            "& .MuiPaginationItem-text": {
              backgroundColor: "var(--blue) !important",
              color: "#fff !important",
              bordercolor: "var(--blue) !important",
            }
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--blue) !important",
          },
          "& .MuiPaginationItem-text": {
            border: "1px solid var(--grey)",
            color: "var(--white)",
          }
        }} 
      />
    </div>
  );
}
import React from "react";
import Rating from "./Rating";
export default function Sidebar() {
  const sidebarStyle = {
    color: "#fff",
    background: "rgb(56, 56, 56)",
  };
  return (
    <div className=" p-4 h-100 " style={sidebarStyle}>
      <h4>Filter Product</h4>
      <div className="form-check p-3">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Ascending
        </label>
      </div>
      <div className="form-check p-3">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Descending
        </label>
      </div>
      <div className="form-check p-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check p-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
      <div className="d-flex align-items-center my-3">
        <span className="me-2">Rating:</span>
        <Rating edit={true} />
      </div>
      <div>
        <button type="button" className="btn btn-light w-100 mt-4">
          Clear filter
        </button>
      </div>
    </div>
  );
}

import { React } from "react";
import { useSelector } from "react-redux";

const ListFavoris = () => {
  const state = useSelector((state) => state.handleFavoris);

  const FavorisItems = (element) => {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center my-3">
            <div className="col-md-3">
              <img
                className=" imagefav"
                src={element.posterURL}
                style={{ width: "250px", height: "250px" }}
              ></img>
            </div>
            <div className="col-md-3">
              <h4 style={{ color: "white" }}>{element.title}</h4>
              <h6 style={{ color: "white" }}>
                {" "}
                <i className="fa fa-star"></i> {element.rating}
              </h6>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div>
        {state.length ? (
          state.map(FavorisItems)
        ) : (
          <div className="display-5 text-center" style={{ color: "white" }}>
            <p>YOUR CARD IS EMPTY</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListFavoris;

import { Link } from "react-router-dom";

function HeaderItem({ image, title, to }) {
      return (
            <div className="col-12 header-item">

                  <Link to={to} style={{ color: "white", width: "100%" }}>
                        <button className="btn text-light" >

                              <div className="row " >
                                    <div className="col-12 col-md-2">
                                          <img src={image} alt="books icon" className="left-navbar-image" />
                                    </div>
                                    <div className="col-9 left-navar-small-font mt-1 ">
                                          {title}
                                    </div>
                              </div>
                        </button>
                  </Link>

            </div>
      );
}

export default HeaderItem;
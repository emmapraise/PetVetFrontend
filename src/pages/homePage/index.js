import React, { useState } from "react";
// import PropTypes from "prop-types";
import { useAPI } from "../../context/apiContext";
import arrowDown from "../../assets/arrowDown.svg";
import searchIcon from "../../assets/search.svg";
import { Link } from "react-router-dom";
import unlove from "../../assets/unlove.svg";
import cart from "../../assets/cartIcon.svg";
import NavBar from "../../components/common/NavBar";
import ProductCard from "../../components/common/ProductCard";
import Footer from "../../components/common/Footer";
import { Wrapper } from "./style";
import { CardCategory } from "./style";
import CarouselSlide from "../../components/homepage/CarouselSlide";
import Modal from "../../components/common/Modal";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import { withRouter } from 'react-router-dom';


function HomePage(props) {

//   React.useEffect(() => {
//     axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
//     .then(function (response) {
//         if(response.status !== 200){
//           redirectToLogin()
//         }
//     })
//     .catch(function (error) {
//       redirectToLogin()
//     });
//   })
// function redirectToLogin() {
// props.history.push('/login');
// }

const { data, isLoading } = useAPI();
const items = data && data;

  // const [items, setItems] = useState([]);
  //     set search query to empty string
  const [q, setQ] = useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = useState(["category", "title", "price"]);
  //     add a default value to be used by our select element
  const [filterParam, setFilterParam] = useState(["All"]);


  function search(items) {
    return (
      items &&
      // eslint-disable-next-line
      items.slice(0, 40).filter((item) => {
        // console.log(item)
        // eslint-disable-next-line
        if (item.category == filterParam) {
          return searchParam.some((newItem) => {
            return (
              item[newItem] &&
              item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) >
                -1
            );
          });
          // eslint-disable-next-line
        } else if (filterParam == "All") {
          return searchParam.some((newItem) => {
            return (
              item[newItem] &&
              item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) >
                -1
            );
          });
        }
      })
    );
  }

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openLogin, setOpenLogin] = React.useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  return (
    <Wrapper>
      <>
        <NavBar
          searchInput={
            <div className="search-box-area">
              {/* <div className="select-area flex"> */}
                {/* <select
                  className="select custom-select"
                  tabIndex="1"
                  onChange={(e) => {
                    setFilterParam(e.target.value);
                  }}
                  aria-label="Filter Countries By Countries"
                >
                  <option value="All">All Veterinary Services</option>
                  <option value="electronics">Animal Welfare</option>
                  <option value="electronics">Emergency care</option>
                  <option value="jewelery">Clinical Pharmacology</option>
                  <option value="men's clothing">Dentistry</option>
                  <option value="women's clothing">Dermatology</option>
                  <option value="electronics">Nutrition</option>
                  <option value="jewelery">Surgery</option>
                </select>
                <img src={arrowDown} alt="arrowDown" /> */}
              {/* </div> */}
              <div className="flex">
                <div className="search-box">
                  <input
                    type="text"
                    name="search"
                    // id="search"
                    placeholder="Search Vet Clinics"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                  />
                </div>

                <button type="submit">
                  <img src={searchIcon} alt="search" />
                </button>
              </div>
            </div>
          }
          modalRegister={
            <Modal
              onClose={handleClose}
              open={open}
              trigger={
                <div>
                  <button className=" orange btn" onClick={handleOpen}>
                    Register
                  </button>
                </div>
              }
              body={<Register layout="block" />}
            />
          }
          modalLogin={
            <Modal
              onClose={handleCloseLogin}
              open={openLogin}
              trigger={
                <div>
                  <button className=" orange btn" onClick={handleOpenLogin}>
                    Login
                  </button>
                </div>
              }
              body={<Login layout="block" />}
            />
          }
        />
      </>
      <section className="cyan-bg">
        <div className="carousel-container">
          <CarouselSlide />
        </div>

        <div className="hot-deals">

          {/* <CardsCategory */}
          {!isLoading ? (
            <>loading...</>
          ) : (
            <CardCategory className="wrapper">
              <div className="cat1 categories">
                <div className=" scrolly">
                  <div className="flex content">
                    {items.map((item) =>
                      (
                        <ProductCard
                          to={item.id}
                          key={item.id}
                          bg={item.coverImage}
                          pName={item.name}
                          price={parseInt(item.price)}
                          like={unlove}
                          addToCart={cart}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex see-more">
                  <Link className="bold" to="/products/electronics">
                    See more
                  </Link>
                </div>
              </div>
            </CardCategory>
          )}
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
}

HomePage.propTypes = {};

export default withRouter(HomePage);

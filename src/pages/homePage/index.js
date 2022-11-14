import React, { useState } from "react";
// import PropTypes from "prop-types";
import { useAPI } from "../../context/apiContext";
import arrowDown from "../../assets/arrowDown.svg";
import searchIcon from "../../assets/search.svg";
import { Link } from "react-router-dom";
import blackDress from "../../assets/black-dress.png";
import powerbank from "../../assets/powerbank.png";
import luggage from "../../assets/luggage.png";
import unlove from "../../assets/unlove.svg";
import cart from "../../assets/cartIcon.svg";
import shoes from "../../assets/shoe-pair.png";
import ankle from "../../assets/ankle.png";
import bag from "../../assets/bag.png";
import style from "../../assets/style.png";
import pipe from "../../assets/pipe.png";
import phone from "../../assets/phone.png";
import watch from "../../assets/watch.png";
import bluetooth from "../../assets/bluetooth.png";
import tablet from "../../assets/tablet.png";
import DealCard1 from "../../components/homepage/DealCard1";
import NavBar from "../../components/common/NavBar";
import ProductCard from "../../components/common/ProductCard";
import Footer from "../../components/common/Footer";
import { Wrapper } from "./style";
import { CardCategory } from "./style";
import CarouselSlide from "../../components/homepage/CarouselSlide";
import TopDealsCircle from "../../components/homepage/TopDealsCircle";
import Modal from "../../components/common/Modal";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import { withRouter } from 'react-router-dom';
import axios from "axios";


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
const getOwners = () => {
  axios.get(`http://localhost:8282/api/vet/all`)
  .then(response => {
    
    console.log(response.data);
  })
}
getOwners();
  const { data, isLoading } = useAPI();
  const items = data && data;

  const dealOfTheDay = [
    {
      id: 1,
      title: "Black Dress",
      price: "N 4,400",
      image: blackDress,
    },
    {
      id: 2,
      title: "Portable Power Bank External Battery Charger",
      price: "N 8,750",
      image: powerbank,
    },
    {
      id: 3,
      title: "Dual travelling Bag",
      price: "N 6,400",
      image: luggage,
    },
    {
      id: 4,
      title: "Black Ankle Strap",
      price: "N 3,400",
      image: ankle,
    },
  ];
  const topdeals = [
    {
      id: 1,
      title: "Trendy Collections",
      image: shoes,
    },
    {
      id: 2,
      title: "Stay Connected",
      image: phone,
    },
    {
      id: 3,
      title: "Build as you go",
      image: pipe,
    },
    {
      id: 4,
      title: "Splash Sales",
      image: watch,
    },
    {
      id: 5,
      title: "Style-up Closet",
      image: style,
    },
    {
      id: 6,
      title: "Chasing the Bag",
      image: bag,
    },
    {
      id: 7,
      title: "Best in Class",
      image: bluetooth,
    },
    {
      id: 8,
      title: "Digital to the World",
      image: tablet,
    },
  ];
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

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

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
              <div className="select-area flex">
                <select
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
                <img src={arrowDown} alt="arrowDown" />
              </div>
              <div className="flex">
                <div className="search-box">
                  <input
                    type="text"
                    name="search"
                    // id="search"
                    placeholder="Search Products, Brands and Categories"
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

        <div className="deal-of-the-day">
          <div className="dotd-heading">
            <div className="compact">
              <p className="red bold">Featured</p>
              <p className="gray">Featured Vet Clinics</p>
            </div>
          </div>
          <div className="dotd-cards ">
            <div className="scroll grid">
              {search(dealOfTheDay).map((deal) => (
                <DealCard1
                key={deal.id}
                  to={deal.id}
                  unlove
                  productName={deal.title}
                  price={deal.price}
                  img={<img src={deal.image} alt={deal.title} />}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hot-deals">
          <div className="flex hd-heading flex">
            <div className="compact">
              <p className="bold text"> TOP VET CLINIC</p>
            </div>
          </div>

          {/* <CardsCategory */}
          {!isLoading ? (
            <>loading...</>
          ) : (
            <CardCategory className="wrapper">
              <div className="cat1 categories">
                <p className="title bold">Animal Welfare</p>
                <div className=" scrolly">
                  <div className="flex content">
                    {search(items).map((item) =>
                      item.category === "electronics" ? (
                        <ProductCard
                          to={item.id}
                          key={item.id}
                          bg={item.image}
                          pName={item.title}
                          price={item.price}
                          like={unlove}
                          addToCart={cart}
                        />
                      ) : (
                        ""
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

              <div className="cat2 categories">
                <p className="title bold">Emergency Care</p>
                <div className=" scrolly">
                  <div className="flex content">
                    {search(items).map((item) =>
                      item.category === "jewelery" ? (
                        <ProductCard
                          to={item.id}
                          key={item.id}
                          bg={item.image}
                          pName={item.title}
                          price={item.price}
                          like={unlove}
                          addToCart={cart}
                        />
                      ) : (
                        ""
                      )
                    )}{" "}
                  </div>
                </div>
                <div className="flex see-more">
                  <Link className="bold" to="/products/computers">
                    See more
                  </Link>
                </div>
              </div>

              <div className="cat3 categories">
                <p className="title bold">Clinical Pharmacology</p>
                <div className=" scrolly">
                  <div className="flex content">
                    {search(items).map((item) =>
                      item.category === "men's clothing" ? (
                        <ProductCard
                          to={item.id}
                          key={item.id}
                          bg={item.image}
                          pName={item.title}
                          price={item.price}
                          like={unlove}
                          addToCart={cart}
                        />
                      ) : (
                        ""
                      )
                    )}{" "}
                  </div>
                </div>
                <div className="flex see-more">
                  <Link className="bold" to="/products/cars">
                    See more
                  </Link>
                </div>
              </div>

              <div className="cat4 categories">
                <p className="title bold">Dentistry</p>
                <div className=" scrolly">
                  <div className="flex content">
                    {search(items).map((item) =>
                      item.category === "women's clothing" ? (
                        <ProductCard
                          to={item.id}
                          key={item.id}
                          bg={item.image}
                          pName={item.title}
                          price={item.price}
                          like={unlove}
                          addToCart={cart}
                        />
                      ) : (
                        ""
                      )
                    )}{" "}
                  </div>
                </div>
                <div className="flex see-more">
                  <Link className="bold" to="/products/furnitures">
                    See more
                  </Link>
                </div>
              </div>

              <div className="cat5 categories">
                <p className="title bold">Dermatology</p>
                <div className=" scrolly">
                  <div className="flex content">
                    {search(items).map((item) =>
                      item.category === "electronics" ? (
                        <ProductCard
                          to={item.id}
                          key={item.id}
                          bg={item.image}
                          pName={item.title}
                          price={item.price}
                          like={unlove}
                          addToCart={cart}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
                <div className="flex see-more">
                  <Link className="bold" to="/products/phones_accessories">
                    See more
                  </Link>
                </div>
              </div>

              <div className="cat6 categories">
                <p className="title bold">Nutrition</p>
                <div className=" scrolly">
                  <div className="flex content">
                    {search(items).map((item) =>
                      item.category === "jewelery" ? (
                        <ProductCard
                          to={item.id}
                          key={item.id}
                          bg={item.image}
                          pName={item.title}
                          price={item.price}
                          like={unlove}
                          addToCart={cart}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
                <div className="flex see-more">
                  <Link className="bold" to="/products/other_products">
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

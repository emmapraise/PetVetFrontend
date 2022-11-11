import React from "react";
import ProductPageLayout from "../../components/layouts/ProductPageLayout";
import styled from "styled-components";
import TopDealsCircle from "../../components/homepage/TopDealsCircle";
import bag from "../../assets/bag.png";
import style from "../../assets/style.png";
import pipe from "../../assets/pipe.png";
import shoes from "../../assets/shoe-pair.png";
import watch from "../../assets/watch.png";
import bluetooth from "../../assets/bluetooth.png";
import tablet from "../../assets/tablet.png";
import phone from "../../assets/phone.png";
import searchIcon from "../../assets/search.svg";

export const Wrapper = styled.div`
margin-top: 129px;
@media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
    margin-top: 199px;
  }
  .main {
    margin: 20px;
  }
  .grid {
    display: grid;
	justify-items: center;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(229px, 1fr));
  }
  .category-title{
	  font-size: 30px;
	  margin-bottom: 30px;
  }
`;
const topdeals = [
  {
    id: 1,
    name: "Trendy Collections",
    img: shoes,
  },
  {
    id: 2,
    name: "Stay Connected",
    img: phone,
  },
  {
    id: 3,
    name: "Build as you go",
    img: pipe,
  },
  {
    id: 4,
    name: "Splash Sales",
    img: watch,
  },
  {
    id: 5,
    name: "Style-up Closet",
    img: style,
  },
  {
    id: 6,
    name: "Chasing the Bag",
    img: bag,
  },
  {
    id: 7,
    name: "Best in Class",
    img: bluetooth,
  },
  {
    id: 8,
    name: "Digital to the World",
    img: tablet,
  },
  {
    id: 9,
    name: "Style-up Closet",
    img: style,
  },
  {
    id: 10,
    name: "Chasing the Bag",
    img: bag,
  },
  {
    id: 11,
    name: "Best in Class",
    img: bluetooth,
  },
  {
    id: 12,
    name: "Digital to the World",
    img: tablet,
  },
];
function TopDeals(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = topdeals.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Wrapper>
      <ProductPageLayout
        searchInput={
          <div class="search-box-area">
            <div className="flex">
              <div class="search-box">
                <input
                  type="text"
                  name="search"
                  id="search7"
                  placeholder="Search Products..."
                  value={searchTerm}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">
                <img src={searchIcon} alt="search" />
              </button>
              </div>

          </div>
        }
      >
		  <div className="main">
			  <h1 className="category-title bold">TOP DEALS</h1>
		  <div className="grid ">
          {searchResults.map((item) => (
            <TopDealsCircle
              img={<img src={item.img} alt="shoes" />}
              title={item.name}
            />
          ))}
        </div>
		  </div>
      
      </ProductPageLayout>
    </Wrapper>
  );
}

TopDeals.propTypes = {};

export default TopDeals;

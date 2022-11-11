import React from "react";
import ProductPageLayout from "../../components/layouts/ProductPageLayout";
import unlove from "../../assets/unlove.svg";
import cart from "../../assets/cartIcon.svg";
import styled from "styled-components";
import ProductCard from "../../components/common/ProductCard";
import { useAPI } from "../../context/apiContext";
import searchIcon from "../../assets/search.svg";

export const Wrapper = styled.div`
margin-top: 129px;
@media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) 
{
  margin-top: 199px;
}
  .main {
    margin: 20px;
  }
  .grid {
    display: grid;
	grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(229px, 1fr));
  }
  .category-title{
	  font-size: 30px;
	  margin-bottom: 30px;
  }
`;

function Phones_Accessories(props) {


  const [value, setValue] = React.useState("");

  const { data, isLoading } = useAPI();
  const items = data && data;

  console.log(data &&data)
  // search function
  function search(records) {
    return (
      items &&
      items.filter(
        (item) =>
          item.title.toLowerCase().indexOf(value) > -1 ||
          item.category.toLowerCase().indexOf(value) > -1 ||
          (item.price &&
            item.price.toString().toLowerCase().indexOf(value) > -1)
      )
    );
  }

  const filteredData = search(items);

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
                  id="search6"
                  placeholder="Search Products..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
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
        <h1 className="category-title bold">PHONES & ACCESSORIES</h1>
        <div className="grid">
          {!isLoading ? (
            <>loading...</>
          ) : (
            filteredData.map((item) =>
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
            )
          )}
        </div>
     
        </div>
      
      </ProductPageLayout>
    </Wrapper>
  );
}

Phones_Accessories.propTypes = {};

export default Phones_Accessories;

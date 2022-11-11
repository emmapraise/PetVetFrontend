import styled from "styled-components";

export const Wrapper = styled.div`
  .fixed-navbar {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;
  }
  .see-more {
    margin: 10px;
    justify-content: flex-end;
  }
  .see-more a {
    font-family: OpenSans;
    font-size: 14px;
    color: ${(props) => props.theme.color.ui_01};
  }
  .see-more-white a {
    color: ${(props) => props.theme.color.white};
  }
  .see-more a:hover {
    text-decoration: underline;
  }
  .select select {
    font-size: 15px;
    border-radius: 5px;
    border: 0;
    outline: 0;
    background-color: ${(props) => props.theme.color.white};
    padding: 5px;
    color: ${(props) => props.theme.color.ui_01};
    height: 39px;
  }
  section.search {
    background: rgba(173, 130, 227, 0.29);
    padding: 24px;
    height: 102px;
  }
  #search-form {
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 10px;
    width: 332px;
    height: 45px;
    padding: 14px 17px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 10px;
    }
  }
  #search-form:focus {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  }
  #search-form::placeholder {
    font-size: 15px;
    line-height: 19px;
    font-family: OpenSans;
    color: ${(props) => props.theme.color.gray4};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 10px;
    }
  }
  .search .orange-btn {
    font-size: 18px;
    line-height: 22px;
    background-color: ${(props) => props.theme.color.ui_01};
    height: 45px;
    border: none;
    border-radius: 10px;
    font-size: 13px;
    font-weight: bold;
    font-family: OpenSans;
    width: 91px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    outline: none;
    color: ${(props) => props.theme.color.white};
  }

  section.cyan-bg {
    padding: 0 0 20px 0px;
    margin-top: 59px;

  }
  .carousel-container {
    margin-bottom:60px;
    // height: 70vh

   }
  .dotd-heading,
  .td-heading,
  .hd-heading {
    border-bottom: 2px solid #FE5F1A;
    border-bottom: 2px solid ${(props) => props.theme.color.dark};
        margin: 0 20px;
  }
  .dotd-heading {
    background-color: ${(props) => props.theme.color.white};
  }
  .compact{
    width: fit-content;
    background-color: ${(props) => props.theme.color.dark};
    padding: 5px 10px;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

  }
  .dotd-heading .red,
  .td-heading .text,
  .hd-heading .text {
    font-size: 20px;
    line-height: 29px;
    color: #fff;
  }
  .dotd-cards {
    margin: 50px 20px;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .dotd-cards::-webkit-scrollbar {
    height: 0px;
  }

  /* .dotd-cards::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .dotd-cards::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.ui_01};
    outline: 0;
  } */
  .dotd-heading .gray {
    font-size: 15px;
    line-height: 22px;

    color: #878787;
  }
  .deal-of-the-day .scroll {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    min-width: 850px;
    justify-items: center;
    padding: 20px 0;
  }
  .td-circles {
    margin: 20px;
    background-color: ${(props) => props.theme.color.ui_01};
    padding: 10px;
    border-radius: 5px;
  }
  .td-circles .grid {
    grid-gap: 20px;
    justify-items: center;

    grid-template-columns: repeat(auto-fill, minmax(279px, 1fr));
  }

  .top-deals .text,
  .hot-deals .text {
    color: ${(props) => props.theme.color.white};
  }


`;

export const CardCategory = styled.div`
  margin: 24px 20px;
  .categories {
    background-color: ${(props) => props.theme.color.white};
    margin-bottom: 24px;
  }
  .categories .scrolly {
    padding: 20px 30px;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .categories .scrolly::-webkit-scrollbar {
    height: 0px;
  }

  /* .categories .scrolly::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .categories .scrolly::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.ui_01};
    outline: 0;
  } */
  .categories .content {
    width: 100%;
    grid-gap: 60px;
    min-width: 850px;
    align-items: flex-start;
    justify-items: center;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      grid-gap: 20px;
    }
  }
  .categories .title {
    padding: 12px 0 5px 8px;
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.theme.color.black2};
    border-bottom: 1px solid ${(props) => props.theme.color.gray3};
  }


`;
import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import DashboardLayout from "../../components/layouts/DashboardLayout";

const Wrapper = styled.div`
  .greet {
    color: ${(props) => props.theme.color.dark};
    margin: 10px 0 40px 0;
  }
  main {
    background-color: ${(props) => props.theme.color.ui_02};
  }
  table{
	  width: 100%;
  }

  td {
    padding: 15px 0 0 0;
  }
  .earned{
	background-color: ${(props) => props.theme.color.blue};
width: fit-content;
margin: 15px auto;
padding: 15px;
border-radius: 6px;

  }
 
  .earned .amount{
	  margin-left: 30px;
	color: ${(props) => props.theme.color.white}; 
  }
  .wine {
    color: #a95835;
  }
  .copier{
	  margin: 30px 0;
  }
  .copier input{
	  border: none;
	  outline: none;
	  padding: 0 10px;
	  height: 40px;
	  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	color: ${(props) => props.theme.color.white}; 
	background-color: ${(props) => props.theme.color.dark};
width: 78%;
  }
  .copier button{
	border: none;
	  outline: none;
	  padding: 0 10px;
	  width: 15%;
	  border-top-right-radius: 6px;
	  border-bottom-right-radius: 6px;
	  height: 40px;
	  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	color: ${(props) => props.theme.color.white}; 
	background-color: ${(props) => props.theme.color.ui_01};
	@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: auto;
    }
  }
`;
function Referrals(props) {
	const [referrralLink] = React.useState("www.https://etsea.com/JamesJoe123");
	const [referrralBtn, setReferrralBtn] = React.useState("Copy");
	const referralRef = React.useRef(null);

	function copyToClipboard(e) {
		referralRef.current.select();
	  document.execCommand('copy');
	  // This is just personal preference.
	  // I prefer to not show the whole text area selected.
	  e.target.focus();
	  setReferrralBtn('Copied!');
	};
  
  return (
    <Wrapper>
      <DashboardLayout navText="My Referrals">
		  <p className="info bold">Share your referral link to people. Remember, you earn X% from every transaction your refferals make </p>
		  <div className="copier flex">
			  <input ref={referralRef} type="text" name="referrralLink"  value={referrralLink}
        />
		 <button onClick={copyToClipboard}>{referrralBtn}</button> 
		  </div>
        <div className="earned flex">
			<p className="text bold">Rewards Earned</p>
			<p className="amount">NGN 200,000</p>
		</div>
        <div className="scrolly">
          <table>
            <tr>
              <th>My Referrals</th>
              <th className="wine">Registration Date</th>
            </tr>
            <tr>
              <td>Seun Adekunle</td>
              <td>12/12/2021</td>
             
            </tr>
            <tr>
              <td>Dung Jessica</td>
              <td>12/12/2021</td>
            
            </tr>
          </table>
        </div>
      </DashboardLayout>
    </Wrapper>
  );
}

Referrals.propTypes = {};

export default Referrals;

import React from "react";
// import PropTypes from "prop-types";
import DarkNavBar from "../../components/common/DarkNavBar";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Modal from "../../components/common/Modal";
import back from "../../assets/backOrange.svg";
import kite from "../../assets/kite.png";
import imagePlaceholder from "../../assets/bi_image.png";
import mark from "../../assets/mark.png";

const Wrapper = styled.div`
  background: #e2ebfa;
  min-height: 100vh;
  main {
    padding: 30px;
    width: 80%;
    margin: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
      width: 100%;
    }
  }
  .main-content {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
	padding: 30px 0;
  }
  .direct {
    color: ${(props) => props.theme.color.ui_01};
  }
  .direct img {
    width: 120px;
  }
  .account {
    margin: 25px 0 45px 0;
  }
  .account .flex {
    margin-bottom: 5px;
  }
  .account .value {
    color: #b71d1d;
    margin-left: 20px;
  }
  .proof .ash {
    font-size: 15px;
	cursor: pointer;
    color: ${(props) => props.theme.color.gray7};
  }
  button.blue {
    width: 190px;
    margin-top: 20px;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.blue};
    border: 1px solid ${(props) => props.theme.color.blue};
  }
  button.blue:hover {
    background-color: #fff;
    color: ${(props) => props.theme.color.blue};
    border: 1px solid ${(props) => props.theme.color.blue};

    transition: 0.3s;
  }
  .upload {
    margin: 20px 0;
    padding: 10px 0px;

    border-bottom: 2px solid ${(props) => props.theme.color.gray3};
  }
  .proof .bg {
    width: 80%;
    margin: auto;
    background-size: contain;
    background-position: center;
    height: 200px;
    background-repeat: no-repeat;
  }
  #upload-photo {
    display: block;
    left: 0;
    opacity: 0;
    width: -webkit-fill-available;
    position: absolute;
    z-index: -1;
  }
`;
function DirectDeposit(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedFile, setSelectedFile] = React.useState();
  const [preview, setPreview] = React.useState();

  // create a preview as a side effect, whenever selected file is changed
  React.useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  return (
    <Wrapper>
      <DarkNavBar
        backTo={
          <Link to="/checkout">
            <img src={back} alt="back" />
          </Link>
        }
        pageName={<p className="cart-text">Direct Bank Deposit</p>}
      />
      <div className="flex main-content">
        <Link to="/" className="flex direct">
          <img src={kite} alt="kite" />
        </Link>
        <div className="account">
          <div className="flex j-btw">
            <p className="key">Account Name -</p>
            <p className="value bold">Etsea International </p>
          </div>

          <div className="flex j-btw">
            <p className="key">Account Number -</p>
            <p className="value bold">2033033321</p>
          </div>
          <div className="flex j-btw">
            <p className="key">Bank Name -</p>
            <p className="value bold">Zenith Bank </p>
          </div>
        </div>

        <div className="proof">
          <label for="upload-photo" className="ash">
            Click to Upload proof of payment
          </label>
          <input
		   accept="image/*"
            type="file"
            name="photo"
            onChange={onSelectFile}
            id="upload-photo"
          />
          <div className="upload">
            <div
              className="bg"
              style={{
                backgroundImage: `url(${
                  selectedFile ? preview : imagePlaceholder
                })`,
              }}
            ></div>
          </div>
          <Modal
            onClose={handleClose}
            open={open}
            trigger={
              <button className="blue btn" onClick={handleOpen}>
                Submit
              </button>
            }
            body={
              <div className="upload-success flex">
                <p>Upload Successful</p>
                <img src={mark} alt="mark" />
                <Link to="#">
                  <button className="green">Go to My Purchases</button>
                </Link>
              </div>
            }
          />
        </div>
      </div>
    </Wrapper>
  );
}

DirectDeposit.propTypes = {};

export default DirectDeposit;

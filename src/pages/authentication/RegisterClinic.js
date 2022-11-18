import React from 'react';
// import PropTypes from "prop-types";
import authbg from '../../assets/authbg.png';
import kite from '../../assets/kite.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import emailIcon from '../../assets/email.svg';

import InputField from '../../components/common/input/InputField';
import CheckboxInput from '../../components/common/input/CheckboxInput';
import TextArea from '../../components/common/input/TextArea';
import Tag from '../../components/common/input/Tag';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

const Wrapper = styled.div`
	/* min-height: 100vh; */
	padding: 30px 0;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
		padding: 10px;
	}
	.auth-main {
		box-shadow: 0 0 16px #ccc;
		width: 80%;
		display: grid;
		margin: auto;
		grid-template-columns: 40% 60%;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
			grid-template-columns: 1fr;
			width: 90%;
		}
	}
	.block {
		display: block;
		width: 100%;
	}
	.abs-back {
		position: absolute;
		color: #fff;
		font-size: 12px;
		top: 10px;
		left: 10px;
	}
	.lhs {
		position: relative;
		background-size: cover;
		height: 673px;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url(${authbg});
		@media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
			height: 300px;
		}
	}
	.already {
		color: ${(props) => props.theme.color.white};
		font-family: poppins;
	}
	.already:hover {
		text-decoration: underline;
		transition: 0.3s;
	}
	.lhs-content {
		width: 95%;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.lhs-content .log-btn button {
		margin-top: 15px;
		background-color: ${(props) => props.theme.color.dark};
		outline: none;
		padding: 5px 32px;
		color: ${(props) => props.theme.color.white};
		cursor: pointer;
		border: 1px solid ${(props) => props.theme.color.white};
	}
	.button button {
		margin-top: 15px;
		background-color: ${(props) => props.theme.color.dark};
		outline: none;
		width: 100%;
		padding: 10px;
		color: ${(props) => props.theme.color.white};
		border: 1px solid ${(props) => props.theme.color.dark};
	}
	.button button:hover {
		transition: 0.3s;
		background-color: ${(props) => props.theme.color.white};
		color: ${(props) => props.theme.color.ui_01};
		border: 1px solid ${(props) => props.theme.color.ui_01};
	}
	.check-label {
		color: ${(props) => props.theme.color.gray7};
		margin-bottom: 0;
		font-family: 'OpenSans';
		font-size: 13px;
	}
	.lhs-content .log-btn button:hover {
		background-color: ${(props) => props.theme.color.white};
		color: ${(props) => props.theme.color.dark};
		transition: 0.3s;
	}
	.lhs-content img {
		width: 100px;
		margin-bottom: 15px;
	}
	.rhs {
		padding: 15px;
	}
	.rhs .log-title {
		font-size: 25px;
	}
	.rhs .msg {
		margin-top: 5px;
		font-size: 14px;
		color: ${(props) => props.theme.color.ui_01};
		font-family: 'Poppins';
	}
	.input-container {
		margin: 20px 0;
	}
	.row-input {
		margin-bottom: 30px;
	}
	.sub-grid {
		grid-template-columns: 1fr 1fr;
		grid-gap: 30px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
			grid-template-columns: 1fr;
		}
	}
`;
function Register({ layout }) {
  const [isLoading, setIsLoading] = useState(true)
  const [setError] = useState(null)
	const [values, setValues] = useState({
		bisName: '',
		description: '',
		phoneNumber: '',
		email: '',
		address: '',
		city: '',
		price: '',
    services: [],
	});

  const [services, setServices] = useState([ ]);

  useEffect(() => {
    axios
    .get(`http://localhost:8282/api/specialty/all`)
    .then((response) => {
      setIsLoading(true)
      setServices(response.data)
      console.log(services);
    })
    .catch((error) => {
      setError(error)
      console.error(error);
    });

  }, [])
  

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
		console.log();
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const [state, setState] = React.useState({
		agree: false,
	});
	const { agree } = state;

	const handleCheckbox = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<Wrapper className="flex">
			<div className={`${layout ? layout : 'auth-main'}`}>
				{layout ? (
					''
				) : (
					<div className="lhs">
						
						<div className="lhs-content">
							<Link to="/">
								<img src={kite} alt="kite" />
							</Link>
							<div className="already">Visit Your Dashboard?</div>
							<Link to="/dashboard" className="log-btn">
								<button type="button">Dashboard</button>
							</Link>
						</div>
					</div>
				)}

				<div className="rhs">
					<p className="bold log-title">Register Vet Clinic</p>
					<p className="msg">
						Register your Vet Clinic here and stay connected
					</p>
					<div className="input-container">
						<div className="row-input sub-grid grid">
							<InputField
								label="Business Name"
								value={values.bisName}
								onChange={handleChange('bisName')}
							/>
							<InputField
								label="Email"
								type="email"
								value={values.email}
								onChange={handleChange('email')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											edge="end"
										>
											<img src={emailIcon} alt="emailIcon" />{' '}
										</IconButton>
									</InputAdornment>
								}
							/>
						</div>
						<div className="row-input sub-grid grid">
							<InputField
								label="Phone Number"
								type="number"
								value={values.phoneNumber}
								onChange={handleChange('phoneNumber')}
							/>

							<InputField
								label="Price"
								type="number"
								value={values.price}
                startAdornment={<InputAdornment position='start'>₦</InputAdornment>}
								onChange={handleChange('price')}
							/>
						</div>

						<div className="row-input sub-grid grid">
              
              <Tag 
              label="Services"
              placeholder="Services"
              options={services}
              />

              <Button variant='contained' component='label'>
                Upload Business Image
                <input hidden accept="image/*" multiple type="file" />
              </Button>

						</div>
						<div className="row-input sub-grid grid">
							<TextArea
								label="Description"
								value={values.description}
								onChange={handleChange('description')}
							/>
              <TextArea
								label="Address"
								value={values.address}
								onChange={handleChange('address')}
							/>

						</div>
						<div className="row-input flex">
							<CheckboxInput
								checked={agree}
								onChange={handleCheckbox}
								name="agree"
							/>
							<p className="check-label">
								I agree to Pet Vet Terms & Condition{' '}
							</p>
						</div>
						<div className="button">
							<button type="button">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

Register.propTypes = {};

export default Register;

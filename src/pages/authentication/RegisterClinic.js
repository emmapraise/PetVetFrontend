import React from 'react';
// import PropTypes from "prop-types";
import authbg from '../../assets/authbg.png';
import kite from '../../assets/kite.png';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import emailIcon from '../../assets/email.svg';
import padlock from '../../assets/padlock.svg';

import InputField from '../../components/common/input/InputField';
import CheckboxInput from '../../components/common/input/CheckboxInput';
import TextArea from '../../components/common/input/TextArea';
import Tag from '../../components/common/input/Tag';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

const Wrapper = styled.div`
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
	const [isLoading, setIsLoading] = useState(true);
	const [setError] = useState(null);
	const [values, setValues] = useState({
		firstName: '',
		lastName:'',
		password:'',
		name: '',
		description: '',
		phone: '',
		email: '',
		address: '',
		coverImage: null,
		city: '',
		price: '',
		services: [],
	});
	const history = useHistory();

	const [services, setServices] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:8282/api/specialty/all`)
			.then((response) => {
				setIsLoading(true);
				setServices(response.data);
				setIsLoading(false);
				console.log(services);
			})
			.catch((error) => {
				setError(error);
				console.error(error);
			});
	}, []);
	const newServices = [values.services];
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

	const handleSubmit = async () => {
		// delete values.showPassowrd;
		// delete values.password2;
		
		console.log(values);
		// try {
		// 	const response = await axios.post(`owner`, values, {
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 	});
		// 	console.log(response.data);
		// 	history.push('/sent');
		// } catch (error) {
		// 	console.log(error);
		// }
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
							<div className="already">Already have an Account?</div>
							<Link to="/login" className="log-btn">
								<button type="button">Login</button>
							</Link>
						</div>
					</div>
				)}

				<div className="rhs">
					<p className="bold log-title">Register Vet Clinic</p>
					<p className="msg">
						Register your Vet Clinic here and stay connected
					</p>
					<form>
						<div className="input-container">
							<div className="row-input sub-grid grid">
								<InputField
									label="First Name"
									value={values.firstName}
									required={true}
									onChange={handleChange('firstName')}
								/>
								<InputField
									label="Last Name"
									value={values.lastName}
									required={true}
									onChange={handleChange('lastName')}
								/>
							</div>
							<div className="row-input sub-grid grid">
								<InputField
									label="Password"
									required={true}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												<img src={padlock} alt="padlock" />{' '}
											</IconButton>
										</InputAdornment>
									}
									type={values.showPassword ? 'text' : 'password'}
									value={values.password}
									onChange={handleChange('password')}
								/>

								<InputField
									label="Confirm Password"
									required={true}
									type={values.showPassword ? 'text' : 'password'}
									value={values.password2}
									onChange={handleChange('password2')}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												<img src={padlock} alt="padlock" />{' '}
											</IconButton>
										</InputAdornment>
									}
								/>
							</div>
							<div className="row-input sub-grid grid">
								<InputField
									label="Business Name"
									required={true}
									value={values.name}
									onChange={handleChange('name')}
								/>
								<InputField
									label="Email"
									type="email"
									required={true}
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
									required={true}
									value={values.phone}
									onChange={handleChange('phone')}
								/>

								<InputField
									label="Price"
									type="number"
									required={true}
									value={values.price}
									startAdornment={
										<InputAdornment position="start">₦</InputAdornment>
									}
									onChange={handleChange('price')}
								/>
							</div>

							<div className="row-input sub-grid grid">
								<Tag
									label="Services"
									placeholder="Services"
									options={services}
									value={values.services}
									onChange={(_, value) =>
										setValues({ ...values, services: value.map((item) => item.id) })
									}
								/>

								<Button variant="contained" component="label">
									Upload Business Image
									<input
										hidden
										accept="image/*"
										multiple
										type="file"
										onChange={handleChange('coverImage')}
									/>
								</Button>
							</div>
							<div className="row-input sub-grid grid">
								<TextArea
									label="Description"
									required={true}
									value={values.description}
									onChange={handleChange('description')}
								/>
								<TextArea
									label="Address"
									required={true}
									value={values.address}
									onChange={handleChange('address')}
								/>
							</div>
							<div className="row-input flex">
								<CheckboxInput
									checked={agree}
									required={true}
									onChange={handleCheckbox}
									name="agree"
								/>
								<p className="check-label">
									I agree to Pet Vet Terms & Condition{' '}
								</p>
							</div>
							<div className="button">
								<button type="button" onClick={handleSubmit}>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Wrapper>
	);
}

Register.propTypes = {};

export default Register;

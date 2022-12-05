import React, { useState, useEffect } from 'react';
// import PropTypes from "prop-types";
import authbg from '../../assets/authbg.png';
import kite from '../../assets/kite.png';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import padlock from '../../assets/padlock.svg';
import emailIcon from '../../assets/email.svg';
import axios from 'axios';
import SelectInput from '../../components/common/input/SelectInput';

import InputField from '../../components/common/input/InputField';
import CheckboxInput from '../../components/common/input/CheckboxInput';
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
function AddPet({ layout }) {
	const [values, setValues] = useState({
		name: '',
		birthdate: '',
		categoryName: '',
	});

	const [data, setData] = useState([]);
	const history = useHistory();

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};
	const userId = localStorage.getItem('userId');

	const handleNewPet = async () => {
		const postData = { name: values.name, birthdate: values.birthdate };
		const response = await axios.post(
			`pet/owner/${userId}/category/${values.categoryName}`,
			postData,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		console.log(response.data);
		history.push('/pets');
	};
	useEffect(() => {
		try {
			const getPetType = async () => {
				const response = await axios.get(`pet_category/all`);

				setData(response.data);
				console.log(response.data);
			};
			getPetType();
		} catch (error) {
			console.error(error);
		}
	}, []);
	const option = data.map((item) => {
		return {
			value: item.name,
			text: item.name,
		};
	});

	return (
		<Wrapper className="flex">
			<div className={`${layout ? layout : 'auth-main'}`}>
				{layout ? '' : <></>}

				<div className="rhs">
					<p className="bold log-title">Add New Pet</p>
					<div className="input-container">
						<div className="row-input sub-grid ">
							<InputField
								label="Name"
								value={values.name}
								onChange={handleChange('name')}
							/>
						</div>
						<div className="row-input sub-grid">
							<InputField
								label="BirthDate"
								type="date"
								value={values.birthdate}
								onChange={handleChange('birthdate')}
							/>
						</div>
						<div className="row-input sub-grid">
							<SelectInput
								label="Pet Category"
								options={option}
								value={values.categoryName}
								onChange={handleChange('categoryName')}
							/>
						</div>
						<div className="button">
							<button type="button" onClick={handleNewPet}>
								Add Pet
							</button>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

AddPet.propTypes = {};

export default AddPet;

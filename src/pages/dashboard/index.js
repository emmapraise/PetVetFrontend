import React, { useEffect, useState } from 'react';
// import PropTypes from "prop-types";
import styled from 'styled-components';
import whiteKite from '../../assets/whiteKite.png';
import wallet from '../../assets/wallet.png';
import calenderBookings from "../../assets/calendar-svgrepo-com.svg";
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { Link } from 'react-router-dom';
import axios from "axios"
import Loading from '../../components/common/Loading';

const Wrapper = styled.div`
	.greet {
		margin: 10px 0 40px 0;
	}
	main {
		background-color: ${(props) => props.theme.color.ui_02};
	}
	.grid {
		grid-gap: 25px;
		grid-template-columns: 1fr 1fr;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
			grid-template-columns: 1fr;
		}
	}
	.big-cards .big-card.first {
		background-color: ${(props) => props.theme.color.bg_04};
	}

	.big-cards .big-card.second {
		background: #974343;
	}
	.elevate .image.flex {
		justify-content: center;
	}
	.elevate .image img {
		width: 120px;
		height: 89px;
	}
	.amount {
		justify-content: flex-end;
	}
	.elevate {
		padding: 15px 20px;
		box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
			0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 28%);
	}
	p.text {
		margin: 10px 0;
		color: ${(props) => props.theme.color.white};
	}
	.big-card {
		height: 73%;
	}
	.small-card {
		height: 27%;
	}
	.small-card.first {
		background: rgba(20, 102, 113, 0.86);
	}
	.small-card.second {
		background-color: ${(props) => props.theme.color.dark};
	}
	.purchase-lists {
		margin-top: 30px;
		background-color: ${(props) => props.theme.color.dark};
		padding: 10px;
		box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
			0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
	}
	.purchase-lists .title {
		margin: 0 0 25px 0;
		color: ${(props) => props.theme.color.ui_07};
	}
	.purchase-list {
		width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
	}
	.purchase-list::-webkit-scrollbar {
		height: 2px;
	}

	.purchase-list::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	.purchase-list::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.color.bg_04};
		outline: 0;
	}
	.purchase-list .scroll {
		grid-gap: 20px;
		min-width: 800px;
	}
	.purchase-list .item {
		min-width: 200px;
		height: 200px;
		background-color: ${(props) => props.theme.color.white};
	}
`;


function Dashboard(props) {

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true)
	const user = JSON.parse(localStorage.getItem("user"));

	useEffect(async () => {
		setIsLoading(true)
		try{
			const response = await axios.get(`/dashboard/user/${user.id}`)
			setData(response.data)
			console.log(response.data)
			setIsLoading(false)
		} catch (error){
			console.error(error)
		}
	}, [setData])

	return (
		<Wrapper>
			{isLoading ? (
				<Loading />
			): (

			<DashboardLayout navText="My Dashboard">
				<p className="greet bold">Hello, {user.firstName} {user.lastName}</p>
				<div className="grid big-cards">
					<div>
						{' '}
						<Link to="/appointments">
							<div className="big-card elevate first">
								<div className="image flex">
									<img src={whiteKite} alt="" />
								</div>
								<p className="text bold">Pets</p>
							</div>
						</Link>
						<Link to="/pets">
							<div className="small-card elevate first j-btw flex j-btw">
								<p className="text bold">My Pets</p>
								<p className="text ">{data.petCount}</p>
							</div>
						</Link>
					</div>
					<div>
						<Link to="/wallet">
							<div className="big-card elevate second">
								<div className="image flex">
									<img src={calenderBookings} alt="" />
								</div>
								<p className="text bold">Appointments</p>
								<div className="flex amount">
									<p className="text"></p>
								</div>
							</div>
						</Link>
						<Link to="/appointments">
							<div className=" small-card elevate second flex j-btw">
								<p className="text bold">Total Appointments</p>
								<p className="text ">{data.appointmentCount}</p>
							</div>
						</Link>
					</div>
				</div>
				

				<div className="purchase-lists">
					<p className="title bold">My Pets</p>
					<div className="purchase-list">
						<div className="scroll flex">
							<div className="item">
								<img
									src="https://res.cloudinary.com/ddxyjg96x/image/upload/v1668761087/PetVet/istockphoto-1320018473-170667a.jpg"
									alt="Pet"
								/>
							</div>
						</div>
					</div>
				</div>
			</DashboardLayout>
			)}

		</Wrapper>
	);
}

Dashboard.propTypes = {};

export default Dashboard;

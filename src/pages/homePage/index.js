import React, { useState } from 'react';
import { useAPI } from '../../context/apiContext';
import searchIcon from '../../assets/search.svg';
import unlove from '../../assets/unlove.svg';
import cart from '../../assets/cartIcon.svg';
import NavBar from '../../components/common/NavBar';
import ProductCard from '../../components/common/ProductCard';
import Footer from '../../components/common/Footer';
import { Wrapper } from './style';
import { CardCategory } from './style';
import CarouselSlide from '../../components/homepage/CarouselSlide';
import Modal from '../../components/common/Modal';
import Register from '../authentication/Register';
import Login from '../authentication/Login';
import { withRouter } from 'react-router-dom';

function HomePage(props) {
	const { data, isLoading } = useAPI();
	const items = data && data;

	const [q, setQ] = useState('');

	const [searchParam] = useState(['category', 'title', 'price']);
	const [filterParam, setFilterParam] = useState(['All']);

	function search(items) {
		return (
			items &&
			items.slice(0, 40).filter((item) => {
				if (item.category == filterParam) {
					return searchParam.some((newItem) => {
						return (
							item[newItem] &&
							item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) >
								-1
						);
					});
				} else if (filterParam == 'All') {
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

				<div className="hot-deals">
					{/* <CardsCategory */}
					{!isLoading ? (
						<>loading...</>
					) : (
						<CardCategory className="wrapper">
							<div className="cat1 categories">
								<div className=" scrolly">
									<div className="flex content">
										{items.map((item) => (
											<ProductCard
												to={item.id}
												key={item.id}
												bg={item.coverImage}
												pName={item.name}
												price={parseInt(item.price)}
												like={unlove}
												addToCart={cart}
											/>
										))}
									</div>
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

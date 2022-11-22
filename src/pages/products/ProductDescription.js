import React, { useState, useEffect } from 'react';
import {useFormik} from 'formik'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, useParams } from "react-router-dom";
import ProductPageLayout from '../../components/layouts/ProductPageLayout';
import styled from 'styled-components';
import view from '../../assets/view.png';
import mark from '../../assets/spec.png';
import InputField from '../../components/common/input/InputField';
import SelectInput from '../../components/common/input/SelectInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLocationDot,
	faPhone,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export const Wrapper = styled.div`
  margin-top: 129px;
  margin-bottom: 50px;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
    margin-top: 143px;
  }
  .main-content {
    padding: 0 20px;
  }
  .main-content .gridy {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
  .price {
    padding: 15px 0;
    font-size: 20px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray6};
  }
  .description {
    color: ${(props) => props.theme.color.gray7};
    padding: 15px 0;
    font-family: "Poppins";
    font-size: 15px;
  }
  .views {
    margin: 0 0 40px 0;
    padding: 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px;
  }
  .product-views {
    overflow-x: auto;
    overflow-y: hidden;

}
.product-views::-webkit-scrollbar {
    height: 2px;
  }

  .product-views::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .product-views::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.ui_01};
    outline: 0;
  }

  
  .product-views  img{
    width: 200px;

  }
  .specification .spec {
    margin: 10px 0;
  }
  .specification {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 0 16px #ccc;
    padding: 10px;
  }
  .buttons {
    width: 70%;
    margin: auto;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 100%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      display: grid;
      text-align: center;
      /* width: 98%; */
      grid-gap: 20px;
      justify-items: center;
      justify-content: center;
    }
  }
  .buttons button {
    color: ${(props) => props.theme.color.ui_01};
    height: 32px;
    border: 0;
    outline: 0;
    border-radius: 10px;
    padding: 10px 30px;
    justify-content: center;
    font-size: 14px;
    line-height: 10px;
    font-family: OpenSans;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px,
      rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px;
  }
  .buttons button.orange {
    background-color: ${(props) => props.theme.color.ui_01};
    color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.ui_01};
  }
  .buttons button:hover {
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.ui_01};
    transition: 0.3s;
  }
  .buttons button.orange:hover {
    color: ${(props) => props.theme.color.ui_01};
  }
  .spec-list {
    margin-bottom: 10px;
    font-family: poppins;
  }
  .spec-list img {
    margin-right: 7px;
    width: 20px;
  }

  .checker-item {
    align-items: center;
    height: auto;
    /* max-height: 182px; */
    margin-bottom: 24px;
`;

const productView = [
	{
		id: 1,
		view,
	},
	{
		id: 2,
		view,
	},
	{
		id: 3,
		view,
	},
	{
		id: 4,
		view,
	},
];


function ProductDescription({ match }) {
	// Initialize state
	const [data, setData] = useState([]);
	const [coverImage, setCoverImage] = useState([]);
	const [specialties, setSpecialties] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [setError] = useState(null);
  const [pets, setPets] = useState([]);
	const [values, setValues] = useState({
		pet: null,
		date: '',
		time: '',
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("The values are ", values.pet);
		axios.post(`http://localhost:8282/api/appointment/vet/${match.params.id}/pet/${values.pet}`)
	}

	const {setFieldValue}= useFormik({
		initialValues: {
			id: null,
			date: null
		},
		onSubmit(){
			
		}
	})

	useEffect(() => {
		axios
			.get(`http://localhost:8282/api/vet/${match.params.id}`)
			.then((response) => {
				setIsLoading(true);
				setData(response.data);
				setSpecialties(response.data.specialties);
				setCoverImage(response.data.coverImage)
			})
			.catch((error) => {
				setError(error);
			});
	}, []);

  useEffect(() => {
    axios
    .get(`http://localhost:8282/api/pet/all`)
    .then((response) => {
      setIsLoading(true);
      setPets(response.data);
    })
    .catch((error) => {
      console.log(error);
      setError(error);
    });
  }, []);

  const optionPet = pets.map((pet) => {
	return {
		'value': pet.id,
		'text': pet.name 
	}
  })
  

	return (
		<Wrapper>
			<ProductPageLayout>
				<div className="main-content">
					{!isLoading ? (
						<>loading...</>
					) : (
						<div className="grid gridy">
							<div>
								<img src={coverImage.path} alt={data.name} />
								<h1 className="title bold">{data.name}</h1>
								<p className="price">₦{data.price} per session</p>
								<p className="description">{data.description}</p>
							</div>

							<div className="product-details">
								<div className="views">
									<h4 className="bold">Address</h4>
									<p>
										<FontAwesomeIcon icon={faLocationDot} /> {data.address}
									</p>
									<p> 
										<FontAwesomeIcon icon={faPhone} />{' '}
										<a href={`tel:+234${data.phone}`}>{data.phone}</a>{' '}
									</p>
									<p>
										<FontAwesomeIcon icon={faEnvelope} />{' '}
										<a href={`mailto:${data.email}`}>{data.email}</a>
									</p>
								</div>

								<div className="specification checker-item">
									<h4 className="bold spec">Services offered</h4>
									<div className="spec-details">
                  {specialties.map((elem) => (
										<>
											<p className="spec-list flex">
                      <img src={mark} alt="mark" />
                      <span>{elem.name}</span></p>
										</>
									))}
									</div>
								</div>

							<div className="specification">
								<form onSubmit={handleSubmit}>
									<h4 className="bold spec">Book A Session</h4>
									<div className="spec-details">
										<div className="checker-item">
											<label htmlFor="Pet">Choose a Pet</label>
											<div className="select sub-child flex h-100 bordered">
												<SelectInput
												label="Pets"
													options={optionPet}
													value={values.pet}
													onChange={handleChange('pet')}
												/>
											</div>
										</div>
										<div className="checker-item">
										<InputField type="datetime-local"		
										helperText="Book Appointment"
										value={values.date}
										onChange={handleChange('date')}
										/>
										</div>
										
									</div>
									<div className="buttons">
										{/* <Link to="/cart"> */}
											<button className="orange" type="submit">
												Book Appointment
											</button>
										{/* </Link> */}
										{/* <Link to="/">
											<button className="white" type="button">
											Continue Shopping
											</button>
										</Link> */}
									</div>
								</form>
								</div>
							</div>
						</div>
					)}
				</div>
			</ProductPageLayout>
		</Wrapper>
	);
}

ProductDescription.propTypes = {};

export default ProductDescription;

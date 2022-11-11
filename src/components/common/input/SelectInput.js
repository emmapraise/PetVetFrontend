import { MenuItem, Select } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	/* margin-top: 1.5rem; */
	width: 100%;

`;

const SelectInput = ({  onChange, value, options, disabled  }) => {
	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<Select
				className="input"
				value={value === null ? '' : value}
				onChange={handleChange}
			>
				{options &&
					options.map((option, index) => (
						<MenuItem key={index} disabled={option.disabled } value={option.value}>
							{option.text}
						</MenuItem>
					))}
			</Select>
		</Wrapper>
	);
};

SelectInput.propTypes = {
	options: PropTypes.array.isRequired,
	value: PropTypes.any,
	onChange: PropTypes.func.isRequired,
};

export default  SelectInput ;
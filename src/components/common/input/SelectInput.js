import { FormControl, MenuItem, Select } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
.MuiInputLabel-outlined {
    font-size: 15px;
    font-family: "Poppins";
    color: ${(props) => props.theme.color.gray7};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${(props) => props.theme.color.ui_01};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.color.dark};
  }
  .MuiOutlinedInput-input {
    padding: 14px;
  }
  .MuiInputLabel-formControl {
    top: -5px;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiIconButton-edgeEnd {
    margin-right: 0;
  }
`;

const SelectInput = ({  onChange, value, options, disabled, label  }) => {
	// const handleChange = (event) => {
	// 	onChange(event.target.value);
	// };

	return (
		<Wrapper>
			<FormControl variant='outlined' >
			<InputLabel >{label}</InputLabel>
			<Select
				className="input"
				value={value === null ? '' : value}
				onChange={onChange}
			>
				{options &&
					options.map((option, index) => (
						<MenuItem key={index} disabled={option.disabled } value={option.value}>
							{option.text}
						</MenuItem>
					))}
			</Select>
			</FormControl>
		</Wrapper>
	);
};

SelectInput.propTypes = {
	options: PropTypes.array.isRequired,
	value: PropTypes.any,
	onChange: PropTypes.func.isRequired,
};

export default  SelectInput ;
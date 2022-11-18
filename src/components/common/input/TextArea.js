import { FormControl, TextField } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	.MuiInputLabel-outlined {
		font-size: 15px;
		font-family: 'Poppins';
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

function TextArea({ label, onChange, value }) {
	return (
		<Wrapper>
			<TextField
				id="outlined-multiline-static"
				label={label}
				multiline
				rows={4}
				value={value}
				onChange={onChange}
                variant="outlined"
			/>
		</Wrapper>
	);
}
TextArea.prototype = {
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default TextArea;

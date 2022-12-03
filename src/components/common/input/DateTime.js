import { DateTimePicker } from '@mui/x-date-pickers';
import { TextField } from '@material-ui/core';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDaysjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs from 'dayjs';

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

function DateTime() {
	const [value, setValue] = useState();

	const today = new Date().toISOString();

	return (
		<Wrapper>
			<DateTimePicker
				renderInput={(params) => <TextField {...params} />}
				label="Choose Booking Time and Date"
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				minDateTime={dayjs(today)}
			/>
		</Wrapper>
	);
}

export default DateTime;

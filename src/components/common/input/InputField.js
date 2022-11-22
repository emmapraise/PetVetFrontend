import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';

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
function InputField({
  type,
  label,
  endAdornment,
  startAdornment,
  onChange,
  value,
  helperText,
}) {
  return (
    <Wrapper>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          type={type ? type : "text"}
          value={value}
          onChange={onChange}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          labelWidth={70}
        />
                  <FormHelperText id="standard-weight-helper-text">{helperText}</FormHelperText>

      </FormControl>
    </Wrapper>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  endAdornment: PropTypes.object,
  startAdornment: PropTypes.object,
};

export default InputField;

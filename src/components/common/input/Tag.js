import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { Autocomplete } from "@material-ui/lab";
import PropTypes from "prop-types"

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

function Tag({label, placeholder, options}){
    return (
    <Wrapper>
        <Autocomplete
        multiple
        id="tags-standard"
        options={options}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
            <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder={placeholder}
            />
        )}
         />
    </Wrapper>
    );
}
Tag.prototype = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
};
export default Tag;
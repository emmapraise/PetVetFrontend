import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "400px",
    backgroundColor: "#D1E3FF",
    boxShadow: theme.shadows[5],
    outline: "none",
    maxWidth: "90%",
    maxHeight: "80vh",
    overflowY: "scroll",
    },
}));

export default function SimpleModal({ trigger, body, open, onClose }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      {trigger}
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
		 
        <div style={modalStyle} className={classes.paper}>
	
          {body}

        </div>
      </Modal>
    </div>
  );
}

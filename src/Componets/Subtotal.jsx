import React from "react";
import CurrencyFormat from "react-currency-format";
import { getbasketTotal } from "../ContextAPI/Reducer";
import { useStateValue } from "../ContextAPI/StateProvider";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "../Style/Subtotal.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      position: "absolute",
      maxWidth: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

function Subtotal() {
  const [{ basket }] = useStateValue();
  const [{ user }] = useStateValue();

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Purchased</h2>
      <p id="simple-modal-description">
        {user} Thank you for Purchasing from us.
      </p>
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <div className="subtotal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"UGX: "}
      />
      <button type="button" onClick={handleOpen}>
        CHECKOUT
      </button>
    </div>
  );
}
export default Subtotal;

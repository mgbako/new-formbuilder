import FeatherIcon from "feather-icons-react";
import { Aux } from "../../hoc/Auxilary";
import classes from "./FormList.css";
import React from "react";

export const FormList = props => {
  const result = props.forms.map(form => (
    <div className={`shadow ${classes.BankForm}`} key={form.id}>
      <div className={classes.VerticalAlign}>{form.name}</div>
    </div>
  ));
  return (
    <Aux>
      <button
        type="button"
        className="btn bg-secondary btn-md text-light"
        data-toggle="modal"
        data-target="#AddForm"
      >
        <FeatherIcon icon="plus" size="18" className={classes.Icon} />
        New Form
      </button>
      <div className={`row ${classes.Section}`}>{result}</div>
    </Aux>
  );
};

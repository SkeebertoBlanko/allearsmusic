import React, { useContext } from "react";
import Context from "../store/context";

const Form = () => {
  const { state, actions } = useContext(Context);

  return (
    <form action="submit">
      <input
        value={state.value}
        onChange={e =>
          actions({
            type: "setState",
            payload: { ...state, value: e.target.value }
          })
        }
        type="text"
      />
    </form>
  );
};
export default Form;

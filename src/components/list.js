import React, { useContext } from "react";

import Context from "../store/context";

const List = () => {
  const { state, actions } = useContext(Context);

  return (
    <>
      <p>list</p>

      <h3>{state.value}</h3>
      <p>list</p>
    </>
  );
};

export default List;

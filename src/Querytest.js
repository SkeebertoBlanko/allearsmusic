import React, {useContext} from "react";
import {QuerytestContext} from "./store/Store";

const Querytest = () =>{
    const [querytest, setQuerytest] = useContext {QuerytestContext};

    return (
        <div>{querytest}</div>
    )
}
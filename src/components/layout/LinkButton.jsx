import React from "react";
import { Button } from "./LinkButton.style";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
    return (
        <Button>
            <Link to={props.to} className={props.className}>
                {props.text}
            </Link>
        </Button>
    );
};

export default LinkButton;
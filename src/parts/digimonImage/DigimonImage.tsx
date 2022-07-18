import './DigimonImage.css'
import AttributeTypeIcon from "../typeIcon/AttributeTypeIcon";
import React from "react";

export default function DigimonImage(props: DigimonImageProps) {

    let className = "";
    if (props.bordered && props.variant === "portrait") {
        className += "bordered-portrait "
        if (props.type && props.attribute) {
            className += props.attribute.toLowerCase()
        }
    }


    return (
        <div style={{marginBottom: 10, alignItems: 'center'}}>
            <img className={className} src={require("../../assets/" + props.variant + "s/" + props.id + ".png")}/>
        </div>
    );
}

interface DigimonImageProps {
    id: Number
    type?: String
    attribute?: String
    variant: String
    bordered?: Boolean
}

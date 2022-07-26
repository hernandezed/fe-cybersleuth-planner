import './index.css'
import React, {CSSProperties, MouseEventHandler, ReactNode} from "react";
import {Button} from "react-bootstrap";

export default function DigimonImage(props: DigimonImageProps) {

    let className = "";
    if (props.bordered && props.variant === "portrait") {
        className += "bordered-portrait "
        if (props.type && props.attribute) {
            className += props.attribute.toLowerCase()
        }
    }

    if (props.onClick) {
        return <Button style={{margin: 2, width: 150, padding:10, height: 120}}>
            <div>
                <img className={className} style={{...props.style}}
                     src={require("../../assets/" + props.variant + "s/" + props.id + ".png")}/>
            </div>
            {props.children}
        </Button>
    } else {
        return (<span>
            <img className={className} style={{...props.style}}
                 src={require("../../assets/" + props.variant + "s/" + props.id + ".png")}/>
                {props.children}
        </span>
        );
    }

}

interface DigimonImageProps {
    id: Number
    type?: String
    attribute?: String
    variant: String
    bordered?: Boolean
    style?: CSSProperties
    onClick?: MouseEventHandler | undefined
    children?: ReactNode
}

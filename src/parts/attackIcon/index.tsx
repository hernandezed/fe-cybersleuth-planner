import {CSSProperties} from "react";

export default function AttackIcon(props: AttackIconProps) {

    let icon = props.attribute.toLowerCase() + ".png";
    if (props.type === "Support Enhancement") {
        icon = "support-enhancement.png";
    } else if (props.type === "Support") {
        icon = "support.png";
    }

    return (<img style={props.style} src={require("../../assets/icons/attack-types/" + icon)}/>);
}

interface AttackIconProps {
    type: String
    attribute: String
    style?: CSSProperties
}
import {CSSProperties} from "react";

export default function TypeIcon(props: TypeIconProps) {

    return (<img style={props.styles}
                 src={require("../../assets/icons/" + props.type.toLowerCase() + "-" + props.attribute.toLowerCase() + ".png")}/>);

}

interface TypeIconProps {
    type: String
    attribute: String
    styles?: CSSProperties
}
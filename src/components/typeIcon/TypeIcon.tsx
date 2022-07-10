export default function TypeIcon(props: TypeIconProps) {

    return (<div style={{
        width: 20,
        height: 20,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${require("../../assets/icons/" + props.type.toLowerCase().trim() + "-" + props.attribute.toLowerCase().trim() + ".png")})`
    }}></div>)

}

interface TypeIconProps {
    type: String
    attribute: String
}
export default function DigimonImage(props: DigimonImageProps) {
    return (<img src={require("../../assets/" + props.variant + "s/" + props.id + ".png")}/>);
}

interface DigimonImageProps {
    id: Number;
    variant: String
    size?: String
}

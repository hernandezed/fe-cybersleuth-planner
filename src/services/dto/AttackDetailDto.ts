import AttackDto from "./AttackDto";
import DigimonMini from "./DigimonMini";

export default interface AttackDetailDto extends AttackDto {
    digimons: DigimonMini[]
}
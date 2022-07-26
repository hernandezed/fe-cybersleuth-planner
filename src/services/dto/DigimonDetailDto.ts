export default interface DigimonDetailDto {
    id: Number
    name: String
    skill: SkillDto
    stage: String
    type: String
    attribute: String
    memory: Number
    slots: Number
    evolvesFrom: DegenerationDto[]
    evolvesTo: EvolutionDto[]
    learnAttacks: LearnAttackDto[]
    stats: Map<String, StatsDto>
}

interface StatsDto {
    hp: number,
    sp: number,
    attack: number,
    defense: number,
    intellect: number,
    speed: number
}

interface LearnAttackDto {
    attack: AttackDetailDto
    at: Number
}

interface AttackDetailDto {
    id: Number
    name: String
    attribute: String,
    type: String,
    cost: Number,
    power: Number,
    inheritable: Boolean
}

interface EvolutionDto {
    id: Number
    name: String
    requirement: RequirementDto
}

interface RequirementDto {
    level?: Number
    hp?: Number
    sp?: Number
    atk?: Number
    def?: Number
    int?: Number
    spd?: Number
    cam?: String
    abi?: Number
    dna?: String
}

interface DegenerationDto {
    id: Number
    name: String
}

interface SkillDto {
    name: String
    description: String
}
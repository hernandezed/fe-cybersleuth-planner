export default interface DigimonDetail {
    id: Number
    name: String
    stage: String
    type: String
    attribute: String
    memory: Number
    slots: Number
    evolvesFrom: Degeneration[]
    evolvesTo: Evolution[]
    learnAttacks: LearnAttack[]
    stats: Map<String, Stats>
}

interface Stats {
    hp: number,
    sp: number,
    attack: number,
    defense: number,
    intellect: number,
    speed: number
}

interface LearnAttack {
    attack: AttackDetail
    at: Number
}

interface AttackDetail {
    id: Number
    name: String
    attribute: String,
    type: String,
    cost: Number,
    power: Number,
    inheritable: Boolean
}

interface Evolution {
    id: Number
    name: String
    requirement: Requirement
}

interface Requirement {
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

interface Degeneration {
    id: Number
    name: String
}
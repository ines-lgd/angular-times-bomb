export class Card {

    private readonly name;

    private readonly type;

    constructor(name: string, type: string = "NEUTRAL") {
        this.name = name;
        this.type = type;
    }
}

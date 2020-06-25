import {Card} from "./card";
import {Role} from "./role";

export class Manager {

    private cards;

    private roles;

    constructor() {
        this.cards = new Array<Card>();
        this.roles = new Array<Role>();
    }

    public getCards() {
        return this.cards;
    }

    public getRoles() {
        return this.roles;
    }

    public start() {
        this.createCards();
        this.createRoles();

        this.shuffleCards();
        this.shuffleRoles();
    }

    public createCards() {
        
        this.cards.push(new Card('Big Ben', 'BOMB'));
        
        for (let nb=0; 4>=nb; nb++){
            this.cards.push(new Card('Bombe', 'DEFUSE'));
        }

        for (let nb=0; 15>=nb; nb++){
            this.cards.push(new Card('Neutre'));
        }
    }

    public createRoles() {

        for (let nb=0; 3>=nb; nb++){
            let name = Manager.randomName();

            if (this.roles.findIndex(this.roles.name === name)) {
                name = Manager.randomName();
            }

            this.roles.push(new Role(name, 'SHERLOCK'));
        }

        for (let nb=0; 2>=nb; nb++){
            let name = Manager.randomName();

            if (this.roles.findIndex(this.roles.name === name)) {
                name = Manager.randomName();
            }

            this.roles.push(new Role(name, 'MORIARTY'));
        }
    }

    public shuffleCards() {
        this.cards = Manager.shuffle(this.cards);
    }

    public shuffleRoles() {
        this.roles = Manager.shuffle(this.roles);
    }

    private static shuffle(array: Array<any>) {

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    private static randomName() {
        let names: Array<string> = new Array<string>(
            'William',
            'Jack',
            'Emily',
            'Jessica',
            'James',
            'Ava',
            'Harry',
            'Sophie'
        );

        let random = Math.floor(Math.random() * (8 - 1 + 1)) + 1;

        return names[random];
    }
}

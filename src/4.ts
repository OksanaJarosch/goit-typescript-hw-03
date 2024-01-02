class Key {
    private signature: number = Math.random();

    getSignature(): number {
        return this.signature
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: Boolean;
    protected key: Key;
    protected tenants: Person[];

    constructor(key: Key) {
        this.key = key;
    }

    comeIn(person: Person) {
        this.door === true && this.tenants.push(person);
    }

    abstract openDoor(key: Key): boolean;
}

class MyHouse extends House{

    openDoor(personalKey: Key): boolean {
        if (personalKey === this.key) {
            return this.door = true;
        }
        return this.door = false;
    }

}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};
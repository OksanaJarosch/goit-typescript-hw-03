class Key {
    private signature: number = Math.random();

    getSignature(): number {
        return this.signature
    }
}

class Person {

    constructor(private key: Key) {
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: Boolean = false;
    protected tenants: Person[] = [];

    constructor(protected key: Key) {
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House{

    openDoor(personalKey: Key): void {
        if (personalKey.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
        this.door = false;
    }

}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};
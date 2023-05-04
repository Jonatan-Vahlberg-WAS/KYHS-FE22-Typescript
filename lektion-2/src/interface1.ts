interface Job {
    title: string;
    salary: number;
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    getFullName(): string;
    lastKnownAddress?: string;
}

interface Employee extends Person {
    job: Job;
}

const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const employee: Employee = {
    ...person,
    job: {
        title: "Software Engineer",
        salary: 100000
    }
};

console.table(person);
console.table(employee.job);
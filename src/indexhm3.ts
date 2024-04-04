class Lecturer {
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: number;
    courses: string;
    contacts: string;

    constructor(name: string, surname: string, position: string, company: string, experience: number, courses: string, contacts: string) {
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.company = company;
        this.experience = experience;
        this.courses = courses;
        this.contacts = contacts
    }

    get fullName(): string {
        return `${this.surname} ${this.name}`;
    }
}


class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

    private _areas: Area[] = [];
    private _lecturers: Lecturer[] = []; // Name, surname, position, company, experience, courses, contacts

    get areas(): Area[] {
        return this._areas;
    }

    get lecturers(): Lecturer[] {
        return this._lecturers;
    }

    addArea(area: Area): void {
        this._areas.push(area);
    }


    removeArea(name: string): void {
        const index = this._areas.findIndex((i: Area) => name === i.name);
        if (index !== -1) {
            this._areas.splice(index, 1);
        }
    }

    addLecturer(lecturer: Lecturer): void {
        this._lecturers.push(lecturer);
    }

    removeLecturer(fullName: string): void {
        const index = this._lecturers.findIndex((i: Lecturer) => fullName === i.fullName);
        if (index !== -1) {
            this._lecturers.splice(index, 1);
        }
    }
}

class Area {
    // implement getters for fields and 'add/remove level' methods
    private _levels: Level[] = [];
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get levels(): Level[] {
        return this._levels;
    }

    addLevel(level: Level): void {
        this._levels.push(level);
    }


    removeLevel(name: string): void {
        const index = this._levels.findIndex((i: Level) => name === i.name);
        if (index !== -1) {
            this._levels.splice(index, 1);
        }
    }


}

class Level {
    // implement getters for fields and 'add/remove group' methods

    private _groups: Group[] = [];
    private _description: string;
    private _name: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name
    }


    get description(): string {
        return this._description;
    }

    get groups(): Group[] {
        return this._groups
    }

    addGroup(group: Group): void {
        this._groups.push(group);
    }

    removeGroup(directionName: string): void {
        const index = this._groups.findIndex((i: Group) => directionName === i.directionName);
        if (index !== -1) {
            this._groups.splice(index, 1);
        }
    }

}

class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods

    private _area: Area[] = [];
    private _status: string[] = [];
    private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*
    directionName: string;
    levelName: string;

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    get area(): Area[] {
        return this._area;
    }

    get status(): string[] {
        return this._status;
    }

    get students(): Student[] {
        return this._students;
    }


    //Что нужно в сетере (присваивать или пушить) ?
    set status(status: string[]) {
        this._status = status
    }

    // set status(status: string) {
    //     this._status.push(status);
    // }


    addStudent(student: Student): void {
        this._students.push(student);
    }


    removeStudent(fullName: string): void {
        const index = this._students.findIndex((i: Student) => fullName === i.fullName);
        if (index !== -1) {
            this._students.splice(index, 1);
        }
    }

    showPerformance(): Student[] {
        return this._students.toSorted(
            (a: Student, b: Student) =>
                b.getPerformanceRating() - a.getPerformanceRating()
        );
    }
}

class Grade {
    workName: string
    mark: number;

    constructor(workName: string, mark: number) {
        this.workName = workName;
        this.mark = mark
    }
}

class Visit {
    present: boolean
    lesson: string

    constructor(lesson: string, present: boolean) {
        this.lesson = lesson
        this.present = present
    }
}

class Student {
    // implement 'set grade' and 'set visit' methods

    private _firstName: string;
    private _lastName: string;
    private _birthYear: number;
    private _grades: Grade[] = []; // workName: mark
    private _visits: Visit[] = []; // lesson: present

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }


    set grades(grades: Grade[]) {
        this._grades = grades;
    }

    set visits(visits: Visit[]) {
        this._visits = visits
    }

    getPerformanceRating(): number {

        if (this._grades.length === 0) return 0;

        const averageGrade = this._grades.reduce((sum: number, grade: Grade) => sum + grade.mark, 0) / this._grades.length;
        const attendancePercentage = (this._visits.filter((visit: Visit) => visit.present).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}
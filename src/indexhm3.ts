class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

    private _areas: Area[] = [];
    private _lecturers: object[] = []; // Name, surname, position, company, experience, courses, contacts

    get areas(): Area[] {
        return this._areas;
    }

    get lecturers(): object[] {
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

    addLecturer(lecturer: object): void {
        this._lecturers.push(lecturer);
    }

    removeLecturer(name: string): void {
        const index = this._lecturers.findIndex((i: any) => name === i.name);
        if (index !== -1) {
            this._lecturers.splice(index, 1);
        }
    }
}

class Area {
    // implement getters for fields and 'add/remove level' methods
    private _levels: Level[] = [];
    _name: string;

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

    _groups: Group[] = [];
    _description:string;
    _name: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
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

    _area: Area[] = [];
    _status: string[] = [];
    directionName: string;
    levelName: string;
    private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    addStatus(status: string): void {
        this._status.push(status);
    }


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

class Student {
    // implement 'set grade' and 'set visit' methods

     _firstName: string;
     _lastName: string;
     _birthYear: number;
     _grades: any = {}; // workName: mark
     _visits: boolean[] = []; // lesson: present

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

    setGrade(workName: string, grade: number): void {
        this._grades[workName] = grade;
    }

    setVisit(present: boolean): void {
        this._visits.push(present);
    }

    getPerformanceRating(): number {
        const gradeValues: number[] = Object.values(this._grades);

        if (!gradeValues.length) return 0;

        const averageGrade: number = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage: number = (this._visits.filter((present: boolean) => present).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}
//1)Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.
interface IMyInterface1 {
    [key: string]: number | string;
}

//2)Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface IMyInterface2 {
    [key: symbol]: (...args: string[]) => void;
    [key: string]: (...args: string[]) => string;
}

//3)Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву.
// Ключі повинні бути числами, а значення - певного типу.
interface IArray {
    [index: number]: string;
}

const obj: IArray = {
    0: "apple",
    1: "banana",
    2: "orange",
}

//4)Створіть інтерфейс з певними властивостями та індексною сигнатурою.
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface IMyInterface4 {
    [key: string]: string;
    name: string;
}

//5)Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
interface IBaseInterface {
    [key: string]: string;
}

interface ExtendedInterface extends IBaseInterface {
    property: string;
}

//6)Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям
// (наприклад, чи всі значення є числами).
interface IMyInterface6 {
    [key: string]: number | string;
}

function checkValues(obj: IMyInterface6, criteria: string): boolean {
    for (let key in obj) {
        if (typeof obj[key] !== criteria) return false
    }
    return true;
}

const obj1: IMyInterface6 = {
    key1: 10,
    key2: 20,
    key3: 30
}

console.log(checkValues(obj1, "number"));


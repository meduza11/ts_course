//1) Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.

type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// Приклад:
interface IPhone {
    brand: string;
    display: {
        type: string;
    };
    battery_capacity: number;
}

let phone: DeepReadonly<IPhone>;
// phone.brand = "iPhone 15 Pro"; //error
// phone.display.type = "OLED";   //error


//2)Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.

type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

// Приклад:
interface ITV {
    brand?: string;
    display?: {
        diagonal?: number;
    };
}

const myTV: DeepRequireReadonly<ITV> = {
    brand: "Samsung",
    display: {
        diagonal: 55,
    }
};

//3)Вам потрібно створити тип UpperCaseKeys, який буде приводити всі ключі до верхнього регістру.
type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<string & K>]: T[K];
};

// Приклад:
interface IUser {
    name: string;
    age: number;
}

const myUser: UpperCaseKeys<IUser> = {
    NAME: 'Max',
    AGE: 32
}


//4)Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.
type ObjectToPropertyDescriptor<T extends { [key: string]: any }> = {
    [K in keyof T]: PropertyDescriptor;
};

// Приклад:
interface IObject {
    name: string;
    age: number;
}

type MyPropertyDescriptorObject = ObjectToPropertyDescriptor<IObject>;


const propertyDescriptorObject: MyPropertyDescriptorObject = {
    name: {value: 'Max', writable: true},
    age: {value: 32, writable: true}
};

console.log(propertyDescriptorObject);



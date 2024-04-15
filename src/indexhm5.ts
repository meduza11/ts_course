interface IFigure {
    readonly name: string;
    readonly color: string;

    calculateArea(): number;
}

abstract class AbstractClassFigure implements IFigure {

    public abstract name: string;
    public abstract color: string;

    protected constructor(name: string, color: string) {}

    public abstract calculateArea(): number;
}


//Круг
class Circle extends AbstractClassFigure implements IFigure {

    public readonly name: string;
    public readonly color: string;
    radius: number;

    constructor(name: string, color: string, radius: number) {
        super(name, color);
        this.name = name;
        this.color = color;
        this.radius = radius;
    }

    public override calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

}

//Прямоугольник
class Rectangle extends AbstractClassFigure implements IFigure {

    public readonly name: string;
    public readonly color: string;
    public width: number;
    public height: number;

    constructor(name: string, color: string, width: number, height: number) {
        super(name, color);
        this.name = name;
        this.color = color;
        this.width = width;
        this.height = height;
    }


    public override calculateArea(): number {
        return this.width * this.height
    }

    print(): string {
        return `${this.name} area: ${this.width} * ${this.height}`;
    }

}

//Квадрат
class Square extends AbstractClassFigure implements IFigure {

    public readonly name: string;
    public readonly color: string;
    public width: number;

    constructor(name: string, color: string, width: number,) {
        super(name, color);
        this.name = name;
        this.color = color;
        this.width = width;
    }

    public override calculateArea(): number {
        return this.width * this.width
    }

    public print(): string {
        return `${this.name} area: ${this.width} * ${this.width}`;
    }

}

//Треугольник
class Triangle extends AbstractClassFigure implements IFigure {

    public readonly name: string;
    public readonly color: string;
    public base: number;
    public height: number;

    constructor(name: string, color: string, base: number, height: number) {
        super(name, color);
        this.name = name;
        this.color = color;
        this.base = base;
        this.height = height;
    }

    public override calculateArea(): number {
        return 0.5 * (this.base * this.height)
    }
}

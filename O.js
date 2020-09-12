// Open Close Principle

class Shape {
    constructor(){}
    area() {
        throw new Error('Area method must be implemented!')
    }
}

class Square extends Shape {
    constructor(size) {
        super()
 //       this.type = 'square'
        this.size = size
    }
    area() {
        return this.size ** 2
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
//       this.type = 'circle'
        this.radius = radius
    }
    area() {
        return this.radius ** 2 * Math.PI
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            // if (shape.type === 'circle') {
            //     acc += shape.radius ** 2 * Math.PI
            // } else if (shape.type === 'square') {
            //     acc += shape.size ** 2
            // } else if (shape.type === 'rect') {
            //     acc += shape.width * shape.height
            //}
            acc += shape.area()
            return acc
        }, 0)
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super()
//        this.type = 'rect'
        this.width = width
        this.height = height
    }
    area() {
        return this.width * this.height
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super()
        this.a = a
        this.b = b
        this.c = c
    }
    area() {
        return (this.a + this.b + this.c) / 2
    }
}

// class Shape {
//     constructor(){}
//     area() {
//         throw new Error('Area method must be implemented!')
//     }
// }

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(20, 10),
    new Triangle(3, 4, 5),
    new Triangle(20, 20, 20)
])

console.log(calc.sum())

//JS classes; used to create one or more objects. eg,
class Rectangle {
    constructor (_width, _height, _color) {/*constructor;method that is run only 
        once during life of object;only once object is called.*/
        this._width = _width;
        this._height = _height;
        this._color = _color;//1)Instance property;what the object will have; its data
    }
    getArea(){
        return this._width * this._height;
    }
    printDescription(){
        console.log(`I am a rectangle of width ${this._width},height ${this._height},
        color ${this._color}`);
    }
}
let Rectangle1 = new Rectangle(5,3,"red");
let Rectangle2 = new Rectangle(7,5,"blue"); //to add variable data for various rectangles

console.log("The area of rectangle 1 is",Rectangle1.getArea()); /*calling the method to 
                                                    console to show area; expected output;15*/
console.log("The area of rectangle 2 is",Rectangle2.getArea()); //expected output;35

Rectangle1.printDescription();
Rectangle2.printDescription();

class Square {
    constructor (width){
        this.width = width;
        this.height = width;
    }
    getArea(){
        return this.width**2;
    }
    static equalDimensions(wid,hei){/*method that doesn't require instance of class to be created
                                                in order to be used.*/
        return wid === hei; //to test if width and height equal; requirement for squares.
    }
}
let square1 = new Square(3);
square1.getArea(); //instance created for method to be used; in static method, not required. 

Square.equalDimensions(4,4); //calling static method;class name used directly.
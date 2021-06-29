class Car {
    constructor(_color,_engine,_horsePower){
        this.color = _color,
        this.engine = _engine,
        this.horsePower = _horsePower
    }

    get Power(){
        return this.horsePower;
    }

    set Power(value){
       if (value < 0) {
        this.horsePower = 0;
        return;
       }
        {
        this.horsePower = value; 
       }
    }
       static wholsFaster(...params) {
              Object.getPrototypeOf(...params)
                this.wholsFaster = Math.max(...Array.from(params,Object => Object.horsePower));
                return params.find(item=> item.horsePower == this.wholsFaster)
            
    }
}

let car1 = new Car('Audi', 2, 7)
car1.Power= -2;
console.log(car1.Power)
// console.log(Car.wholsFaster({name: "bmw" , engine: "39", horsePower: 2}))

let car3={name:"x",horsePower:10}
let car2={name:"y",horsePower:20}
console.log(Car.wholsFaster(car3,car2))


class BMW extends Car {
    constructor(name,engine,horsePower,model,year,price){
        super(name,engine,horsePower)
            this._model = model,
            this._year = year,
            this._price = price
    }

    static createNewBmwCar (){
        Object.getPrototypeOf(newBmw,BMW);
        return newBmw;
    }

    cutTheCompressor () {
        newBmw.horsePower + 15
    }
    
    sellTheCar(){
        for (const prop of Object.getOwnPropertyNames(obj)) {
            delete obj[prop];
        }
    }
    
}

console.log(BMW.sellTheCar(car3))


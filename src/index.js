require('./styles.scss');

class Car{
    manufacturer(car){
        document.write(`benim bir ${car} var`)
    }
}

const bmw = new Car();
bmw.manufacturer('bmw');
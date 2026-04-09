const Calculator = base => class extends base{
    calc(){}
}

const Randomizer = base => class extends base{
    randomize(){}
}

class Foo{}

class Bar extends Calculator(Randomizer(Foo)){
    calc(){
        super.calc()
    }
}


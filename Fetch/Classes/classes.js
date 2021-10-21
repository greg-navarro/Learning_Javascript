class Vacation {
    constructor(dest, length) 
    {
        this.dest = dest;
        this.length = length;
    }

    print() {
        console.log(this.dest + " | " + this.length + " days");
    }
}

const trip = new Vacation("Hell", "forever") // declare with new keyword

// Inheritance is supported
class Expedition extends Vacation {
    constructor(dest, length, gear) {
        super(dest, length);
        this.gear = gear;
    }

    print() {
        super.print();
        console.log(`Bring your ${this.gear.join(" and ")}`);
    }
}

const hike = new Expedition("Everest", 1, ["underwear", "socks"]);
hike.print();
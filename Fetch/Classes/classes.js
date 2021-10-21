class Vacation {
    constructor(dest, length) 
    {
        this.dest = dest;
        this.lenght = length;
    }

    print() {
        console.log(this.dest + " | " + this.length + " days");
    }
}
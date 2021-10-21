function Vacation(dest, length) {
    this.dest = dest;
    this.lenght = length;
}

Vacation.prototype.print = function () {
    console.log(this.dest + " | " + this.length + " days");
};

const maui = new Vacation("Maui", 7);
maui.print(); // Maui | 7 days

class father {
    constructor(name = 'father') {
        this.name = name;
    }
    say() {
        console.log(this.name);
    }
}
class son extends father {
    constructor(name = 'son') {
        super(name);
    }
}
//# sourceMappingURL=es6-extend.js.map
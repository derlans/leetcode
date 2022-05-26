var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var father = /** @class */ (function () {
    function father(name) {
        if (name === void 0) { name = 'father'; }
        this.name = name;
    }
    father.prototype.say = function () {
        console.log(this.name);
    };
    return father;
}());
var son = /** @class */ (function (_super) {
    __extends(son, _super);
    function son(name) {
        if (name === void 0) { name = 'son'; }
        return _super.call(this, name) || this;
    }
    return son;
}(father));

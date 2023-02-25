"use strict";
exports.__esModule = true;
exports.PersonValid = void 0;
var PersonValid = /** @class */ (function () {
    function PersonValid() {
    }
    PersonValid.prototype.validData = function (person) {
        return this.username(person.username) &&
            this.name(parent.name) &&
            this.family(person.family) &&
            this.message(person.message);
    };
    PersonValid.prototype.username = function (un) {
        if (un.length >= 4)
            return true;
        else
            return false;
    };
    PersonValid.prototype.name = function (na) {
        if (na.length >= 3)
            return true;
        else
            return false;
    };
    PersonValid.prototype.family = function (fa) {
        if (fa.length >= 3)
            return true;
        else
            return false;
    };
    PersonValid.prototype.message = function (mes) {
        if (mes.length >= 10)
            return true;
        else
            return false;
    };
    return PersonValid;
}());
exports.PersonValid = PersonValid;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonValid = void 0;
class PersonValid {
    validData(person) {
        return this.username(person.username) &&
            this.name(parent.name) &&
            this.family(person.family) &&
            this.message(person.message);
    }
    username(un) {
        if (un.length >= 4)
            return true;
        else
            return false;
    }
    name(na) {
        if (na.length >= 3)
            return true;
        else
            return false;
    }
    family(fa) {
        if (fa.length >= 3)
            return true;
        else
            return false;
    }
    message(mes) {
        if (mes.length >= 10)
            return true;
        else
            return false;
    }
}
exports.PersonValid = PersonValid;
//# sourceMappingURL=person-valid.js.map
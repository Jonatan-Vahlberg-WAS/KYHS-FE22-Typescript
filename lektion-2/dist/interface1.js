var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    }
};
var employee = __assign(__assign({}, person), { job: {
        title: "Software Engineer",
        salary: 100000
    } });
console.table(person);
console.table(employee.job);

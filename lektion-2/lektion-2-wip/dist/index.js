var _a;
var _person = {
    firstName: "Jonatan",
    lastName: "Vahlberg",
    age: 26,
    children: []
};
var _person2 = {
    firstName: "Lars",
    lastName: "Karlsson",
    age: 49,
    children: [{
            firstName: "Johan",
            lastName: "Karlsson",
            age: 12,
            playMates: []
        }]
};
if (!_person.children) {
    console.log("No children");
}
else {
    console.log("Has Children");
}
// const movie: Movie = {
// }
console.log((_a = _person.children) === null || _a === void 0 ? void 0 : _a.length);

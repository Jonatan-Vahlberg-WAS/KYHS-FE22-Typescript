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
var myTuple = [
    "hej", 12, true
];
var greeting = myTuple[0], cost = myTuple[1], bool = myTuple[2];
//Enum implicit
var Weekday;
(function (Weekday) {
    Weekday[Weekday["NA"] = 0] = "NA";
    Weekday[Weekday["MONDAY"] = 1] = "MONDAY";
    Weekday[Weekday["TUESDAY"] = 2] = "TUESDAY";
    Weekday[Weekday["WEDNESDAY"] = 3] = "WEDNESDAY";
    Weekday[Weekday["THURSDAY"] = 4] = "THURSDAY";
    Weekday[Weekday["FRIDAY"] = 5] = "FRIDAY";
})(Weekday || (Weekday = {}));
//Enum explicit
var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["GREEN"] = 2] = "GREEN";
    Color[Color["BLUE"] = 3] = "BLUE";
})(Color || (Color = {}));
//Enum String
var Keys;
(function (Keys) {
    Keys["ENTER"] = "ENTER";
    Keys["DEL"] = "DEl";
    Keys["SPACE"] = "SPACE";
})(Keys || (Keys = {}));
//Computed enum values
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["NA"] = 0] = "NA";
    FileAccess[FileAccess["READ"] = 1] = "READ";
    FileAccess[FileAccess["WRITE"] = 2] = "WRITE";
    FileAccess[FileAccess["READ_WRITE"] = 3] = "READ_WRITE";
})(FileAccess || (FileAccess = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
    StatusCode[StatusCode["UNALLOWED"] = 401] = "UNALLOWED";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCode || (StatusCode = {}));
var RequestType;
(function (RequestType) {
    RequestType[RequestType["NA"] = 0] = "NA";
    RequestType[RequestType["POST"] = 1] = "POST";
    RequestType[RequestType["GET"] = 2] = "GET";
    RequestType[RequestType["PUT"] = 3] = "PUT";
})(RequestType || (RequestType = {}));
var database = "http://sim.data/api/v1";
var downDatabase = "http://sim.data.down/api/v1";
var databaseEndpoints = [
    "users/1",
    "users/12",
    "users/18"
];
function simulatedNetworkRequest() {
    //todo requests have to have a RequestMethod a db and a endpoint
    //todo requests landing in the down database should return 500
    //todo requests landing in the normal db has to correspond with an endpoint otherwise 404
    //todo POST generate 201 GET 200 and any attempt at interacting with user 1 results in 401
}

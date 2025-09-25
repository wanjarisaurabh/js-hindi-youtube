// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let month = "march"
//

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        month = "april";
        
    case "april":
        console.log("april");
        

    default:
        console.log("default case match");
        break;
}
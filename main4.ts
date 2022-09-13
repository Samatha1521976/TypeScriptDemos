{
let message;
message = "abc"
let endswithc = message.endsWith('c')
console.log(endswithc)

let alternativeway = (message as string).startsWith('c')
console.log(alternativeway);
}
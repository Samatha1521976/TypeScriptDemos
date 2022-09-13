
function fn(p) {
    return p;
}
{
const num = 1;
const copyOfNum = fn(num);

copyOfNum.charAt(5);                        //Not an error
copyOfNum.aPropertyThatDoesNotExistOnNum;   //Not an error
copyOfNum.aFunctionThatDoesNotExistOnNum(); //Not an error
}
function fn<P>(p: P): P {
    return p;
}

const num = 1;
const copyOfNum = fn(num);

copyOfNum.charAt(5);                        //Error
copyOfNum.aPropertyThatDoesNotExistOnNum;   //Error
copyOfNum.aFunctionThatDoesNotExistOnNum(); //Error
// ## Элитный тайпскрипт
// Возьмите любую задачу с leetcode (которую не решали ранее) и решите ее на тайпскрипте. 
// Убедитесь, что leetcode очищенную от типов версию принимает.
// Leetcode 20. Действительные круглые скобки

type TypeBrackets = {
    readonly ']': '[',
    readonly '}': '{',
    readonly ')': '(',
}

type Keys = ']' | '}' | ')'

function closedBrackets(symbol: string): boolean {
    return [']', '}', ')'].indexOf(symbol) > -1;
}

function isBrackets(someString: string):boolean {
    return [']', '}', ')','(','{','['].includes(someString)
}

const isValid = function (str: string): boolean {
    let stack: string[] = [];
    const brackets: TypeBrackets = {
        ']': '[',
        '}': '{',
        ')': '(',
    }

    for (let i = 0; i < str.length; i++) {

        if(isBrackets(str[i])){
            let currentBrackets: keyof TypeBrackets = str[i];
        }
        
        if (closedBrackets(currentBrackets)) {
            if (brackets[currentBrackets] !== stack.pop()) return false
        } else {
            stack.push(currentBrackets)
        }
    }

    return stack.length === 0;
}

console.log(isValid('[(){}()]'));


// ## Элитный тайпскрипт
// Возьмите любую задачу с leetcode (которую не решали ранее) и решите ее на тайпскрипте. 
// Убедитесь, что leetcode очищенную от типов версию принимает.

// Leetcode 20. Действительные круглые скобки

function closedBrackets(symbol: string): boolean {
    return [']', '}', ')'].indexOf(symbol) > -1;
}


const isValid = function (str: string): boolean {
    let stack: string[] = [];
    const brackets: {[key: string]: string} = {
        ']': '[',
        '}': '{',
        ')': '(',
    }

    for (let i = 0; i < str.length; i++) {
        let currentBrackets: string = str[i];

        if (closedBrackets(currentBrackets)) {
            if(brackets[currentBrackets] !== stack.pop()) return false
        } else {
            stack.push(currentBrackets)
        }
    }

    return stack.length === 0;
}

console.log(isValid('[(){}()]'));
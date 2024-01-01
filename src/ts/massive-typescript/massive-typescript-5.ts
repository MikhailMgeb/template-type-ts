
type TypeObject = {
    cool: string;
    value?: number;
    result?: number;
} 

type TypeKey = keyof TypeObject;
type TypeResult = TypeObject | undefined | {[key:string]: string};

function sumOfObject(firstObject: TypeObject, secondObject: TypeObject) {
    const resultObject: TypeResult = {};

    let keyFirstObject: string;
    let keySecondObject: string;

    for (keyFirstObject in firstObject) {
        for (keySecondObject in secondObject) {

            if (secondObject[keyFirstObject] === undefined) {
                resultObject[keyFirstObject] = firstObject[keyFirstObject];
            } else {
                resultObject[keyFirstObject] = firstObject[keyFirstObject] + secondObject[keyFirstObject];
            }

            if (firstObject[keySecondObject] === undefined) {
                resultObject[keySecondObject] = secondObject[keySecondObject];
            }
        }
    }
    return resultObject;
}

const firstObject = { cool: 'yes', value: 5 };
const secondObject = { cool: 'no', result: 15 };

// Результат: { cool: 'yesno', value: 5, result: 15 }
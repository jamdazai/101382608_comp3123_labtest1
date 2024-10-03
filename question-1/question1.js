/**
 * Lab Test 1 for Full Stack Development
 * @author: Jam Furaque
 */

function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Error: The input is not an array");
            return;
        }

        let string = mixedArray.filter(item => typeof item === 'string');
        let lowerCase = string.map(item => item.toLowerCase());
        resolve(lowerCase);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch((err) => console.log(err));
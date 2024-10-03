/**
 * Lab Test 1 for Full Stack Development
 * @author: Jam Furaque
 */

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message': 'delayed success!'});
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({'error': 'delayed exception!'});
        }, 500);
    })
}

resolvedPromise()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

rejectedPromise()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
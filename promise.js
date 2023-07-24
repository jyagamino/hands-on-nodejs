"use strict"

function ParseJSONAsync(json) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(JSON.parse(json));
            } catch (error) {
                reject(error);
            }
        }, 1000);
    })
}

const toBeFulfilled = ParseJSONAsync('{ "foo": 1 }');
// const toBeRejected = ParseJSONAsync('不正なJSON');

console.log("すぐに実行");
console.log(toBeFulfilled);
// console.log(toBeRejected);

setTimeout(() => {
    console.log("1秒後に実行");
    console.log(toBeFulfilled);
    // console.log(toBeRejected); 
}, 1000);


function wait(time) {
    new Promise((resolve => {
        setTimeout(() => resolve, time);
    }))
}
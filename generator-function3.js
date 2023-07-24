"use strict";

function parseJSONAsync(json) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(JSON.parse(json));
      } catch (err) {
        reject(err);
      }
    }, 1000);
  });
}

function* asyncWithGeneratorFunc(json) {
  try {
    const result = yield parseJSONAsync(json);
    console.log("パース結果", result);
  } catch (err) {
    console.log("エラーをキャッチ", err);
  }
}

const jsonObject = '{ "foo": 1 }';
const asyncWithGenerator = asyncWithGeneratorFunc(jsonObject);
const promise = asyncWithGenerator.next().value;
promise.then((result) => asyncWithGenerator.next(result));

"use strict";
const events = require("events");

function createFizzBuzzEventEmitter(until) {
  const eventEmitter = new events.EventEmitter();
  process.nextTick(() => _emitFizzBuzz(eventEmitter, until));
  return eventEmitter;
}

async function _emitFizzBuzz(eventEmitter, until) {
  eventEmitter.emit("start");
  let count = 1;
  while (count <= until) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    if (count % 15 === 0) {
      eventEmitter.emit("FizzBuzz", count);
    } else if (count % 3 === 0) {
      eventEmitter.emit("Fizz", count);
    } else if (count % 5 === 0) {
      eventEmitter.emit("Buzz", count);
    }
    count += 1;
  }
  eventEmitter.emit("end");
}

function startListener() {
  console.log("start");
}

function fizzListener(count) {
  console.log("Fizz", count);
}

function buzzListener(count) {
  console.log("Buzz", count);
}

function fizzBuzzListener(count) {
  console.log("FizzBuzz", count);
}

function endListener() {
  console.log("end");
  this.off("start", startListener)
    .off("Fizz", fizzListener)
    .off("Buzz", buzzListener)
    .off("FizzBuzz", fizzBuzzListener)
    .off("end", endListener);
}

createFizzBuzzEventEmitter(40)
  .on("start", startListener)
  .on("Fizz", fizzListener)
  .on("Buzz", buzzListener)
  .on("FizzBuzz", fizzBuzzListener)
  .on("end", endListener);

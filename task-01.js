"use strict";

function firstEl(firstEl, ...residueArr) {
  return {
    first: firstEl,
    other: residueArr,
  };
}

console.log(firstEl("Hello world!", 4, true, undefined, null, {}, []));

"use strict";

const fs = require("fs");
const crypto = require("crypto");

function copyFileWithStream(src, dest, cb) {
  fs.createReadStream(src)
    .pipe(crypto.createHash("sha256"))
    .pipe(fs.createWriteStream(dest))
    .on("finish", cb);
}

copyFileWithStream("dummy.txt", "dest.txt", () => console.log("コピー完了"));

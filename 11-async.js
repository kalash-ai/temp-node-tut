
const { readFile, writeFile } = require("fs");

readFile("./Content/first.txt", "utf-8", (err, result) => {
  if (err) {
    // throw new Error(`Something Wrong occured ${err}`)
    console.log(err);
    return;
  }
  const first = result;
  readFile("./Content/second.txt", "utf8", (err, result) => {
    if (err) {
      // throw new Error(`Something Wrong occured ${err}`)
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./Content/result-async.txt",
      `here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          return err;
        }
        return result;
      }
    );
  });
});

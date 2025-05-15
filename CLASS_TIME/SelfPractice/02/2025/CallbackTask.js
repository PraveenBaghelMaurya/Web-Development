function download() {
  setTimeout(() => {
    console.log("Movie download");
    setTimeout(() => {
      compress();
      setTimeout(() => {
        upload();
      }, 2000);
    }, 2000);
  }, 2000);
}

function compress() {
  console.log("Movie compress");
}

function upload() {
  console.log("Movie upload");
  console.log("\n\n\n 👍 All Done");
}

download();

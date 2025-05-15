function download(cb) {
  console.log("Download starts");
  setTimeout(() => {
    console.log("Download Completed");
    cb(compress);//passing function into variable
  }, 2000);
}
function compress(cb) {
  setTimeout(() => {
    console.log("compress Completed");
    cb();
  }, 2000);
}
function upload() {
  setTimeout(() => {
    console.log("upload Completed");
  }, 2000);
}

download(compress);

let myPromises =new Promise((res, rej) => {
  res("Work had been finished");
});

function download(fn) {
  setTimeout(() => {
    console.log("Movie had been Download");
    fn(compress)
  }, 2000);
}
function compress(fn) {
  setTimeout(() => {
    console.log("Movie had been compress");
    fn()
  }, 2000);
  
}
function Upload() {
  setTimeout(() => {
    console.log("Movie had been Upload");
  }, 2000);
}

download(compress)
myPromises.then((data)=>{
    console.log(data)
})

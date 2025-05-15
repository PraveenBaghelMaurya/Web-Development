function download(cb) {
    console.log("Download starts");
    // 2 seconds to complete
    setTimeout(() => {
        console.log("Download completed");
        cb(upload); // download ka callback function is compress
    }, 2000);
}

function compress(cb) {
    console.log("compress starts");
    // 2 seconds to complete
    setTimeout(() => {
        console.log("compress completed");
        cb(); // upload function call ho rha 
    }, 2000);
}

function upload() {
    console.log("upload starts");
    // 2 seconds to complete
    setTimeout(() => {
        console.log("upload completed");
    }, 2000);
}

// We want to execute all these functions sync
// download -> compress -> upload
download(compress);



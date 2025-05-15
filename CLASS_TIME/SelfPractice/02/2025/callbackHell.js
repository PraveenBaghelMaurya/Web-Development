function allDone(){
 setTimeout(()=>{
    console.log("Movie download")

    setTimeout(()=>{
        console.log("compress movie")

        setTimeout(()=>{
                console.log("upload movie")
                console.log("\n\n\n👍 All Done");
        },2000)
    },2000)
 },2000)   
}

allDone();
function createCounter(){
    let count=100;
    function increment(){
        count++;
    }
    function decreament(){
        count--;
    }
    function getCount(){
        return count;
    }
    return {increment,decreament,getCount}
}
let show=createCounter();

show.increment();       //increment the value
console.log(show.getCount())

show.decreament()       //decrement the  value
console.log(show.getCount())
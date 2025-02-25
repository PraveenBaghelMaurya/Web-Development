function outerFun() {
    let x = 1;
    function innerFun() {
        x++;
        function innerMostFun() {
            x++;
            console.log(x);
        }
        return innerMostFun;
    }

    return innerFun;
}
let fun = outerFun(); // innerFun ko return krega//1
let f1 = fun(); // innerMostFun ko return karega//2
let f2 = fun(); // innerMostFun ko return karega//3
f1();//4
f1();//5
f1();//6
f2();//7
f2();//8
f2();//9


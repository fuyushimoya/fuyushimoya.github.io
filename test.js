var loop = 100000000;

function callable() {
    return Math.random();
}

var res = new Array(2);

function measureFunction(index) {
    var result = 0;
    var timer = new Date();
    var start = timer.getTime();
    for (var i = 0;  i < loop;  ++i)
        result += callable();

    res[index] = "RESULT FUNCTION: " + result + " FOR: " + (new Date().getTime() - start);
}



for (var i = 0  ;i < res.length;  ++i)
    measureFunction(i);

for (var i = 0;  i < res.length;  ++i)
    console.log(res[i]);
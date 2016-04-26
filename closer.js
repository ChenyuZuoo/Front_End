    function myNumber() {
        var count = [];
        for (var i = 0; i < 10; i ++) {
            count[i] = function() {
                return i;
            }
        }
        return count;
    }

    out = myNumber();
    console.log(out());

    var c = 3
    var func = function() {
        var a = 1;
        var b = 2;
        alert(b);//2
        alert(c);//3
    }

    func();
    //alert(b);//2
   // alert(a);//Uncaught ReferenceError: b is not defined

var adress = document.createElement('a');
adress.herf = "http://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/001386820066616a77f826d876b46b9ac34cb5f34374f7a000"

console.log(adress.protocal);

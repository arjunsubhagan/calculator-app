let disp = "";
    function addnumber(number) {
        disp += number;
        display(disp);
    }
    function display(x) {
        document.getElementById("result").innerHTML = x;
    }
    function clearscreen() {
        disp = "";
        document.getElementById("result").innerHTML = 0;
    }
    function cal(y) {
        disp += y;
        document.getElementById("result").innerHTML = disp;
    }
    function result() {
        let res;
        res = eval(disp);
        document.getElementById("result").innerHTML = disp + "=" + res;
    }    
// const testObj = [{id:1, value: 1},{id:2, value: 2}]
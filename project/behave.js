var count=0;
document.getElementById("demo").addEventListener("click",sample);
function sample(){
    count=count+1;
    document.getElementById("sam").innerHTML=count;
}
document.getElementById("demo1").addEventListener("click",sample1);

function sample1(){
    count=count+2;
    document.getElementById("sam").innerHTML=count;

}

document.getElementById("demo2").addEventListener("click",sample2);

    function sample2(){
        count=count+3;
        document.getElementById("sam").innerHTML=count;


}
document.getElementById("clear").addEventListener("click",sample3);
    function sample3(){
        count=0;
        document.getElementById("sam").innerHTML=count;
    }
//copy all of these
var count=0
document.getElementById("demo3").addEventListener("click",sample4);
function sample4(){
    count=count+1;
    document.getElementById("sam1").innerHTML=count;
}
document.getElementById("demo4").addEventListener("click",sample5);

function sample5(){
    count=count+2;
    document.getElementById("sam1").innerHTML=count;

}

document.getElementById("demo5").addEventListener("click",sample6);

    function sample6(){
        count=count+3;
        document.getElementById("sam1").innerHTML=count;


}
document.getElementById("clear1").addEventListener("click",sample7);
    function sample7(){
        count=0;
        document.getElementById("sam1").innerHTML=count;
    }
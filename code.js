listid = ["test","lol","123456","봄바람","김하율"]
listpw = ["testpw","lolpw","78910","살랑살랑","천재"]
listscoreword = [40,50,100,100,100]
listscoreworden = [40,50,100,100,90]
var id = ""
var pw = ""
function saveid()  {
    const name = document.getElementById('inputone').value;
}
function savepw()  {
    const name = document.getElementById('inputtwo').value;
}
function show(){
    const id = document.getElementById('inputone').value;
    const pw = document.getElementById("inputtwo").value;
    const where = listid.indexOf(id)
    console.log(where)
    const ans = "국어: " + listscoreword[where] + "영어: " + listscoreworden[where];
    if (listpw[where]  == pw){
        document.getElementById("score").textContent = ans;
    }else{
        document.getElementById("score").textContent = "wrong password or id.";
    }
}



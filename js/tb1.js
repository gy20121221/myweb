window.onload=function (){

    let a=document.getElementById("J_LinkBuy");
    let aC=function (){
        a.click();
    }
    let ht=document.URL;
    let regH=/item\.htm/g;
    if (regH.test(ht)){
        var pq=prompt("请佩奇输入抢购时间 格式8:03(请切换到英文输入法)");
    }
    // let pq=prompt("请佩奇输入抢购时间 格式8:03(请切换到英文输入法)");
    let t="\\W"+pq;
    let reg=new RegExp(t);//设置抢购的时间
    let test=function (){
        let time=new Date();
        let timed=time.toLocaleTimeString();
        if (reg.test(timed)){
            aC();
            console.log("su");
        }
    }

    let wrA=document.getElementsByClassName("go-btn")[0];

    let wrAC=function (){
        if (wrA!==null) {wrA.click();}
    }
    setInterval(test,200);
    setInterval(wrAC,1000);

}




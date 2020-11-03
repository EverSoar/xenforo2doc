$(document).ready(function(){
    $("#en").click(function(){
        var str = window.location.href;
        if(str.includes("zh_tw")){
            str = str.replace(/zh_tw/,"en");
            alert(str);
            window.location = str;
        }else if(str.includes("zh_cn")) {
            str = str.replace(/zh_cn/,"en");
            alert(str);
            window.location = str;
        }else{
            alert(str);
            window.location = str;
        }
    });

    $("#zh_tw").click(function(){
        var str = window.location.href;
        if(str.includes("en/")){
            str = str.replace(/en\//,"zh_tw/");
            alert(str);
            window.location = str;
        }else if(str.includes("zh_cn")) {
            str = str.replace(/zh_cn/,"zh_tw");
            alert(str);
            window.location = str;
        }else{
            alert(str);
            window.location = str;
        }
    });

    $("#zh_cn").click(function(){
        var str = window.location.href;
        if(str.includes("zh_tw")){
            str = str.replace(/zh_tw/,"zh_cn");
            alert(str);
            window.location = str;
        }else if(str.includes("en/")) {
            str = str.replace(/en\//,"zh_cn/");
            alert(str);
            window.location = str;
        }else{
            alert(str);
            window.location = str;
        }
    });
});
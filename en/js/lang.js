$(document).ready(function(){
    $("#en").click(function(){
        var str = window.location.href;
        if(str.includes("zh_tw")){
            str = str.replace(/zh_tw/,"en");
            window.location = str;
        }else if(str.includes("zh_cn")) {
            str = str.replace(/zh_cn/,"en");
            window.location = str;
        }else if(str.includes("en/")) {
            str = str.replace(/en\//,"en");
            window.location = str;
        }
    });

    $("#zh_tw").click(function(){
        var str = window.location.href;
        if(str.includes("en/")){
            str = str.replace(/en\//,"zh_tw/");
            window.location = str;
        }else if(str.includes("zh_cn")) {
            str = str.replace(/zh_cn/,"zh_tw");
            window.location = str;
        }else if(str.includes("zh_tw")) {
            str = str.replace(/zh_tw/,"zh_tw");
            window.location = str;
        }
    });

    $("#zh_cn").click(function(){
        var str = window.location.href;
        if(str.includes("zh_tw")){
            str = str.replace(/zh_tw/,"zh_cn");
            window.location = str;
        }else if(str.includes("en/")) {
            str = str.replace(/en\//,"zh_cn/");
            window.location = str;
        }else if(str.includes("zh_cn")) {
            str = str.replace(/zh_cn/,"zh_cn");
            window.location = str;
        }
    });
});
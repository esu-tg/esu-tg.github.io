function go(){
	//alert('请在点击确定之后允许打开 Telegram 。');
	var json_obj = JSON.parse(Get("https://cdn.jsdelivr.net/gh/NekogramX/ProxyList@master/proxy_list.json")); 
	//console.log(json_obj);
	console.log("返回長度 " + json_obj.length);
	var num = random(0, json_obj.length - 1);
	console.log("try  " + num);
	var proxy_https = json_obj[num].proxy;
	var description = json_obj[num].desc;
	proxy = proxy_https.replace("https://t.me/" , "tg://")
	var length_end = json_obj.length - 1;
	alert("returned proxies: 0 - " length_end + ", choose " + num + "\norigin url: " + proxy_https + "\n代理贡献者：" + description + "\nconnect to " + proxy + "\n点击确定后请允许打开电报APP。\n" + "如果不能连接代理，请返回这里再点一次连接，我们再给您一个新代理。");
	window.location.href = proxy; 
}

function Get(yourUrl){
	var Httpreq = new XMLHttpRequest(); // a new request
	Httpreq.open("GET",yourUrl,false);
	Httpreq.send(null);
	return Httpreq.responseText;          
}

function random(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 
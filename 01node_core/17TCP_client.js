// 创建TCP客户端
var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect('8431', 'localhost', function(){
    console.log('已连接到服务器');
    client.write('hello, this is a tcp server');
    setTimeout(function(){
    	client.end('byebye');
    }, 10000)
})
client.on('data', function(data){
    console.log('已接收服务器端发送的数据:'+ data)
})

client.on('error', function(err){
	console.log(err);
	client.destroy();
})
var myHeaders = new Headers() ;
myHeaders.append ("Cookie",
	"CSRF3-Token=1682291497.n8n@TBaEUmNf5xq1;__204u=8269057204-1681427497401");

var requestoptions = {
	method: 'GET' ,
	headers: myHeaders
	redirect: 'follow '
};

fetch("https://www.coursera.org/learn/html-css-javascript-for-web-developers/peer/8VMXa/module-3-coding-assignment",
	requestoptions)
	.then(response => response. text())
	.then(result => console. log(result))
	.catch(error => console. log( 'error',
	error)) ;
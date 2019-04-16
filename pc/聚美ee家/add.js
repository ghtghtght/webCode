var oArea = document.querySelector('#area')
var oMoney = document.querySelector('#money')
var oAdd = document.querySelector('#add')
oAdd.addEventListener('click',function(){
	if(oArea.value == ''){
		alert('请输入面积')
	}else{
	oMoney.innerHTML = oArea.value  * 1000 + '元'}
})

var oFixed = document.querySelector('.fixed')
var oSpan = document.querySelector('.fixed .two')
console.log(oFixed)
console.log(oSpan)
oSpan.addEventListener('click',function(){
	oFixed.style.display = 'none'
})
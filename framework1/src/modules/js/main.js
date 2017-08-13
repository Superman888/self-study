//index
var index = {
	init: function (num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				let aLi = document.getElementsByTagName('li');
				for(let i=0;i<aLi.length;i++){
					aLi[i].index = i;
					aLi[i].onclick = function(){
						alert(this.index)
					}
				}
			})
		})
	}
}
//about
var about = {
	init: function(num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				console.log(num)
			})
		})
	}
}

var boxs={
	fox:function(nice){
		require(['jquery','swiper'],function($,swiper){
			$(document).ready(function(){

				var mySwiper = new Swiper('.swiper-container',{
						touchRatio : 0.5,pagination : '.swiper-pagination',
						})
				})
			})
		}
	}


exports.index = index;
exports.about = about;
exports.boxs = boxs;


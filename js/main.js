mui(document.body).on('tap', '#clearBtn', function(e) {
    //清空按钮点击
    document.getElementById("card1").value="";
    document.getElementById("card2").value="";
    document.getElementById("card3").value="";
    document.getElementById("card4").value="";
    document.getElementById("cardFinal").value="";
});

var cards ;

mui(document.body).on('tap', '#calculateBtn', function(e) {
    //计算按钮点击
    cards = ['1','1','1','1','1','2','2','2','2','2',
			'3','3','3','3','3','4','4','4','4','4',
			'5','5','5','5','5','6','6','6','6','6',
			'7','7','7','7','7','8','8','8','8','8',
			'9','9','9','9','9','0','0','0','0','0',
			'J','J','J','J','J','Q','Q','Q','Q','Q','K','K','K','K','K'];


 		var value1 = document.getElementById("card1").value.toUpperCase().split("") ;
 		var value2 = document.getElementById("card2").value.toUpperCase().split("") ;
 		var value3 = document.getElementById("card3").value.toUpperCase().split("") ;
 		var value4 = document.getElementById("card4").value.toUpperCase().split("") ;

 	 	Array.prototype.indexOf = function(val) {
			for (var i = 0; i < this.length; i++) {
				if (this[i] == val) return i;
			}
			return -1;
		};

		Array.prototype.remove = function(val) {
			var index = this.indexOf(val);
			if (index > -1) {
				this.splice(index, 1);
			}
		};

		removeCard(value1);
		removeCard(value2);
		removeCard(value3);
		removeCard(value4);

		document.getElementById("cardFinal").value=cards.join("") ;
});


function removeCard(card){
	for (var i = 0; i < card.length; i++) {
		cards.remove(card[i]);
	}
}

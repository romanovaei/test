$(function() {
		/*  генератор чисел */
var rand_numbers = [];

	function randomInteger() {
		
        var result = Math.floor(1 + Math.random() * 36);
	        if (rand_numbers.indexOf(result) == -1) {
	            rand_numbers.push(result);
	            return result;
	        }
		}

		$(".parameters__button").click(function() {
			rand_numbers.length = 0;
			var i =0;
			while(i < 10){
				randomInteger();
				i++;
				continue
			}
			rand_numbers.length = 6;
			$(".parameters__result__number").text(rand_numbers.join(" "));
	});

	const STATE_SELECT = 1; //состояние выбора
	const STATE_CHECK = 2;  //состояние проверки
	var state = STATE_SELECT;
	/* ДОБАВЛЕНИЕ КЛАССА ПРИ НАВЕДЕНИИ */
	var grey = function() {
	  if(state === STATE_CHECK) return;
	  $(this).toggleClass("active");
	};
	/* ДОБАВЛЕНИЕ КЛАССА ПРИ CLICK */
	var green = function() {
	  if(state === STATE_CHECK) return;
	  $(this).toggleClass("selected");
	};
	/* СТАВКА */
	var yellow = function() {
	  $(".selected").toggleClass("parameters__field__rate-yellow");
	  $(".button").toggleClass("disabled");
	  if(state === STATE_CHECK) {
	    state = STATE_SELECT;
	  } else {
	    state = STATE_CHECK;  
	  }
	};

	$(".button").hover(grey);
	$(".button").click(green);
	$(".parameters__field__rate").click(yellow);

	    /* СБРОС ВЫБРАННЫХ ЧИСЕЛ НА ПОЛЕ */
	$(".parameters__field__clear").click(function() {
		$(".button").removeClass("selected parameters__field__rate-yellow disabled");
	});

$(".test").click(function() {
 
	/* ПОИСК СОВПАДЕНИЙ */

	var array1 = [];
	array1 = rand_numbers;
	var	ln1 = array1.length; 
	
	var array2 = [];
	document.querySelectorAll(".parameters__field__rate-yellow").forEach(function(addArr) {
        array2.push(addArr.textContent);
    });
    var	cache;
    	outer:
			for(var i = 0; i < ln1; ++i) {
				
				cache = array1[i];
				alert(cache);
				for(var j = 0; j < ln2; ++j) {
					if(cache == array2[j]) {
						$(".parameters__field__rate-yellow:eq(0)").toggleClass("asd");
					} else {
						break  outer;
					}
				}
			}
			alert("добрался");
	});			
});

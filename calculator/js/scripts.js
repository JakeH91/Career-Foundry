$(document).ready(function(){
	
	function type(curr){
		if(curr == "0" || curr == "1" || curr == "2" || curr == "3" || curr == "4" || curr == "5" || curr == "6" || curr == "7" || curr == "8" || curr == "9"){
			return "number";
		}
		else if(curr == "%" || curr == "*" || curr == "/" || curr == "-" || curr == "+"){
			return "operator";
		}
		else if(curr == "."){
			return "decimal";
		}
		else if(curr == "="){
			return "total";
		}
		else if(curr == "(" || curr == ")"){
			return "brackets";
		}
	}
	
	var currType = "";
	var prevType = "";
	var curr = "";
	var prev = "";
	var decimalCount = 0;
	
	// IF button clicked
	$("button").click(function(){
		// 	get current value of button
		prev = curr;
		curr = $(this).html();
		var screenText = $(".text").text();
		prevType = currType;
		// 	get type of button
		currType = type(curr);		
		if(currType != "number" && curr != "."){
			decimalCount = 0;
		}

		// 	Lots of "Do Nothing" conditions
		if((prevType == "operator" && (currType == "operator" || curr == ")" || curr == "." || curr == "=")) || (prev == "(" && currType == "operator") || (prevType == "brackets" && curr == ".")){
			currType = prevType;
			curr = prev;
		}
		else if(screenText != "" && currType == "operator"){
			$(".text").text(screenText + curr)
		}
		else{
			if (curr == "="){
				$(".text").text(eval(screenText));
			}
			
			else if (curr == "C"){
				if(prevType == "total"){
					$(".text").text("");
				}
				else{
					$(".text").text(screenText.slice(0, -1));
					screenText = $(".text").text();
					currType = type(screenText.substr(screenText.length - 1));
				}
			}
			
			else if (curr == "AC"){
				$(".text").text("");
				currType = ""
			}
			
			else if (prevType != "total" && (currType == "number" || currType == "decimal" || currType == "brackets")){
				if (curr == "."){
					if(decimalCount > 0){
						return;
					}
					else{
						$(".text").text(screenText + curr)
						decimalCount++;
					}
				}
				else{
					$(".text").text(screenText + curr)
				}
				
			}

			// 		IF prev type is total AND current type is number
			else if (prevType == "total" && (currType == "number" || currType == "decimal" || currType == "brackets")){
				// 			empty screen
				// 			add current value to screen
					$(".text").text(curr);
			}
		}
		
	})
})

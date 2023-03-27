n=prompt("Enter a value"); 
			function tot(n){
			num=[]; x="";
			for(i=0; i<n.length; i++){
				switch(n[i]){
					case "1": num[i]="One";
							break;
					case "2": num[i]="Two";
							break;
					case "3": num[i]="Three";
							break;
					case "4": num[i]="Four";
							break;
					case "5": num[i]="Five";
							break;
					case "6": num[i]="Six";
							break;
					case "7": num[i]="Seven";
							break;
					case "8": num[i]="Eight";
							break;
					case "9": num[i]="Nine";
							break;
					default : num[i]="Zero";
				}
				x=x.concat(" ", num[i]);
			}
			console.log(x);
			}
			tot(n);
	
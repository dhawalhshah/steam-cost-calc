javascript:function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var totalcost = 0;
divs = document.getElementsByTagName('div');
for(i =0; i < divs.length; i++)
{
	if(divs[i].className=='transactionRowPrice')
	{
		price = divs[i].firstChild.textContent.substring(1);
		if(isNumber(price))
		{		
			totalcost += parseFloat(price);
		}
	}
	if(divs[i].className == 'accountLabel')
	{
		accountLabel = divs[i];
	}
	if(divs[i].className == 'accountData price')
	{
		accountPrice = divs[i];
	}
	
	if(divs[i].className == 'accountRow accountBalance')
	{
		wallet = divs[i];
	}
	
}

accountLabel = document.createElement("div");
accountLabel.innerHTML = "Amount spent on Steam";
accountLabel.className = "accountLabel";

accountPrice = document.createElement("div");
accountPrice.innerHTML = "$" + totalcost.toFixed(2);
accountPrice.className = "accountData price";

walletDiv = document.createElement("div");
walletDiv.className = "accountRow accountBalance";
walletDiv.appendChild(accountPrice);
walletDiv.appendChild(accountLabel);
void (wallet.parentNode.insertBefore(walletDiv, wallet));


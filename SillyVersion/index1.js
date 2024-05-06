document.addEventListener("DOMContentLoaded", function () { 
	const button = 
		document.getElementById("calculate-button"); 
	const container = 
		document.getElementById("result"); 

	button.addEventListener("click", function () { 
		const initialInvestment = 
			parseFloat(document.getElementById("intInvestment").value); 
		const interestRate = 
			parseFloat(document.getElementById("intRate").value) / 100; 
		const investmentYears = 
			parseInt(document.getElementById("investment-years").value); 
		let totalAmount = initialInvestment; 

		for (let p = 1; p <= investmentYears; p++) { 
			totalAmount *= (1 + interestRate); 
		} 

		container.innerHTML = 
		`After ${investmentYears} years, your investment`+ 
		` will be worth $${totalAmount.toFixed(2)}. ` + `<p> <h6> (It's okay babe, I'm never going to be able to afford a house either lol) </h6></p>`; 
	}); 
}); 

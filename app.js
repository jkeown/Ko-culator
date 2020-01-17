function getNextFill(){
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const lastFillDate = new Date(document.querySelector('#lastFillDate').value);
	
	const daySupply = document. querySelector('#daySupply').value;
	const dayOfMonth = lastFillDate.getDate();
	lastFillDate.setDate(dayOfMonth + Number.parseInt(daySupply));
	const nextFillDate = days[lastFillDate.getDay()] + " " + (lastFillDate.getMonth()+1) + "-" + lastFillDate.getDate() + "-" + lastFillDate.getFullYear();


	document.querySelector('.date-due').innerHTML = `Next fill due: <span>${nextFillDate}</span>`;
};
// let lastFillDate = new Date('8/8/2017');
// let dayOfMonth = lastFillDate.getDate();
// lastFillDate.setDate(dayOfMonth+61);

// document.querySelector('.date-due').innerHTML = lastFillDate;
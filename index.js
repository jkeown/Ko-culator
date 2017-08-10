const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function getNextFill(){
	const lastFillDate = new Date(document.querySelector('#lastFillDate').value);
  const dayOfMonth = lastFillDate.getDate();
  const daySupply = document. querySelector('#daySupply').value;
	lastFillDate.setDate(dayOfMonth + Number.parseInt(daySupply));
	const nextFillDate = days[lastFillDate.getDay()] + " " + (lastFillDate.getMonth()+1) + "-" + lastFillDate.getDate() + "-" + lastFillDate.getFullYear();

	document.querySelector('.date-due').innerHTML = nextFillDate.startsWith('undefined') ? 'You must enter the required information' : 'Next fill is due on: <br/><br/>' + nextFillDate;
};

document.querySelector('input').addEventListener('keyup', (e) => { if (e.keyCode === 13){getNextFill()}});

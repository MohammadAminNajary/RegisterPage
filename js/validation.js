const form = document.querySelector('form');
form.addEventListener('submit' , validate);

function validate(event){
	const user = document.getElementById('user');
	if(user.value.length < 11 ){
		alert('شماره موبایل باید 11 رقم باشد!');
		event.preventDefault();
	}
}

function resetScroll() {
	this.scrollTo(0,0);
}

window.addEventListener('beforeunload', resetScroll);

const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

function toggle() {
	event.stopPropagation();
	event.preventDefault();
	navbar.classList.toggle('open');
}

navbarToggle.addEventListener('click', toggle);

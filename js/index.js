function resetScroll() {
	this.scrollTo(0,0);
}

window.addEventListener('beforeunload', resetScroll);

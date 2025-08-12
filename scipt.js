// ======== Responsive Navbar Toggle ========
const menuBtn = document.querySelector('.panel-all');
const menuItems = document.querySelector('.panel-ops');

menuBtn.addEventListener('click', () => {
  menuItems.classList.toggle('active');
});

// ======== Search Bar Function ========
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    alert(`You searched for: ${searchInput.value}`);
  }
});

// ======== Back to Top ========
const backToTop = document.querySelector('.foot-panel1');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ======== Dynamic Year in Footer ========
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
document.querySelector('.copyright').append(` © ${yearSpan.textContent}, Amazon.com Clone`);

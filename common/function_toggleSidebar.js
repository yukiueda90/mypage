// Function to toggle sidebar on mobile
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var hamburger = document.getElementById('hamburger');
    var mainContent = document.querySelector('main');
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('open');
    mainContent.classList.toggle('hidden');
}
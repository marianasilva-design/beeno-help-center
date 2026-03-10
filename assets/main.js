// Beeno Help Center — Main JS

// Sidebar accordion
document.querySelectorAll('.sidebar-section-header').forEach(header => {
  header.addEventListener('click', () => {
    const articles = header.nextElementSibling;
    const isOpen = articles.classList.contains('open');
    // Close all
    document.querySelectorAll('.sidebar-articles').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.sidebar-section-header').forEach(h => h.classList.remove('open'));
    // Toggle clicked
    if (!isOpen) {
      articles.classList.add('open');
      header.classList.add('open');
    }
  });
});

// Auto-open active section
const activeLink = document.querySelector('.sidebar-article.active');
if (activeLink) {
  const section = activeLink.closest('.sidebar-section');
  if (section) {
    section.querySelector('.sidebar-articles').classList.add('open');
    section.querySelector('.sidebar-section-header').classList.add('open');
  }
}

// Sidebar search filter
const sidebarSearch = document.getElementById('sidebar-search');
if (sidebarSearch) {
  sidebarSearch.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    document.querySelectorAll('.sidebar-section').forEach(section => {
      let hasVisible = false;
      section.querySelectorAll('.sidebar-article').forEach(link => {
        const text = link.textContent.toLowerCase();
        if (!query || text.includes(query)) {
          link.classList.remove('search-hidden');
          hasVisible = true;
        } else {
          link.classList.add('search-hidden');
        }
      });
      if (query) {
        section.querySelector('.sidebar-articles').classList.toggle('open', hasVisible);
        section.querySelector('.sidebar-section-header').classList.toggle('open', hasVisible);
      }
    });
  });
}

// Homepage search
const homeSearch = document.getElementById('home-search');
if (homeSearch) {
  homeSearch.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const q = this.value.trim();
      if (q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
    }
  });
}
const homeSearchBtn = document.getElementById('home-search-btn');
if (homeSearchBtn) {
  homeSearchBtn.addEventListener('click', function() {
    const input = document.getElementById('home-search');
    const q = input ? input.value.trim() : '';
    if (q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
  });
}

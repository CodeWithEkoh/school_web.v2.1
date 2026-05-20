 // ── Filter logic ──────────────────────────────────────
 const btns  = document.querySelectorAll('.filter-btn');
 const items = document.querySelectorAll('.gallery-item');

 btns.forEach(btn => {
   btn.addEventListener('click', () => {
     btns.forEach(b => b.classList.remove('active'));
     btn.classList.add('active');

     const filter = btn.dataset.filter;

     items.forEach(item => {
       if (filter === 'all' || item.dataset.cat === filter) {
         item.classList.remove('hidden');
       } else {
         item.classList.add('hidden');
       }
     });
   });
 });

 // ── Mobile menu toggle ────────────────────────────────
 const hamburgerBtn = document.getElementById('hamburgerBtn');
 const mobileMenu   = document.getElementById('mobileMenu');

 hamburgerBtn.addEventListener('click', () => {
   const isOpen = mobileMenu.classList.toggle('open');
   hamburgerBtn.classList.toggle('open', isOpen);
   hamburgerBtn.setAttribute('aria-expanded', isOpen);
   mobileMenu.setAttribute('aria-hidden', !isOpen);
 });

 // Close menu when a link inside it is tapped
 mobileMenu.querySelectorAll('a').forEach(link => {
   link.addEventListener('click', () => {
     mobileMenu.classList.remove('open');
     hamburgerBtn.classList.remove('open');
     hamburgerBtn.setAttribute('aria-expanded', 'false');
     mobileMenu.setAttribute('aria-hidden', 'true');
   });
 });
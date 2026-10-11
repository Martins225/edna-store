// Edilight Events & Bakes - Product and ordering functionality
// Prices below are displayed in Nigerian Naira (₦) and can be edited here.
const products = [
    { id: 1, name: "Classic Wedding Cake", category: "cakes", price: 150000, description: "Elegant multi-tier wedding cake with buttercream frosting and decorative details. Starting price.", image: "thumbnails/Classic Wedding Cakes.png", gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 2, name: "Chocolate Fudge Cake", category: "cakes", price: 25000, description: "Rich chocolate cake finished with smooth chocolate frosting. Starting price.", image: "thumbnails/chocolate-fudge-cakes.png", gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 3, name: "Red Velvet Cake", category: "cakes", price: 40000, description: "Soft red velvet sponge with creamy frosting. Starting price.", image: "thumbnails/red-velvet cakes.png", gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 4, name: "Lemon Drizzle Cake", category: "cakes", price: 20000, description: "Moist lemon cake with a fresh citrus drizzle. Starting price.", image: "thumbnails/lemon drizzle cakes.png",  gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },

    { id: 5, name: "French Croissant", category: "pastries", price: 2800, description: "Golden, crisp and buttery croissant with delicate flaky layers.", image: "thumbnails/French Croissant.png", gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 6, name: "Egg Roll", category: "pastries", price: 1000, description: "Freshly baked Nigerian-style egg roll with a golden pastry shell.", image: "thumbnails/Egg Rolls.png", gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 7, name: "Meat Pie", category: "pastries", price: 1500, description: "Flaky pastry filled with seasoned meat and vegetables.", image: "thumbnails/Meat-Pie-scaled.jpg",gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 8, name: "Cinnamon Rolls", category: "pastries", price: 3000, description: "Warm cinnamon rolls finished with sweet icing. Price shown is a serving/pack starting price.", image: "thumbnails/pastry 3.jpg", gradient: "linear-gradient(135deg, #ff9a9e, #fecfef)" },

    { id: 9, name: "Chocolate Chip Cookies", category: "cookies", price: 9200, description: "Fresh chocolate chip cookies. Price shown for a 12-piece pack.", image: "thumbnails/Chocolate chipped Cookies.png",  gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 10, name: "Butter Cookies", category: "cookies", price: 3000, description: "Crisp, buttery cookies. Price shown for a 10-piece pack.", image: "thumbnails/Sugar Cookies.png",  gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 11, name: "Macarons", category: "cookies", price: 28800, description: "Delicate assorted macarons. Price shown for a 12-piece box.", image: "thumbnails/Chocolate Macarons.png",  gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 12, name: "Oatmeal Raisin Cookies", category: "cookies", price: 5000, description: "Soft-baked oatmeal raisin cookies with a rich, wholesome flavour.", image: "thumbnails/Oatmeal Raisin Cookies.png",  gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 13, name: "Sugar Cookies", category: "cookies", price: 3000, description: "Sweet, crisp sugar cookies suitable for gifting and events.", image: "thumbnails/Sugar Cookies.png",gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },

    { id: 14, name: "Vanilla Cupcakes", category: "cupcakes", price: 5000, description: "Classic vanilla cupcakes with creamy icing. Price shown for a box of 6.", image: "thumbnails/vanilla-cupcakes-featured.jpg",gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 15, name: "Chocolate Cupcakes", category: "cupcakes", price: 5000, description: "Moist chocolate cupcakes with creamy icing. Price shown for a box of 6.", image: "thumbnails/cupcake 1.png", gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 16, name: "Red Velvet Cupcakes", category: "cupcakes", price: 5000, description: "Soft red velvet cupcakes with smooth cream frosting. Price shown for a box of 6.", image: "thumbnails/Red Velvet Cupcakes.png", gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
    { id: 17, name: "Lemon Cupcakes", category: "cupcakes", price: 5000, description: "Fresh lemon cupcakes with a bright citrus flavour. Price shown for a box of 6.", image: "thumbnails/Lemon Cupcakes.png", gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)" }
];

// WhatsApp order/payment redirect settings
const WHATSAPP_NUMBER = "2347065669768";
const WHATSAPP_GREETING = "Hello Edilight Events & Bakes, I would like to place an order and confirm payment details.";

const money = value => `₦${Number(value).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const menuGrid = document.getElementById('menuGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const orderModal = document.getElementById('orderModal');
const modalClose = document.getElementById('modalClose');
const orderForm = document.getElementById('orderForm');
const orderItem = document.getElementById('orderItem');
const orderQuantity = document.getElementById('orderQuantity');
const orderTotal = document.getElementById('orderTotal');
const successMessage = document.getElementById('successMessage');
const successClose = document.getElementById('successClose');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
let currentProduct = null;

function productCard(product, index = 0) {
    return `
        <div class="menu-item" style="animation-delay: ${index * 0.05}s">
            <div class="menu-item-image" style="background: ${product.gradient}">
                ${product.image ? `<img src="${encodeURI(product.image)}" alt="${product.name}" loading="eager" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block;position:relative;z-index:2;" onload="this.nextElementSibling && (this.nextElementSibling.style.display='none')" onerror="this.style.display='none'; this.nextElementSibling && (this.nextElementSibling.style.display='flex')">` : ''}<span class="product-image-fallback" aria-hidden="true"><i class="fas ${product.icon}"></i></span>
                <i class="fas ${product.icon}"></i>
            </div>
            <div class="menu-item-content">
                <h3 class="menu-item-title">${product.name}</h3>
                <p class="menu-item-description">${product.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${money(product.price)}</span>
                    <button class="btn btn-primary" onclick="openOrderModal(${product.id})">Order Now</button>
                </div>
            </div>
        </div>`;
}

function renderProducts(category = 'all') {
    if (!menuGrid) return;
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    menuGrid.innerHTML = filtered.map(productCard).join('');
}

function renderHomeProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;

    // Keep the Home page compact so customers can see the full catalogue in Menu.
    // One featured product is shown from each main category.
    const featuredProducts = products.filter((product, index, list) =>
        list.findIndex(p => p.category === product.category) === index
    );

    featuredGrid.innerHTML = featuredProducts.map(productCard).join('');
}

function openOrderModal(productId) {
    if (!orderModal || !orderForm) return;
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;
    if (orderItem) orderItem.value = currentProduct.name;
    if (orderQuantity) orderQuantity.value = 1;
    updateOrderTotal();
    orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
window.openOrderModal = openOrderModal;

function closeOrderModal() {
    if (!orderModal) return;
    orderModal.classList.remove('active');
    document.body.style.overflow = '';
    if (orderForm) orderForm.reset();
    currentProduct = null;
}

function updateOrderTotal() {
    if (!currentProduct || !orderTotal) return;
    const quantity = Math.max(1, parseInt(orderQuantity?.value, 10) || 1);
    orderTotal.textContent = money(currentProduct.price * quantity);
}

function handleOrderSubmit(e) {
    e.preventDefault();
    if (!currentProduct || !orderForm) return;
    const formData = new FormData(orderForm);
    const quantity = Math.max(1, parseInt(formData.get('quantity'), 10) || 1);
    const total = currentProduct.price * quantity;
    const orderData = {
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        phone: formData.get('phone') || '',
        item: formData.get('item') || currentProduct.name,
        quantity,
        date: formData.get('date') || '',
        notes: formData.get('notes') || 'None'
    };

    const whatsappMessage = `${WHATSAPP_GREETING}\n\n` +
        `*ORDER DETAILS*\n` +
        `Name: ${orderData.name}\n` +
        `Email: ${orderData.email}\n` +
        `Phone: ${orderData.phone}\n` +
        `Item: ${orderData.item}\n` +
        `Quantity: ${orderData.quantity}\n` +
        `Unit Price: ${money(currentProduct.price)}\n` +
        `Total: ${money(total)}\n` +
        `Preferred Date: ${orderData.date}\n` +
        `Special Requests: ${orderData.notes}\n\n` +
        `Please send me the payment instructions and confirm my order.`;

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
}

function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const contactData = Object.fromEntries(formData.entries());
    console.log('Contact form submitted:', contactData);
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
}

function toggleMobileNav() {
    if (!navMenu || !navToggle) return;
    const isOpen = navMenu.classList.toggle('active');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            e.preventDefault();
            const navbar = document.querySelector('.navbar');
            const navHeight = navbar ? navbar.offsetHeight : 0;
            window.scrollTo({ top: targetElement.offsetTop - navHeight, behavior: 'smooth' });
        });
    });
}

function setMinDate() {
    const input = document.getElementById('orderDate');
    if (input) input.min = new Date().toISOString().split('T')[0];
}

function setupGalleryFilters() {
    const buttons = document.querySelectorAll('.gallery-filter .category-btn');
    const items = document.querySelectorAll('.gallery-page-grid .gallery-item, .gallery-page-grid .gallery-item-large');
    buttons.forEach(btn => btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        items.forEach(item => {
            item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
        });
    }));
}

function setupAnimations() {
    const sections = document.querySelectorAll('section');
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    }), { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    sections.forEach(section => {
        if (!section.classList.contains('hero')) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        }
    });
}



document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    renderHomeProducts();

    categoryBtns.forEach(btn => btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);
    }));

    if (modalClose) modalClose.addEventListener('click', closeOrderModal);
    if (orderModal) orderModal.addEventListener('click', e => { if (e.target === orderModal) closeOrderModal(); });
    if (orderForm) orderForm.addEventListener('submit', handleOrderSubmit);
    if (orderQuantity) orderQuantity.addEventListener('input', updateOrderTotal);
    if (successClose && successMessage) successClose.addEventListener('click', () => successMessage.classList.remove('active'));
    if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);
    if (newsletterForm) newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    if (navToggle) navToggle.addEventListener('click', toggleMobileNav);
    navLinks.forEach(link => link.addEventListener('click', () => { if (navMenu) navMenu.classList.remove('active'); if (navToggle) { navToggle.classList.remove('active'); navToggle.setAttribute('aria-expanded', 'false'); } }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOrderModal(); });

    setupSmoothScrolling();
    setupGalleryFilters();
    setMinDate();
    setupAnimations();
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.boxShadow = window.scrollY > 100 ? '0 4px 20px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.1)';
});

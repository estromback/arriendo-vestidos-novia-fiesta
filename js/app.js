// Élégance Atelier — App Logic
// Handles catalog filtering, quick view modal, wishlist / favorites, appointment booking, and WhatsApp integrations

// Application State
const state = {
  category: 'all',
  size: 'all',
  priceRange: 'all',
  searchQuery: '',
  sortBy: 'featured',
  wishlist: JSON.parse(localStorage.getItem('elegance_wishlist') || '[]'),
  activeModalDress: null,
  whatsappPhone: "56987654321" // Teléfono para contacto WhatsApp
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Lucide Icons initialization
  if (window.lucide) {
    lucide.createIcons();
  }

  // Initial renders
  renderCatalog();
  renderTestimonials();
  renderFAQ();
  updateWishlistBadge();
  setupEventListeners();
  populateAppointmentDressOptions();

  // Set min date for appointment picker to tomorrow
  const dateInput = document.getElementById('appointmentDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }
});

// Event Listeners Setup
function setupEventListeners() {
  // Category tabs
  const categoryButtons = document.querySelectorAll('[data-category-btn]');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      categoryButtons.forEach(b => {
        b.classList.remove('filter-btn-active', 'bg-zinc-900', 'text-white');
        b.classList.add('bg-white', 'text-zinc-700', 'hover:bg-zinc-100');
      });
      btn.classList.add('filter-btn-active', 'bg-zinc-900', 'text-white');
      btn.classList.remove('bg-white', 'text-zinc-700', 'hover:bg-zinc-100');
      
      state.category = btn.getAttribute('data-category-btn');
      renderCatalog();
    });
  });

  // Size filter
  const sizeSelect = document.getElementById('sizeFilter');
  if (sizeSelect) {
    sizeSelect.addEventListener('change', (e) => {
      state.size = e.target.value;
      renderCatalog();
    });
  }

  // Price filter
  const priceSelect = document.getElementById('priceFilter');
  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      state.priceRange = e.target.value;
      renderCatalog();
    });
  }

  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  // Sort by
  const sortSelect = document.getElementById('sortBy');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Reset filters
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }

  // Wishlist drawer toggles
  const wishlistToggleBtn = document.getElementById('wishlistToggleBtn');
  const closeWishlistBtn = document.getElementById('closeWishlistBtn');
  const wishlistBackdrop = document.getElementById('wishlistBackdrop');

  if (wishlistToggleBtn) wishlistToggleBtn.addEventListener('click', openWishlistDrawer);
  if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', closeWishlistDrawer);
  if (wishlistBackdrop) wishlistBackdrop.addEventListener('click', closeWishlistDrawer);

  // Modal close buttons
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeDressModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeDressModal);

  // Appointment Form Submission
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', handleAppointmentSubmit);
  }

  // Mobile navigation toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Reset all catalog filters
function resetFilters() {
  state.category = 'all';
  state.size = 'all';
  state.priceRange = 'all';
  state.searchQuery = '';
  state.sortBy = 'featured';

  // Reset UI elements
  const categoryButtons = document.querySelectorAll('[data-category-btn]');
  categoryButtons.forEach(b => {
    if (b.getAttribute('data-category-btn') === 'all') {
      b.classList.add('filter-btn-active', 'bg-zinc-900', 'text-white');
      b.classList.remove('bg-white', 'text-zinc-700');
    } else {
      b.classList.remove('filter-btn-active', 'bg-zinc-900', 'text-white');
      b.classList.add('bg-white', 'text-zinc-700');
    }
  });

  const sizeSelect = document.getElementById('sizeFilter');
  if (sizeSelect) sizeSelect.value = 'all';

  const priceSelect = document.getElementById('priceFilter');
  if (priceSelect) priceSelect.value = 'all';

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('sortBy');
  if (sortSelect) sortSelect.value = 'featured';

  renderCatalog();
}

// Filter and Sort Catalog Data
function getFilteredDresses() {
  return DRESSES_DATA.filter(dress => {
    // Category filter
    if (state.category !== 'all' && dress.category !== state.category) {
      return false;
    }

    // Size filter
    if (state.size !== 'all') {
      const hasSize = dress.sizes.some(s => s.toLowerCase().includes(state.size.toLowerCase()) || s.toLowerCase() === 'única');
      if (!hasSize) return false;
    }

    // Price range filter
    if (state.priceRange !== 'all') {
      if (state.priceRange === 'low' && dress.priceRental > 50000) return false;
      if (state.priceRange === 'mid' && (dress.priceRental <= 50000 || dress.priceRental > 120000)) return false;
      if (state.priceRange === 'high' && dress.priceRental <= 120000) return false;
    }

    // Search query filter
    if (state.searchQuery) {
      const q = state.searchQuery;
      const matchName = dress.name.toLowerCase().includes(q);
      const matchColor = dress.color.toLowerCase().includes(q);
      const matchFabric = dress.fabric.toLowerCase().includes(q);
      const matchDesc = dress.description.toLowerCase().includes(q);
      const matchSilhouette = dress.silhouette.toLowerCase().includes(q);
      if (!matchName && !matchColor && !matchFabric && !matchDesc && !matchSilhouette) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'price-asc') return a.priceRental - b.priceRental;
    if (state.sortBy === 'price-desc') return b.priceRental - a.priceRental;
    if (state.sortBy === 'rating') return b.rating - a.rating;
    // 'featured' default: featured first, then id
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return 0;
  });
}

// Render Dress Grid
function renderCatalog() {
  const container = document.getElementById('dressesGrid');
  const countBadge = document.getElementById('resultsCount');
  const emptyState = document.getElementById('emptyState');

  if (!container) return;

  const dresses = getFilteredDresses();

  if (countBadge) {
    countBadge.textContent = `${dresses.length} diseño${dresses.length === 1 ? '' : 's'} disponible${dresses.length === 1 ? '' : 's'}`;
  }

  if (dresses.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  container.innerHTML = dresses.map(dress => {
    const isWishlisted = state.wishlist.includes(dress.id);
    const savingsPercent = Math.round((1 - (dress.priceRental / dress.priceRetail)) * 100);

    return `
      <div class="card-luxury bg-white rounded-2xl overflow-hidden border border-stone-200/80 flex flex-col group relative">
        <!-- Image & Tags -->
        <div class="img-zoom-container relative aspect-[3/4] bg-stone-100 overflow-hidden cursor-pointer" onclick="openDressModal('${dress.id}')">
          <img 
            src="${dress.image}" 
            alt="${dress.name}" 
            loading="lazy" 
            class="w-full h-full object-cover object-top"
          />

          <!-- Tag & Badges -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            ${dress.tag ? `<span class="badge-luxury text-zinc-900 border border-stone-200">${dress.tag}</span>` : ''}
            <span class="inline-flex items-center gap-1 bg-black/75 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
              <i data-lucide="tag" class="w-3 h-3 text-amber-300"></i> Ahorras ${savingsPercent}%
            </span>
          </div>

          <!-- Wishlist Button -->
          <button 
            type="button" 
            onclick="event.stopPropagation(); toggleWishlist('${dress.id}')" 
            class="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-zinc-800 hover:scale-110 active:scale-95 transition-all shadow-md z-10"
            title="${isWishlisted ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
          >
            <i data-lucide="heart" class="w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-zinc-700'}"></i>
          </button>

          <!-- Quick view hint -->
          <div class="absolute inset-x-0 bottom-0 py-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium tracking-wide">
            <span class="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Vista Rápida & Detalles
            </span>
          </div>
        </div>

        <!-- Info Card -->
        <div class="p-5 flex flex-col flex-grow justify-between bg-white">
          <div>
            <!-- Category and Rating -->
            <div class="flex items-center justify-between text-xs text-stone-500 mb-1.5 font-medium">
              <span class="uppercase tracking-wider text-[11px] text-amber-800 font-semibold">${dress.categoryLabel}</span>
              <span class="flex items-center gap-1 text-zinc-700">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i> ${dress.rating.toFixed(1)} (${dress.reviewsCount})
              </span>
            </div>

            <!-- Title -->
            <h3 class="font-serif-luxury text-2xl font-bold text-zinc-900 group-hover:text-amber-800 transition-colors cursor-pointer" onclick="openDressModal('${dress.id}')">
              ${dress.name}
            </h3>

            <!-- Silhouette & Color -->
            <p class="text-xs text-stone-500 mt-1 line-clamp-1">
              ${dress.silhouette} • ${dress.color}
            </p>

            <!-- Available Sizes -->
            <div class="flex items-center gap-1.5 mt-3">
              <span class="text-[11px] text-stone-400 font-medium">Tallas:</span>
              <div class="flex flex-wrap gap-1">
                ${dress.sizes.map(sz => `
                  <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-zinc-800 border border-stone-200">
                    ${sz}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Pricing and Action -->
          <div class="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
            <div>
              <div class="text-[11px] text-stone-400 uppercase tracking-wider font-semibold">Valor Arriendo (4 días)</div>
              <div class="flex items-baseline gap-2">
                <span class="text-xl font-bold text-zinc-900 tracking-tight">${dress.priceRentalFormatted}</span>
                <span class="text-xs text-stone-400 line-through">${dress.priceRetailFormatted}</span>
              </div>
            </div>

            <button 
              type="button" 
              onclick="openDressModal('${dress.id}')"
              class="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-amber-800 text-white text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1 shadow-sm"
            >
              <span>Ver</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Open Detail Modal
function openDressModal(dressId) {
  const dress = DRESSES_DATA.find(d => d.id === dressId);
  if (!dress) return;

  state.activeModalDress = dress;
  const modal = document.getElementById('dressModal');
  const modalBody = document.getElementById('modalBody');

  if (!modal || !modalBody) return;

  const isWishlisted = state.wishlist.includes(dress.id);
  const savingsPercent = Math.round((1 - (dress.priceRental / dress.priceRetail)) * 100);

  // WhatsApp message text
  const waMessage = encodeURIComponent(
    `Hola Élégance Atelier! Estoy muy interesada en arrendar el vestido "${dress.name}" (${dress.categoryLabel}) por ${dress.priceRentalFormatted}. ¿Podrían confirmarme disponibilidad para mi fecha? Muchas gracias.`
  );
  const waUrl = `https://wa.me/${state.whatsappPhone}?text=${waMessage}`;

  modalBody.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Left: Image Gallery -->
      <div class="lg:col-span-6 flex flex-col gap-4">
        <div class="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 relative border border-stone-200 shadow-inner">
          <img 
            id="modalMainImage" 
            src="${dress.gallery[0] || dress.image}" 
            alt="${dress.name}" 
            class="w-full h-full object-cover object-top transition-all duration-300"
          />
          <div class="absolute top-4 left-4 flex flex-col gap-2">
            <span class="badge-luxury">${dress.categoryLabel}</span>
            <span class="bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
              Ahorras ${savingsPercent}% vs compra
            </span>
          </div>
        </div>

        <!-- Thumbnails -->
        ${dress.gallery.length > 1 ? `
          <div class="flex gap-2 overflow-x-auto pb-1">
            ${dress.gallery.map((imgUrl, idx) => `
              <button 
                type="button" 
                onclick="switchModalImage('${imgUrl}', this)" 
                class="w-20 h-24 rounded-lg overflow-hidden border-2 ${idx === 0 ? 'border-amber-700' : 'border-stone-200'} flex-shrink-0 transition-all hover:opacity-100 opacity-80"
              >
                <img src="${imgUrl}" alt="Vista ${idx + 1}" class="w-full h-full object-cover"/>
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- Right: Detailed Information -->
      <div class="lg:col-span-6 flex flex-col justify-between">
        <div>
          <!-- Header info -->
          <div class="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span class="font-semibold text-amber-800 uppercase tracking-wider">${dress.tag || 'Diseño Exclusivo'}</span>
            <span class="flex items-center gap-1 font-semibold text-zinc-700">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i> ${dress.rating.toFixed(1)} (${dress.reviewsCount} opiniones)
            </span>
          </div>

          <h2 class="font-serif-luxury text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
            ${dress.name}
          </h2>

          <p class="text-stone-600 text-sm mt-3 leading-relaxed">
            ${dress.description}
          </p>

          <!-- Pricing Box -->
          <div class="mt-5 p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span class="text-xs text-stone-500 font-medium uppercase tracking-wider">Valor de Arriendo (4 Días)</span>
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-extrabold text-zinc-900">${dress.priceRentalFormatted}</span>
                <span class="text-sm text-stone-400 line-through">Compra: ${dress.priceRetailFormatted}</span>
              </div>
            </div>
            <div class="text-left sm:text-right text-xs text-stone-600">
              <div><strong class="text-zinc-800">Garantía:</strong> ${dress.securityDeposit} <span class="text-stone-400">(reembolsable)</span></div>
              <div class="text-emerald-700 font-medium flex items-center gap-1 sm:justify-end mt-0.5">
                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Tintorería 100% incluida
              </div>
            </div>
          </div>

          <!-- Specs Table -->
          <div class="mt-6 space-y-2.5 text-xs text-zinc-700">
            <div class="grid grid-cols-3 py-1.5 border-b border-stone-100">
              <span class="font-semibold text-stone-500">Corte / Silueta:</span>
              <span class="col-span-2 text-zinc-900 font-medium">${dress.silhouette}</span>
            </div>
            <div class="grid grid-cols-3 py-1.5 border-b border-stone-100">
              <span class="font-semibold text-stone-500">Color:</span>
              <span class="col-span-2 text-zinc-900 font-medium">${dress.color}</span>
            </div>
            <div class="grid grid-cols-3 py-1.5 border-b border-stone-100">
              <span class="font-semibold text-stone-500">Escote:</span>
              <span class="col-span-2 text-zinc-900 font-medium">${dress.neckline}</span>
            </div>
            <div class="grid grid-cols-3 py-1.5 border-b border-stone-100">
              <span class="font-semibold text-stone-500">Tela / Material:</span>
              <span class="col-span-2 text-zinc-900 font-medium">${dress.fabric}</span>
            </div>
            <div class="grid grid-cols-3 py-1.5 border-b border-stone-100">
              <span class="font-semibold text-stone-500">Largo:</span>
              <span class="col-span-2 text-zinc-900 font-medium">${dress.length}</span>
            </div>
            <div class="grid grid-cols-3 py-1.5 border-b border-stone-100">
              <span class="font-semibold text-stone-500">Tallas Disponibles:</span>
              <span class="col-span-2 flex gap-1.5">
                ${dress.sizes.map(s => `<span class="px-2 py-0.5 bg-stone-200 text-zinc-900 font-bold rounded">${s}</span>`).join('')}
              </span>
            </div>
          </div>

          <!-- Included Services Checklist -->
          <div class="mt-5 p-3.5 bg-amber-50/70 border border-amber-200/60 rounded-xl">
            <h4 class="text-xs font-bold text-amber-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-700"></i> Tu arriendo incluye:
            </h4>
            <ul class="text-xs text-amber-900/90 space-y-1">
              ${dress.includedServices.map(srv => `
                <li class="flex items-center gap-1.5">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"></i> ${srv}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="mt-8 pt-5 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
          <a 
            href="${waUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
          >
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span>Consultar por WhatsApp</span>
          </a>

          <button 
            type="button" 
            onclick="scheduleDressFromModal('${dress.id}')"
            class="flex-1 py-3.5 px-4 rounded-xl bg-zinc-900 hover:bg-amber-900 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <i data-lucide="calendar" class="w-4 h-4"></i>
            <span>Agendar Prueba Presencial</span>
          </button>

          <button 
            type="button" 
            onclick="toggleWishlist('${dress.id}'); updateModalWishlistButton('${dress.id}', this)"
            class="px-4 py-3.5 rounded-xl border border-stone-300 hover:bg-stone-100 text-zinc-800 transition-colors flex items-center justify-center"
            title="Guardar en favoritos"
          >
            <i data-lucide="heart" class="w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-zinc-700'}"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Switch thumbnail to main image in modal
function switchModalImage(imgUrl, btn) {
  const mainImg = document.getElementById('modalMainImage');
  if (mainImg) {
    mainImg.src = imgUrl;
  }
  const allBtns = btn.parentElement.querySelectorAll('button');
  allBtns.forEach(b => {
    b.classList.remove('border-amber-700', 'opacity-100');
    b.classList.add('border-stone-200', 'opacity-80');
  });
  btn.classList.add('border-amber-700', 'opacity-100');
  btn.classList.remove('border-stone-200', 'opacity-80');
}

// Close Detail Modal
function closeDressModal() {
  const modal = document.getElementById('dressModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Pre-fill appointment with selected dress from modal and scroll to form
function scheduleDressFromModal(dressId) {
  closeDressModal();
  const select = document.getElementById('appointmentDress');
  if (select) {
    select.value = dressId;
  }
  const formSection = document.getElementById('agendar-cita');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Toggle Wishlist / Favoritos
function toggleWishlist(dressId) {
  const index = state.wishlist.indexOf(dressId);
  const dress = DRESSES_DATA.find(d => d.id === dressId);
  const dressName = dress ? dress.name : 'Vestido';

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`"${dressName}" eliminado de tus favoritos`);
  } else {
    state.wishlist.push(dressId);
    showToast(`✨ "${dressName}" agregado a tus favoritos!`);
  }

  localStorage.setItem('elegance_wishlist', JSON.stringify(state.wishlist));
  updateWishlistBadge();
  renderCatalog();
  renderWishlistDrawer();
}

// Update heart icon in open modal
function updateModalWishlistButton(dressId, button) {
  const isWishlisted = state.wishlist.includes(dressId);
  const icon = button.querySelector('i');
  if (icon) {
    if (isWishlisted) {
      icon.classList.add('fill-red-500', 'text-red-500');
      icon.classList.remove('text-zinc-700');
    } else {
      icon.classList.remove('fill-red-500', 'text-red-500');
      icon.classList.add('text-zinc-700');
    }
  }
}

// Update badge count
function updateWishlistBadge() {
  const badges = document.querySelectorAll('.wishlist-counter');
  badges.forEach(b => {
    b.textContent = state.wishlist.length;
    if (state.wishlist.length > 0) {
      b.classList.remove('opacity-0');
    } else {
      b.classList.add('opacity-0');
    }
  });
}

// Wishlist Drawer controls
function openWishlistDrawer() {
  renderWishlistDrawer();
  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('wishlistBackdrop');
  if (drawer && backdrop) {
    backdrop.classList.remove('hidden');
    drawer.classList.remove('translate-x-full');
    document.body.classList.add('overflow-hidden');
  }
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('wishlistBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('translate-x-full');
    setTimeout(() => {
      backdrop.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 250);
  }
}

// Render items in Wishlist Drawer
function renderWishlistDrawer() {
  const container = document.getElementById('wishlistItemsContainer');
  const footer = document.getElementById('wishlistFooter');
  const emptyState = document.getElementById('wishlistEmptyState');
  const totalEl = document.getElementById('wishlistTotalPrice');

  if (!container) return;

  const savedDresses = DRESSES_DATA.filter(d => state.wishlist.includes(d.id));

  if (savedDresses.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    if (footer) footer.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (footer) footer.classList.remove('hidden');

  const total = savedDresses.reduce((acc, curr) => acc + curr.priceRental, 0);
  if (totalEl) {
    totalEl.textContent = `$${total.toLocaleString('es-CL')}`;
  }

  container.innerHTML = savedDresses.map(dress => `
    <div class="flex gap-4 p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 items-center">
      <img src="${dress.image}" alt="${dress.name}" class="w-16 h-20 object-cover object-top rounded-lg flex-shrink-0" />
      <div class="flex-grow min-w-0">
        <h4 class="font-serif-luxury font-bold text-base text-zinc-900 truncate">${dress.name}</h4>
        <p class="text-xs text-stone-500">${dress.categoryLabel}</p>
        <div class="text-sm font-bold text-amber-900 mt-1">${dress.priceRentalFormatted}</div>
      </div>
      <button 
        type="button" 
        onclick="toggleWishlist('${dress.id}')"
        class="text-stone-400 hover:text-red-500 p-2 rounded-lg transition-colors"
        title="Eliminar de favoritos"
      >
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    </div>
  `).join('');

  // Prepare WhatsApp button in drawer
  const waBtn = document.getElementById('wishlistWhatsAppBtn');
  if (waBtn) {
    const listNames = savedDresses.map(d => `• ${d.name} (${d.categoryLabel} - ${d.priceRentalFormatted})`).join('\n');
    const msg = encodeURIComponent(
      `Hola Élégance Atelier! Me encantaría cotizar y saber disponibilidad de mis vestidos favoritos:\n\n${listNames}\n\nTotal estimado arriendo: $${total.toLocaleString('es-CL')}\n¿Tienen horas disponibles para prueba?`
    );
    waBtn.href = `https://wa.me/${state.whatsappPhone}?text=${msg}`;
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Populate dresses options in appointment form select
function populateAppointmentDressOptions() {
  const select = document.getElementById('appointmentDress');
  if (!select) return;

  select.innerHTML = '<option value="">-- Elige un vestido o estilo de interés (opcional) --</option>';

  const categories = [
    { key: 'novias', label: '--- NOVIAS ---' },
    { key: 'gala', label: '--- GALA & MADRINAS ---' },
    { key: 'fiesta', label: '--- FIESTA & GRADUACIÓN ---' },
    { key: 'accesorios', label: '--- ACCESORIOS ---' }
  ];

  categories.forEach(cat => {
    const optGroup = document.createElement('optgroup');
    optGroup.label = cat.label;
    DRESSES_DATA.filter(d => d.category === cat.key).forEach(dress => {
      const opt = document.createElement('option');
      opt.value = dress.id;
      opt.textContent = `${dress.name} (${dress.priceRentalFormatted})`;
      optGroup.appendChild(opt);
    });
    select.appendChild(optGroup);
  });
}

// Handle Appointment Form Submission
function handleAppointmentSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('clientName').value.trim();
  const phone = document.getElementById('clientPhone').value.trim();
  const email = document.getElementById('clientEmail').value.trim();
  const eventType = document.getElementById('eventType').value;
  const appointmentDate = document.getElementById('appointmentDate').value;
  const appointmentTime = document.getElementById('appointmentTime').value;
  const dressId = document.getElementById('appointmentDress').value;
  const guests = document.getElementById('appointmentGuests').value;
  const notes = document.getElementById('appointmentNotes').value.trim();

  if (!name || !phone || !appointmentDate || !appointmentTime) {
    showToast('Por favor completa todos los campos requeridos');
    return;
  }

  const selectedDress = DRESSES_DATA.find(d => d.id === dressId);
  const dressName = selectedDress ? selectedDress.name : 'Asesoría general de colección';
  const bookingCode = 'ELEG-' + Math.floor(100000 + Math.random() * 900000);

  // Show Booking Success Modal
  const successModal = document.getElementById('bookingSuccessModal');
  const successContent = document.getElementById('bookingSuccessContent');

  if (successModal && successContent) {
    successContent.innerHTML = `
      <div class="text-center p-6 sm:p-8">
        <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="check" class="w-8 h-8"></i>
        </div>
        <span class="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          Cita Registrada Exitosamente
        </span>
        <h3 class="font-serif-luxury text-3xl font-bold text-zinc-900 mt-3">¡Te Esperamos, ${name}!</h3>
        <p class="text-sm text-stone-600 mt-2 max-w-md mx-auto">
          Hemos reservado tu cita de prueba personalizada en nuestro showroom con atención exclusiva y copa de bienvenida.
        </p>

        <!-- Booking details summary -->
        <div class="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
          <div class="flex justify-between py-1 border-b border-stone-200">
            <span class="text-stone-500 font-medium">Código de Cita:</span>
            <span class="font-bold text-zinc-900 font-mono">${bookingCode}</span>
          </div>
          <div class="flex justify-between py-1 border-b border-stone-200">
            <span class="text-stone-500 font-medium">Fecha y Hora:</span>
            <span class="font-bold text-zinc-900">${appointmentDate} a las ${appointmentTime} hrs</span>
          </div>
          <div class="flex justify-between py-1 border-b border-stone-200">
            <span class="text-stone-500 font-medium">Tipo de Evento:</span>
            <span class="font-bold text-zinc-900">${eventType}</span>
          </div>
          <div class="flex justify-between py-1 border-b border-stone-200">
            <span class="text-stone-500 font-medium">Diseño de Interés:</span>
            <span class="font-bold text-amber-900">${dressName}</span>
          </div>
          <div class="flex justify-between py-1">
            <span class="text-stone-500 font-medium">Acompañantes:</span>
            <span class="font-bold text-zinc-900">${guests} persona(s)</span>
          </div>
        </div>

        <!-- WhatsApp Confirmation Button -->
        <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <a 
            id="sendBookingWhatsApp" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span>Confirmar Cita en WhatsApp</span>
          </a>
          <button 
            type="button" 
            onclick="document.getElementById('bookingSuccessModal').classList.add('hidden')"
            class="px-5 py-3.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-zinc-800 font-semibold text-sm transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    `;

    // WhatsApp Direct URL
    const waMsg = encodeURIComponent(
      `Hola Élégance Atelier! Acabo de registrar una cita de prueba en la web con el código *${bookingCode}*.\n\n` +
      `• *Nombre:* ${name}\n` +
      `• *Fecha:* ${appointmentDate} a las ${appointmentTime} hrs\n` +
      `• *Evento:* ${eventType}\n` +
      `• *Vestido de Interés:* ${dressName}\n` +
      `• *Acompañantes:* ${guests}\n` +
      (notes ? `• *Comentarios:* ${notes}\n` : '') +
      `Quedo atenta a su confirmación. ¡Muchas gracias!`
    );
    const waLink = document.getElementById('sendBookingWhatsApp');
    if (waLink) {
      waLink.href = `https://wa.me/${state.whatsappPhone}?text=${waMsg}`;
    }

    successModal.classList.remove('hidden');
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // Reset form
  event.target.reset();
}

// Render Client Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS_DATA.map(item => `
    <div class="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between relative group hover:border-amber-300 transition-all">
      <div class="text-amber-500 flex gap-1 mb-4">
        ${Array(item.stars).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>').join('')}
      </div>

      <p class="text-stone-700 text-sm leading-relaxed italic mb-6">
        "${item.text}"
      </p>

      <div class="flex items-center gap-3.5 pt-4 border-t border-stone-100">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-full object-cover border border-stone-200" />
        <div>
          <h4 class="font-serif-luxury font-bold text-base text-zinc-900">${item.name}</h4>
          <p class="text-xs text-stone-500">${item.role}</p>
          <span class="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded mt-1 inline-block">${item.dress}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Render FAQ Accordion
function renderFAQ() {
  const container = document.getElementById('faqContainer');
  if (!container) return;

  container.innerHTML = FAQ_DATA.map((faq, idx) => `
    <div class="border border-stone-200 rounded-xl overflow-hidden bg-white transition-all">
      <button 
        type="button" 
        onclick="toggleFaq(${idx})" 
        class="w-full text-left p-5 flex items-center justify-between gap-4 font-serif-luxury text-lg sm:text-xl font-bold text-zinc-900 hover:text-amber-900 transition-colors"
      >
        <span>${faq.question}</span>
        <i data-lucide="chevron-down" id="faq-icon-${idx}" class="w-5 h-5 text-stone-400 transition-transform duration-300 flex-shrink-0"></i>
      </button>
      <div id="faq-answer-${idx}" class="hidden px-5 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
        ${faq.answer}
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

function toggleFaq(idx) {
  const ans = document.getElementById(`faq-answer-${idx}`);
  const icon = document.getElementById(`faq-icon-${idx}`);
  if (ans && icon) {
    const isHidden = ans.classList.contains('hidden');
    ans.classList.toggle('hidden');
    icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

// Toast Notification
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'fixed bottom-24 right-6 bg-zinc-900/95 backdrop-blur-md text-white px-5 py-3 rounded-xl shadow-2xl text-xs sm:text-sm font-medium z-50 flex items-center gap-2 transform translate-y-10 opacity-0 transition-all duration-300 pointer-events-none border border-stone-700';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4 text-amber-300"></i> ${message}`;
  if (window.lucide) lucide.createIcons();

  toast.classList.remove('translate-y-10', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3200);
}

// Nomor WhatsApp Anda (ganti dengan nomor Anda, format: 62812345678)
const WHATSAPP_NUMBER = '6283125991869'; // Ganti dengan nomor Anda

// Data Produk
const products = [
    {
        id: 1,
        name: 'Netflix Premium',
        emoji: '🎬',
        originalPrice: 'Rp 30.000',
        price: 'Rp 25.000',
        priceValue: 25000,
        description: 'Akses unlimited film dan series tanpa batas',
        badge: 'Diskon 17%'
    },
    {
        id: 2,
        name: 'Spotify Premium',
        emoji: '🎵',
        originalPrice: 'Rp 35.000',
        price: 'Rp 20.000',
        priceValue: 20000,
        description: 'Streaming musik tanpa iklan, unlimited',
        badge: 'Diskon 43%'
    },
    {
        id: 3,
        name: 'Canva Pro',
        emoji: '🎨',
        originalPrice: 'Rp 35.000',
        price: 'Rp 20.000',
        priceValue: 20000,
        description: 'Template desain profesional unlimited',
        badge: 'Diskon 43%'
    },
    {
        id: 4,
        name: 'CapCut Pro',
        emoji: '🎥',
        originalPrice: 'Rp 25.000',
        price: 'Rp 20.000',
        priceValue: 20000,
        description: 'Edit video dengan efek profesional',
        badge: 'Diskon 20%'
    },
    {
        id: 5,
        name: 'ChatGPT Plus',
        emoji: '🤖',
        originalPrice: 'Rp 45.000',
        price: 'Rp 30.000',
        priceValue: 30000,
        description: 'AI assistant dengan respons lebih cepat',
        badge: 'Diskon 33%'
    },
    {
        id: 6,
        name: 'YouTube Premium',
        emoji: '📺',
        originalPrice: 'Rp 25.000',
        price: 'Rp 20.000',
        priceValue: 20000,
        description: 'Tononton tanpa iklan, offline mode',
        badge: 'Diskon 20%'
    },
    {
        id: 7,
        name: 'Disney+ Hotstar',
        emoji: '🎭',
        originalPrice: 'Rp 30.000',
        price: 'Rp 25.000',
        priceValue: 25000,
        description: 'Film, series, olahraga live unlimited',
        badge: 'Diskon 17%'
    },
    {
        id: 8,
        name: 'HBO Max',
        emoji: '🎞️',
        originalPrice: 'Rp 30.000',
        price: 'Rp 25.000',
        priceValue: 25000,
        description: 'Series dan film eksklusif premium',
        badge: 'Diskon 17%'
    },
    {
        id: 9,
        name: 'Alight Motion Pro',
        emoji: '✨',
        originalPrice: 'Rp 35.000',
        price: 'Rp 25.000',
        priceValue: 25000,
        description: 'Editor video dengan efek animasi canggih',
        badge: 'Diskon 29%'
    }
];

// Load produk ke halaman
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-logo">${product.emoji}</div>
            <h3>${product.name}</h3>
            <div class="badge">${product.badge}</div>
            <p>${product.description}</p>
            <div class="product-price">
                <span class="original-price">${product.originalPrice}</span>
                <span class="promo-price">${product.price}</span>
            </div>
            <button class="btn-beli" onclick="buyViaWhatsApp('${product.name}', '${product.price}')">💬 Beli via WhatsApp</button>
        </div>
    `).join('');
}

// Fungsi membeli via WhatsApp
function buyViaWhatsApp(productName, price) {
    const message = `Halo! Saya ingin membeli ${productName} seharga ${price}. Mohon segera diproses. Terima kasih! 🙏`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Load produk saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadProducts);
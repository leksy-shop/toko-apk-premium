// Nomor WhatsApp Anda (ganti dengan nomor Anda, format: 62812345678)
const WHATSAPP_NUMBER = '6283125991869'; // Ganti dengan nomor Anda

// Data Produk
const products = [
    {
        id: 1,
        name: 'Netflix Premium',
        emoji: '🎬',
        price: 'Rp 49.000',
        priceValue: 49000,
        description: 'Akses unlimited film dan series tanpa batas',
        badge: 'Paling Populer'
    },
    {
        id: 2,
        name: 'Spotify Premium',
        emoji: '🎵',
        price: 'Rp 39.000',
        priceValue: 39000,
        description: 'Streaming musik tanpa iklan, unlimited',
        badge: 'Favorit'
    },
    {
        id: 3,
        name: 'Canva Pro',
        emoji: '🎨',
        price: 'Rp 45.000',
        priceValue: 45000,
        description: 'Template desain profesional unlimited',
        badge: 'Best Seller'
    },
    {
        id: 4,
        name: 'CapCut Pro',
        emoji: '🎥',
        price: 'Rp 35.000',
        priceValue: 35000,
        description: 'Edit video dengan efek profesional',
        badge: 'Tren'
    },
    {
        id: 5,
        name: 'ChatGPT Plus',
        emoji: '🤖',
        price: 'Rp 99.000',
        priceValue: 99000,
        description: 'AI assistant dengan respons lebih cepat',
        badge: 'Premium'
    },
    {
        id: 6,
        name: 'Adobe Lightroom',
        emoji: '📸',
        price: 'Rp 55.000',
        priceValue: 55000,
        description: 'Edit foto profesional dengan cloud sync',
        badge: 'New'
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
            <div class="product-price">${product.price}</div>
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
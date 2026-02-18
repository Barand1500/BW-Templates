// UI Bileşenleri Veri Seti
const templates = [
    // ===== NAVBAR BİLEŞENLERİ =====
    {
        id: 1,
        category: 'Navbar',
        title: 'Modern Responsive Navbar',
        html: `<nav style="background: #333; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center;">
    <div style="font-size: 1.5rem; font-weight: bold;">Logo</div>
    <ul style="list-style: none; display: flex; gap: 2rem; margin: 0;">
        <li><a href="#" style="color: white; text-decoration: none;">Ana Sayfa</a></li>
        <li><a href="#" style="color: white; text-decoration: none;">Hakkımızda</a></li>
        <li><a href="#" style="color: white; text-decoration: none;">Hizmetler</a></li>
        <li><a href="#" style="color: white; text-decoration: none;">İletişim</a></li>
    </ul>
</nav>`,
        css: `nav {
    background: #333;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
}

nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

nav a:hover {
    color: #3b82f6;
}`,
        js: `// Navbar için özel JavaScript yok`
    },
    {
        id: 2,
        category: 'Navbar',
        title: 'Transparent Navbar',
        html: `<nav style="background: rgba(0,0,0,0.7); backdrop-filter: blur(10px); color: white; padding: 1rem 2rem; position: fixed; width: 100%; top: 0; z-index: 1000;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
        <div style="font-size: 1.5rem; font-weight: bold;">Brand</div>
        <div style="display: flex; gap: 2rem;">
            <a href="#" style="color: white; text-decoration: none;">Home</a>
            <a href="#" style="color: white; text-decoration: none;">About</a>
            <a href="#" style="color: white; text-decoration: none;">Contact</a>
        </div>
    </div>
</nav>`,
        css: `nav {
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(10px);
    color: white;
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s;
}

nav a:hover {
    opacity: 0.7;
}`,
        js: `// Scroll'da navbar animasyonu eklenebilir`
    },

    // ===== HERO BİLEŞENLERİ =====
    {
        id: 3,
        category: 'Hero',
        title: 'Gradient Hero Section',
        html: `<section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 6rem 2rem; text-align: center;">
    <h1 style="font-size: 3rem; margin-bottom: 1rem; font-weight: bold;">Modern Web Sitesi Oluşturun</h1>
    <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;">Profesyonel ve kullanıcı dostu web deneyimleri</p>
    <button style="background: white; color: #667eea; padding: 1rem 2rem; border: none; border-radius: 8px; font-size: 1rem; font-weight: bold; cursor: pointer;">Hemen Başla</button>
</section>`,
        css: `.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 6rem 2rem;
    text-align: center;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero button {
    background: white;
    color: #667eea;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s;
}

.hero button:hover {
    transform: scale(1.05);
}`,
        js: `// Hero animasyonları için AOS gibi kütüphane kullanılabilir`
    },
    {
        id: 4,
        category: 'Hero',
        title: 'Split Hero with Image',
        html: `<section style="display: grid; grid-template-columns: 1fr 1fr; min-height: 500px; align-items: center; gap: 2rem; padding: 2rem;">
    <div style="padding: 2rem;">
        <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">İnovatif Çözümler</h1>
        <p style="font-size: 1.125rem; color: #666; margin-bottom: 2rem;">İşinizi dijitale taşıyın, müşterilerinizle daha güçlü bağlantılar kurun.</p>
        <button style="background: #3b82f6; color: white; padding: 0.875rem 2rem; border: none; border-radius: 6px; cursor: pointer;">Keşfet</button>
    </div>
    <div style="background: #ddd; height: 400px; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
        <span style="color: #999;">Görsel Alan</span>
    </div>
</section>`,
        css: `.split-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
}

.split-hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.split-hero button {
    background: #3b82f6;
    color: white;
    padding: 0.875rem 2rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
}

.split-hero button:hover {
    background: #2563eb;
}`,
        js: `// Görsel yükleme ve parallax efektleri eklenebilir`
    },

    // ===== BUTTON BİLEŞENLERİ =====
    {
        id: 5,
        category: 'Buttons',
        title: 'Modern Button Set',
        html: `<div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 2rem;">
    <button style="background: #3b82f6; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer;">Primary</button>
    <button style="background: #10b981; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer;">Success</button>
    <button style="background: #ef4444; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer;">Danger</button>
    <button style="background: transparent; color: #3b82f6; padding: 0.75rem 1.5rem; border: 2px solid #3b82f6; border-radius: 6px; cursor: pointer;">Outline</button>
</div>`,
        css: `.btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s;
}

.btn-primary {
    background: #3b82f6;
    color: white;
}

.btn-primary:hover {
    background: #2563eb;
}

.btn-success {
    background: #10b981;
    color: white;
}

.btn-danger {
    background: #ef4444;
    color: white;
}

.btn-outline {
    background: transparent;
    color: #3b82f6;
    border: 2px solid #3b82f6;
}`,
        js: `// Button ripple effect eklenebilir`
    },
    {
        id: 6,
        category: 'Buttons',
        title: 'Icon Buttons',
        html: `<div style="display: flex; gap: 1rem; padding: 2rem;">
    <button style="background: #3b82f6; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
        <span>⬇</span> Download
    </button>
    <button style="background: #10b981; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
        <span>✓</span> Confirm
    </button>
    <button style="background: #8b5cf6; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
        <span>♥</span> Like
    </button>
</div>`,
        css: `.icon-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    transition: transform 0.2s;
}

.icon-btn:hover {
    transform: translateY(-2px);
}`,
        js: `// Icon animasyonları eklenebilir`
    },

    // ===== CARD BİLEŞENLERİ =====
    {
        id: 7,
        category: 'Cards',
        title: 'Product Card',
        html: `<div style="background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden; width: 300px; margin: 2rem;">
    <div style="background: #e5e7eb; height: 200px; display: flex; align-items: center; justify-content: center;">
        <span style="color: #9ca3af;">Ürün Görseli</span>
    </div>
    <div style="padding: 1.5rem;">
        <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Ürün Adı</h3>
        <p style="color: #6b7280; margin-bottom: 1rem;">Ürün açıklaması buraya gelecek.</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 1.5rem; font-weight: bold; color: #3b82f6;">₺299</span>
            <button style="background: #3b82f6; color: white; padding: 0.5rem 1.5rem; border: none; border-radius: 6px; cursor: pointer;">Sepete Ekle</button>
        </div>
    </div>
</div>`,
        css: `.product-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    width: 300px;
    transition: transform 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.product-card h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}`,
        js: `// Sepete ekleme mantığı eklenebilir`
    },
    {
        id: 8,
        category: 'Cards',
        title: 'Profile Card',
        html: `<div style="background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 2rem; text-align: center; width: 280px; margin: 2rem;">
    <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">JD</div>
    <h3 style="font-size: 1.25rem; margin-bottom: 0.25rem;">John Doe</h3>
    <p style="color: #6b7280; margin-bottom: 1.5rem;">Frontend Developer</p>
    <div style="display: flex; gap: 0.5rem; justify-content: center;">
        <button style="background: #3b82f6; color: white; padding: 0.5rem 1rem; border: none; border-radius: 6px; cursor: pointer;">Takip Et</button>
        <button style="background: #f3f4f6; color: #374151; padding: 0.5rem 1rem; border: none; border-radius: 6px; cursor: pointer;">Mesaj</button>
    </div>
</div>`,
        css: `.profile-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 2rem;
    text-align: center;
    width: 280px;
}

.profile-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto 1rem;
}`,
        js: `// Profil etkileşimleri eklenebilir`
    },

    // ===== FOOTER BİLEŞENLERİ =====
    {
        id: 9,
        category: 'Footer',
        title: 'Simple Footer',
        html: `<footer style="background: #1f2937; color: white; padding: 3rem 2rem; text-align: center;">
    <div style="max-width: 1200px; margin: 0 auto;">
        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">CodeUI</h3>
        <p style="color: #9ca3af; margin-bottom: 2rem;">Modern web bileşenleri kütüphanesi</p>
        <div style="display: flex; gap: 2rem; justify-content: center; margin-bottom: 2rem;">
            <a href="#" style="color: #9ca3af; text-decoration: none;">Hakkımızda</a>
            <a href="#" style="color: #9ca3af; text-decoration: none;">Bileşenler</a>
            <a href="#" style="color: #9ca3af; text-decoration: none;">Belgeler</a>
            <a href="#" style="color: #9ca3af; text-decoration: none;">İletişim</a>
        </div>
        <p style="color: #6b7280; font-size: 0.875rem;">© 2026 CodeUI. Tüm hakları saklıdır.</p>
    </div>
</footer>`,
        css: `footer {
    background: #1f2937;
    color: white;
    padding: 3rem 2rem;
    text-align: center;
}

footer a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.3s;
}

footer a:hover {
    color: white;
}`,
        js: `// Footer için özel JavaScript yok`
    },
    {
        id: 10,
        category: 'Footer',
        title: 'Multi-Column Footer',
        html: `<footer style="background: #111827; color: white; padding: 3rem 2rem;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem;">
        <div>
            <h4 style="margin-bottom: 1rem;">Ürünler</h4>
            <ul style="list-style: none; color: #9ca3af;">
                <li style="margin-bottom: 0.5rem;">Bileşenler</li>
                <li style="margin-bottom: 0.5rem;">Şablonlar</li>
                <li style="margin-bottom: 0.5rem;">Temalar</li>
            </ul>
        </div>
        <div>
            <h4 style="margin-bottom: 1rem;">Şirket</h4>
            <ul style="list-style: none; color: #9ca3af;">
                <li style="margin-bottom: 0.5rem;">Hakkımızda</li>
                <li style="margin-bottom: 0.5rem;">Blog</li>
                <li style="margin-bottom: 0.5rem;">Kariyer</li>
            </ul>
        </div>
        <div>
            <h4 style="margin-bottom: 1rem;">Destek</h4>
            <ul style="list-style: none; color: #9ca3af;">
                <li style="margin-bottom: 0.5rem;">Yardım Merkezi</li>
                <li style="margin-bottom: 0.5rem;">İletişim</li>
                <li style="margin-bottom: 0.5rem;">SSS</li>
            </ul>
        </div>
        <div>
            <h4 style="margin-bottom: 1rem;">Yasal</h4>
            <ul style="list-style: none; color: #9ca3af;">
                <li style="margin-bottom: 0.5rem;">Gizlilik</li>
                <li style="margin-bottom: 0.5rem;">Şartlar</li>
                <li style="margin-bottom: 0.5rem;">Çerezler</li>
            </ul>
        </div>
    </div>
    <div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #374151;">
        <p style="color: #6b7280;">© 2026 CodeUI. Tüm hakları saklıdır.</p>
    </div>
</footer>`,
        css: `footer {
    background: #111827;
    color: white;
    padding: 3rem 2rem;
}

footer h4 {
    margin-bottom: 1rem;
}

footer ul {
    list-style: none;
    color: #9ca3af;
}

footer li {
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: color 0.3s;
}

footer li:hover {
    color: white;
}`,
        js: `// Footer için özel JavaScript yok`
    },

    // ===== FORM BİLEŞENLERİ =====
    {
        id: 11,
        category: 'Forms',
        title: 'Contact Form',
        html: `<form style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 500px; margin: 2rem;">
    <h2 style="margin-bottom: 1.5rem;">İletişim Formu</h2>
    <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">İsim</label>
        <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem;" placeholder="Adınızı girin">
    </div>
    <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">E-posta</label>
        <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem;" placeholder="E-posta adresiniz">
    </div>
    <div style="margin-bottom: 1.5rem;">
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Mesaj</label>
        <textarea style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; resize: vertical;" rows="4" placeholder="Mesajınız"></textarea>
    </div>
    <button type="submit" style="width: 100%; background: #3b82f6; color: white; padding: 0.875rem; border: none; border-radius: 6px; font-size: 1rem; font-weight: 500; cursor: pointer;">Gönder</button>
</form>`,
        css: `.contact-form {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    max-width: 500px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: #3b82f6;
}`,
        js: `// Form validasyonu eklenebilir
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form gönderildi!');
});`
    },
    {
        id: 12,
        category: 'Forms',
        title: 'Login Form',
        html: `<div style="background: white; padding: 2.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 400px; margin: 2rem;">
    <h2 style="text-align: center; margin-bottom: 2rem;">Giriş Yap</h2>
    <form>
        <div style="margin-bottom: 1.25rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">E-posta</label>
            <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px;" placeholder="ornek@email.com">
        </div>
        <div style="margin-bottom: 1.25rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Şifre</label>
            <input type="password" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px;" placeholder="••••••••">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <label style="display: flex; align-items: center; gap: 0.5rem;">
                <input type="checkbox" style="width: auto;">
                <span style="font-size: 0.875rem;">Beni hatırla</span>
            </label>
            <a href="#" style="font-size: 0.875rem; color: #3b82f6; text-decoration: none;">Şifremi unuttum</a>
        </div>
        <button type="submit" style="width: 100%; background: #3b82f6; color: white; padding: 0.875rem; border: none; border-radius: 6px; font-weight: 500; cursor: pointer;">Giriş Yap</button>
    </form>
</div>`,
        css: `.login-form {
    background: white;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    max-width: 400px;
}

.login-form input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    transition: border-color 0.3s;
}

.login-form input:focus {
    outline: none;
    border-color: #3b82f6;
}`,
        js: `// Giriş mantığı eklenebilir`
    },

    // ===== MODAL BİLEŞENLERİ =====
    {
        id: 13,
        category: 'Modals',
        title: 'Modern Modal Window',
        html: `<button onclick="document.getElementById('modal').style.display='flex'" style="background: #3b82f6; color: white; padding: 1rem 2rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">Modal Aç</button>

<div id="modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); justify-content: center; align-items: center; z-index: 1000;">
    <div style="background: white; padding: 2rem; border-radius: 16px; max-width: 500px; width: 90%; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h2 style="margin: 0;">Modal Başlık</h2>
            <button onclick="document.getElementById('modal').style.display='none'" style="background: #f3f4f6; border: none; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 1.2rem;">×</button>
        </div>
        <p style="color: #666; margin-bottom: 2rem;">Bu modern bir modal penceresidir. İçeriğinizi buraya ekleyebilirsiniz.</p>
        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
            <button onclick="document.getElementById('modal').style.display='none'" style="background: #f3f4f6; color: #374151; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer;">İptal</button>
            <button style="background: #3b82f6; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer;">Onayla</button>
        </div>
    </div>
</div>`,
        css: `.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}`,
        js: `// Modal açma/kapatma
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}`
    },
    {
        id: 14,
        category: 'Modals',
        title: 'Confirmation Dialog',
        html: `<button onclick="document.getElementById('confirmDialog').style.display='flex'" style="background: #ef4444; color: white; padding: 1rem 2rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">Sil</button>

<div id="confirmDialog" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); justify-content: center; align-items: center; z-index: 1000;">
    <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 400px; width: 90%; text-align: center;">
        <div style="width: 64px; height: 64px; background: #fee2e2; border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 2rem;">⚠️</div>
        <h3 style="margin-bottom: 1rem;">Emin misiniz?</h3>
        <p style="color: #666; margin-bottom: 2rem;">Bu işlem geri alınamaz. Devam etmek istiyor musunuz?</p>
        <div style="display: flex; gap: 1rem;">
            <button onclick="document.getElementById('confirmDialog').style.display='none'" style="flex: 1; background: #f3f4f6; color: #374151; padding: 0.75rem; border: none; border-radius: 6px; cursor: pointer;">Hayır, İptal Et</button>
            <button style="flex: 1; background: #ef4444; color: white; padding: 0.75rem; border: none; border-radius: 6px; cursor: pointer;">Evet, Sil</button>
        </div>
    </div>
</div>`,
        css: `.confirm-dialog {
    text-align: center;
}

.confirm-icon {
    width: 64px;
    height: 64px;
    background: #fee2e2;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}`,
        js: `// Onay diyalogu mantığı`
    },

    // ===== ALERT BİLEŞENLERİ =====
    {
        id: 15,
        category: 'Alerts',
        title: 'Alert Messages',
        html: `<div style="padding: 2rem;">
    <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 1rem 1.5rem; border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem;">
        <span style="font-size: 1.5rem;">ℹ️</span>
        <div>
            <strong style="color: #1e40af;">Bilgi:</strong>
            <span style="color: #1e40af;"> İşleminiz başarıyla tamamlandı</span>
        </div>
    </div>
    <div style="background: #dcfce7; border-left: 4px solid #10b981; padding: 1rem 1.5rem; border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem;">
        <span style="font-size: 1.5rem;">✓</span>
        <div>
            <strong style="color: #166534;">Başarılı:</strong>
            <span style="color: #166534;"> Değişiklikler kaydedildi</span>
        </div>
    </div>
    <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem 1.5rem; border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem;">
        <span style="font-size: 1.5rem;">⚠️</span>
        <div>
            <strong style="color: #92400e;">Uyarı:</strong>
            <span style="color: #92400e;"> Sistem bakımı yapılacak</span>
        </div>
    </div>
    <div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 1rem 1.5rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
        <span style="font-size: 1.5rem;">✕</span>
        <div>
            <strong style="color: #991b1b;">Hata:</strong>
            <span style="color: #991b1b;"> Bağlantı kurulamadı</span>
        </div>
    </div>
</div>`,
        css: `.alert {
    padding: 1rem 1.5rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.alert-info {
    background: #dbeafe;
    border-left: 4px solid #3b82f6;
    color: #1e40af;
}

.alert-success {
    background: #dcfce7;
    border-left: 4px solid #10b981;
    color: #166534;
}

.alert-warning {
    background: #fef3c7;
    border-left: 4px solid #f59e0b;
    color: #92400e;
}

.alert-error {
    background: #fee2e2;
    border-left: 4px solid #ef4444;
    color: #991b1b;
}`,
        js: `// Alert kapatma fonksiyonu eklenebilir`
    },
    {
        id: 16,
        category: 'Alerts',
        title: 'Dismissible Alert',
        html: `<div id="dismissAlert" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1.25rem 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3); margin: 2rem;">
    <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="font-size: 1.5rem;">🎉</span>
        <div>
            <strong>Harika Haber!</strong>
            <p style="margin: 0.25rem 0 0 0; opacity: 0.9;">Yeni özellikler kullanıma sunuldu</p>
        </div>
    </div>
    <button onclick="document.getElementById('dismissAlert').style.display='none'" style="background: rgba(255,255,255,0.2); border: none; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; color: white; font-size: 1.2rem; transition: all 0.3s;">×</button>
</div>`,
        css: `.dismissible-alert {
    position: relative;
    animation: slideInDown 0.4s ease;
}

@keyframes slideInDown {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}`,
        js: `// Kapatma animasyonu
function dismissAlert(id) {
    const alert = document.getElementById(id);
    alert.style.animation = 'slideOutUp 0.3s ease';
    setTimeout(() => alert.remove(), 300);
}`
    },

    // ===== TAB BİLEŞENLERİ =====
    {
        id: 17,
        category: 'Tabs',
        title: 'Modern Tab Navigation',
        html: `<div style="max-width: 800px; margin: 2rem;">
    <div style="display: flex; gap: 0.5rem; border-bottom: 2px solid #e5e7eb; margin-bottom: 2rem;">
        <button class="tab-btn active" data-tab="tab1" style="padding: 1rem 2rem; background: none; border: none; cursor: pointer; font-weight: 600; color: #3b82f6; border-bottom: 3px solid #3b82f6; margin-bottom: -2px;">Dashboard</button>
        <button class="tab-btn" data-tab="tab2" style="padding: 1rem 2rem; background: none; border: none; cursor: pointer; font-weight: 600; color: #6b7280; border-bottom: 3px solid transparent; margin-bottom: -2px;">Profil</button>
        <button class="tab-btn" data-tab="tab3" style="padding: 1rem 2rem; background: none; border: none; cursor: pointer; font-weight: 600; color: #6b7280; border-bottom: 3px solid transparent; margin-bottom: -2px;">Ayarlar</button>
    </div>
    <div id="tab1" class="tab-content" style="padding: 2rem; background: #f9fafb; border-radius: 12px;">
        <h3>Dashboard İçeriği</h3>
        <p>Hoş geldiniz! İstatistiklerinizi buradan görebilirsiniz.</p>
    </div>
    <div id="tab2" class="tab-content" style="display: none; padding: 2rem; background: #f9fafb; border-radius: 12px;">
        <h3>Profil Bilgileri</h3>
        <p>Profil ayarlarınızı buradan düzenleyebilirsiniz.</p>
    </div>
    <div id="tab3" class="tab-content" style="display: none; padding: 2rem; background: #f9fafb; border-radius: 12px;">
        <h3>Genel Ayarlar</h3>
        <p>Sistem ayarlarınızı buradan yönetebilirsiniz.</p>
    </div>
</div>`,
        css: `.tab-btn {
    padding: 1rem 2rem;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    color: #6b7280;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;
}

.tab-btn:hover {
    color: #3b82f6;
}

.tab-btn.active {
    color: #3b82f6;
    border-bottom-color: #3b82f6;
}

.tab-content {
    animation: fadeIn 0.3s ease;
}`,
        js: `// Tab değiştirme
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        
        // Tüm tabları gizle
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        
        // Tüm butonları pasif yap
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Seçili tabı göster
        document.getElementById(targetTab).style.display = 'block';
        btn.classList.add('active');
    });
});`
    },

    // ===== PRICING BİLEŞENLERİ =====
    {
        id: 18,
        category: 'Pricing',
        title: 'Pricing Cards',
        html: `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; padding: 2rem; max-width: 1200px;">
    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); border: 2px solid #e5e7eb; text-align: center;">
        <h3 style="margin-bottom: 1rem;">Başlangıç</h3>
        <div style="margin: 2rem 0;">
            <span style="font-size: 3rem; font-weight: bold;">₺99</span>
            <span style="color: #6b7280;">/ay</span>
        </div>
        <ul style="list-style: none; padding: 0; margin: 2rem 0; text-align: left;">
            <li style="padding: 0.5rem 0; color: #6b7280;">✓ 10 Proje</li>
            <li style="padding: 0.5rem 0; color: #6b7280;">✓ 5GB Depolama</li>
            <li style="padding: 0.5rem 0; color: #6b7280;">✓ Email Destek</li>
        </ul>
        <button style="width: 100%; background: #3b82f6; color: white; padding: 1rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Başla</button>
    </div>
    <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4); transform: scale(1.05); color: white; text-align: center;">
        <div style="background: rgba(255,255,255,0.2); display: inline-block; padding: 0.5rem 1rem; border-radius: 20px; margin-bottom: 1rem; font-size: 0.875rem; font-weight: 600;">POPÜLER</div>
        <h3 style="margin-bottom: 1rem;">Profesyonel</h3>
        <div style="margin: 2rem 0;">
            <span style="font-size: 3rem; font-weight: bold;">₺299</span>
            <span style="opacity: 0.9;">/ay</span>
        </div>
        <ul style="list-style: none; padding: 0; margin: 2rem 0; text-align: left;">
            <li style="padding: 0.5rem 0;">✓ Sınırsız Proje</li>
            <li style="padding: 0.5rem 0;">✓ 50GB Depolama</li>
            <li style="padding: 0.5rem 0;">✓ Öncelikli Destek</li>
            <li style="padding: 0.5rem 0;">✓ Özel Özellikler</li>
        </ul>
        <button style="width: 100%; background: white; color: #667eea; padding: 1rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Başla</button>
    </div>
    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); border: 2px solid #e5e7eb; text-align: center;">
        <h3 style="margin-bottom: 1rem;">Kurumsal</h3>
        <div style="margin: 2rem 0;">
            <span style="font-size: 3rem; font-weight: bold;">₺999</span>
            <span style="color: #6b7280;">/ay</span>
        </div>
        <ul style="list-style: none; padding: 0; margin: 2rem 0; text-align: left;">
            <li style="padding: 0.5rem 0; color: #6b7280;">✓ Sınırsız Her Şey</li>
            <li style="padding: 0.5rem 0; color: #6b7280;">✓ 500GB Depolama</li>
            <li style="padding: 0.5rem 0; color: #6b7280;">✓ 7/24 Destek</li>
            <li style="padding: 0.5rem 0; color: #6b7280;">✓ Özel Geliştirme</li>
        </ul>
        <button style="width: 100%; background: #3b82f6; color: white; padding: 1rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">İletişime Geç</button>
    </div>
</div>`,
        css: `.pricing-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    border: 2px solid #e5e7eb;
    text-align: center;
    transition: transform 0.3s ease;
}

.pricing-card:hover {
    transform: translateY(-8px);
}

.pricing-card.featured {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    transform: scale(1.05);
}`,
        js: `// Fiyatlandırma karşılaştırması eklenebilir`
    },

    // ===== TESTIMONIAL BİLEŞENLERİ =====
    {
        id: 19,
        category: 'Testimonials',
        title: 'Customer Reviews',
        html: `<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; padding: 2rem;">
    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
        <div style="display: flex; gap: 0.25rem; margin-bottom: 1rem; color: #fbbf24; font-size: 1.25rem;">★★★★★</div>
        <p style="color: #374151; font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem;">"Bu ürün harika! İşimizi çok kolaylaştırdı ve ekip verimliliğimiz %80 arttı."</p>
        <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">AY</div>
            <div>
                <div style="font-weight: 600;">Ahmet Yılmaz</div>
                <div style="color: #6b7280; font-size: 0.875rem;">CEO, Tech Şirketi</div>
            </div>
        </div>
    </div>
    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
        <div style="display: flex; gap: 0.25rem; margin-bottom: 1rem; color: #fbbf24; font-size: 1.25rem;">★★★★★</div>
        <p style="color: #374151; font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem;">"Müşteri desteği mükemmel, ürün kullanımı çok kolay. Kesinlikle tavsiye ederim!"</p>
        <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">ZK</div>
            <div>
                <div style="font-weight: 600;">Zeynep Kaya</div>
                <div style="color: #6b7280; font-size: 0.875rem;">Product Manager</div>
            </div>
        </div>
    </div>
</div>`,
        css: `.testimonial {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
}

.testimonial:hover {
    transform: translateY(-4px);
}

.stars {
    color: #fbbf24;
    font-size: 1.25rem;
}`,
        js: `// Testimonial slider eklenebilir`
    },

    // ===== BADGE BİLEŞENLERİ =====
    {
        id: 20,
        category: 'Badges',
        title: 'Status Badges',
        html: `<div style="display: flex; flex-wrap: wrap; gap: 1rem; padding: 2rem; align-items: center;">
    <span style="background: #dbeafe; color: #1e40af; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">Primary</span>
    <span style="background: #dcfce7; color: #166534; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">Aktif</span>
    <span style="background: #fef3c7; color: #92400e; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">Beklemede</span>
    <span style="background: #fee2e2; color: #991b1b; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">İptal</span>
    <span style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">⭐ Premium</span>
    <span style="background: #1f2937; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">🔥 Yeni</span>
    <span style="border: 2px solid #3b82f6; color: #3b82f6; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">Outline</span>
</div>`,
        css: `.badge {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
}

.badge-primary { background: #dbeafe; color: #1e40af; }
.badge-success { background: #dcfce7; color: #166534; }
.badge-warning { background: #fef3c7; color: #92400e; }
.badge-danger { background: #fee2e2; color: #991b1b; }`,
        js: `// Badge animasyonları eklenebilir`
    },

    // ===== TIMELINE BİLEŞENLERİ =====
    {
        id: 21,
        category: 'Timeline',
        title: 'Vertical Timeline',
        html: `<div style="max-width: 600px; margin: 2rem; padding-left: 2rem;">
    <div style="position: relative; padding-left: 2rem; border-left: 3px solid #e5e7eb;">
        <div style="position: absolute; left: -9px; top: 0; width: 16px; height: 16px; background: #3b82f6; border-radius: 50%; border: 3px solid white;"></div>
        <div style="margin-bottom: 2rem;">
            <span style="color: #6b7280; font-size: 0.875rem;">2 saat önce</span>
            <h4 style="margin: 0.5rem 0;">Proje Başladı</h4>
            <p style="color: #6b7280;">Yeni geliştirme projesi başlatıldı ve ekip oluşturuldu.</p>
        </div>
    </div>
    <div style="position: relative; padding-left: 2rem; border-left: 3px solid #e5e7eb;">
        <div style="position: absolute; left: -9px; top: 0; width: 16px; height: 16px; background: #10b981; border-radius: 50%; border: 3px solid white;"></div>
        <div style="margin-bottom: 2rem;">
            <span style="color: #6b7280; font-size: 0.875rem;">1 gün önce</span>
            <h4 style="margin: 0.5rem 0;">İlk Versiyon Tamamlandı</h4>
            <p style="color: #6b7280;">Beta versiyonu müşterilere sunuldu.</p>
        </div>
    </div>
    <div style="position: relative; padding-left: 2rem;">
        <div style="position: absolute; left: -9px; top: 0; width: 16px; height: 16px; background: #f59e0b; border-radius: 50%; border: 3px solid white;"></div>
        <div style="margin-bottom: 2rem;">
            <span style="color: #6b7280; font-size: 0.875rem;">3 gün önce</span>
            <h4 style="margin: 0.5rem 0;">Planlama Toplantısı</h4>
            <p style="color: #6b7280;">Ekip ile proje yol haritası belirlendi.</p>
        </div>
    </div>
</div>`,
        css: `.timeline {
    position: relative;
    padding-left: 2rem;
}

.timeline-item {
    position: relative;
    padding-left: 2rem;
    border-left: 3px solid #e5e7eb;
    margin-bottom: 2rem;
}

.timeline-dot {
    position: absolute;
    left: -9px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid white;
}`,
        js: `// Timeline animasyonları eklenebilir`
    },

    // ===== PROGRESS BİLEŞENLERİ =====
    {
        id: 22,
        category: 'Progress',
        title: 'Progress Bars',
        html: `<div style="padding: 2rem; max-width: 600px;">
    <div style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="font-weight: 600;">HTML & CSS</span>
            <span style="color: #6b7280;">90%</span>
        </div>
        <div style="background: #e5e7eb; height: 10px; border-radius: 10px; overflow: hidden;">
            <div style="background: linear-gradient(90deg, #667eea, #764ba2); height: 100%; width: 90%; border-radius: 10px; transition: width 0.5s ease;"></div>
        </div>
    </div>
    <div style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="font-weight: 600;">JavaScript</span>
            <span style="color: #6b7280;">75%</span>
        </div>
        <div style="background: #e5e7eb; height: 10px; border-radius: 10px; overflow: hidden;">
            <div style="background: #3b82f6; height: 100%; width: 75%; border-radius: 10px; transition: width 0.5s ease;"></div>
        </div>
    </div>
    <div style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="font-weight: 600;">React</span>
            <span style="color: #6b7280;">60%</span>
        </div>
        <div style="background: #e5e7eb; height: 10px; border-radius: 10px; overflow: hidden;">
            <div style="background: #10b981; height: 100%; width: 60%; border-radius: 10px; transition: width 0.5s ease;"></div>
        </div>
    </div>
</div>`,
        css: `.progress-bar {
    background: #e5e7eb;
    height: 10px;
    border-radius: 10px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 0.5s ease;
    animation: progressAnimation 1s ease;
}

@keyframes progressAnimation {
    from { width: 0; }
}`,
        js: `// Progress bar animasyonu
function updateProgress(id, value) {
    document.querySelector(\`#\${id} .progress-fill\`).style.width = value + '%';
}`
    }
];

// Kategorileri otomatik olarak çıkart
const categories = [...new Set(templates.map(t => t.category))];

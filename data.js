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
    },

    // ===== NAVBAR EK BİLEŞENLERİ =====
    {
        id: 23,
        category: 'Navbar',
        title: 'Dropdown Menu Navbar',
        html: `<nav style="background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 1rem 2rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto;">
        <div style="font-size: 1.5rem; font-weight: bold; color: #3b82f6;">Logo</div>
        <div style="display: flex; gap: 2rem; align-items: center;">
            <a href="#" style="color: #374151; text-decoration: none; font-weight: 500;">Ana Sayfa</a>
            <div style="position: relative;">
                <button style="color: #374151; background: none; border: none; font-weight: 500; cursor: pointer; padding: 0.5rem 1rem;">Ürünler ▾</button>
                <div style="position: absolute; top: 100%; left: 0; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 8px; margin-top: 0.5rem; min-width: 200px; display: none;">
                    <a href="#" style="display: block; padding: 0.75rem 1rem; color: #374151; text-decoration: none; border-bottom: 1px solid #f3f4f6;">Web App</a>
                    <a href="#" style="display: block; padding: 0.75rem 1rem; color: #374151; text-decoration: none; border-bottom: 1px solid #f3f4f6;">Mobile App</a>
                    <a href="#" style="display: block; padding: 0.75rem 1rem; color: #374151; text-decoration: none;">Desktop App</a>
                </div>
            </div>
            <a href="#" style="color: #374151; text-decoration: none; font-weight: 500;">İletişim</a>
            <button style="background: #3b82f6; color: white; border: none; padding: 0.625rem 1.5rem; border-radius: 6px; cursor: pointer; font-weight: 600;">Giriş Yap</button>
        </div>
    </div>
</nav>`,
        css: `.navbar-dropdown:hover .dropdown-menu { display: block; }`,
        js: `// Dropdown hover efekti JS ile de yapılabilir`
    },
    {
        id: 24,
        category: 'Navbar',
        title: 'Sidebar Toggle Navbar',
        html: `<nav style="background: #1f2937; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 1rem;">
        <button style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;">☰</button>
        <div style="font-size: 1.5rem; font-weight: bold;">Dashboard</div>
    </div>
    <div style="display: flex; gap: 1.5rem; align-items: center;">
        <button style="background: none; border: none; color: white; font-size: 1.25rem; cursor: pointer;">🔔</button>
        <button style="background: none; border: none; color: white; font-size: 1.25rem; cursor: pointer;">⚙️</button>
        <div style="width: 40px; height: 40px; background: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">JD</div>
    </div>
</nav>`,
        css: `.sidebar-toggle { cursor: pointer; }`,
        js: `// Sidebar açma/kapama mantığı`
    },
    {
        id: 25,
        category: 'Navbar',
        title: 'Search Navbar',
        html: `<nav style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 1rem 2rem;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 2rem;">
        <div style="font-size: 1.5rem; font-weight: bold; color: white;">Brand</div>
        <div style="flex: 1; max-width: 500px;">
            <input type="text" placeholder="Ara..." style="width: 100%; padding: 0.75rem 1rem; border: none; border-radius: 24px; background: rgba(255,255,255,0.9); font-size: 0.95rem;">
        </div>
        <div style="display: flex; gap: 1rem;">
            <button style="background: white; color: #667eea; border: none; padding: 0.625rem 1.5rem; border-radius: 6px; cursor: pointer; font-weight: 600;">Kayıt Ol</button>
        </div>
    </div>
</nav>`,
        css: `.search-nav input:focus { outline: 2px solid white; }`,
        js: `// Arama fonksiyonu`
    },

    // ===== HERO EK BİLEŞENLERİ =====
    {
        id: 26,
        category: 'Hero',
        title: 'Video Background Hero',
        html: `<section style="position: relative; min-height: 600px; display: flex; align-items: center; justify-content: center; color: white; text-align: center; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)); z-index: 1;"></div>
    <div style="position: relative; z-index: 2; padding: 2rem;">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-weight: 900;">Video Background Hero</h1>
        <p style="font-size: 1.5rem; margin-bottom: 2rem; opacity: 0.95;">Profesyonel ve etkileyici vitrin alanı</p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button style="background: white; color: #667eea; padding: 1rem 2.5rem; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer;">Başla</button>
            <button style="background: transparent; color: white; padding: 1rem 2.5rem; border: 2px solid white; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer;">Daha Fazla</button>
        </div>
    </div>
</section>`,
        css: `/* Video tag eklenebilir position: absolute ile */`,
        js: `// Video autoplay kontrolü`
    },
    {
        id: 27,
        category: 'Hero',
        title: 'Animated Hero',
        html: `<section style="background: linear-gradient(to bottom right, #1e293b, #334155); color: white; padding: 8rem 2rem; text-align: center; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 20%; left: 10%; width: 300px; height: 300px; background: rgba(59, 130, 246, 0.1); border-radius: 50%; filter: blur(80px);"></div>
    <div style="position: absolute; bottom: 20%; right: 10%; width: 400px; height: 400px; background: rgba(168, 85, 247, 0.1); border-radius: 50%; filter: blur(80px);"></div>
    <div style="position: relative; z-index: 1;">
        <h1 style="font-size: 4rem; margin-bottom: 1.5rem; font-weight: 900; background: linear-gradient(to right, #3b82f6, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Geleceği İnşa Et</h1>
        <p style="font-size: 1.25rem; margin-bottom: 2.5rem; max-width: 600px; margin-left: auto; margin-right: auto; opacity: 0.9;">Modern teknolojilerle hayallerinizdeki projeyi gerçeğe dönüştürün</p>
        <button style="background: linear-gradient(135deg, #3b82f6, #a855f7); color: white; padding: 1.25rem 3rem; border: none; border-radius: 12px; font-size: 1.125rem; font-weight: bold; cursor: pointer; box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);">Keşfet →</button>
    </div>
</section>`,
        css: `@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }`,
        js: `// Animasyon kontrolleri`
    },
    {
        id: 28,
        category: 'Hero',
        title: 'App Landing Hero',
        html: `<section style="background: white; padding: 4rem 2rem;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
        <div>
            <span style="background: #dbeafe; color: #3b82f6; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600;">YENİ SÜRÜM</span>
            <h1 style="font-size: 3rem; margin: 1.5rem 0 1rem 0; font-weight: 900; color: #1e293b;">Mobil Uygulamanız Bulutta</h1>
            <p style="font-size: 1.125rem; color: #64748b; margin-bottom: 2rem; line-height: 1.8;">Bulut tabanlı çözümlerimizle işlerinizi her yerden yönetin. Güvenli, hızlı ve kullanıcı dostu.</p>
            <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                <button style="background: #000; color: white; padding: 0.875rem 2rem; border: none; border-radius: 8px; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;"><span style="font-size: 1.5rem;">🍎</span> App Store</button>
                <button style="background: #000; color: white; padding: 0.875rem 2rem; border: none; border-radius: 8px; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;"><span style="font-size: 1.5rem;">📱</span> Play Store</button>
            </div>
            <div style="display: flex; gap: 2rem; color: #64748b; font-size: 0.875rem;">
                <div><strong style="color: #1e293b; font-size: 1.25rem;">10M+</strong><br>İndirme</div>
                <div><strong style="color: #1e293b; font-size: 1.25rem;">4.8★</strong><br>Puan</div>
                <div><strong style="color: #1e293b; font-size: 1.25rem;">50+</strong><br>Ülke</div>
            </div>
        </div>
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 24px; height: 500px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">📱 App Preview</div>
    </div>
</section>`,
        css: `.app-hero img { box-shadow: 0 20px 60px rgba(0,0,0,0.3); }`,
        js: `// App store link yönlendirmeleri`
    },

    // ===== BUTTONS EK BİLEŞENLERİ =====
    {
        id: 29,
        category: 'Buttons',
        title: 'Gradient Buttons',
        html: `<div style="display: flex; flex-wrap: wrap; gap: 1rem; padding: 2rem;">
    <button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1rem 2rem; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">Purple Gradient</button>
    <button style="background: linear-gradient(135deg, #f093fb, #f5576c); color: white; padding: 1rem 2rem; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);">Pink Gradient</button>
    <button style="background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; padding: 1rem 2rem; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);">Blue Gradient</button>
    <button style="background: linear-gradient(135deg, #43e97b, #38f9d7); color: white; padding: 1rem 2rem; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 15px rgba(67, 233, 123, 0.4);">Green Gradient</button>
</div>`,
        css: `.gradient-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }`,
        js: `// Hover animasyonları`
    },
    {
        id: 30,
        category: 'Buttons',
        title: 'Loading Buttons',
        html: `<div style="display: flex; gap: 1rem; padding: 2rem;">
    <button style="background: #3b82f6; color: white; padding: 0.875rem 2rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.75rem;">
        <span style="border: 2px solid white; border-top-color: transparent; width: 16px; height: 16px; border-radius: 50%; animation: spin 1s linear infinite;"></span>
        Yükleniyor...
    </button>
    <button style="background: #10b981; color: white; padding: 0.875rem 2rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
        ✓ Tamamlandı
    </button>
    <button style="background: #f59e0b; color: white; padding: 0.875rem 2rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; opacity: 0.6;">
        Beklemede...
    </button>
</div>`,
        css: `@keyframes spin { to { transform: rotate(360deg); } }`,
        js: `// Loading state yönetimi`
    },
    {
        id: 31,
        category: 'Buttons',
        title: 'Social Media Buttons',
        html: `<div style="display: flex; gap: 1rem; padding: 2rem; flex-wrap: wrap;">
    <button style="background: #1877f2; color: white; padding: 0.875rem 1.5rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">📘 Facebook</button>
    <button style="background: #1da1f2; color: white; padding: 0.875rem 1.5rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">🐦 Twitter</button>
    <button style="background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: white; padding: 0.875rem 1.5rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">📷 Instagram</button>
    <button style="background: #0077b5; color: white; padding: 0.875rem 1.5rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">💼 LinkedIn</button>
    <button style="background: #333; color: white; padding: 0.875rem 1.5rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">🐙 GitHub</button>
    <button style="background: #ff0000; color: white; padding: 0.875rem 1.5rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">▶️ YouTube</button>
</div>`,
        css: `.social-btn:hover { opacity: 0.9; transform: scale(1.05); }`,
        js: `// Social media yönlendirmeleri`
    },

    // ===== YENİ KATEGORİ: INPUT BİLEŞENLERİ =====
    {
        id: 32,
        category: 'Inputs',
        title: 'Modern Input Fields',
        html: `<div style="max-width: 500px; padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
    <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Standart Input</label>
        <input type="text" placeholder="Metninizi girin..." style="width: 100%; padding: 0.875rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; transition: all 0.3s;">
    </div>
    <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Icon Input</label>
        <div style="position: relative;">
            <span style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); font-size: 1.25rem;">📧</span>
            <input type="email" placeholder="email@example.com" style="width: 100%; padding: 0.875rem 1rem 0.875rem 3rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem;">
        </div>
    </div>
    <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Floating Label</label>
        <input type="text" placeholder=" " style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem;">
    </div>
</div>`,
        css: `input:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }`,
        js: `// Input validation`
    },
    {
        id: 33,
        category: 'Inputs',
        title: 'Search Inputs',
        html: `<div style="max-width: 600px; padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
    <div style="position: relative;">
        <input type="search" placeholder="Ara..." style="width: 100%; padding: 1rem 3rem 1rem 3rem; border: 2px solid #e5e7eb; border-radius: 24px; font-size: 1rem;">
        <span style="position: absolute; left: 1.25rem; top: 50%; transform: translateY(-50%); font-size: 1.25rem; color: #9ca3af;">🔍</span>
        <button style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: #3b82f6; color: white; border: none; padding: 0.625rem 1.5rem; border-radius: 20px; cursor: pointer; font-weight: 600;">Ara</button>
    </div>
    <div style="position: relative;">
        <input type="search" placeholder="Ürün ara..." style="width: 100%; padding: 1rem 1.25rem; border: 2px solid #3b82f6; border-radius: 12px; font-size: 1rem; background: #eff6ff;">
        <span style="position: absolute; right: 1.25rem; top: 50%; transform: translateY(-50%); font-size: 1.25rem; color: #3b82f6;">⌘K</span>
    </div>
</div>`,
        css: `.search-input:focus { box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2); }`,
        js: `// Keyboard shortcut handling`
    },
    {
        id: 34,
        category: 'Inputs',
        title: 'File Upload',
        html: `<div style="max-width: 500px; padding: 2rem;">
    <div style="border: 3px dashed #d1d5db; border-radius: 12px; padding: 3rem 2rem; text-align: center; transition: all 0.3s; cursor: pointer;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">📁</div>
        <h3 style="margin-bottom: 0.5rem; color: #374151;">Dosya Yükle</h3>
        <p style="color: #6b7280; margin-bottom: 1.5rem;">veya sürükleyip bırakın</p>
        <input type="file" style="display: none;" id="fileInput">
        <label for="fileInput" style="background: #3b82f6; color: white; padding: 0.75rem 2rem; border-radius: 8px; cursor: pointer; display: inline-block; font-weight: 600;">Dosya Seç</label>
        <p style="color: #9ca3af; font-size: 0.875rem; margin-top: 1rem;">PNG, JPG, GIF - Max 10MB</p>
    </div>
</div>`,
        css: `.file-upload:hover { border-color: #3b82f6; background: #eff6ff; }`,
        js: `// Drag & drop handling`
    },
    {
        id: 35,
        category: 'Inputs',
        title: 'Select Dropdown',
        html: `<div style="max-width: 500px; padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
    <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Ülke Seçin</label>
        <select style="width: 100%; padding: 0.875rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; cursor: pointer; background: white;">
            <option>Türkiye</option>
            <option>ABD</option>
            <option>İngiltere</option>
            <option>Almanya</option>
        </select>
    </div>
    <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Kategori</label>
        <select style="width: 100%; padding: 0.875rem; border: 2px solid #3b82f6; border-radius: 8px; font-size: 1rem; cursor: pointer; background: #eff6ff;">
            <option>Teknoloji</option>
            <option>Tasarım</option>
            <option>İş</option>
            <option>Eğitim</option>
        </select>
    </div>
</div>`,
        css: `select:focus { outline: none; border-color: #3b82f6; }`,
        js: `// Custom select dropdown`
    },
    {
        id: 36,
        category: 'Inputs',
        title: 'Checkbox & Radio',
        html: `<div style="max-width: 500px; padding: 2rem;">
    <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 1rem; color: #374151;">Checkboxes</h4>
        <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; cursor: pointer; border-radius: 8px; transition: background 0.3s;">
            <input type="checkbox" style="width: 20px; height: 20px; cursor: pointer;">
            <span>E-posta bildirimleri almak istiyorum</span>
        </label>
        <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; cursor: pointer; border-radius: 8px;">
            <input type="checkbox" checked style="width: 20px; height: 20px; cursor: pointer;">
            <span>Kullanım şartlarını kabul ediyorum</span>
        </label>
    </div>
    <div>
        <h4 style="margin-bottom: 1rem; color: #374151;">Radio Buttons</h4>
        <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; cursor: pointer;">
            <input type="radio" name="plan" checked style="width: 18px; height: 18px; cursor: pointer;">
            <span>Ücretsiz Plan</span>
        </label>
        <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; cursor: pointer;">
            <input type="radio" name="plan" style="width: 18px; height: 18px; cursor: pointer;">
            <span>Pro Plan - ₺99/ay</span>
        </label>
        <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; cursor: pointer;">
            <input type="radio" name="plan" style="width: 18px; height: 18px; cursor: pointer;">
            <span>Enterprise - ₺999/ay</span>
        </label>
    </div>
</div>`,
        css: `label:hover { background: #f9fafb; }`,
        js: `// Form state management`
    },

    // ===== YENİ KATEGORİ: GALLERY BİLEŞENLERİ =====
    {
        id: 37,
        category: 'Gallery',
        title: 'Grid Gallery',
        html: `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 2rem;">
    <div style="background: linear-gradient(135deg, #667eea, #764ba2); height: 250px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem; cursor: pointer; transition: transform 0.3s;">📷</div>
    <div style="background: linear-gradient(135deg, #f093fb, #f5576c); height: 250px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem; cursor: pointer; transition: transform 0.3s;">🖼️</div>
    <div style="background: linear-gradient(135deg, #4facfe, #00f2fe); height: 250px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem; cursor: pointer; transition: transform 0.3s;">🎨</div>
    <div style="background: linear-gradient(135deg, #43e97b, #38f9d7); height: 250px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem; cursor: pointer; transition: transform 0.3s; grid-column: span 2;">🌄</div>
    <div style="background: linear-gradient(135deg, #fa709a, #fee140); height: 250px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem; cursor: pointer; transition: transform 0.3s;">✨</div>
</div>`,
        css: `.gallery-item:hover { transform: scale(1.05); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }`,
        js: `// Lightbox functionality`
    },
    {
        id: 38,
        category: 'Gallery',
        title: 'Masonry Gallery',
        html: `<div style="columns: 3; gap: 1rem; padding: 2rem;">
    <div style="background: #e5e7eb; height: 200px; border-radius: 12px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; font-size: 2rem; break-inside: avoid;">🌅</div>
    <div style="background: #dbeafe; height: 300px; border-radius: 12px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; font-size: 2rem; break-inside: avoid;">🏔️</div>
    <div style="background: #fef3c7; height: 250px; border-radius: 12px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; font-size: 2rem; break-inside: avoid;">🌊</div>
    <div style="background: #dcfce7; height: 280px; border-radius: 12px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; font-size: 2rem; break-inside: avoid;">🌲</div>
    <div style="background: #fee2e2; height: 220px; border-radius: 12px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; font-size: 2rem; break-inside: avoid;">🌸</div>
    <div style="background: #f3e8ff; height: 260px; border-radius: 12px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; font-size: 2rem; break-inside: avoid;">🦋</div>
</div>`,
        css: `.masonry-item { break-inside: avoid; }`,
        js: `// Masonry layout adjustment`
    },
    {
        id: 39,
        category: 'Gallery',
        title: 'Carousel Gallery',
        html: `<div style="max-width: 800px; margin: 2rem auto; position: relative;">
    <div style="background: linear-gradient(135deg, #667eea, #764ba2); height: 400px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem; position: relative; overflow: hidden;">
        <button style="position: absolute; left: 1rem; background: rgba(255,255,255,0.9); border: none; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">‹</button>
        <span>1 / 5</span>
        <button style="position: absolute; right: 1rem; background: rgba(255,255,255,0.9); border: none; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">›</button>
    </div>
    <div style="display: flex; gap: 0.5rem; justify-content: center; margin-top: 1rem;">
        <div style="width: 12px; height: 12px; background: #3b82f6; border-radius: 50%;"></div>
        <div style="width: 12px; height: 12px; background: #d1d5db; border-radius: 50%;"></div>
        <div style="width: 12px; height: 12px; background: #d1d5db; border-radius: 50%;"></div>
        <div style="width: 12px; height: 12px; background: #d1d5db; border-radius: 50%;"></div>
        <div style="width: 12px; height: 12px; background: #d1d5db; border-radius: 50%;"></div>
    </div>
</div>`,
        css: `.carousel-btn:hover { transform: scale(1.1); }`,
        js: `// Carousel navigation logic`
    },

    // ===== YENİ KATEGORİ: DROPDOWN BİLEŞENLERİ =====
    {
        id: 40,
        category: 'Dropdown',
        title: 'User Profile Dropdown',
        html: `<div style="position: relative; display: inline-block; padding: 2rem;">
    <button style="display: flex; align-items: center; gap: 0.75rem; background: white; border: 2px solid #e5e7eb; padding: 0.75rem 1rem; border-radius: 10px; cursor: pointer; transition: all 0.3s;">
        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">JD</div>
        <div style="text-align: left;">
            <div style="font-weight: 600; font-size: 0.95rem;">John Doe</div>
            <div style="color: #6b7280; font-size: 0.8rem;">john@example.com</div>
        </div>
        <span style="color: #9ca3af;">▾</span>
    </button>
    <div style="position: absolute; top: 100%; right: 0; margin-top: 0.5rem; background: white; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); min-width: 220px; border: 1px solid #e5e7eb; overflow: hidden; display: none;">
        <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; color: #374151; text-decoration: none; transition: background 0.2s; border-bottom: 1px solid #f3f4f6;"><span>👤</span> Profil</a>
        <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; color: #374151; text-decoration: none; transition: background 0.2s; border-bottom: 1px solid #f3f4f6;"><span>⚙️</span> Ayarlar</a>
        <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; color: #374151; text-decoration: none; transition: background 0.2s; border-bottom: 1px solid #f3f4f6;"><span>💳</span> Fatura</a>
        <a href="#" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem; color: #ef4444; text-decoration: none; transition: background 0.2s;"><span>🚪</span> Çıkış Yap</a>
    </div>
</div>`,
        css: `.dropdown-item:hover { background: #f9fafb; }`,
        js: `// Dropdown toggle logic`
    },
    {
        id: 41,
        category: 'Dropdown',
        title: 'Action Menu Dropdown',
        html: `<div style="position: relative; display: inline-block; padding: 2rem;">
    <button style="background: #3b82f6; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
        Aksiyonlar ▾
    </button>
    <div style="position: absolute; top: 100%; left: 0; margin-top: 0.5rem; background: white; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); min-width: 200px; overflow: hidden; display: none;">
        <div style="padding: 0.75rem 1rem; background: #f9fafb; border-bottom: 1px solid #e5e7eb; font-size: 0.75rem; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Hızlı Eylemler</div>
        <a href="#" style="display: flex; align-items: center; justify-content: space-between; padding: 0.875rem 1rem; color: #374151; text-decoration: none; border-bottom: 1px solid #f3f4f6;"><span>📝 Düzenle</span><span style="color: #9ca3af; font-size: 0.8rem;">⌘E</span></a>
        <a href="#" style="display: flex; align-items: center; justify-content: space-between; padding: 0.875rem 1rem; color: #374151; text-decoration: none; border-bottom: 1px solid #f3f4f6;"><span>📋 Kopyala</span><span style="color: #9ca3af; font-size: 0.8rem;">⌘C</span></a>
        <a href="#" style="display: flex; align-items: center; justify-content: space-between; padding: 0.875rem 1rem; color: #374151; text-decoration: none; border-bottom: 1px solid #f3f4f6;"><span>📤 Paylaş</span></a>
        <a href="#" style="display: flex; align-items: center; justify-content: space-between; padding: 0.875rem 1rem; color: #ef4444; text-decoration: none;"><span>🗑️ Sil</span><span style="color: #fca5a5; font-size: 0.8rem;">⌘⌫</span></a>
    </div>
</div>`,
        css: `.action-menu-item:hover { background: #f9fafb; }`,
        js: `// Keyboard shortcuts`
    },

    // ===== YENİ KATEGORİ: SKELETON BİLEŞENLERİ =====
    {
        id: 42,
        category: 'Skeleton',
        title: 'Card Skeleton Loader',
        html: `<div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 350px; margin: 2rem;">
    <div style="background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; height: 180px; border-radius: 8px; margin-bottom: 1rem;"></div>
    <div style="background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; height: 24px; border-radius: 6px; margin-bottom: 0.75rem; width: 70%;"></div>
    <div style="background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; height: 16px; border-radius: 6px; margin-bottom: 0.5rem;"></div>
    <div style="background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; height: 16px; border-radius: 6px; width: 90%;"></div>
</div>`,
        css: `@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }`,
        js: `// Loading state simulation`
    },
    {
        id: 43,
        category: 'Skeleton',
        title: 'List Skeleton Loader',
        html: `<div style="max-width: 600px; padding: 2rem;">
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: white; border-radius: 12px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="width: 60px; height: 60px; background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 50%;"></div>
        <div style="flex: 1;">
            <div style="background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; height: 16px; border-radius: 6px; margin-bottom: 0.5rem; width: 60%;"></div>
            <div style="background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; height: 14px; border-radius: 6px; width: 40%;"></div>
        </div>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: white; border-radius: 12px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="width: 60px; height: 60px; background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 50%;"></div>
        <div style="flex: 1;">
            <div style="background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; height: 16px; border-radius: 6px; margin-bottom: 0.5rem; width: 70%;"></div>
            <div style="background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; height: 14px; border-radius: 6px; width: 50%;"></div>
        </div>
    </div>
</div>`,
        css: `@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }`,
        js: `// List loading state`
    },

    // ===== CARDS EK BİLEŞENLERİ =====
    {
        id: 44,
        category: 'Cards',
        title: 'Stats Card',
        html: `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 2rem;">
    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 4px solid #3b82f6;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
            <div>
                <div style="color: #6b7280; font-size: 0.875rem; margin-bottom: 0.5rem;">Toplam Kullanıcı</div>
                <div style="font-size: 2rem; font-weight: 700; color: #1e293b;">12,543</div>
            </div>
            <div style="width: 48px; height: 48px; background: #eff6ff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">👥</div>
        </div>
        <div style="color: #10b981; font-size: 0.875rem; font-weight: 600;">↑ 12% önceki aya göre</div>
    </div>
    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 4px solid #10b981;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
            <div>
                <div style="color: #6b7280; font-size: 0.875rem; margin-bottom: 0.5rem;">Gelir</div>
                <div style="font-size: 2rem; font-weight: 700; color: #1e293b;">₺45,231</div>
            </div>
            <div style="width: 48px; height: 48px; background: #ecfdf5; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">💰</div>
        </div>
        <div style="color: #10b981; font-size: 0.875rem; font-weight: 600;">↑ 8% önceki aya göre</div>
    </div>
    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 4px solid #f59e0b;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
            <div>
                <div style="color: #6b7280; font-size: 0.875rem; margin-bottom: 0.5rem;">Aktif Projeler</div>
                <div style="font-size: 2rem; font-weight: 700; color: #1e293b;">24</div>
            </div>
            <div style="width: 48px; height: 48px; background: #fffbeb; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">📊</div>
        </div>
        <div style="color: #10b981; font-size: 0.875rem; font-weight: 600;">↑ 3 yeni proje</div>
    </div>
</div>`,
        css: `.stats-card:hover { transform: translateY(-4px); }`,
        js: `// Real-time stats update`
    },
    {
        id: 45,
        category: 'Cards',
        title: 'Blog Card',
        html: `<div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); max-width: 380px; margin: 2rem; transition: transform 0.3s;">
    <div style="background: linear-gradient(135deg, #667eea, #764ba2); height: 220px; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">📝</div>
    <div style="padding: 1.5rem;">
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
            <span style="background: #eff6ff; color: #3b82f6; padding: 0.375rem 0.75rem; border-radius: 16px; font-size: 0.75rem; font-weight: 600;">Teknoloji</span>
            <span style="background: #f3f4f6; color: #6b7280; padding: 0.375rem 0.75rem; border-radius: 16px; font-size: 0.75rem; font-weight: 600;">5 dk okuma</span>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #1e293b;">Modern Web Geliştirme Trendleri 2026</h3>
        <p style="color: #64748b; margin-bottom: 1.5rem; line-height: 1.6;">Web geliştirme dünyasında 2026 yılında öne çıkacak teknolojiler ve yaklaşımlar...</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">AY</div>
                <div>
                    <div style="font-weight: 600; font-size: 0.875rem; color: #1e293b;">Ahmet Yılmaz</div>
                    <div style="color: #9ca3af; font-size: 0.75rem;">15 Şubat 2026</div>
                </div>
            </div>
            <button style="background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.875rem;">Oku →</button>
        </div>
    </div>
</div>`,
        css: `.blog-card:hover { transform: translateY(-8px); }`,
        js: `// Blog card interactions`
    },
    {
        id: 46,
        category: 'Cards',
        title: 'Feature Card',
        html: `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; padding: 2rem;">
    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center; transition: all 0.3s;">
        <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1.5rem;">⚡</div>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #1e293b;">Hızlı</h3>
        <p style="color: #64748b; line-height: 1.6;">Lightning-fast performance optimization</p>
    </div>
    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center; transition: all 0.3s;">
        <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1.5rem;">🔒</div>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #1e293b;">Güvenli</h3>
        <p style="color: #64748b; line-height: 1.6;">Bank-level security with encryption</p>
    </div>
    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center; transition: all 0.3s;">
        <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #4facfe, #00f2fe); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1.5rem;">📱</div>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: #1e293b;">Responsive</h3>
        <p style="color: #64748b; line-height: 1.6;">Works perfectly on all devices</p>
    </div>
</div>`,
        css: `.feature-card:hover { transform: translateY(-8px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }`,
        js: `// Feature highlight animations`
    },

    // ===== FOOTER EK BİLEŞENLERİ =====
    {
        id: 47,
        category: 'Footer',
        title: 'Newsletter Footer',
        html: `<footer style="background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 4rem 2rem 2rem;">
    <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem; padding: 3rem 2rem; background: rgba(255,255,255,0.05); border-radius: 16px; backdrop-filter: blur(10px);">
            <h3 style="font-size: 2rem; margin-bottom: 1rem;">Bültenimize Abone Olun</h3>
            <p style="color: rgba(255,255,255,0.8); margin-bottom: 2rem;">Yeni özellikler ve güncellemelerden haberdar olun</p>
            <div style="display: flex; gap: 1rem; max-width: 500px; margin: 0 auto;">
                <input type="email" placeholder="E-posta adresiniz" style="flex: 1; padding: 1rem; border: 2px solid rgba(255,255,255,0.2); border-radius: 8px; background: rgba(255,255,255,0.1); color: white; font-size: 1rem; backdrop-filter: blur(10px);">
                <button style="background: white; color: #1e293b; border: none; padding: 1rem 2rem; border-radius: 8px; font-weight: 700; cursor: pointer; white-space: nowrap;">Abone Ol</button>
            </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; margin-bottom: 3rem;">
            <div>
                <h4 style="margin-bottom: 1rem; font-size: 1.125rem;">Ürün</h4>
                <ul style="list-style: none; color: rgba(255,255,255,0.7);">
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Özellikler</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Fiyatlandırma</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Demo</a></li>
                </ul>
            </div>
            <div>
                <h4 style="margin-bottom: 1rem; font-size: 1.125rem;">Şirket</h4>
                <ul style="list-style: none; color: rgba(255,255,255,0.7);">
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Hakkımızda</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Kariyer</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">İletişim</a></li>
                </ul>
            </div>
            <div>
                <h4 style="margin-bottom: 1rem; font-size: 1.125rem;">Kaynaklar</h4>
                <ul style="list-style: none; color: rgba(255,255,255,0.7);">
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Dokümantasyon</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Blog</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Destek</a></li>
                </ul>
            </div>
            <div>
                <h4 style="margin-bottom: 1rem; font-size: 1.125rem;">Bizi Takip Edin</h4>
                <div style="display: flex; gap: 1rem;">
                    <a href="#" style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; text-decoration: none; transition: all 0.3s;">📘</a>
                    <a href="#" style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; text-decoration: none; transition: all 0.3s;">🐦</a>
                    <a href="#" style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; text-decoration: none; transition: all 0.3s;">📷</a>
                </div>
            </div>
        </div>
        <div style="text-align: center; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6);">
            <p>© 2026 CodeUI. Tüm hakları saklıdır.</p>
        </div>
    </div>
</footer>`,
        css: `footer a:hover { color: white; }`,
        js: `// Newsletter subscription`
    },

    // ===== FORMS EK BİLEŞENLERİ =====
    {
        id: 48,
        category: 'Forms',
        title: 'Multi-Step Form',
        html: `<div style="max-width: 600px; margin: 2rem auto; background: white; padding: 2.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1);">
    <div style="display: flex; justify-content: space-between; margin-bottom: 3rem;">
        <div style="flex: 1; text-align: center;">
            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem; font-weight: bold;">1</div>
            <div style="font-size: 0.875rem; color: #667eea; font-weight: 600;">Hesap</div>
        </div>
        <div style="flex: 1; text-align: center;">
            <div style="width: 48px; height: 48px; background: #e5e7eb; color: #9ca3af; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem; font-weight: bold;">2</div>
            <div style="font-size: 0.875rem; color: #9ca3af; font-weight: 600;">Profil</div>
        </div>
        <div style="flex: 1; text-align: center;">
            <div style="width: 48px; height: 48px; background: #e5e7eb; color: #9ca3af; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem; font-weight: bold;">3</div>
            <div style="font-size: 0.875rem; color: #9ca3af; font-weight: 600;">Tamamla</div>
        </div>
    </div>
    <h2 style="margin-bottom: 0.5rem; color: #1e293b;">Hesap Bilgileri</h2>
    <p style="color: #64748b; margin-bottom: 2rem;">Lütfen temel bilgilerinizi girin</p>
    <form>
        <div style="margin-bottom: 1.25rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">E-posta</label>
            <input type="email" style="width: 100%; padding: 0.875rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem;">
        </div>
        <div style="margin-bottom: 1.25rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Şifre</label>
            <input type="password" style="width: 100%; padding: 0.875rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem;">
        </div>
        <button type="button" style="width: 100%; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1rem; border: none; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer;">Devam Et →</button>
    </form>
</div>`,
        css: `.step-active { background: linear-gradient(135deg, #667eea, #764ba2); }`,
        js: `// Multi-step form navigation`
    },

    // ===== PRICING EK BİLEŞENLERİ =====
    {
        id: 49,
        category: 'Pricing',
        title: 'Toggle Pricing',
        html: `<div style="max-width: 1200px; margin: 2rem auto; padding: 2rem; text-align: center;">
    <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: #1e293b; font-weight: 800;">Fiyatlandırma Planları</h2>
    <p style="color: #64748b; margin-bottom: 2rem; font-size: 1.125rem;">İhtiyacınıza uygun planı seçin</p>
    <div style="display: inline-flex; background: #f3f4f6; padding: 0.375rem; border-radius: 12px; margin-bottom: 3rem;">
        <button style="background: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Aylık</button>
        <button style="background: transparent; border: none; padding: 0.75rem 2rem; border-radius: 8px; font-weight: 600; cursor: pointer; color: #6b7280;">Yıllık <span style="background: #10b981; color: white; padding: 0.25rem 0.5rem; border-radius: 6px; font-size: 0.75rem; margin-left: 0.5rem;">%20 İndirim</span></button>
    </div>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
        <div style="background: white; padding: 2.5rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 2px solid #e5e7eb; text-align: left;">
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Startup</h3>
            <p style="color: #64748b; margin-bottom: 2rem;">Küçük ekipler için</p>
            <div style="margin-bottom: 2rem;">
                <span style="font-size: 3rem; font-weight: 800;">₺199</span>
                <span style="color: #6b7280;">/ay</span>
            </div>
            <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                <li style="padding: 0.75rem 0; border-bottom: 1px solid #f3f4f6; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #10b981;">✓</span> 10 Kullanıcı</li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid #f3f4f6; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #10b981;">✓</span> 100GB Depolama</li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid #f3f4f6; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #10b981;">✓</span> Email Destek</li>
            </ul>
            <button style="width: 100%; background: #3b82f6; color: white; border: none; padding: 1rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Başla</button>
        </div>
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 2.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4); color: white; text-align: left; transform: scale(1.05);">
            <div style="background: rgba(255,255,255,0.2); display: inline-block; padding: 0.375rem 0.875rem; border-radius: 16px; font-size: 0.75rem; font-weight: 700; margin-bottom: 1rem;">EN POPÜLER</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Business</h3>
            <p style="opacity: 0.9; margin-bottom: 2rem;">Büyüyen ekipler için</p>
            <div style="margin-bottom: 2rem;">
                <span style="font-size: 3rem; font-weight: 800;">₺499</span>
                <span style="opacity: 0.9;">/ay</span>
            </div>
            <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; gap: 0.5rem;"><span>✓</span> Sınırsız Kullanıcı</li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; gap: 0.5rem;"><span>✓</span> 1TB Depolama</li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; gap: 0.5rem;"><span>✓</span> Öncelikli Destek</li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; gap: 0.5rem;"><span>✓</span> Gelişmiş Analitik</li>
            </ul>
            <button style="width: 100%; background: white; color: #667eea; border: none; padding: 1rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Başla</button>
        </div>
    </div>
</div>`,
        css: `.pricing-toggle:hover { opacity: 0.9; }`,
        js: `// Toggle monthly/yearly pricing`
    },

    // TOPLAM: 49 COMPONENT
];

// Kategorileri otomatik olarak çıkart
const categories = [...new Set(templates.map(t => t.category))];

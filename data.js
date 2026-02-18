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

    // ===== YENİ KATEGORİ: AUTHENTICATION =====
    {
        id: 50,
        category: 'Authentication',
        title: 'Login Form',
        html: `<div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea, #764ba2); padding: 2rem;">
    <div style="background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 420px; width: 100%;">
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2.5rem;">🔐</div>
            <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: #1e293b;">Hoş Geldiniz</h2>
            <p style="color: #64748b;">Hesabınıza giriş yapın</p>
        </div>
        <form>
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">E-posta</label>
                <input type="email" placeholder="ornek@email.com" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem; transition: all 0.3s;">
            </div>
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Şifre</label>
                <input type="password" placeholder="••••••••" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem;">
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                    <input type="checkbox" style="width: 18px; height: 18px;">
                    <span style="font-size: 0.875rem; color: #64748b;">Beni Hatırla</span>
                </label>
                <a href="#" style="font-size: 0.875rem; color: #3b82f6; text-decoration: none; font-weight: 600;">Şifremi Unuttum?</a>
            </div>
            <button type="submit" style="width: 100%; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1rem; border: none; border-radius: 10px; font-size: 1rem; font-weight: 600; cursor: pointer; margin-bottom: 1rem;">Giriş Yap</button>
            <div style="text-align: center; color: #64748b; font-size: 0.875rem;">
                Hesabınız yok mu? <a href="#" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Kayıt Olun</a>
            </div>
        </form>
    </div>
</div>`,
        css: `input:focus { border-color: #667eea; outline: none; }`,
        js: `// Form validation`
    },
    {
        id: 51,
        category: 'Authentication',
        title: 'Register Form',
        html: `<div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f093fb, #f5576c); padding: 2rem;">
    <div style="background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 520px; width: 100%;">
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: #1e293b; text-align: center;">Hesap Oluştur</h2>
        <p style="color: #64748b; text-align: center; margin-bottom: 2rem;">Ücretsiz hesap oluşturun</p>
        <form>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                <input type="text" placeholder="Ad" style="padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem;">
                <input type="text" placeholder="Soyad" style="padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem;">
            </div>
            <input type="email" placeholder="E-posta" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem; margin-bottom: 1.5rem;">
            <input type="password" placeholder="Şifre" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem; margin-bottom: 1.5rem;">
            <input type="password" placeholder="Şifre Tekrar" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem; margin-bottom: 1.5rem;">
            <label style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 1.5rem; cursor: pointer;">
                <input type="checkbox" style="width: 20px; height: 20px; margin-top: 0.25rem;">
                <span style="font-size: 0.875rem; color: #64748b;">Kullanım şartlarını ve gizlilik politikasını kabul ediyorum</span>
            </label>
            <button type="submit" style="width: 100%; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; padding: 1rem; border: none; border-radius: 10px; font-size: 1rem; font-weight: 600; cursor: pointer;">Kayıt Ol</button>
        </form>
    </div>
</div>`,
        css: `input:focus { border-color: #f093fb; }`,
        js: `// Registration validation`
    },
    {
        id: 52,
        category: 'Authentication',
        title: 'Password Reset',
        html: `<div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #4facfe, #00f2fe); padding: 2rem;">
    <div style="background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 420px; width: 100%; text-align: center;">
        <div style="width: 80px; height: 80px; background: #eff6ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2.5rem;">🔑</div>
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: #1e293b;">Şifrenizi mi Unuttunuz?</h2>
        <p style="color: #64748b; margin-bottom: 2rem;">E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim</p>
        <form>
            <input type="email" placeholder="E-posta adresiniz" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem; margin-bottom: 1.5rem;">
            <button type="submit" style="width: 100%; background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; padding: 1rem; border: none; border-radius: 10px; font-size: 1rem; font-weight: 600; cursor: pointer; margin-bottom: 1rem;">Sıfırlama Bağlantısı Gönder</button>
            <a href="#" style="color: #3b82f6; text-decoration: none; font-weight: 600; font-size: 0.875rem;">← Giriş sayfasına dön</a>
        </form>
    </div>
</div>`,
        css: `input:focus { border-color: #4facfe; }`,
        js: `// Password reset email`
    },
    {
        id: 53,
        category: 'Authentication',
        title: 'Two-Factor Authentication',
        html: `<div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #43e97b, #38f9d7); padding: 2rem;">
    <div style="background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 420px; width: 100%; text-align: center;">
        <div style="width: 80px; height: 80px; background: #ecfdf5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2.5rem;">🛡️</div>
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: #1e293b;">İki Faktörlü Doğrulama</h2>
        <p style="color: #64748b; margin-bottom: 2rem;">Telefonunuza gönderilen 6 haneli kodu girin</p>
        <div style="display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 2rem;">
            <input type="text" maxlength="1" style="width: 56px; height: 56px; text-align: center; font-size: 1.5rem; font-weight: bold; border: 2px solid #e5e7eb; border-radius: 10px;">
            <input type="text" maxlength="1" style="width: 56px; height: 56px; text-align: center; font-size: 1.5rem; font-weight: bold; border: 2px solid #e5e7eb; border-radius: 10px;">
            <input type="text" maxlength="1" style="width: 56px; height: 56px; text-align: center; font-size: 1.5rem; font-weight: bold; border: 2px solid #e5e7eb; border-radius: 10px;">
            <input type="text" maxlength="1" style="width: 56px; height: 56px; text-align: center; font-size: 1.5rem; font-weight: bold; border: 2px solid #e5e7eb; border-radius: 10px;">
            <input type="text" maxlength="1" style="width: 56px; height: 56px; text-align: center; font-size: 1.5rem; font-weight: bold; border: 2px solid #e5e7eb; border-radius: 10px;">
            <input type="text" maxlength="1" style="width: 56px; height: 56px; text-align: center; font-size: 1.5rem; font-weight: bold; border: 2px solid #e5e7eb; border-radius: 10px;">
        </div>
        <button style="width: 100%; background: linear-gradient(135deg, #43e97b, #38f9d7); color: white; padding: 1rem; border: none; border-radius: 10px; font-size: 1rem; font-weight: 600; cursor: pointer; margin-bottom: 1rem;">Doğrula</button>
        <p style="color: #64748b; font-size: 0.875rem;">Kod almadınız mı? <a href="#" style="color: #10b981; text-decoration: none; font-weight: 600;">Tekrar gönder</a></p>
    </div>
</div>`,
        css: `input:focus { border-color: #10b981; }`,
        js: `// Auto-focus next input on digit entry`
    },
    {
        id: 54,
        category: 'Authentication',
        title: 'Social Login',
        html: `<div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #fa709a, #fee140); padding: 2rem;">
    <div style="background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 420px; width: 100%;">
        <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #1e293b; text-align: center;">Hızlı Giriş</h2>
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
            <button style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%; background: white; border: 2px solid #e5e7eb; padding: 1rem; border-radius: 10px; cursor: pointer; font-weight: 600; transition: all 0.3s;">
                <span style="font-size: 1.5rem;">🔍</span>
                Google ile devam et
            </button>
            <button style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%; background: #1877f2; color: white; border: none; padding: 1rem; border-radius: 10px; cursor: pointer; font-weight: 600;">
                <span style="font-size: 1.5rem;">📘</span>
                Facebook ile devam et
            </button>
            <button style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%; background: #1da1f2; color: white; border: none; padding: 1rem; border-radius: 10px; cursor: pointer; font-weight: 600;">
                <span style="font-size: 1.5rem;">🐦</span>
                Twitter ile devam et
            </button>
            <button style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%; background: #333; color: white; border: none; padding: 1rem; border-radius: 10px; cursor: pointer; font-weight: 600;">
                <span style="font-size: 1.5rem;">🐙</span>
                GitHub ile devam et
            </button>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
            <div style="flex: 1; height: 1px; background: #e5e7eb;"></div>
            <span style="color: #9ca3af; font-size: 0.875rem;">VEYA</span>
            <div style="flex: 1; height: 1px; background: #e5e7eb;"></div>
        </div>
        <input type="email" placeholder="E-posta" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem; margin-bottom: 1rem;">
        <input type="password" placeholder="Şifre" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem; margin-bottom: 1.5rem;">
        <button style="width: 100%; background: linear-gradient(135deg, #fa709a, #fee140); color: white; padding: 1rem; border: none; border-radius: 10px; font-size: 1rem; font-weight: 600; cursor: pointer;">Giriş Yap</button>
    </div>
</div>`,
        css: `button:hover { transform: translateY(-2px); }`,
        js: `// OAuth integration`
    },

    // ===== YENİ KATEGORİ: DASHBOARD =====
    {
        id: 55,
        category: 'Dashboard',
        title: 'Analytics Dashboard',
        html: `<div style="background: #f8fafc; padding: 2rem;">
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
        <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                    <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem;">Toplam Gelir</p>
                    <h3 style="font-size: 1.75rem; font-weight: 700;">₺124,563</h3>
                    <p style="color: #10b981; font-size: 0.875rem; margin-top: 0.5rem;">↑ 12.5%</p>
                </div>
                <div style="width: 48px; height: 48px; background: #eff6ff; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">💰</div>
            </div>
        </div>
        <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                    <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem;">Yeni Müşteriler</p>
                    <h3 style="font-size: 1.75rem; font-weight: 700;">1,245</h3>
                    <p style="color: #10b981; font-size: 0.875rem; margin-top: 0.5rem;">↑ 8.2%</p>
                </div>
                <div style="width: 48px; height: 48px; background: #ecfdf5; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">👥</div>
            </div>
        </div>
        <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                    <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem;">Siparişler</p>
                    <h3 style="font-size: 1.75rem; font-weight: 700;">892</h3>
                    <p style="color: #ef4444; font-size: 0.875rem; margin-top: 0.5rem;">↓ 3.1%</p>
                </div>
                <div style="width: 48px; height: 48px; background: #fef3c7; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">📦</div>
            </div>
        </div>
        <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <div>
                    <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem;">Dönüşüm Oranı</p>
                    <h3 style="font-size: 1.75rem; font-weight: 700;">4.8%</h3>
                    <p style="color: #10b981; font-size: 0.875rem; margin-top: 0.5rem;">↑ 1.2%</p>
                </div>
                <div style="width: 48px; height: 48px; background: #f3e8ff; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">📊</div>
            </div>
        </div>
    </div>
    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Satış Grafiği</h3>
        <div style="height: 200px; background: linear-gradient(to top, #eff6ff, transparent); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #64748b;">📈 Chart Placeholder</div>
    </div>
</div>`,
        css: `.dashboard-card:hover { transform: translateY(-2px); }`,
        js: `// Chart.js integration`
    },
    {
        id: 56,
        category: 'Dashboard',
        title: 'Recent Activity Widget',
        html: `<div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); max-width: 400px; margin: 2rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.125rem; font-weight: 700;">Son Aktiviteler</h3>
        <button style="color: #3b82f6; background: none; border: none; font-size: 0.875rem; cursor: pointer; font-weight: 600;">Tümünü Gör</button>
    </div>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; padding: 1rem; background: #f8fafc; border-radius: 8px;">
            <div style="width: 40px; height: 40px; background: #eff6ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">💳</div>
            <div style="flex: 1;">
                <p style="font-weight: 600; margin-bottom: 0.25rem;">Yeni ödeme alındı</p>
                <p style="color: #64748b; font-size: 0.875rem;">₺2,450 tutarında ödeme</p>
                <p style="color: #9ca3af; font-size: 0.75rem; margin-top: 0.25rem;">5 dakika önce</p>
            </div>
        </div>
        <div style="display: flex; gap: 1rem; padding: 1rem; background: #f8fafc; border-radius: 8px;">
            <div style="width: 40px; height: 40px; background: #ecfdf5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">👤</div>
            <div style="flex: 1;">
                <p style="font-weight: 600; margin-bottom: 0.25rem;">Yeni kullanıcı kaydı</p>
                <p style="color: #64748b; font-size: 0.875rem;">john@example.com</p>
                <p style="color: #9ca3af; font-size: 0.75rem; margin-top: 0.25rem;">12 dakika önce</p>
            </div>
        </div>
        <div style="display: flex; gap: 1rem; padding: 1rem; background: #f8fafc; border-radius: 8px;">
            <div style="width: 40px; height: 40px; background: #fef3c7; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">📦</div>
            <div style="flex: 1;">
                <p style="font-weight: 600; margin-bottom: 0.25rem;">Sipariş tamamlandı</p>
                <p style="color: #64748b; font-size: 0.875rem;">Sipariş #12345</p>
                <p style="color: #9ca3af; font-size: 0.75rem; margin-top: 0.25rem;">1 saat önce</p>
            </div>
        </div>
    </div>
</div>`,
        css: `.activity-item:hover { background: #f1f5f9; }`,
        js: `// Real-time activity updates`
    },
    {
        id: 57,
        category: 'Dashboard',
        title: 'Quick Actions Panel',
        html: `<div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); max-width: 600px; margin: 2rem;">
    <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Hızlı Eylemler</h3>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
        <button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 1.5rem 1rem; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 0.75rem; transition: all 0.3s;">
            <span style="font-size: 2rem;">➕</span>
            <span style="font-weight: 600;">Yeni Ürün</span>
        </button>
        <button style="background: linear-gradient(135deg, #f093fb, #f5576c); color: white; border: none; padding: 1.5rem 1rem; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <span style="font-size: 2rem;">📧</span>
            <span style="font-weight: 600;">Mesaj Gönder</span>
        </button>
        <button style="background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; border: none; padding: 1.5rem 1rem; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <span style="font-size: 2rem;">📊</span>
            <span style="font-weight: 600;">Rapor Oluştur</span>
        </button>
        <button style="background: linear-gradient(135deg, #43e97b, #38f9d7); color: white; border: none; padding: 1.5rem 1rem; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <span style="font-size: 2rem;">👥</span>
            <span style="font-weight: 600;">Kullanıcı Ekle</span>
        </button>
        <button style="background: linear-gradient(135deg, #fa709a, #fee140); color: white; border: none; padding: 1.5rem 1rem; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <span style="font-size: 2rem;">⚙️</span>
            <span style="font-weight: 600;">Ayarlar</span>
        </button>
        <button style="background: linear-gradient(135deg, #a8edea, #fed6e3); color: #1e293b; border: none; padding: 1.5rem 1rem; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
            <span style="font-size: 2rem;">📁</span>
            <span style="font-weight: 600;">Dosyalar</span>
        </button>
    </div>
</div>`,
        css: `.action-btn:hover { transform: translateY(-4px); }`,
        js: `// Quick action handlers`
    },
    {
        id: 58,
        category: 'Dashboard',
        title: 'User Statistics',
        html: `<div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); max-width: 500px; margin: 2rem;">
    <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Kullanıcı İstatistikleri</h3>
    <div style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
            <span style="color: #64748b; font-size: 0.875rem;">Aktif Kullanıcılar</span>
            <span style="font-weight: 600;">78%</span>
        </div>
        <div style="background: #e5e7eb; height: 12px; border-radius: 6px; overflow: hidden;">
            <div style="background: linear-gradient(to right, #667eea, #764ba2); height: 100%; width: 78%; border-radius: 6px;"></div>
        </div>
    </div>
    <div style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
            <span style="color: #64748b; font-size: 0.875rem;">Dönüşüm Oranı</span>
            <span style="font-weight: 600;">62%</span>
        </div>
        <div style="background: #e5e7eb; height: 12px; border-radius: 6px; overflow: hidden;">
            <div style="background: linear-gradient(to right, #4facfe, #00f2fe); height: 100%; width: 62%; border-radius: 6px;"></div>
        </div>
    </div>
    <div style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
            <span style="color: #64748b; font-size: 0.875rem;">Geri Dönüş Oranı</span>
            <span style="font-weight: 600;">45%</span>
        </div>
        <div style="background: #e5e7eb; height: 12px; border-radius: 6px; overflow: hidden;">
            <div style="background: linear-gradient(to right, #43e97b, #38f9d7); height: 100%; width: 45%; border-radius: 6px;"></div>
        </div>
    </div>
    <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
            <span style="color: #64748b; font-size: 0.875rem;">Memnuniyet</span>
            <span style="font-weight: 600;">91%</span>
        </div>
        <div style="background: #e5e7eb; height: 12px; border-radius: 6px; overflow: hidden;">
            <div style="background: linear-gradient(to right, #f093fb, #f5576c); height: 100%; width: 91%; border-radius: 6px;"></div>
        </div>
    </div>
</div>`,
        css: `.progress-bar { transition: width 1s ease; }`,
        js: `// Animated progress bars`
    },
    {
        id: 59,
        category: 'Dashboard',
        title: 'Sales Chart Widget',
        html: `<div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin: 2rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Satış Trendi</h3>
            <p style="color: #64748b; font-size: 0.875rem;">Son 7 gün</p>
        </div>
        <div style="display: flex; gap: 0.5rem;">
            <button style="background: #eff6ff; color: #3b82f6; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.875rem;">Gün</button>
            <button style="background: white; color: #64748b; border: 1px solid #e5e7eb; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.875rem;">Hafta</button>
            <button style="background: white; color: #64748b; border: 1px solid #e5e7eb; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.875rem;">Ay</button>
        </div>
    </div>
    <div style="display: flex; align-items: flex-end; justify-content: space-around; height: 200px; gap: 1rem; padding: 1rem; background: #f8fafc; border-radius: 8px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <div style="background: linear-gradient(to top, #667eea, #764ba2); width: 40px; height: 120px; border-radius: 6px;"></div>
            <span style="font-size: 0.75rem; color: #64748b;">Pzt</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <div style="background: linear-gradient(to top, #667eea, #764ba2); width: 40px; height: 150px; border-radius: 6px;"></div>
            <span style="font-size: 0.75rem; color: #64748b;">Sal</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <div style="background: linear-gradient(to top, #667eea, #764ba2); width: 40px; height: 90px; border-radius: 6px;"></div>
            <span style="font-size: 0.75rem; color: #64748b;">Çar</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <div style="background: linear-gradient(to top, #667eea, #764ba2); width: 40px; height: 140px; border-radius: 6px;"></div>
            <span style="font-size: 0.75rem; color: #64748b;">Per</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <div style="background: linear-gradient(to top, #667eea, #764ba2); width: 40px; height: 180px; border-radius: 6px;"></div>
            <span style="font-size: 0.75rem; color: #64748b;">Cum</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <div style="background: linear-gradient(to top, #667eea, #764ba2); width: 40px; height: 100px; border-radius: 6px;"></div>
            <span style="font-size: 0.75rem; color: #64748b;">Cmt</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
            <div style="background: linear-gradient(to top, #667eea, #764ba2); width: 40px; height: 80px; border-radius: 6px;"></div>
            <span style="font-size: 0.75rem; color: #64748b;">Paz</span>
        </div>
    </div>
</div>`,
        css: `.chart-bar:hover { opacity: 0.8; }`,
        js: `// Bar chart animation`
    },

    // ===== YENİ KATEGORİ: E-COMMERCE =====
    {
        id: 60,
        category: 'E-commerce',
        title: 'Product Grid',
        html: `<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; padding: 2rem; background: #f8fafc;">
    <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: all 0.3s;">
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); height: 220px; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">📱</div>
        <div style="padding: 1.25rem;">
            <span style="background: #eff6ff; color: #3b82f6; padding: 0.25rem 0.625rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">Elektronik</span>
            <h4 style="margin: 0.75rem 0 0.5rem; font-size: 1.125rem;">Premium Akıllı Telefon</h4>
            <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 1rem;">En son teknoloji özellikleriyle donatılmış</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 1.5rem; font-weight: 700; color: #1e293b;">₺12,999</span>
                <button style="background: #3b82f6; color: white; border: none; padding: 0.625rem 1.25rem; border-radius: 8px; cursor: pointer; font-weight: 600;">Sepete Ekle</button>
            </div>
        </div>
    </div>
    <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
        <div style="background: linear-gradient(135deg, #f093fb, #f5576c); height: 220px; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">⌚</div>
        <div style="padding: 1.25rem;">
            <span style="background: #fef3c7; color: #f59e0b; padding: 0.25rem 0.625rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">Aksesuar</span>
            <h4 style="margin: 0.75rem 0 0.5rem; font-size: 1.125rem;">Akıllı Saat Pro</h4>
            <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 1rem;">Sağlık takibi ve bildirimler</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 1.5rem; font-weight: 700; color: #1e293b;">₺3,499</span>
                <button style="background: #3b82f6; color: white; border: none; padding: 0.625rem 1.25rem; border-radius: 8px; cursor: pointer; font-weight: 600;">Sepete Ekle</button>
            </div>
        </div>
    </div>
</div>`,
        css: `.product-card:hover { transform: translateY(-8px); box-shadow: 0 12px 24px rgba(0,0,0,0.15); }`,
        js: `// Add to cart functionality`
    },
    {
        id: 61,
        category: 'E-commerce',
        title: 'Shopping Cart',
        html: `<div style="max-width: 900px; margin: 2rem auto; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 2rem;">Alışveriş Sepeti (3 ürün)</h2>
    <div style="border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; margin-bottom: 2rem;">
        <div style="display: flex; gap: 1.5rem; padding: 1.5rem; border-bottom: 1px solid #e5e7eb;">
            <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 2rem; flex-shrink: 0;">📱</div>
            <div style="flex: 1;">
                <h4 style="font-size: 1.125rem; margin-bottom: 0.5rem;">Premium Akıllı Telefon</h4>
                <p style="color: #64748b; font-size: 0.875rem;">Siyah, 256GB</p>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <select style="padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 6px;">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <span style="font-size: 1.25rem; font-weight: 700; min-width: 120px; text-align: right;">₺12,999</span>
                <button style="color: #ef4444; background: none; border: none; cursor: pointer; font-size: 1.25rem;">🗑️</button>
            </div>
        </div>
    </div>
    <div style="display: flex; justify-content: space-between; padding: 1.5rem; background: #f8fafc; border-radius: 12px; margin-bottom: 1.5rem;">
        <span style="font-size: 1.125rem; font-weight: 600;">Toplam</span>
        <span style="font-size: 1.5rem; font-weight: 700; color: #3b82f6;">₺18,497</span>
    </div>
    <button style="width: 100%; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 1.25rem; border-radius: 12px; font-size: 1.125rem; font-weight: 700; cursor: pointer;">Ödemeye Geç →</button>
</div>`,
        css: `.cart-item:hover { background: #f9fafb; }`,
        js: `// Cart management`
    },
    {
        id: 62,
        category: 'E-commerce',
        title: 'Checkout Form',
        html: `<div style="max-width: 800px; margin: 2rem auto; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 2rem;">Ödeme Bilgileri</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <input type="text" placeholder="Ad" style="padding: 1rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem;">
        <input type="text" placeholder="Soyad" style="padding: 1rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem;">
    </div>
    <input type="email" placeholder="E-posta" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; margin-bottom: 1.5rem;">
    <input type="text" placeholder="Teslimat Adresi" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; margin-bottom: 1.5rem;">
    <input type="text" placeholder="Kart Numarası" style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; margin-bottom: 1.5rem;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <input type="text" placeholder="AA/YY" style="padding: 1rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem;">
        <input type="text" placeholder="CVV" style="padding: 1rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem;">
    </div>
    <button style="width: 100%; background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; padding: 1.25rem; border-radius: 12px; font-size: 1.125rem; font-weight: 700; cursor: pointer;">₺18,497 Öde</button>
</div>`,
        css: `input:focus { border-color: #10b981; }`,
        js: `// Payment processing`
    },
    {
        id: 63,
        category: 'E-commerce',
        title: 'Product Detail',
        html: `<div style="max-width: 1200px; margin: 2rem auto; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); padding: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
    <div>
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); height: 500px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; font-size: 5rem; margin-bottom: 1rem;">📱</div>
        <div style="display: flex; gap: 1rem;">
            <div style="width: 80px; height: 80px; background: #f3f4f6; opacityç: 0.6; border-radius: 8px; border: 2px solid #3b82f6;"></div>
            <div style="width; 80px; height: 80px; background: #f3f4f6; border-radius: 8px;"></div>
            <div style="width: 80px; height: 80px; background: #f3f4f6; border-radius: 8px;"></div>
        </div>
    </div>
    <div>
        <span style="background: #eff6ff; color: #3b82f6; padding: 0.375rem 0.875rem; border-radius: 16px; font-size: 0.875rem; font-weight: 600;">YENİ</span>
        <h1 style="font-size: 2.5rem; font-weight: 800; margin: 1rem 0;">Premium Akıllı Telefon</h1>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
            <span style="color: #f59e0b;">⭐⭐⭐⭐⭐</span>
            <span style="color: #64748b; font-size: 0.875rem;">(124 değerlendirme)</span>
        </div>
        <p style="color: #64748b; line-height: 1.8; margin-bottom: 2rem;">En son teknoloji ile donatılmış premium akıllı telefon. Yüksek performans işlemci, muhteşem kamera sistemi ve uzun pil ömrü.</p>
        <div style="font-size: 3rem; font-weight: 800; color: #3b82f6; margin-bottom: 2rem;">₺12,999</div>
        <div style="margin-bottom: 2rem;">
            <label style="display: block; margin-bottom: 0.75rem; font-weight: 600;">Renk</label>
            <div style="display: flex; gap: 0.75rem;">
                <button style="width: 48px; height: 48px; background: #000; border: 3px solid #3b82f6; border-radius: 50%; cursor: pointer;"></button>
                <button style="width: 48px; height: 48px; background: #fff; border: 2px solid #e5e7eb; border-radius: 50%; cursor: pointer;"></button>
                <button style="width: 48px; height: 48px; background: #3b82f6; border: 2px solid #e5e7eb; border-radius: 50%; cursor: pointer;"></button>
            </div>
        </div>
        <div style="display: flex; gap: 1rem;">
            <button style="flex: 1; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 1.25rem; border-radius: 12px; font-size: 1.125rem; font-weight: 700; cursor: pointer;">Sepete Ekle</button>
            <button style="width: 64px; background: white; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 1.5rem; cursor: pointer;">❤️</button>
        </div>
    </div>
</div>`,
        css: `.color-option:hover { transform: scale(1.1); }`,
        js: `// Product selection`
    },
    {
        id: 64,
        category: 'E-commerce',
        title: 'Wishlist',
        html: `<div style="max-width: 1000px; margin: 2rem auto; padding: 2rem;">
    <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 2rem;">İstek Listem (5 ürün)</h2>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
        <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative;">
            <button style="position: absolute; top: 1rem; right: 1rem; background: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 1.25rem; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 10;">❤️</button>
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">📱</div>
            <div style="padding: 1.25rem;">
                <h4 style="margin-bottom: 0.5rem;">Premium Akıllı Telefon</h4>
                <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 1rem;">Siyah, 256GB</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 1.25rem; font-weight: 700;">₺12,999</span>
                    <button style="background: #3b82f6; color: white; border: none; padding: 0.625rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.875rem;">Sepete Ekle</button>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.wishlist-item:hover .remove-btn { opacity: 1; }`,
        js: `// Wishlist management`
    },

    // ===== YENİ KATEGORİ: SOCIAL =====
    {
        id: 65,
        category: 'Social',
        title: 'Social Post Card',
        html: `<div style="max-width: 600px; margin: 2rem auto; background: white; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); padding: 1.5rem;">
    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
        <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.125rem;">JD</div>
        <div style="flex: 1;">
            <h4 style="font-weight: 700; margin-bottom: 0.125rem;">John Doe</h4>
            <p style="color: #9ca3af; font-size: 0.875rem;">2 saat önce</p>
        </div>
        <button style="background: none; border: none; color: #9ca3af; cursor: pointer; font-size: 1.5rem;">⋯</button>
    </div>
    <p style="line-height: 1.6; margin-bottom: 1.5rem; color: #1e293b;">Bugün harika bir gün geçirdim! Yeni projemizi tamamladık ve sonuçlar muhteşem oldu 🚀</p>
    <div style="background: linear-gradient(135deg, #667eea, #764ba2); height: 300px; border-radius: 12px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem;">📸</div>
    <div style="display: flex; gap: 2rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
        <button style="display: flex; align-items: center; gap: 0.5rem; background: none; border: none; color: #64748b; cursor: pointer; font-weight: 600;">
            <span style="font-size: 1.25rem;">❤️</span> 124 Beğeni
        </button>
        <button style="display: flex; align-items: center; gap: 0.5rem; background: none; border: none; color: #64748b; cursor: pointer; font-weight: 600;">
            <span style="font-size: 1.25rem;">💬</span> 32 Yorum
        </button>
        <button style="display: flex; align-items: center; gap: 0.5rem; background: none; border: none; color: #64748b; cursor: pointer; font-weight: 600;">
            <span style="font-size: 1.25rem;">🔄</span> Paylaş
        </button>
    </div>
</div>`,
        css: `.post-action:hover { color: #3b82f6; }`,
        js: `// Social interactions`
    },
    {
        id: 66,
        category: 'Social',
        title: 'Comment Section',
        html: `<div style="max-width: 700px; margin: 2rem auto; background: white; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); padding: 2rem;">
    <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Yorumlar (24)</h3>
    <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; flex-shrink: 0;"></div>
        <div style="flex: 1;">
            <input type="text" placeholder="Yorum ekle..." style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 1rem;">
        </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="display: flex; gap: 1rem;">
            <div style="width: 40px; height: 40px; background: #f3e8ff; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #a855f7;">AS</div>
            <div style="flex: 1;">
                <div style="background: #f8fafc; padding: 1rem; border-radius: 12px;">
                    <h5 style="font-weight: 700; margin-bottom: 0.5rem;">Alice Smith</h5>
                    <p style="color: #64748b; line-height: 1.6;">Harika bir paylaşım! Çok beğendim 👍</p>
                </div>
                <div style="display: flex; gap: 1.5rem; margin-top: 0.5rem; font-size: 0.875rem; color: #9ca3af;">
                    <button style="background: none; border: none; color: #9ca3af; cursor: pointer;">Beğen</button>
                    <button style="background: none; border: none; color: #9ca3af; cursor: pointer;">Yanıtla</button>
                    <span>2 dakika önce</span>
                </div>
            </div>
        </div>
        <div style="display: flex; gap: 1rem;">
            <div style="width: 40px; height: 40px; background: #dbeafe; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #3b82f6;">BK</div>
            <div style="flex: 1;">
                <div style="background: #f8fafc; padding: 1rem; border-radius: 12px;">
                    <h5 style="font-weight: 700; margin-bottom: 0.5rem;">Bob Klein</h5>
                    <p style="color: #64748b; line-height: 1.6;">Tebrikler! Başarılarınızın devamını dilerim.</p>
                </div>
                <div style="display: flex; gap: 1.5rem; margin-top: 0.5rem; font-size: 0.875rem; color: #9ca3af;">
                    <button style="background: none; border: none; color: #9ca3af; cursor: pointer;">Beğen</button>
                    <button style="background: none; border: none; color: #9ca3af; cursor: pointer;">Yanıtla</button>
                    <span>15 dakika önce</span>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.comment:hover { background: #f9fafb; }`,
        js: `// Comment management`
    },
    {
        id: 67,
        category: 'Social',
        title: 'User Profile Card',
        html: `<div style="max-width: 400px; margin: 2rem auto; background: white; border-radius: 20px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); overflow: hidden;">
    <div style="background: linear-gradient(135deg, #667eea, #764ba2); height: 150px;"></div>
    <div style="padding: 0 2rem 2rem; margin-top: -60px; text-align: center;">
        <div style="width: 120px; height: 120px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem; border: 6px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">👤</div>
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">John Doe</h3>
        <p style="color: #64748b; margin-bottom: 1rem;">@johndoe</p>
        <p style="color: #64748b; line-height: 1.6; margin-bottom: 1.5rem;">UI/UX Designer | Coffee Lover ☕ | Tech Enthusiast 🚀</p>
        <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 1.5rem; padding: 1rem 0; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: #1e293b;">2.5K</div>
                <div style="color: #9ca3af; font-size: 0.875rem;">Takipçi</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: #1e293b;">364</div>
                <div style="color: #9ca3af; font-size: 0.875rem;">Takip</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: #1e293b;">142</div>
                <div style="color: #9ca3af; font-size: 0.875rem;">Gönderi</div>
            </div>
        </div>
        <div style="display: flex; gap: 1rem;">
            <button style="flex: 1; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 0.875rem; border-radius: 10px; font-weight: 600; cursor: pointer;">Takip Et</button>
            <button style="flex: 1; background: white; color: #667eea; border: 2px solid #667eea; padding: 0.875rem; border-radius: 10px; font-weight: 600; cursor: pointer;">Mesaj Gönder</button>
        </div>
    </div>
</div>`,
        css: `.profile-btn:hover { transform: scale(1.02); }`,
        js: `// Profile interactions`
    },
    {
        id: 68,
        category: 'Social',
        title: 'Follow Button',
        html: `<div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px; margin: 2rem auto;">
    <button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 1rem 2rem; border-radius: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.75rem; transition: all 0.3s;">
        <span style="font-size: 1.25rem;">➕</span>
        Takip Et
    </button>
    <button style="background: white; color: #667eea; border: 2px solid #667eea; padding: 1rem 2rem; border-radius: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.75rem;">
        <span style="font-size: 1.25rem;">✓</span>
        Takip Ediliyor
    </button>
    <button style="background: #f3f4f6; color: #64748b; border: none; padding: 1rem 2rem; border-radius: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.75rem;">
        <span style="font-size: 1.25rem;">🔔</span>
        Bildirimleri Aç
    </button>
</div>`,
        css: `.follow-btn:hover { transform: translateY(-2px); }`,
        js: `// Follow/unfollow toggle`
    },
    {
        id: 69,
        category: 'Social',
        title: 'User List',
        html: `<div style="max-width: 500px; margin: 2rem auto; background: white; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); padding: 1.5rem;">
    <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Önerilen Kullanıcılar</h3>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 12px; transition: all 0.3s;">
            <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.25rem;">JD</div>
            <div style="flex: 1;">
                <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Jane Doe</h4>
                <p style="color: #9ca3af; font-size: 0.875rem;">@janedoe • 2.1K takipçi</p>
            </div>
            <button style="background: #3b82f6; color: white; border: none; padding: 0.625rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Takip Et</button>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 12px;">
            <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.25rem;">MJ</div>
            <div style="flex: 1;">
                <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Mike Johnson</h4>
                <p style="color: #9ca3af; font-size: 0.875rem;">@mikej • 987 takipçi</p>
            </div>
            <button style="background: #3b82f6; color: white; border: none; padding: 0.625rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Takip Et</button>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 12px;">
            <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #4facfe, #00f2fe); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.25rem;">SK</div>
            <div style="flex: 1;">
                <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Sarah Klein</h4>
                <p style="color: #9ca3af; font-size: 0.875rem;">@sarahk • 3.4K takipçi</p>
            </div>
            <button style="background: #3b82f6; color: white; border: none; padding: 0.625rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Takip Et</button>
        </div>
    </div>
</div>`,
        css: `.user-item:hover { background: #f9fafb; }`,
        js: `// User list management`
    },

    // ===== YENİ KATEGORİ: ACCORDION =====
    {
        id: 70,
        category: 'Accordion',
        title: 'Basic Accordion',
        html: `<div style="max-width: 700px; margin: 2rem auto;">
    <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
        <div style="border-bottom: 1px solid #e5e7eb;">
            <button style="width: 100%; padding: 1.5rem; background: none; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 1.125rem; font-weight: 600; text-align: left;">
                <span>Hizmetleriniz nelerdir?</span>
                <span style="font-size: 1.5rem;">▼</span>
            </button>
            <div style="padding: 0 1.5rem 1.5rem; color: #64748b; line-height: 1.6;">
               Web tasarım, mobil uygulama geliştirme ve dijital pazarlama hizmetleri sunuyoruz.
            </div>
        </div>
        <div style="border-bottom: 1px solid #e5e7eb;">
            <button style="width: 100%; padding: 1.5rem; background: none; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 1.125rem; font-weight: 600; text-align: left;">
                <span>Fiyatlandırmanız nasıl?</span>
                <span style="font-size: 1.5rem;">▼</span>
            </button>
        </div>
        <div>
            <button style="width: 100%; padding: 1.5rem; background: none; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 1.125rem; font-weight: 600; text-align: left;">
                <span>İletişime nasıl geçebilirim?</span>
                <span style="font-size: 1.5rem;">▼</span>
            </button>
        </div>
    </div>
</div>`,
        css: `.accordion-btn:hover { background: #f9fafb; }`,
        js: `// Accordion toggle logic`
    },
    {
        id: 71,
        category: 'Accordion',
        title: 'FAQ Accordion',
        html: `<div style="max-width: 800px; margin: 2rem auto; padding: 2rem;">
    <h2 style="font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 3rem;">Sıkça Sorulan Sorular</h2>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden;">
            <button style="width: 100%; padding: 1.5rem; background: #f8fafc; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 1.125rem; font-weight: 600; text-align: left;">
                <span>💳 Ödeme yöntemleriniz neler?</span>
                <span style="color: #3b82f6; font-size: 1.5rem;">+</span>
            </button>
        </div>
        <div style="background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden;">
            <button style="width: 100%; padding: 1.5rem; background: #f8fafc; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 1.125rem; font-weight: 600; text-align: left;">
                <span>🚚 Kargo ne kadar sürer?</span>
                <span style="color: #3b82f6; font-size: 1.5rem;">+</span>
            </button>
        </div>
        <div style="background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden;">
            <button style="width: 100%; padding: 1.5rem; background: #f8fafc; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 1.125rem; font-weight: 600; text-align: left;">
                <span>↩️ İade politikanız nedir?</span>
                <span style="color: #3b82f6; font-size: 1.5rem;">+</span>
            </button>
        </div>
    </div>
</div>`,
        css: `.faq-item:hover { transform: translateY(-2px); }`,
        js: `// FAQ accordion`
    },
    {
        id: 72,
        category: 'Accordion',
        title: 'Nested Accordion',
        html: `<div style="max-width: 700px; margin: 2rem auto; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); padding: 1.5rem;">
    <div style="margin-bottom: 1rem;">
        <button style="width: 100%; padding: 1rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 600;">
            <span>Kategori 1</span>
            <span>▼</span>
        </button>
        <div style="padding: 1rem; background: #f8fafc; border-radius: 8px; margin-top: 0.5rem;">
            <button style="width: 100%; padding: 0.875rem; background: white; border: 1px solid #e5e7eb; border-radius: 6px; display: flex; justify-content: space-between; margin-bottom: 0.5rem; cursor: pointer; font-weight: 600;">
                <span>Alt Kategori 1.1</span>
                <span>›</span>
            </button>
            <button style="width: 100%; padding: 0.875rem; background: white; border: 1px solid #e5e7eb; border-radius: 6px; display: flex; justify-content: space-between; cursor: pointer; font-weight: 600;">
                <span>Alt Kategori 1.2</span>
                <span>›</span>
            </button>
        </div>
    </div>
    <button style="width: 100%; padding: 1rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 600;">
        <span>Kategori 2</span>
        <span>▶</span>
    </button>
</div>`,
        css: `.nested-accordion { transition: all 0.3s; }`,
        js: `// Nested accordion logic`
    },

    // ===== YENİ KATEGORİ: BREADCRUMB =====
    {
        id: 73,
        category: 'Breadcrumb',
        title: 'Simple Breadcrumb',
        html: `<div style="padding: 2rem;">
    <nav style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
        <a href="#" style="color: #3b82f6; text-decoration: none; font-weight: 500;">Ana Sayfa</a>
        <span style="color: #9ca3af;">/</span>
        <a href="#" style="color: #3b82f6; text-decoration: none; font-weight: 500;">Ürünler</a>
        <span style="color: #9ca3af;">/</span>
        <a href="#" style="color: #3b82f6; text-decoration: none; font-weight: 500;">Elektronik</a>
        <span style="color: #9ca3af;">/</span>
        <span style="color: #64748b; font-weight: 600;">Telefon</span>
    </nav>
</div>`,
        css: `nav a:hover { color: #2563eb; text-decoration: underline; }`,
        js: `// Breadcrumb navigation`
    },
    {
        id: 74,
        category: 'Breadcrumb',
        title: 'Icon Breadcrumb',
        html: `<div style="padding: 2rem;">
    <nav style="background: white; padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
        <a href="#" style="display: flex; align-items: center; gap: 0.5rem; color: #3b82f6; text-decoration: none; font-weight: 500;">
            <span style="font-size: 1.125rem;">🏠</span>
            Ana Sayfa
        </a>
        <span style="color: #9ca3af; font-size: 1.125rem;">→</span>
        <a href="#" style="display: flex; align-items: center; gap: 0.5rem; color: #3b82f6; text-decoration: none; font-weight: 500;">
            <span style="font-size: 1.125rem;">📦</span>
            Ürünler
        </a>
        <span style="color: #9ca3af; font-size: 1.125rem;">→</span>
        <span style="display: flex; align-items: center; gap: 0.5rem; color: #64748b; font-weight: 600;">
            <span style="font-size: 1.125rem;">📱</span>
            Telefon
        </span>
    </nav>
</div>`,
        css: `.breadcrumb-link:hover { color: #2563eb; }`,
        js: `// Breadcrumb with icons`
    },

    // ===== YENİ KATEGORİ: PAGINATION =====
    {
        id: 75,
        category: 'Pagination',
        title: 'Basic Pagination',
        html: `<div style="display: flex; justify-content: center; padding: 2rem;">
    <div style="display: flex; gap: 0.5rem; align-items: center;">
        <button style="background: white; border: 1px solid #e5e7eb; padding: 0.75rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 600; color: #9ca3af;">‹ Önceki</button>
        <button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 0.75rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 600; min-width: 48px;">1</button>
        <button style="background: white; border: 1px solid #e5e7eb; padding: 0.75rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 600; min-width: 48px;">2</button>
        <button style="background: white; border: 1px solid #e5e7eb; padding: 0.75rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 600; min-width: 48px;">3</button>
        <span style="padding: 0 0.5rem; color: #9ca3af;">...</span>
        <button style="background: white; border: 1px solid #e5e7eb; padding: 0.75rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 600; min-width: 48px;">10</button>
        <button style="background: white; border: 1px solid #e5e7eb; padding: 0.75rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 600; color: #3b82f6;">Sonraki ›</button>
    </div>
</div>`,
        css: `.page-btn:hover { background: #f3f4f6; }`,
        js: `// Pagination logic`
    },
    {
        id: 76,
        category: 'Pagination',
        title: 'Advanced Pagination',
        html: `<div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); display: flex; justify-content: space-between; align-items: center; max-width: 900px; margin: 2rem auto;">
    <div style="color: #64748b; font-size: 0.875rem;">
        Toplam <strong>245</strong> sonuçtan <strong>1-10</strong> arası gösteriliyor
    </div>
    <div style="display: flex; gap: 0.5rem; align-items: center;">
        <button style="background: #f3f4f6; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600;">‹‹</button>
        <button style="background: #f3f4f6; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600;">‹</button>
        <button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 0.5rem 0.875rem; border-radius: 6px; cursor: pointer; font-weight: 600;">1</button>
        <button style="background: white; border: 1px solid #e5e7eb; padding: 0.5rem 0.875rem; border-radius: 6px; cursor: pointer; font-weight: 600;">2</button>
        <button style="background: white; border: 1px solid #e5e7eb; padding: 0.5rem 0.875rem; border-radius: 6px; cursor: pointer; font-weight: 600;">3</button>
        <button style="background: #f3f4f6; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600;">›</button>
        <button style="background: #f3f4f6; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600;">››</button>
    </div>
    <select style="padding: 0.5rem 1rem; border: 1px solid #e5e7eb; border-radius: 6px; cursor: pointer;">
        <option>10 / sayfa</option>
        <option>25 / sayfa</option>
        <option>50 / sayfa</option>
        <option>100 / sayfa</option>
    </select>
</div>`,
        css: `.pagination-control:hover { background: #e5e7eb; }`,
        js: `// Advanced pagination with page size`
    },

    // ===== YENİ KATEGORİ: TABLE =====
    {
        id: 77,
        category: 'Table',
        title: 'Data Table',
        html: `<div style="background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden; margin: 2rem;">
    <div style="padding: 1.5rem; border-bottom: 1px solid #e5e7eb;">
        <h3 style="font-size: 1.25rem; font-weight: 700;">Kullanıcı Listesi</h3>
    </div>
    <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background: #f8fafc;">
                    <th style="padding: 1rem 1.5rem; text-align: left; font-weight: 600; color: #64748b; font-size: 0.875rem; border-bottom: 1px solid #e5e7eb;">AD</th>
                    <th style="padding: 1rem 1.5rem; text-align: left; font-weight: 600; color: #64748b; font-size: 0.875rem; border-bottom: 1px solid #e5e7eb;">E-POSTA</th>
                    <th style="padding: 1rem 1.5rem; text-align: left; font-weight: 600; color: #64748b; font-size: 0.875rem; border-bottom: 1px solid #e5e7eb;">ROL</th>
                    <th style="padding: 1rem 1.5rem; text-align: left; font-weight: 600; color: #64748b; font-size: 0.875rem; border-bottom: 1px solid #e5e7eb;">DURUM</th>
                    <th style="padding: 1rem 1.5rem; text-align: left; font-weight: 600; color: #64748b; font-size: 0.875rem; border-bottom: 1px solid #e5e7eb;">İŞLEM</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                    <td style="padding: 1rem 1.5rem;">
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">JD</div>
                            <strong>John Doe</strong>
                        </div>
                    </td>
                    <td style="padding: 1rem 1.5rem; color: #64748b;">john@example.com</td>
                    <td style="padding: 1rem 1.5rem;"><span style="background: #eff6ff; color: #3b82f6; padding: 0.375rem 0.75rem; border-radius: 12px; font-size: 0.875rem; font-weight: 600;">Admin</span></td>
                    <td style="padding: 1rem 1.5rem;"><span style="background: #ecfdf5; color: #10b981; padding: 0.375rem 0.75rem; border-radius: 12px; font-size: 0.875rem; font-weight: 600;">Aktif</span></td>
                    <td style="padding: 1rem 1.5rem;">
                        <button style="background: none; border: none; color: #3b82f6; cursor: pointer; margin-right: 0.5rem;">✏️</button>
                        <button style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 1rem 1.5rem;">
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">AS</div>
                            <strong>Alice Smith</strong>
                        </div>
                    </td>
                    <td style="padding: 1rem 1.5rem; color: #64748b;">alice@example.com</td>
                    <td style="padding: 1rem 1.5rem;"><span style="background: #fef3c7; color: #f59e0b; padding: 0.375rem 0.75rem; border-radius: 12px; font-size: 0.875rem; font-weight: 600;">Kullanıcı</span></td>
                    <td style="padding: 1rem 1.5rem;"><span style="background: #ecfdf5; color: #10b981; padding: 0.375rem 0.75rem; border-radius: 12px; font-size: 0.875rem; font-weight: 600;">Aktif</span></td>
                    <td style="padding: 1rem 1.5rem;">
                        <button style="background: none; border: none; color: #3b82f6; cursor: pointer; margin-right: 0.5rem;">✏️</button>
                        <button style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`,
        css: `tbody tr:hover { background: #f9fafb; }`,
        js: `// Table sorting and filtering`
    },
    {
        id: 78,
        category: 'Table',
        title: 'Pricing Table',
        html: `<div style="overflow-x: auto; padding: 2rem;">
    <table style="background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden; width: 100%; max-width: 900px; margin: 0 auto;">
        <thead>
            <tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
                <th style="padding: 1.5rem; text-align: left;">Özellik</th>
                <th style="padding: 1.5rem; text-align: center;">Basic</th>
                <th style="padding: 1.5rem; text-align: center;">Pro</th>
                <th style="padding: 1.5rem; text-align: center;">Enterprise</th>
            </tr>
        </thead>
        <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem 1.5rem; font-weight: 600;">Fiyat</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">₺99/ay</td>
                <td style="padding: 1rem 1.5rem; text-align: center;"><strong style="color: #3b82f6; font-size: 1.125rem;">₺299/ay</strong></td>
                <td style="padding: 1rem 1.5rem; text-align: center;">₺999/ay</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem 1.5rem;">Kullanıcı Sayısı</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">5</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">50</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">Sınırsız</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem 1.5rem;">Depolama</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">10GB</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">100GB</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">1TB</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem 1.5rem;">Destek</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">Email</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">Email + Chat</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">24/7 Öncelikli</td>
            </tr>
            <tr>
                <td style="padding: 1rem 1.5rem;">API Erişimi</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">❌</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">✅</td>
                <td style="padding: 1rem 1.5rem; text-align: center;">✅</td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `tbody tr:hover { background: #f9fafb; }`,
        js: `// Comparison table`
    },
    {
        id: 79,
        category: 'Table',
        title: 'Sortable Table',
        html: `<div style="background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden; margin: 2rem;">
    <table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr style="background: #f8fafc; border-bottom: 2px solid #e5e7eb;">
                <th style="padding: 1rem 1.5rem; text-align: left; font-weight: 600; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        Ürün <span style="font-size: 0.75rem;">▲▼</span>
                    </div>
                </th>
                <th style="padding: 1rem 1.5rem; text-align: left; font-weight: 600; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        Kategori <span style="font-size: 0.75rem;">▲▼</span>
                    </div>
                </th>
                <th style="padding: 1rem 1.5rem; text-align: left; font-weight: 600; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        Fiyat <span style="font-size: 0.75rem;">▲▼</span>
                    </div>
                </th>
                <th style="padding: 1rem 1.5rem; text-align: left; font-weight: 600; cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        Stok <span style="font-size: 0.75rem;">▲▼</span>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem 1.5rem; font-weight: 600;">Premium Telefon</td>
                <td style="padding: 1rem 1.5rem; color: #64748b;">Elektronik</td>
                <td style="padding: 1rem 1.5rem; font-weight: 600;">₺12,999</td>
                <td style="padding: 1rem 1.5rem;"><span style="background: #ecfdf5; color: #10b981; padding: 0.25rem 0.625rem; border-radius: 12px; font-size: 0.875rem; font-weight: 600;">Stokta</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem 1.5rem; font-weight: 600;">Akıllı Saat</td>
                <td style="padding: 1rem 1.5rem; color: #64748b;">Aksesuar</td>
                <td style="padding: 1rem 1.5rem; font-weight: 600;">₺3,499</td>
                <td style="padding: 1rem 1.5rem;"><span style="background: #fef3c7; color: #f59e0b; padding: 0.25rem 0.625rem; border-radius: 12px; font-size: 0.875rem; font-weight: 600;">Az Stok</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `th:hover { background: #f1f5f9; }`,
        js: `// Table sorting functionality`
    },
    {
        id: 80,
        category: 'Table',
        title: 'Responsive Table',
        html: `<div style="background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); padding: 1.5rem; margin: 2rem;">
    <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Siparişler</h3>
    <div style="overflow-x: auto;">
        <table style="width: 100%; min-width: 600px; border-collapse: collapse;">
            <thead>
                <tr style="border-bottom: 2px solid #e5e7eb;">
                    <th style="padding: 0.875rem; text-align: left; font-weight: 600; color: #64748b; font-size: 0.875rem;">SİPARİŞ NO</th>
                    <th style="padding: 0.875rem; text-align: left; font-weight: 600; color: #64748b; font-size: 0.875rem;">MÜŞTERİ</th>
                    <th style="padding: 0.875rem; text-align: left; font-weight: 600; color: #64748b; font-size: 0.875rem;">TARİH</th>
                    <th style="padding: 0.875rem; text-align: left; font-weight: 600; color: #64748b; font-size: 0.875rem;">TUTAR</th>
                    <th style="padding: 0.875rem; text-align: left; font-weight: 600; color: #64748b; font-size: 0.875rem;">DURUM</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                    <td style="padding: 0.875rem; font-weight: 600; color: #3b82f6;">#12345</td>
                    <td style="padding: 0.875rem;">Ali Yılmaz</td>
                    <td style="padding: 0.875rem; color: #64748b;">15 Şub 2026</td>
                    <td style="padding: 0.875rem; font-weight: 600;">₺1,245</td>
                    <td style="padding: 0.875rem;"><span style="background: #ecfdf5; color: #10b981; padding: 0.375rem 0.75rem; border-radius: 12px; font-size: 0.875rem; font-weight: 600;">Tamamlandı</span></td>
                </tr>
                <tr>
                    <td style="padding: 0.875rem; font-weight: 600; color: #3b82f6;">#12344</td>
                    <td style="padding: 0.875rem;">Ayşe Demir</td>
                    <td style="padding: 0.875rem; color: #64748b;">14 Şub 2026</td>
                    <td style="padding: 0.875rem; font-weight: 600;">₺879</td>
                    <td style="padding: 0.875rem;"><span style="background: #fef3c7; color: #f59e0b; padding: 0.375rem 0.75rem; border-radius: 12px; font-size: 0.875rem; font-weight: 600;">Beklemede</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`,
        css: `.responsive-table { overflow-x: auto; }`,
        js: `// Responsive table wrapper`
    },
    {
        id: 81,
        category: 'Table',
        title: 'Striped Table',
        html: `<div style="background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden; margin: 2rem;">
    <table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
                <th style="padding: 1.25rem 1.5rem; text-align: left; font-weight: 600;">Ürün</th>
                <th style="padding: 1.25rem 1.5rem; text-align: left; font-weight: 600;">Miktar</th>
                <th style="padding: 1.25rem 1.5rem; text-align: left; font-weight: 600;">Fiyat</th>
                <th style="padding: 1.25rem 1.5rem; text-align: left; font-weight: 600;">Toplam</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background: #f9fafb;">
                <td style="padding: 1rem 1.5rem;">Premium Telefon</td>
                <td style="padding: 1rem 1.5rem;">1</td>
                <td style="padding: 1rem 1.5rem;">₺12,999</td>
                <td style="padding: 1rem 1.5rem; font-weight: 700;">₺12,999</td>
            </tr>
            <tr style="background: white;">
                <td style="padding: 1rem 1.5rem;">Akıllı Saat</td>
                <td style="padding: 1rem 1.5rem;">2</td>
                <td style="padding: 1rem 1.5rem;">₺3,499</td>
                <td style="padding: 1rem 1.5rem; font-weight: 700;">₺6,998</td>
            </tr>
            <tr style="background: #f9fafb;">
                <td style="padding: 1rem 1.5rem;">Kulaklık</td>
                <td style="padding: 1rem 1.5rem;">1</td>
                <td style="padding: 1rem 1.5rem;">₺899</td>
                <td style="padding: 1rem 1.5rem; font-weight: 700;">₺899</td>
            </tr>
            <tr style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); font-weight: 700; font-size: 1.125rem;">
                <td colspan="3" style="padding: 1.25rem 1.5rem; text-align: right;">GENEL TOPLAM:</td>
                <td style="padding: 1.25rem 1.5rem; color: #3b82f6;">₺20,896</td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `tbody tr:nth-child(even) { background: #f9fafb; }`,
        js: `// Striped table styling`
    },

    // ===== YENİ KATEGORİ: AVATAR =====
    {
        id: 82,
        category: 'Avatar',
        title: 'Avatar Group',
        html: `<div style="padding: 2rem;">
    <div style="display: flex; align-items: center;">
        <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; border: 3px solid white; margin-left: -12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">JD</div>
        <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 50%; border: 3px solid white; margin-left: -12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">AS</div>
        <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #4facfe, #00f2fe); border-radius: 50%; border: 3px solid white; margin-left: -12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">MJ</div>
        <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #43e97b, #38f9d7); border-radius: 50%; border: 3px solid white; margin-left: -12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">SK</div>
        <div style="width: 48px; height: 48px; background: #e5e7eb; border-radius: 50%; border: 3px solid white; margin-left: -12px; display: flex; align-items: center; justify-content: center; color: #64748b; font-weight: bold; font-size: 0.875rem; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">+12</div>
    </div>
</div>`,
        css: `.avatar:hover { transform: translateY(-4px); z-index: 10; }`,
        js: `// Avatar group display`
    },
    {
        id: 83,
        category: 'Avatar',
        title: 'Avatar with Status',
        html: `<div style="display: flex; gap: 2rem; padding: 2rem; flex-wrap: wrap;">
    <div style="position: relative; width: 64px; height: 64px;">
        <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem;">JD</div>
        <div style="position: absolute; bottom: 2px; right: 2px; width: 18px; height: 18px; background: #10b981; border-radius: 50%; border: 3px solid white;"></div>
    </div>
    <div style="position: relative; width: 64px; height: 64px;">
        <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem;">AS</div>
        <div style="position: absolute; bottom: 2px; right: 2px; width: 18px; height: 18px; background: #f59e0b; border-radius: 50%; border: 3px solid white;"></div>
    </div>
    <div style="position: relative; width: 64px; height: 64px;">
        <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #4facfe, #00f2fe); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem;">MJ</div>
        <div style="position: absolute; bottom: 2px; right: 2px; width: 18px; height: 18px; background: #9ca3af; border-radius: 50%; border: 3px solid white;"></div>
    </div>
</div>`,
        css: `.status-indicator { animation: pulse 2s infinite; }`,
        js: `// Online status display`
    },
    {
        id: 84,
        category: 'Avatar',
        title: 'Avatar Sizes',
        html: `<div style="display: flex; align-items: end; gap: 1.5rem; padding: 2rem; flex-wrap: wrap;">
    <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.75rem;">XS</div>
    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">S</div>
    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #4facfe, #00f2fe); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1rem;">M</div>
    <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #43e97b, #38f9d7); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.25rem;">L</div>
    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #fa709a, #fee140); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem;">XL</div>
    <div style="width: 96px; height: 96px; background: linear-gradient(135deg, #a8edea, #fed6e3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #1e293b; font-weight: bold; font-size: 1.75rem;">2XL</div>
</div>`,
        css: `.avatar { transition: transform 0.3s; }`,
        js: `// Different avatar sizes`
    },

    // NAVBAR EK BİLEŞENLER (2 TANE DAHA)
    {
        id: 85,
        category: 'Navbar',
        title: 'Mega Menu Navbar',
        html: `<nav style="background: white; box-shadow: 0 2px 12px rgba(0,0,0,0.08); padding: 1rem 2rem;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
        <div style="font-size: 1.5rem; font-weight: bold; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">MegaMenu</div>
        <div style="display: flex; gap: 2rem; align-items: center;">
            <a href="#" style="color: #374151; text-decoration: none; font-weight: 600;">Ana Sayfa</a>
            <div style="position: relative;">
                <a href="#" style="color: #374151; text-decoration: none; font-weight: 600;">Ürünler ▾</a>
                <div style="position: absolute; top: 100%; left: -300px; background: white; box-shadow: 0 12px 40px rgba(0,0,0,0.15); border-radius: 16px; margin-top: 1rem; padding: 2rem; display: none; width: 800px;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
                        <div>
                            <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 1rem; color: #3b82f6;">Elektronik</h4>
                            <a href="#" style="display: block; padding: 0.5rem 0; color: #64748b; text-decoration: none;">Telefonlar</a>
                            <a href="#" style="display: block; padding: 0.5rem 0; color: #64748b; text-decoration: none;">Bilgisayarlar</a>
                            <a href="#" style="display: block; padding: 0.5rem 0; color: #64748b; text-decoration: none;">Tabletler</a>
                        </div>
                        <div>
                            <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 1rem; color: #3b82f6;">Aksesuar</h4>
                            <a href="#" style="display: block; padding: 0.5rem 0; color: #64748b; text-decoration: none;">Kulaklıklar</a>
                            <a href="#" style="display: block; padding: 0.5rem 0; color: #64748b; text-decoration: none;">Kılıflar</a>
                            <a href="#" style="display: block; padding: 0.5rem 0; color: #64748b; text-decoration: none;">Şarj Cihazları</a>
                        </div>
                        <div style="background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 12px; padding: 1.5rem; color: white;">
                            <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">Özel Teklifler</h4>
                            <p style="font-size: 0.875rem; opacity: 0.9; margin-bottom: 1rem;">Tüm ürünlerde %30'a varan indirim</p>
                            <button style="background: white; color: #667eea; border: none; padding: 0.625rem 1.25rem; border-radius: 6px; font-weight: 600; cursor: pointer;">Keşfet →</button>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" style="color: #374151; text-decoration: none; font-weight: 600;">İletişim</a>
        </div>
    </div>
</nav>`,
        css: `.mega-menu:hover { display: block !important; }`,
        js: `// Mega menu hover`
    },
    {
        id: 86,
        category: 'Navbar',
        title: 'Sticky Navbar',
        html: `<nav style="background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); box-shadow: 0 2px 12px rgba(0,0,0,0.08); padding: 1rem 2rem; position: sticky; top: 0; z-index: 100;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">🚀</div>
            <div style="font-size: 1.5rem; font-weight: 800;">StickyNav</div>
        </div>
        <div style="display: flex; gap: 2rem; align-items: center;">
            <a href="#" style="color: #374151; text-decoration: none; font-weight: 600; transition: color 0.3s;">Ana Sayfa</a>
            <a href="#" style="color: #374151; text-decoration: none; font-weight: 600;">Özellikler</a>
            <a href="#" style="color: #374151; text-decoration: none; font-weight: 600;">Hakkımızda</a>
            <a href="#" style="color: #374151; text-decoration: none; font-weight: 600;">İletişim</a>
            <button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 0.75rem 1.75rem; border-radius: 8px; font-weight: 700; cursor: pointer;">Başla</button>
        </div>
    </div>
</nav>`,
        css: `.sticky-nav { position: sticky; top: 0; }`,
        js: `// Sticky navbar scroll behavior`
    },

    // HERO EK BİLEŞENLER (2 TANE DAHA)
    {
        id: 87,
        category: 'Hero',
        title: 'CTA Hero',
        html: `<section style="background: linear-gradient(to bottom, #1e293b, #334155); color: white; padding: 6rem 2rem; text-align: center; position: relative; overflow: hidden;">
    <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(102, 126, 234, 0.1), transparent 50%);"></div>
    <div style="position: relative; z-index: 1; max-width: 900px; margin: 0 auto;">
        <span style="background: rgba(59, 130, 246, 0.2); color: #60a5fa; padding: 0.5rem 1.5rem; border-radius: 24px; font-size: 0.875rem; font-weight: 700; display: inline-block; margin-bottom: 2rem; border: 1px solid rgba(59, 130, 246, 0.3);">✨ YENİ SÜRÜM ÇIKTI</span>
        <h1 style="font-size: 4rem; font-weight: 900; margin-bottom: 1.5rem; line-height: 1.1;">Dijital Geleceği<br/>Birlikte İnşa Edelim</h1>
        <p style="font-size: 1.5rem; opacity: 0.9; margin-bottom: 3rem; max-width: 700px; margin-left: auto; margin-right: auto;">Hayallerinizdeki projeyi gerçeğe dönüştürmek için gereken tüm araçlar burada.</p>
        <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
            <button style="background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; border: none; padding: 1.25rem 3rem; border-radius: 12px; font-size: 1.125rem; font-weight: 700; cursor: pointer; box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);">Ücretsiz Başla →</button>
            <button style="background: rgba(255,255,255,0.1); color: white; border: 2px solid rgba(255,255,255,0.3); padding: 1.25rem 3rem; border-radius: 12px; font-size: 1.125rem; font-weight: 700; cursor: pointer; backdrop-filter: blur(10px);">Demo İzle ▶</button>
        </div>
        <div style="display: flex; justify-content: center; gap: 3rem; margin-top: 4rem; padding-top: 3rem; border-top: 1px solid rgba(255,255,255,0.1);">
            <div>
                <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem;">10K+</div>
                <div style="opacity: 0.7;">Mutlu Kullanıcı</div>
            </div>
            <div>
                <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem;">4.9★</div>
                <div style="opacity: 0.7;">Kullanıcı Puanı</div>
            </div>
            <div>
                <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem;">24/7</div>
                <div style="opacity: 0.7;">Destek</div>
            </div>
        </div>
    </div>
</section>`,
        css: `.cta-btn:hover { transform: translateY(-2px); }`,
        js: `// CTA tracking`
    },
    {
        id: 88,
        category: 'Hero',
        title: 'Split Hero',
        html: `<section style="display: grid; grid-template-columns: 1fr 1fr; min-height: 600px;">
    <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 4rem; display: flex; flex-direction: column; justify-content: center; color: white;">
        <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600; display: inline-block; width: fit-content; margin-bottom: 2rem;">🎉 Yeni Başlayanlar İçin</span>
        <h1 style="font-size: 3rem; font-weight: 900; margin-bottom: 1.5rem; line-height: 1.2;">Başarıya Giden Yolda İlk Adım</h1>
        <p style="font-size: 1.25rem; opacity: 0.95; margin-bottom: 2.5rem; line-height: 1.6;">Sıfırdan profesyonel projelere kadar her aşamada yanınızdayız.</p>
        <div style="display: flex; gap: 1rem;">
            <button style="background: white; color: #667eea; border: none; padding: 1rem 2.5rem; border-radius: 10px; font-weight: 700; font-size: 1.125rem; cursor: pointer;">Hemen Başla</button>
            <button style="background: rgba(255,255,255,0.2); color: white; border: 2px solid white; padding: 1rem 2.5rem; border-radius: 10px; font-weight: 700; font-size: 1.125rem; cursor: pointer;">Daha Fazla</button>
        </div>
        <div style="display: flex; gap: 1.5rem; margin-top: 3rem;">
            <div>
                <div style="font-size: 2rem; font-weight: 800;">5000+</div>
                <div style="opacity: 0.9; font-size: 0.875rem;">Aktif Kullanıcı</div>
            </div>
            <div>
                <div style="font-size: 2rem; font-weight: 800;">98%</div>
                <div style="opacity: 0.9; font-size: 0.875rem;">Memnuniyet</div>
            </div>
        </div>
    </div>
    <div style="background: #1e293b; display: flex; align-items: center; justify-content: center; font-size: 6rem; color: rgba(255,255,255,0.1);">
        🚀
    </div>
</section>`,
        css: `.split-hero-btn:hover { transform: scale(1.05); }`,
        js: `// Split hero interactions`
    },

    // YENİ KATEGORİ: NOTIFICATION, SLIDER, VIDEO (Kalan componentler)
    {
        id: 89,
        category: 'Notification',
        title: 'Toast Notification',
        html: `<div style="position: fixed; top: 2rem; right: 2rem; display: flex; flex-direction: column; gap: 1rem; z-index: 1000;">
    <div style="background: white; padding: 1.25rem 1.5rem; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 1rem; min-width: 350px; border-left: 4px solid #10b981;">
        <span style="font-size: 1.5rem;">✅</span>
        <div style="flex: 1;">
            <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Başarılı!</h4>
            <p style="color: #64748b; font-size: 0.875rem;">İşleminiz başarıyla tamamlandı.</p>
        </div>
        <button style="background: none; border: none; color: #9ca3af; cursor: pointer; font-size: 1.25rem;">×</button>
    </div>
    <div style="background: white; padding: 1.25rem 1.5rem; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 1rem; min-width: 350px; border-left: 4px solid #ef4444;">
        <span style="font-size: 1.5rem;">❌</span>
        <div style="flex: 1;">
            <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Hata!</h4>
            <p style="color: #64748b; font-size: 0.875rem;">Bir şeyler yanlış gitti.</p>
        </div>
        <button style="background: none; border: none; color: #9ca3af; cursor: pointer; font-size: 1.25rem;">×</button>
    </div>
    <div style="background: white; padding: 1.25rem 1.5rem; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 1rem; min-width: 350px; border-left: 4px solid #3b82f6;">
        <span style="font-size: 1.5rem;">ℹ️</span>
        <div style="flex: 1;">
            <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Bilgi</h4>
            <p style="color: #64748b; font-size: 0.875rem;">Yeni güncelleme mevcut.</p>
        </div>
        <button style="background: none; border: none; color: #9ca3af; cursor: pointer; font-size: 1.25rem;">×</button>
    </div>
</div>`,
        css: `@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }`,
        js: `// Toast notification system`
    },
    {
        id: 90,
        category: 'Notification',
        title: 'Notification Badge',
        html: `<div style="display: flex; gap: 2rem; padding: 2rem; flex-wrap: wrap;">
    <button style="position: relative; background: white; border: 2px solid #e5e7eb; padding: 0.875rem 1.5rem; border-radius: 10px; cursor: pointer; font-weight: 600;">
        Mesajlar
        <span style="position: absolute; top: -8px; right: -8px; background: #ef4444; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;">5</span>
    </button>
    <button style="position: relative; background: white; border: 2px solid #e5e7eb; padding: 0.875rem 1.5rem; border-radius: 10px; cursor: pointer; font-weight: 600;">
        Bildirimler
        <span style="position: absolute; top: -8px; right: -8px; background: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;">12</span>
    </button>
    <button style="position: relative; background: white; border: 2px solid #e5e7eb; padding: 0.875rem 1.5rem; border-radius: 10px; cursor: pointer; font-weight: 600;">
        Sepet
        <span style="position: absolute; top: -8px; right: -8px; background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;">3</span>
    </button>
    <button style="position: relative; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 0.875rem 1.5rem; border-radius: 10px; cursor: pointer; font-weight: 600;">
        Güncelleme
        <span style="position: absolute; top: -4px; right: -4px; width: 12px; height: 12px; background: #ef4444; border-radius: 50%; border: 2px solid white;"></span>
    </button>
</div>`,
        css: `.notification-badge { animation: pulse 2s infinite; }`,
        js: `// Badge counter`
    },
    {
        id: 91,
        category: 'Notification',
        title: 'Notification Center',
        html: `<div style="max-width: 400px; margin: 2rem auto; background: white; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">
    <div style="padding: 1.5rem; border-bottom: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center;">
        <h3 style="font-size: 1.25rem; font-weight: 700;">Bildirimler</h3>
        <button style="color: #3b82f6; background: none; border: none; font-size: 0.875rem; font-weight: 600; cursor: pointer;">Tümünü Okundu İşaretle</button>
    </div>
    <div style="max-height: 400px; overflow-y: auto;">
        <div style="padding: 1.25rem 1.5rem; border-bottom: 1px solid #e5e7eb; display: flex; gap: 1rem; background: #eff6ff;">
            <div style="width: 48px; height: 48px; background: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">💬</div>
            <div style="flex: 1;">
                <p style="font-weight: 600; margin-bottom: 0.25rem;">Yeni mesajınız var</p>
                <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem;">Ali Yılmaz size mesaj gönderdi</p>
                <p style="color: #9ca3af; font-size: 0.75rem;">5 dakika önce</p>
            </div>
            <div style="width: 8px; height: 8px; background: #3b82f6; border-radius: 50%; flex-shrink: 0; margin-top: 0.5rem;"></div>
        </div>
        <div style="padding: 1.25rem 1.5rem; border-bottom: 1px solid #e5e7eb; display: flex; gap: 1rem;">
            <div style="width: 48px; height: 48px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">✓</div>
            <div style="flex: 1;">
                <p style="font-weight: 600; margin-bottom: 0.25rem;">Siparişiniz onaylandı</p>
                <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem;">Sipariş #12345 hazırlanıyor</p>
                <p style="color: #9ca3af; font-size: 0.75rem;">1 saat önce</p>
            </div>
        </div>
        <div style="padding: 1.25rem 1.5rem; display: flex; gap: 1rem;">
            <div style="width: 48px; height: 48px; background: #f59e0b; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">⚠️</div>
            <div style="flex: 1;">
                <p style="font-weight: 600; margin-bottom: 0.25rem;">Sistem güncellemesi</p>
                <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem;">Yeni özellikler eklendi</p>
                <p style="color: #9ca3af; font-size: 0.75rem;">2 saat önce</p>
            </div>
        </div>
    </div>
</div>`,
        css: `.notification-item:hover { background: #f9fafb; }`,
        js: `// Notification center management`
    },

    {
        id: 92,
        category: 'Slider',
        title: 'Image Slider',
        html: `<div style="max-width: 800px; margin: 2rem auto; position: relative;">
    <div style="border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); height: 450px; display: flex; align-items: center; justify-content: center; color: white; font-size: 5rem;">🖼️</div>
    </div>
    <button style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.95); border: none; width: 56px; height: 56px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2); backdrop-filter: blur(10px);">‹</button>
    <button style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.95); border: none; width: 56px; height: 56px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2); backdrop-filter: blur(10px);">›</button>
    <div style="position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%); display: flex; gap: 0.75rem;">
        <div style="width: 12px; height: 12px; background: white; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>
        <div style="width: 12px; height: 12px; background: rgba(255,255,255,0.5); border-radius: 50%;"></div>
        <div style="width: 12px; height: 12px; background: rgba(255,255,255,0.5); border-radius: 50%;"></div>
        <div style="width: 12px; height: 12px; background: rgba(255,255,255,0.5); border-radius: 50%;"></div>
    </div>
</div>`,
        css: `.slider-btn:hover { transform: translateY(-50%) scale(1.1); }`,
        js: `// Image slider navigation`
    },
    {
        id: 93,
        category: 'Slider',
        title: 'Range Slider',
        html: `<div style="max-width: 500px; margin: 2rem auto; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <div style="margin-bottom: 2rem;">
        <label style="display: block; margin-bottom: 1rem; font-weight: 600; font-size: 1.125rem;">Fiyat Aralığı</label>
        <div style="margin-bottom: 1rem;">
            <input type="range" min="0" max="100" value="50" style="width: 100%; height: 8px; border-radius: 4px; background: linear-gradient(to right, #667eea 0%, #667eea 50%, #e5e7eb 50%, #e5e7eb 100%); outline: none; -webkit-appearance: none;">
        </div>
        <div style="display: flex; justify-content: space-between; color: #64748b; font-size: 0.875rem;">
            <span>₺0</span>
            <span style="color: #3b82f6; font-weight: 700;">₺50,000</span>
            <span>₺100,000</span>
        </div>
    </div>
    <div>
        <label style="display: block; margin-bottom: 1rem; font-weight: 600; font-size: 1.125rem;">Hacim</label>
        <div style="margin-bottom: 1rem;">
            <input type="range" min="0" max="100" value="75" style="width: 100%; height: 8px; border-radius: 4px; background: linear-gradient(to right, #10b981 0%, #10b981 75%, #e5e7eb 75%, #e5e7eb 100%); outline: none; -webkit-appearance: none;">
        </div>
        <div style="display: flex; justify-content: space-between; color: #64748b; font-size: 0.875rem;">
            <span>0%</span>
            <span style="color: #10b981; font-weight: 700;">75%</span>
            <span>100%</span>
        </div>
    </div>
</div>`,
        css: `input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 24px; height: 24px; background: white; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.2); cursor: pointer; }`,
        js: `// Range slider value update`
    },
    {
        id: 94,
        category: 'Slider',
        title: 'Content Slider',
        html: `<div style="max-width: 900px; margin: 2rem auto; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); padding: 3rem; position: relative;">
    <div style="display: flex; align-items: center; gap: 3rem;">
        <div style="flex: 1;">
            <span style="background: #eff6ff; color: #3b82f6; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 700; display: inline-block; margin-bottom: 1rem;">Müşteri Görüşleri</span>
            <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.3;">Harika bir deneyim yaşadık!</h2>
            <p style="color: #64748b; line-height: 1.8; margin-bottom: 2rem;">Ekip son derece profesyonel ve işini bilen insanlardan oluşuyor. Projemizi zamanında ve beklentilerimizin üzerinde teslim ettiler.</p>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.25rem;">JD</div>
                <div>
                    <h4 style="font-weight: 700; margin-bottom: 0.25rem;">John Doe</h4>
                    <p style="color: #9ca3af; font-size: 0.875rem;">CEO, TechCorp</p>
                </div>
            </div>
        </div>
        <div style="width: 300px; height: 300px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 16px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem;">💬</div>
    </div>
    <div style="display: flex; gap: 0.5rem; justify-content: center; margin-top: 2rem;">
        <div style="width: 40px; height: 4px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 2px;"></div>
        <div style="width: 40px; height: 4px; background: #e5e7eb; border-radius: 2px;"></div>
        <div style="width: 40px; height: 4px; background: #e5e7eb; border-radius: 2px;"></div>
    </div>
</div>`,
        css: `.content-slide { transition: transform 0.5s ease; }`,
        js: `// Content slider navigation`
    },

    {
        id: 95,
        category: 'Video',
        title: 'Video Player',
        html: `<div style="max-width: 900px; margin: 2rem auto; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.15); position: relative;">
    <div style="background: linear-gradient(135deg, #1e293b, #334155); aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; position: relative;">
        <div style="color: white; font-size: 6rem; opacity: 0.3;">🎬</div>
        <button style="position: absolute; width: 80px; height: 80px; background: rgba(255,255,255,0.95); border: none; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.3); backdrop-filter: blur(10px);">▶</button>
    </div>
    <div style="background: white; padding: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; gap: 1rem; align-items: center;">
            <button style="background: none; border: none; cursor: pointer; font-size: 1.25rem; color: #64748b;">⏮️</button>
            <button style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">⏸️</button>
            <button style="background: none; border: none; cursor: pointer; font-size: 1.25rem; color: #64748b;">⏭️</button>
            <span style="color: #64748b; font-size: 0.875rem; margin-left: 1rem;">2:34 / 5:12</span>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
            <button style="background: none; border: none; cursor: pointer; font-size: 1.25rem; color: #64748b;">🔊</button>
            <button style="background: none; border: none; cursor: pointer; font-size: 1.25rem; color: #64748b;">⚙️</button>
            <button style="background: none; border: none; cursor: pointer; font-size: 1.25rem; color: #64748b;">⛶</button>
        </div>
    </div>
</div>`,
        css: `.play-btn:hover { transform: scale(1.1); }`,
        js: `// Video player controls`
    },
    {
        id: 96,
        category: 'Video',
        title: 'Video Card',
        html: `<div style="max-width: 400px; margin: 2rem auto; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden;">
    <div style="position: relative;">
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem;">🎥</div>
        <button style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 64px; height: 64px; background: rgba(255,255,255,0.95); border: none; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">▶</button>
        <span style="position: absolute; bottom: 1rem; right: 1rem; background: rgba(0,0,0,0.8); color: white; padding: 0.375rem 0.75rem; border-radius: 6px; font-size: 0.875rem; font-weight: 600; backdrop-filter: blur(10px);">12:34</span>
    </div>
    <div style="padding: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
            <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">JD</div>
            <div>
                <h4 style="font-weight: 700; font-size: 0.875rem; margin-bottom: 0.125rem;">John Doe</h4>
                <p style="color: #9ca3af; font-size: 0.75rem;">124K abone</p>
            </div>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 0.75rem; line-height: 1.4;">Web Tasarımında Modern Trendler 2026</h3>
        <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 1rem;">2026 yılında öne çıkan web tasarım trendlerini keşfedin...</p>
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
            <span style="color: #64748b; font-size: 0.875rem;">45K görüntülenme</span>
            <span style="color: #9ca3af; font-size: 0.875rem;">2 gün önce</span>
        </div>
    </div>
</div>`,
        css: `.video-card:hover .play-btn { transform: translate(-50%, -50%) scale(1.1); }`,
        js: `// Video card interaction`
    },

    // YENİ KATEGORİ: STEPPER, TAG (Son 4 component)
    {
        id: 97,
        category: 'Stepper',
        title: 'Horizontal Stepper',
        html: `<div style="max-width: 800px; margin: 2rem auto; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <div style="display: flex; justify-content: space-between; margin-bottom: 3rem; position: relative;">
        <div style="position: absolute; top: 24px; left: 80px; right: 80px; height: 4px; background: #e5e7eb; z-index: 1;">
            <div style="height: 100%; width: 33%; background: linear-gradient(to right, #667eea, #764ba2);"></div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; position: relative; z-index: 2;">
            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4); margin-bottom: 0.75rem;">✓</div>
            <span style="font-weight: 600; color: #1e293b;">Hesap</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; position: relative; z-index: 2;">
            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.125rem; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4); margin-bottom: 0.75rem;">2</div>
            <span style="font-weight: 600; color: #3b82f6;">Bilgiler</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; position: relative; z-index: 2;">
            <div style="width: 48px; height: 48px; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #9ca3af; font-weight: bold; font-size: 1.125rem; margin-bottom: 0.75rem;">3</div>
            <span style="font-weight: 600; color: #9ca3af;">Ödeme</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; position: relative; z-index: 2;">
            <div style="width: 48px; height: 48px; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #9ca3af; font-weight: bold; font-size: 1.125rem; margin-bottom: 0.75rem;">4</div>
            <span style="font-weight: 600; color: #9ca3af;">Tamamla</span>
        </div>
    </div>
    <div style="padding: 2rem; background: #f8fafc; border-radius: 12px; text-align: center;">
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Adım 2: Bilgilerinizi Girin</h3>
        <p style="color: #64748b;">Lütfen kişisel bilgilerinizi doldurun</p>
    </div>
</div>`,
        css: `.stepper-step { transition: all 0.3s; }`,
        js: `// Stepper navigation`
    },
    {
        id: 98,
        category: 'Stepper',
        title: 'Vertical Stepper',
        html: `<div style="max-width: 600px; margin: 2rem auto; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="display: flex; gap: 1.5rem;">
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">✓</div>
                <div style="width: 2px; flex: 1; background: linear-gradient(to bottom, #667eea, #764ba2); margin: 0.5rem 0;"></div>
            </div>
            <div style="flex: 1; padding-bottom: 2rem;">
                <h4 style="font-weight: 700; margin-bottom: 0.5rem;">Hesap Oluşturuldu</h4>
                <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 1rem;">Hesabınız başarıyla oluşturuldu</p>
                <span style="color: #10b981; font-size: 0.875rem; font-weight: 600;">Tamamlandı</span>
            </div>
        </div>
        <div style="display: flex; gap: 1.5rem;">
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);">2</div>
                <div style="width: 2px; flex: 1; background: #e5e7eb; margin: 0.5rem 0;"></div>
            </div>
            <div style="flex: 1; padding-bottom: 2rem;">
                <h4 style="font-weight: 700; margin-bottom: 0.5rem;">Profil Bilgileri</h4>
                <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 1rem;">Profil bilgilerinizi ekleyin</p>
                <span style="color: #3b82f6; font-size: 0.875rem; font-weight: 600;">Devam Ediyor...</span>
            </div>
        </div>
        <div style="display: flex; gap: 1.5rem;">
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 40px; height: 40px; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #9ca3af; font-weight: bold;">3</div>
            </div>
            <div style="flex: 1;">
                <h4 style="font-weight: 700; margin-bottom: 0.5rem; color: #9ca3af;">E-posta Doğrulama</h4>
                <p style="color: #9ca3af; font-size: 0.875rem;">E-posta adresinizi doğrulayın</p>
            </div>
        </div>
    </div>
</div>`,
        css: `.vertical-step-current { box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2); }`,
        js: `// Vertical stepper logic`
    },
    {
        id: 99,
        category: 'Tag',
        title: 'Tag Component',
        html: `<div style="display: flex; flex-wrap: wrap; gap: 1rem; padding: 2rem;">
    <span style="background: #eff6ff; color: #3b82f6; padding: 0.5rem 1rem; border-radius: 16px; font-size: 0.875rem; font-weight: 600;">React</span>
    <span style="background: #ecfdf5; color: #10b981; padding: 0.5rem 1rem; border-radius: 16px; font-size: 0.875rem; font-weight: 600;">Vue.js</span>
    <span style="background: #fef3c7; color: #f59e0b; padding: 0.5rem 1rem; border-radius: 16px; font-size: 0.875rem; font-weight: 600;">JavaScript</span>
    <span style="background: #f3e8ff; color: #a855f7; padding: 0.5rem 1rem; border-radius: 16px; font-size: 0.875rem; font-weight: 600;">TypeScript</span>
    <span style="background: #fee2e2; color: #ef4444; padding: 0.5rem 1rem; border-radius: 16px; font-size: 0.875rem; font-weight: 600;">Angular</span>
    <span style="background: #dbeafe; color: #2563eb; padding: 0.5rem 1rem; border-radius: 16px; font-size: 0.875rem; font-weight: 600;">Tailwind</span>
    <span style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 0.5rem 1rem; border-radius: 16px; font-size: 0.875rem; font-weight: 600;">Premium</span>
</div>`,
        css: `.tag:hover { transform: translateY(-2px); }`,
        js: `// Tag filtering`
    },
    {
        id: 100,
        category: 'Tag',
        title: 'Removable Tags',
        html: `<div style="max-width: 600px; margin: 2rem auto; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Seçili Etiketler</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem;">
        <span style="background: #eff6ff; color: #3b82f6; padding: 0.625rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
            React
            <button style="background: none; border: none; color: #3b82f6; cursor: pointer; font-size: 1.125rem; line-height: 1;">×</button>
        </span>
        <span style="background: #ecfdf5; color: #10b981; padding: 0.625rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
            Vue.js
            <button style="background: none; border: none; color: #10b981; cursor: pointer; font-size: 1.125rem; line-height: 1;">×</button>
        </span>
        <span style="background: #fef3c7; color: #f59e0b; padding: 0.625rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
            JavaScript
            <button style="background: none; border: none; color: #f59e0b; cursor: pointer; font-size: 1.125rem; line-height: 1;">×</button>
        </span>
        <span style="background: #f3e8ff; color: #a855f7; padding: 0.625rem 1rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
            TypeScript
            <button style="background: none; border: none; color: #a855f7; cursor: pointer; font-size: 1.125rem; line-height: 1;">×</button>
        </span>
    </div>
    <input type="text" placeholder="Yeni etiket ekle..." style="width: 100%; padding: 1rem; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem;">
</div>`,
        css: `.tag-remove:hover { background: rgba(0,0,0,0.1); border-radius: 50%; }`,
        js: `// Tag add/remove functionality`
    },

    // TOPLAM: 100 COMPONENT! 🎉
];

// Kategorileri otomatik olarak çıkart
const categories = [...new Set(templates.map(t => t.category))];

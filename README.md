# 🎨 BW Templates

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Components](https://img.shields.io/badge/components-20+-green.svg)
![License](https://img.shields.io/badge/license-MIT-orange.svg)
![Nunjucks](https://img.shields.io/badge/Nunjucks-3.2.4-red.svg)

**A Modern, Production-Ready Component Library for Static Websites**

**Modern, Kullanıma Hazır Statik Web Siteleri için Component Kütüphanesi**

[English](#english) | [Türkçe](#turkish)

</div>

---

<a name="english"></a>

## 🚀 English

### What is BW Templates?

BW Templates is a **blazing-fast, production-ready component library** built with Nunjucks templating engine. It provides **20+ beautifully crafted components** with **60+ variants** that you can copy-paste directly into your projects. No installation, no dependencies - just pure HTML, CSS, and vanilla JavaScript.

### ✨ Features

- 🎯 **20+ Production-Ready Components** - From headers to footers, forms to UI elements
- 🎨 **60+ Variants** - Multiple styles for each component
- 📋 **One-Click Copy** - Copy HTML, CSS, and JavaScript instantly
- 🌗 **Dark/Light Mode** - Built-in theme switching
- 📱 **100% Responsive** - Works perfectly on all devices
- ⚡ **Zero Dependencies** - Pure HTML, CSS, and vanilla JS
- 🎭 **BEM Methodology** - Clean, maintainable code structure
- ⌨️ **Keyboard Shortcuts** - Fast navigation and copying
- 🔍 **Live Preview** - See components in action with responsive viewport
- 🎬 **Smooth Animations** - Beautiful scroll animations included

### 📦 Component Collection

#### Layout Components
- **Header** (3 variants) - Navigation bars with light, dark, and transparent styles
- **Hero** (2 variants) - Eye-catching banner sections
- **Footer** (2 variants) - Simple and mega footer layouts
- **Breadcrumb** (3 variants) - Navigation breadcrumbs

#### Navigation Components
- **Tabs** (3 variants) - Tabbed content with default, pills, and underline styles

#### Content Components
- **Features** (2 variants) - Showcase product features in grid or list
- **Blog** (3 variants) - Blog post layouts for articles
- **Testimonials** (3 variants) - Customer reviews and testimonials
- **Card** (3 variants) - Versatile content cards
- **Stats** (3 variants) - Statistics and counter sections
- **FAQ** (3 variants) - Accordion-style frequently asked questions

#### Form Components
- **Contact Form** (3 variants) - Professional contact forms
- **Login Form** (3 variants) - User authentication forms
- **Search Bar** (3 variants) - Search inputs with different styles

#### Marketing Components
- **CTA** (2 variants) - Call-to-action sections
- **Pricing** (3 variants) - Pricing tables and plans
- **Newsletter** (3 variants) - Email subscription forms

#### UI Elements
- **Alert** (4 variants) - Notification messages (info, success, warning, error)
- **Badge** (4 variants) - Labels and tags
- **Progress Bar** (3 variants) - Progress indicators
- **Spinner** (4 variants) - Loading animations

### 🎯 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/Barand1500/BW-Templates.git
cd BW-Templates
```

2. **Install dependencies**
```bash
npm install
```

3. **Build the project**
```bash
npm run build
```

4. **Open the dashboard**
```bash
# Open index.html in your browser
start index.html
```

### 💻 Usage

1. **Browse Components** - Open `index.html` in your browser
2. **Select a Component** - Click any component from the sidebar
3. **Choose a Variant** - Select your preferred style from the dropdown
4. **Copy Code** - Click the "📋 Copy Code" button
5. **Paste** - Use it in your project immediately!

### ⌨️ Keyboard Shortcuts

- `T` - Toggle theme (Dark/Light)
- `Ctrl+Shift+C` - Copy current component code
- `↑` / `↓` - Navigate between components

### 🛠️ Build System

The project uses a custom build system with:
- **Nunjucks** - Templating engine for component generation
- **Chokidar** - File watching for development
- **fs-extra** - Enhanced file system operations

**Build Commands:**
```bash
npm run build        # Build once
npm run dev          # Build and watch for changes
```

### 📁 Project Structure

```
baranfrontend/
├── src/
│   ├── components/     # All component files (.njk)
│   ├── layouts/        # Base templates
│   ├── pages/          # Page templates
│   └── static/         # CSS and JavaScript
├── dist/               # Compiled output
├── index.html          # Interactive dashboard
├── build.js            # Build system
└── package.json        # Dependencies
```

### 🎨 Component Anatomy

Each component follows BEM naming:

```html
<!-- HTML -->
<div class="c-component c-component--variant">
  <div class="c-component__element"></div>
</div>

<!-- CSS -->
<style>
  .c-component { /* Base styles */ }
  .c-component--variant { /* Variant styles */ }
  .c-component__element { /* Element styles */ }
</style>

<!-- JavaScript (if needed) -->
<script>
  // Component logic
</script>
```

### 🎯 Use Cases

- 🚀 **Landing Pages** - Build beautiful landing pages in minutes
- 📱 **Marketing Sites** - Create professional marketing websites
- 📝 **Blogs** - Set up blog layouts quickly
- 🛒 **E-commerce** - Product showcases and pricing tables
- 📊 **Dashboards** - Admin panels and data displays
- 🎓 **Documentation** - Technical documentation sites

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### 📄 License

MIT License - feel free to use this in your projects!

### 🙏 Credits

Created with ❤️ by **Baran**

---

<a name="turkish"></a>

## 🚀 Türkçe

### BW Templates Nedir?

BW Templates, Nunjucks şablon motoru ile oluşturulmuş **hızlı, kullanıma hazır bir component kütüphanesi**dir. **60+ varyant** içeren **20+ güzelce tasarlanmış component** sunar ve bunları doğrudan projelerinize kopyalayıp yapıştırabilirsiniz. Kurulum yok, bağımlılık yok - sadece saf HTML, CSS ve vanilla JavaScript.

### ✨ Özellikler

- 🎯 **20+ Kullanıma Hazır Component** - Header'dan footer'a, formlardan UI elementlerine
- 🎨 **60+ Varyant** - Her component için birden fazla stil
- 📋 **Tek Tıkla Kopyala** - HTML, CSS ve JavaScript'i anında kopyalayın
- 🌗 **Karanlık/Aydınlık Mod** - Yerleşik tema değiştirme
- 📱 **%100 Responsive** - Tüm cihazlarda mükemmel çalışır
- ⚡ **Sıfır Bağımlılık** - Saf HTML, CSS ve vanilla JS
- 🎭 **BEM Metodolojisi** - Temiz, sürdürülebilir kod yapısı
- ⌨️ **Klavye Kısayolları** - Hızlı gezinme ve kopyalama
- 🔍 **Canlı Önizleme** - Responsive görünümde componentleri görün
- 🎬 **Akıcı Animasyonlar** - Güzel scroll animasyonları dahil

### 📦 Component Koleksiyonu

#### Layout Componentleri
- **Header** (3 varyant) - Açık, koyu ve şeffaf stilde navigasyon barları
- **Hero** (2 varyant) - Dikkat çekici banner bölümleri
- **Footer** (2 varyant) - Basit ve detaylı footer düzenleri
- **Breadcrumb** (3 varyant) - Navigasyon breadcrumb'ları

#### Navigasyon Componentleri
- **Tabs** (3 varyant) - Varsayılan, pills ve underline stillerde sekmeli içerik

#### İçerik Componentleri
- **Features** (2 varyant) - Ürün özelliklerini grid veya liste düzeninde göster
- **Blog** (3 varyant) - Makaleler için blog düzenleri
- **Testimonials** (3 varyant) - Müşteri yorumları ve referanslar
- **Card** (3 varyant) - Çok yönlü içerik kartları
- **Stats** (3 varyant) - İstatistik ve sayaç bölümleri
- **FAQ** (3 varyant) - Akordeon tarzı sık sorulan sorular

#### Form Componentleri
- **Contact Form** (3 varyant) - Profesyonel iletişim formları
- **Login Form** (3 varyant) - Kullanıcı giriş formları
- **Search Bar** (3 varyant) - Farklı stillerde arama girişleri

#### Marketing Componentleri
- **CTA** (2 varyant) - Harekete geçirici bölümler
- **Pricing** (3 varyant) - Fiyatlandırma tabloları ve planları
- **Newsletter** (3 varyant) - E-posta abonelik formları

#### UI Elementleri
- **Alert** (4 varyant) - Bildirim mesajları (bilgi, başarı, uyarı, hata)
- **Badge** (4 varyant) - Etiketler ve işaretler
- **Progress Bar** (3 varyant) - İlerleme göstergeleri
- **Spinner** (4 varyant) - Yükleme animasyonları

### 🎯 Hızlı Başlangıç

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/Barand1500/BW-Templates.git
cd BW-Templates
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Projeyi derleyin**
```bash
npm run build
```

4. **Dashboard'u açın**
```bash
# index.html'i tarayıcınızda açın
start index.html
```

### 💻 Kullanım

1. **Componentlere Göz Atın** - `index.html`'i tarayıcınızda açın
2. **Bir Component Seçin** - Kenar çubuğundan herhangi bir component'e tıklayın
3. **Bir Varyant Seçin** - Açılır listeden tercih ettiğiniz stili seçin
4. **Kodu Kopyalayın** - "📋 Copy Code" butonuna tıklayın
5. **Yapıştırın** - Hemen projenizde kullanın!

### ⌨️ Klavye Kısayolları

- `T` - Tema değiştir (Karanlık/Aydınlık)
- `Ctrl+Shift+C` - Mevcut component kodunu kopyala
- `↑` / `↓` - Componentler arasında gezin

### 🛠️ Build Sistemi

Proje özel bir build sistemi kullanır:
- **Nunjucks** - Component oluşturma için şablon motoru
- **Chokidar** - Geliştirme için dosya izleme
- **fs-extra** - Gelişmiş dosya sistemi işlemleri

**Build Komutları:**
```bash
npm run build        # Bir kez derle
npm run dev          # Derle ve değişiklikleri izle
```

### 📁 Proje Yapısı

```
baranfrontend/
├── src/
│   ├── components/     # Tüm component dosyaları (.njk)
│   ├── layouts/        # Temel şablonlar
│   ├── pages/          # Sayfa şablonları
│   └── static/         # CSS ve JavaScript
├── dist/               # Derlenmiş çıktı
├── index.html          # İnteraktif dashboard
├── build.js            # Build sistemi
└── package.json        # Bağımlılıklar
```

### 🎨 Component Anatomisi

Her component BEM isimlendirmesini takip eder:

```html
<!-- HTML -->
<div class="c-component c-component--variant">
  <div class="c-component__element"></div>
</div>

<!-- CSS -->
<style>
  .c-component { /* Temel stiller */ }
  .c-component--variant { /* Varyant stilleri */ }
  .c-component__element { /* Element stilleri */ }
</style>

<!-- JavaScript (gerekirse) -->
<script>
  // Component mantığı
</script>
```

### 🎯 Kullanım Alanları

- 🚀 **Landing Sayfaları** - Dakikalar içinde güzel landing sayfaları oluşturun
- 📱 **Marketing Siteleri** - Profesyonel pazarlama web siteleri yapın
- 📝 **Bloglar** - Blog düzenlerini hızlıca kurun
- 🛒 **E-ticaret** - Ürün vitrinleri ve fiyatlandırma tabloları
- 📊 **Dashboard'lar** - Admin panelleri ve veri gösterimleri
- 🎓 **Dokümantasyon** - Teknik dokümantasyon siteleri

### 🤝 Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Lütfen Pull Request göndermekten çekinmeyin.

### 📄 Lisans

MIT Lisansı - projelerinizde özgürce kullanabilirsiniz!

### 🙏 Teşekkürler

❤️ ile **Baran** tarafından oluşturuldu

---

<div align="center">

### 🌟 Star us on GitHub if you find this useful!

### 🌟 Faydalı bulduysanız GitHub'da yıldız veriniz!

**[⬆ Back to top](#-bw-templates)**

</div>

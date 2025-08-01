# 🏨 The Wild Oasis

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-blue?logo=react" />
  <img src="https://img.shields.io/badge/Vite-7.0.4-purple?logo=vite" />
  <img src="https://img.shields.io/badge/React%20Query-5.83.0-red?logo=reactquery" />
  <img src="https://img.shields.io/badge/Styled%20Components-6.1.19-pink?logo=styledcomponents" />
  <img src="https://img.shields.io/badge/Supabase-2.52.0-green?logo=supabase" />
  <img src="https://img.shields.io/badge/React%20Router-7.7.0-orange?logo=reactrouter" />
  <img src="https://img.shields.io/badge/React%20Hook%20Form-7.60.0-blue?logo=reacthookform" />
</p>

<br/>

## 💭 Proje Hakkında

**The Wild Oasis**, otel çalışanlarının kabin, rezervasyon ve misafirleri yönetmelerine olanak tanıyan tam özellikli bir React web uygulamasıdır. Dashboard ile son 7, 30 veya 90 günlük önemli bilgileri görüntüler ve çalışanların profil yönetimi, rezervasyon takibi ve satış istatistikleri gibi özellikler sunar.

Bu proje, modern React teknikleri kullanılarak geliştirilmiş kapsamlı bir otel yönetim sistemidir. Satış istatistikleri, kabin yönetimi, kullanıcı yönetimi, rezervasyon yönetimi ve çeşitli özelleştirme seçenekleri içerir.

<br/>

## ✨ Özellikler

- 📊 **Dashboard**: Son rezervasyonlar, satışlar, check-in'ler ve doluluk oranı istatistikleri
- 🏠 **Kabin Yönetimi**: Kabin kayıtları oluşturma, güncelleme veya silme
- 📅 **Rezervasyon Yönetimi**: Rezervasyonları check-in/check-out işlemleri ile yönetme
- 👥 **Misafir Yönetimi**: Misafir bilgilerini takip etme ve yönetme
  <br/>

## 🔗 Canlı Demo

👉 [Projeye şimdi göz atın](https://the-wild-oasis-theta-snowy.vercel.app/)

<br/>

## 🛠️ Kullanılan Teknolojiler

- ⚛️ **React 19.1.0**: Modern React hooks ve context API
- ⚡ **Vite 7.0.4**: Hızlı geliştirme ve build aracı
- 🔄 **React Query 5.83.0**: Server state yönetimi ve caching
- 💅 **Styled Components 6.1.19**: CSS-in-JS styling
- 🗄️ **Supabase 2.52.0**: Backend ve veritabanı servisi
- 🧭 **React Router 7.7.0**: Client-side routing
- 📝 **React Hook Form 7.6.0**: Form yönetimi ve validasyon

<br/>

## 📦 Kurulum

Projeyi klonlayıp yerelde çalıştırmak için:

```bash
git clone https://github.com/talhaceliktas/the-wild-oasis.git
cd the-wild-oasis
npm install
npm run dev
```

## 🔧 Ortam Değişkenleri

`.env` dosyası oluşturun ve Supabase bilgilerinizi ekleyin
<br/>
<i>(Detaylı bilgi için .env.example dosyasını kontrol edin) </i>

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

<br/>

## 🗃️ Supabase Tabloları

`schema.sql` SQL dosyasını Supabaseye enjekte edin.

<br/>

## ♾️ Neler Öğrendim

Bu proje, aşağıdakiler dahil olmak üzere çeşitli gelişmiş React kavramlarına derin bir incelemeydi:

<ul>
  <li><strong>Durum yönetimi ve veri getirme:</strong> Uygulamanın veri akışını verimli bir şekilde yönetmek için React Query kullanımı.</li>
  <li><strong>Karmaşık UI desenleri:</strong> Bileşik bileşen paterni ve daha yüksek dereceli bileşenler (HOC) gibi yeniden kullanılabilir desenlerin uygulanması, daha bakımlı ve ölçeklenebilir kodlar oluşturmayı sağladı.</li>
</ul>

<br/>

## 🙏🏻 Teşekkür

Bu uygulama, Jonas Schmedtmann tarafından Udemy kursunun bir parçası olarak geliştirilmiştir. Kurs boyunca mükemmel öğretimi ve rehberliği için teşekkürler.

# Demircioğlu Güvenli Taşıma

Demircioğlu Güvenli Taşıma firması için geliştirilmiş kurumsal web sitesi. Modern, hızlı ve tamamen responsive bir React uygulamasıdır.

## Özellikler

- Tam responsive tasarım (mobil, tablet, masaüstü)
- Hero, Hizmetler, Hakkımızda, Neden Biz ve İletişim bölümleri
- WhatsApp anlık iletişim butonu
- Parallax tilt efektleri

## Teknoloji Yığını

| Teknoloji | Versiyon |
|-----------|----------|
| React | 18 |
| TypeScript | 5 |
| Vite | 5 |
| Tailwind CSS | 3 |
| shadcn/ui | - |
| React Router | 6 |
| TanStack Query | 5 |

## Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build al
npm run build
```

## Proje Yapısı

```
src/
├── components/
│   ├── ui/              # shadcn/ui bileşenleri
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx
│   ├── WhyChooseUsSection.tsx
│   ├── ContactSection.tsx
│   ├── FloatingWhatsApp.tsx
│   └── Footer.tsx
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/
├── lib/
└── main.tsx
```

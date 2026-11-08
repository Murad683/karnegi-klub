# Karnegi Klub saytı

Karnegi Klub (natiqlik və kommunikasiya təlimləri) üçün yeni sayt. Yalnız frontend, Azərbaycan dili, statik export.

**Texnologiya:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, `motion`. Şrift: Plus Jakarta Sans.
**Deploy planı:** statik export (`out/`), Docker + nginx, öz Linux serverində.

## İşə salmaq

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statik export: out/
npm run lint
npm run check:placeholders   # yayımdan əvvəl: hələ real olmayan (nümunə) məlumatları siyahılayır
```

> Next.js 16 köhnə versiyalardan fərqlidir. Yeni API istifadə etməzdən əvvəl `node_modules/next/dist/docs/` oxuyun (bax: `AGENTS.md`).

## Quruluş

| Qovluq | Nə var |
|---|---|
| `app/` | səhifə (`page.tsx`), layout, qlobal CSS və dizayn tokenləri, `icon.svg` |
| `components/` | menyu, hero, footer, qeydiyyat pəncərəsi |
| `components/sections/` | Təlimlər (yığılan bloklar), Nəcəf bey, Rəylər, Müştərilər, yekun çağırış |
| `components/motion/` | scroll effektləri (reveal, parallaks, sayğac, scroll göstəricisi) |
| `content/` | **bütün mətn və məlumat** (təlimlər, rəylər, müştərilər, rəqəmlər, əlaqə) |
| `public/images/` | təlim şəkilləri |
| `prototypes/` | dizayn prototipləri (statik HTML, yalnız tarixçə üçün) |
| `scripts/` | `check-placeholders.mjs` |

## Məzmunu dəyişmək

Mətn və rəqəmlər `content/*.ts` fayllarındadır. `placeholder: true` işarəli hər şey nümunədir və real məlumatla əvəz olunmalıdır.

## Dizayn qaydaları

- Rənglər: səma mavisi, ağ, tünd mavi mətn, narıncı əsas düymə, isti sarı vurğu, yumşaq ton blokları (`app/globals.css`).
- Başlıqlar və düymələr adi hərflə. Mötərizəli etiketlər, neon rənglər və böyük hərfli başlıqlar istifadə olunmur.
- Eyni məlumat/vurğu iki dəfə təkrarlanmır (rəqəmlər yalnız Nəcəf bey bölməsində). Bölmə başlıqları və mobil görünüş mərkəzləşdirilib.
- Footer-də hərf-hərf yumşaq açılan nəhəng "Karnegi" yazısı var (`components/footer/Wordmark.tsx`).
- Hərəkət: iOS tipli yumşaq əyri `cubic-bezier(0.32, 0.72, 0, 1)`.
- Şrift seçəndə Azərbaycan hərflərini (Ə ə İ ı Ğ Ş Ç Ö Ü) mütləq yoxlayın: bəzi populyar şriftlərdə böyük Ə yoxdur.

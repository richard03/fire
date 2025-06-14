# React PHP Application

Tato aplikace je vytvořena pomocí React a je připravena pro komunikaci s PHP API.

## Požadavky

- Node.js (verze 14 nebo novější)
- npm (součást Node.js)

## Instalace

1. Nainstalujte závislosti:
```bash
npm install
```

2. Spusťte vývojový server:
```bash
npm start
```

3. Pro produkční build:
```bash
npm run build
```

## Struktura projektu

- `/public` - Statické soubory
- `/src` - Zdrojový kód React aplikace
  - `App.js` - Hlavní komponenta
  - `index.js` - Vstupní bod aplikace

## Vývoj

Aplikace běží na `http://localhost:3000` ve vývojovém režimu.

Pro produkční nasazení:
1. Spusťte `npm run build`
2. Zkopírujte obsah složky `build` do kořenového adresáře PHP serveru 
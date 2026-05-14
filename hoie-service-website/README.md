# Høie Service AS - Nettside

Nettside for Høie Service AS - Energioppgradering av boliger.

## Installasjon

```bash
pnpm install
```

## Utvikling

```bash
pnpm dev
```

## Bygge for produksjon

```bash
pnpm build
```

## Deploy til Vercel

1. Gå til [vercel.com](https://vercel.com)
2. Logg inn med GitHub-kontoen din
3. Klikk "Add New" → "Project"
4. Importer GitHub repository: `cruelreaver2-alt/hoie-service`
5. Klikk "Deploy"

### Koble til eget domene (hoie-service.no)

1. I Vercel prosjektet, gå til "Settings" → "Domains"
2. Legg til domendet: `hoie-service.no`
3. Vercel vil gi deg DNS-innstillinger
4. Gå til [domene.no](https://domene.no) og logg inn
5. Finn ditt domene "hoie-service.no" og gå til DNS-innstillinger
6. Legg til følgende DNS-poster:
   - A record: `@` → `76.76.21.21`
   - CNAME record: `www` → `cname.vercel-dns.com`

DNS-endringer kan ta opptil 48 timer, men vanligvis fungerer det innen noen minutter.

## Teknologi

- React 18.3.1
- TypeScript
- Vite 6
- Tailwind CSS v4
- Lucide React (ikoner)

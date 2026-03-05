# Digital Cinema Counter

Veb aplikacija za pregled filmova, rezervaciju karata i upravljanje korisnickim profilom. Izgradjena pomocu Angular 19 i Angular Material dizajn sistema, sa integracijom TMDB API-ja za prikaz aktuelnih filmova.

## Funkcionalnosti

- **Pregled filmova** - lista trenutno aktuelnih filmova sa TMDB API-ja (srpski jezik)
- **Detalji filma** - opis, zanr, trajanje, reziser, glumci, poster, ocjene
- **Napredna pretraga** - filtriranje po naslovu, zanru, trajanju, reziseru, glumcima, datumu projekcije, cijeni
- **Rezervacija karata** - izbor termina projekcije (18:00, 20:30, 22:00), kolicine i dodavanje u korpu
- **Korpa** - pregled, izmjena kolicine, brisanje stavki, ukupna cijena
- **Istorija kupovine** - evidencija svih obavljenih kupovina
- **Recenzije i ocjene** - ostavljanje komentara i ocjena (1-5 zvjezdica) na filmove
- **Autentifikacija** - registracija i prijava korisnika
- **Korisnicki profil** - pregled i azuriranje licnih podataka

## Tehnologije

- Angular 19 (standalone komponente)
- Angular Material (Azure Blue tema)
- TypeScript 5.7
- RxJS 7.8
- SweetAlert2
- TMDB API

## Struktura projekta

```
src/app/
├── components/
│   ├── cart/               # Korpa
│   ├── header/             # Navigacija
│   ├── login/              # Prijava
│   ├── register/           # Registracija
│   ├── movie-detail/       # Detalji filma
│   ├── movie-list/         # Lista filmova
│   ├── movie-search/       # Pretraga
│   ├── profile/            # Profil korisnika
│   ├── purchase-history/   # Istorija kupovine
│   └── rating/             # Komponenta za ocjenjivanje
├── interfaces/             # TypeScript interfejsi (Movie, User)
├── services/               # Servisi (Auth, Cart, Movie)
└── guards/                 # AuthGuard za zastitu ruta
```

## Pokretanje

```bash
# Instalacija zavisnosti
npm install

# Pokretanje razvojnog servera
ng serve
```

Aplikacija je dostupna na `http://localhost:4200/`.

## Rute

| Ruta | Opis | Zastita |
|------|------|---------|
| `/movies` | Lista filmova | - |
| `/movie/:id` | Detalji filma | - |
| `/search` | Pretraga filmova | - |
| `/login` | Prijava | - |
| `/register` | Registracija | - |
| `/cart` | Korpa | AuthGuard |
| `/profile` | Profil | AuthGuard |
| `/purchase-history` | Istorija kupovine | AuthGuard |

## Napomene

- Podaci o korisnicima i kupovinama se cuvaju u localStorage (nema backend servera)
- Filmovi se ucitavaju sa TMDB API-ja na srpskom jeziku sa transliteracijom cirilice u latinicu
- Projekcije i cijene karata su simulirane

<p align="center">
  <img src="grafiki/baner.jpg" alt="Pick My Music" width="720">
</p>

# Pick My Music

Imprezowa gra muzyczna w przeglądarce: **posłuchaj fragmentu utworu, zgadnij, kiedy wyszedł, i ułóż swoją oś czasu.**

## Jak grać

1. Wpisz graczy (jeden na linię) i wybierz talię.
2. W swojej turze kliknij płytę — usłyszysz 30-sekundowy fragment (tytuł jest ukryty).
3. Wybierz miejsce na swojej osi czasu: przed, po albo między kartami, które już masz.
4. Trafisz — karta zostaje u ciebie. Pomylisz się — przepada.
5. Wygrywa ten, kto pierwszy zbierze ustaloną liczbę kart (5, 7 albo 10).

## Talie

| Talia | Utworów |
|---|---|
| Mix: wszystkie talie razem | 1878 |
| Polskie hity | 220 |
| Złote lata 60. i 70. | 161 |
| Lata 80. | 186 |
| Lata 90. | 195 |
| Lata 2000. | 202 |
| 2010 i później | 336 |
| Rock | 252 |
| Rap i trap USA | 174 |
| Rap i trap PL | 211 |

Lata wydania zostały sprawdzone w MusicBrainz, Deezerze i iTunes — szczegóły w [audyt-talii.md](audyt-talii.md).
Opcjonalnie można wygenerować własną talię na dowolny motyw przez Gemini (wymaga własnego klucza API, który zostaje tylko w przeglądarce).

## Funkcje

- Gra pamięta zagrane utwory i w kolejnych rozgrywkach najpierw losuje nowe.
- Dźwięk z iTunes, a gdy nie odpowiada — z Deezera (tylko oryginalne nagrania, bez coverów i wersji live).
- Układ dopasowany do telefonu i telewizora (tryb TV powiększa grę na dużym ekranie, nawigacja pilotem).

## Uruchomienie

To jedna strona bez serwera i bez instalacji:

- **Online:** wrzuć cały folder (razem z `grafiki/`) na GitHub Pages lub Netlify.
- **Lokalnie:** w folderze projektu uruchom `python -m http.server 8765` i otwórz `http://localhost:8765`.
  (Samo otwarcie pliku dwuklikiem może blokować pobieranie fragmentów audio.)

## Uwagi

- Fragmenty utworów to 30-sekundowe podglądy udostępniane publicznie przez iTunes i Deezer — gra niczego nie przechowuje.
- Grafiki wygenerowano w Google Gemini.

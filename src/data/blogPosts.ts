export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Jak uniknąć mostków termicznych przy ocieplaniu domu?",
    slug: "mostki-termiczne-ocieplanie",
    category: "Termoizolacja",
    excerpt: "Ocieplenie budynku to inwestycja na lata. Dowiedz się, jak uniknąć mostków termicznych i zapewnić efektywną izolację termiczną.",
    content: `Ocieplenie budynku to inwestycja na lata, która ma przynieść wymierne oszczędności na ogrzewaniu. Niestety, nawet najlepszej jakości styropian czy wełna mineralna nie spełnią swojego zadania, jeśli podczas montażu powstaną tzw. mostki termiczne. Są to miejsca, przez które ciepło ucieka z wnętrza domu na zewnątrz.

Mostki termiczne punktowe powstają najczęściej w miejscach, gdzie metalowy trzpień łącznika do termoizolacji przebija warstwę izolacyjną. Metal doskonale przewodzi ciepło, co sprawia, że w miejscu każdego kołka temperatura ściany jest niższa.

Aby skutecznie wyeliminować ten problem, marka Amex Starfix zaleca stosowanie metody tzw. montażu zagłębionego. Polega ona na wyfrezowaniu w styropianie okrągłego otworu, w którym chowa się talerzyk łącznika.

- **Frez do styropianu AFS 6515** – precyzyjne narzędzie
- **Frez do wełny mineralnej AFW 6518** – do twardszego materiału

Po zamontowaniu łącznika, wyfrezowany otwór zamyka się specjalną zaślepką termoizolacyjną.`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 2,
    title: "Łącznik wkręcany czy wbijany? Wybieramy najlepsze mocowanie do styropianu",
    slug: "lacznik-wkrecany-wbijany",
    category: "Termoizolacja",
    excerpt: "Porównanie łączników wkręcanych i wbijanych do termoizolacji.",
    content: `Wybór odpowiednich łączników mechanicznych to kluczowy etap planowania ocieplenia budynku.

**Łączniki wbijane (np. seria LDK)**

To najbardziej popularne rozwiązanie. Wystarczy wywiercić otwór, włożyć koszulkę łącznika i wbić trzpień.

- **Trzpienie tworzywowe (GZN)** – eliminują mostki termiczne
- **Trzpienie stalowe z zalanym łebkiem (TZ)** – bardzo wytrzymałe

**Łączniki wkręcane (np. seria LXK)**

To rozwiązanie dla profesjonalistów. Łączniki wkręcane LXK to innowacyjny produkt z 4-stronną strefą rozporu.`,
    date: "2026-04-21",
    readTime: 6
  },
  {
    id: 3,
    title: "Ocieplenie wełną mineralną – o czym musisz pamiętać przy montażu?",
    slug: "ocie plenie-welna-mineralna",
    category: "Termoizolacja",
    excerpt: "Wełna mineralna to doskonały materiał izolacyjny.",
    content: `Wełna mineralna to doskonały materiał izolacyjny – jest niepalna, świetnie tłumi dźwięki. Ze względu na swoją strukturę i ciężar, wymaga solidnych łączników mechanicznych.

**Jakie łączniki do wełny?**

Do mocowania wełny mineralnej należy stosować wyłącznie łączniki z trzpieniem stalowym. W ofercie Amex Starfix znajdziesz:

- **Łączniki LDK...TZ** – z trzpieniem stalowym zalanym
- **Łączniki wkręcane LXK** – z hartowanym wkrętem stalowym

**Talerzyki dociskowe**

Przy montażu wełny stosuje się dodatkowe talerzyki dociskowe TK 60 lub TK 140.`,
    date: "2026-04-21",
    readTime: 6
  },
  {
    id: 4,
    title: "Klej do styropianu w pianie – dlaczego warto zrezygnować z tradycyjnej zaprawy?",
    slug: "klej-styropian-piana",
    category: "Termoizolacja",
    excerpt: "Klej poliuretanowy w pianie to rewolucja na budowie.",
    content: `Klej poliuretanowy do styropianu, taki jak SKDS-750, to jednoskładnikowa, niskorozprężna piana.

**Zalety kleju w pianie:**

1. **Oszczędność czasu** – gotowy do użycia od razu
2. **Czystość i wygoda** – brak pyłu i brudnych wiader
3. **Doskonałe parametry izolacyjne** – tworzy dodatkową osłonę termiczną
4. **Świetna przyczepność** – do betonu, muru, drewna

Jedna puszka wystarcza na przyklejenie do 8 m² styropianu.`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 5,
    title: "Jak poprawnie obliczyć długość łącznika do termoizolacji?",
    slug: "dlugosc-lacznika-termoizolacja",
    category: "Termoizolacja",
    excerpt: "Praktyczny poradnik obliczania długości łącznika.",
    content: `Aby prawidłowo dobrać długość łącznika, musisz wziąć pod uwagę:

**1. Grubość materiału izolacyjnego (A)**

**2. Grubość warstwy kleju i starego tynku (B)** – zazwyczaj 10-20 mm

**3. Minimalna głębokość zakotwienia (C)**

- Podłoża pełne: 30-50 mm
- Podłoża z pustkami: 50-70 mm

**Wzór: Długość łącznika = A + B + C**

Przykład: 150 mm (styropian) + 10 mm (klej) + 70 mm (zakotwienie) = 230 mm`,
    date: "2026-04-21",
    readTime: 7
  },
  {
    id: 6,
    title: "Wkręty ciesielskie zamiast gwoździ – dlaczego to lepszy wybór?",
    slug: "wkrety-ciesielskie-dach",
    category: "Drewno",
    excerpt: "Poznaj zalety wkrętów ciesielskich AWCS i AWCT.",
    content: `Wkręty ciesielskie oferują szereg przewag nad tradycyjnymi gwoździami:

**Zalety wkrętów ciesielskich:**

1. **Wytrzymałość** – większa siła wyrywania i ścinania
2. **Brak konieczności nawiercania** – specjalna końcówka wiercąca
3. **Łatwość demontażu** – można wykręcić bez uszkadzania drewna
4. **Estetyka** – łby można zagłębić w drewnie
5. **Odporność na korozję** – ocynkowane

Dostępne w wersjach z łbem stożkowym (AWCS) i talerzykowym (AWCT).`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 7,
    title: "Budowa altany ogrodowej: Jakie wkręty do drewna wybrać?",
    slug: "altana-ogrodowa-wkrety",
    category: "Drewno",
    excerpt: "Praktyczne wskazówki wyboru wkrętów do altany.",
    content: `Przy budowie altany ogrodowej warto użyć kilku typów wkrętów:

**1. Wkręty ciesielskie z łbem stożkowym (AWCS)**

Idealne do łączenia elementów konstrukcyjnych.

**2. Wkręty ciesielskie z łbem talerzykowym (AWCT)**

Do mocowania elementów narażonych na duże obciążenia.

**3. Wkręty z gniazdem TORX**

Lepsze przeniesienie momentu obrotowego.

**4. Wkręty ocynkowane**

Odporność na korozję.`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 8,
    title: "Łeb stożkowy czy talerzykowy? Różnice w zastosowaniu wkrętów ciesielskich.",
    slug: "leb-stozkowwy-talerzykowy",
    category: "Drewno",
    excerpt: "Porównanie wkrętów z łbem stożkowym i talerzykowym.",
    content: `**Wkręty z łbem stożkowym (AWCS)**

- Licują się z powierzchnią drewna
- Idealne do połączeń, gdzie liczy się estetyka
- Łatwość szpachlowania i malowania

**Wkręty z łbem talerzykowym (AWCT)**

- Pozostają na powierzchni drewna
- Większa siła docisku
- Idealne do grubych belek i konstrukcji dachu

Wybór zależy od priorytetu: estetyka czy siła docisku.`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 9,
    title: "Mocowanie ciężkich przedmiotów na ścianie z płyt G-K",
    slug: "mocowanie-g-k-ciezkych",
    category: "Wykończenie",
    excerpt: "Jak zamocować telewizor lub szafkę na ścianie G-K.",
    content: `Kluczem jest rozłożenie ciężaru na większej powierzchni płyty.

**1. Łączniki do płyt G-K**

- **DPN (Driva)** – wkręcany łącznik z poliamidu
- **KGK** – uniwersalny łącznik z dużą powierzchnią rozporu

**2. Mocowanie do profili stalowych**

- **Wkręty fosfatyzowane do metalu (MX)** – do profili stalowych
- **Wkręty fosfatyzowane samowiercące (GS)** – do blach do 1,25 mm

**Wskazówki:**

- Zawsze sprawdź nośność łącznika
- Używaj wiertarki z udarem wyłączonym`,
    date: "2026-04-21",
    readTime: 6
  },
  {
    id: 10,
    title: "Wkręty fosfatyzowane – dlaczego kolor ma znaczenie?",
    slug: "wkrety-fosfatyzowane-sucha-zabudowa",
    category: "Wykończenie",
    excerpt: "Poznaj rolę fosfatyzacji w wkrętach do płyt G-K.",
    content: `Fosfatyzacja tworzy cienką warstwę fosforanów żelaza.

**Funkcje fosfatyzacji:**

1. **Ochrona antykorozyjna** – zapobiega rdzy
2. **Zwiększona przyczepność** – masa szpachlowa lepiej trzyma się wkrętu

**Rodzaje wkrętów fosfatyzowanych:**

- **DX (do drewna)** – rzadszy gwint, do konstrukcji drewnianych
- **MX (do metalu)** – gęstszy gwint, do profili stalowych

Zawsze dobieraj wkręty do rodzaju konstrukcji!`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 11,
    title: "Jak zamontować półkę na ścianie z karton-gipsu?",
    slug: "polka-karton-gips-montaz",
    category: "Mocowania",
    excerpt: "Praktyczne wskazówki bezpiecznego montażu półki na G-K.",
    content: `Montaż półki na ścianie G-K wymaga specjalnych łączników.

**1. Łączniki typu Driva (DPN)**

Samowiercący kołek z poliamidu. Wkręca się bezpośrednio w płytę.

**2. Łączniki rozporowe KGK**

Rozszerzają się za płytą, tworząc solidne zakotwienie.

**3. Mocowanie do profili**

Najbezpieczniejszy sposób – przykręć półkę bezpośrednio do profili stalowych.

**Wskazówki:**

- Sprawdzaj maksymalne obciążenie łącznika
- Używaj wkrętarki z regulacją momentu obrotowego`,
    date: "2026-04-21",
    readTime: 6
  },
  {
    id: 12,
    title: "Kołek uniwersalny – jeden produkt do wszystkich ścian.",
    slug: "kolek-uniwersalny-kaxn",
    category: "Mocowania",
    excerpt: "Poznaj kołek uniwersalny KAXN.",
    content: `Kołek uniwersalny KAXN to wszechstronne rozwiązanie do większości podłoży.

**Cechy kołka KAXN:**

1. **Czterostronna strefa rozporu**
   - W podłożach pełnych – kołek się rozpręża
   - W podłożach z pustkami – tworzy węzeł

2. **Materiał – poliamid (nylon)** – wysoka wytrzymałość

3. **Szerokie zastosowanie**
   - Półki, szafki, obrazy
   - Karnisze, lampy, lustra
   - Grzejniki, bojlerly

Dostępny w komplecie z wkrętami lub hakami.`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 13,
    title: "Samodzielny montaż umywalki i toalety",
    slug: "montaz-umywalka-toaleta",
    category: "Mocowania",
    excerpt: "Kompletny poradnik montażu armatury łazienkowej.",
    content: `Z odpowiednimi akcesoriami montaż jest prosty.

**1. Komplet do mocowania umywalki (seria U)**

- Koszulka łącznika z kopolimeru
- Wkręt stalowy, ocynkowany
- Podkładka mimośrodowa do poziomowania

**2. Komplet do mocowania toalety (seria WC)**

- Koszulka łącznika
- Wkręty stalowe, ocynkowane
- Rozeta amortyzująco-maskująca

**Wskazówki:**

- Używaj wiertarki z udarem
- Nie dokręcaj śrub zbyt mocno`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 14,
    title: "Jakie kołki wybrać do pustaków typu Porotherm?",
    slug: "kolki-porotherm",
    category: "Mocowania",
    excerpt: "Łączniki do pustaków ceramicznych Porotherm.",
    content: `Mocowanie w pustakach wymaga specjalnych łączników.

**1. Łączniki ramowe KAXDN**

- Długa, czterostronna strefa rozporu
- Tworzą węzeł w pustej przestrzeni
- Posiadają polską aprobatę techniczną

**2. Łączniki wbijane KSMDK**

- Dwustronna strefa rozporu
- Zapobiegają obrotowi kołka
- Dostępne do 340 mm długości

**Wskazówki:**

- Wierć bez udaru
- Dobierz odpowiednią średnicę wiertła`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 15,
    title: "Szybki montaż w betonie – łączniki wbijane w praktyce.",
    slug: "montaz-beton-laczniki",
    category: "Mocowania",
    excerpt: "Poznaj łączniki wbijane KSMXN i KSMDK.",
    content: `Łączniki wbijane to szybkie rozwiązanie do twardych podłoży.

**1. Łączniki wbijane KSMXN**

- Kołek z poliamidu z 4-stronną strefą rozporu
- 4-krotnie wyższe wyniki prób wytrzymałościowych
- Aprobatą techniczną UE (ETAG 20)

**2. Łączniki wbijane KSMDK**

- Dla słabszych podłoży betonowych
- Dwustronna strefa rozporu
- Polska aprobat techniczna

**Zastosowanie:**

- Listwy przypodłogowe
- Profile do suchej zabudowy
- Elementy instalacji`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 16,
    title: "Wkręty farmerskie – jak dobrać kolor do blachodachówki?",
    slug: "wkrety-farmerskie-kolor",
    category: "Dachy",
    excerpt: "Dobór koloru wkrętów do pokrycia dachowego.",
    content: `Wybór koloru wkrętów to kwestia estetyki i trwałości.

**Dlaczego kolor ma znaczenie?**

- **Estetyka** – dobrze dobrane wkręty są niemal niewidoczne
- **Ochrona** – malowana powłoka odporna na UV

**Jak dobrać kolor?**

Dopasuj do palety RAL blachodachówki. Dostępne kolory:

- RAL 3005, 3009, 3011 (czerwienie)
- RAL 6005, 6020 (zielenie)
- RAL 7016, 7024 (szarości)
- RAL 8017, 8019 (brązy)
- RAL 9005, 9010 (czerni/biel)

Podkładka EPDM gwarantuje szczelność.`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 17,
    title: "Montaż blachy do grubych profili stalowych",
    slug: "blach-profile-stalowe",
    category: "Dachy",
    excerpt: "Wkręty WS/WSM do grubych profili stalowych.",
    content: `Do grubych profili stalowych potrzebujesz specjalistycznych wkrętów.

**Wkręty samowiercące WS/WSM:**

- **Przewiercalność do 12 mm** – samodzielnie przewiercają stal
- **Łeb sześciokątny** – pewny chwyt klucza
- **Podkładka EPDM** – gwarantuje szczelność
- **Wersje malowane WSM** – kolory RAL

**Zastosowanie:**

- Blachy trapezowe do konstrukcji stalowych hal
- Płyty warstwowe
- Elementy fasadowe

Używaj wkrętarki o odpowiedniej mocy.`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 18,
    title: "Dlaczego podkładka EPDM jest kluczowa dla szczelności dachu?",
    slug: "podkladka-epdm-szczelnosc",
    category: "Dachy",
    excerpt: "Rola podkładki EPDM w uszczelnieniu dachu.",
    content: `Podkładka EPDM to kluczowy element uszczelniający.

**Funkcje podkładki EPDM:**

1. **Szczelność** – tworzy elastyczne uszczelnienie
2. **Odporność na UV** – od -40°C do +100°C
3. **Amortyzacja** – kompensuje ruchy termiczne blachy
4. **Ochrona przed korozją galwaniczną** – izoluje metal

**Wskazówki montażowe:**

- Używaj wkrętów z fabryczną podkładką
- Dokręcaj z odpowiednią siłą
- Kontroluj stan po silnych wiatrach

Inwestycja w jakość to inwestycja w spokój.`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 19,
    title: "Wiertła do zadań specjalnych – jak wiercić w gresie?",
    slug: "wiertle-gres-ceramika",
    category: "Narzędzia",
    excerpt: "Specjalistyczne wiertła do gresu i ceramiki.",
    content: `Wiercenie w gresie i ceramike wymaga specjalistycznych wierteł.

**Rodzaje wierteł:**

1. **Wiertła koronkowe z diamentem (SGP)**
   - Do gresu, ceramiki, kamienia
   - Wiertło otwornicze z diamentowym nasypem
   - Praca na mokro lub sucho

2. **Wiertła SCS ( widia )**
   - Do ceramiki i glazury
   - Końcówka z węglika spiekanego
   - Niższa cena niż diamentowe

**Wskazówki:**

- Używaj niskich obrotów
- Nie dociskaj zbyt mocno
- Pracuj bez udaru`,
    date: "2026-04-21",
    readTime: 5
  },
  {
    id: 20,
    title: "Jak wybrać odpowiedni wiertło do każdego materiału?",
    slug: "wiertla-dobór-materiał",
    category: "Narzędzia",
    excerpt: "Praktyczny przewodnik doboru wierteł.",
    content: `Dobór wiertła zależy od materiału, w którym wiercisz.

**Rodzaje wierteł:**

1. **Do drewna**
   - Płaskie (forstner)
   - Spiralne
   - Do drewna twardego i miękkiego

2. **Do metalu**
   - Spiralne HSS
   - Pokryte kobaltem (do stali nierdzewnej)

3. **Do betonu i muru**
   - SDS-plus (udarowe)
   - SDS-max (ciężkie prace)

4. **Do szkła i ceramiki**
   - Wiertła diamentowe
   - Wiertła widia

**Wskazówka:** Zawsze dopasuj wiertło do materiału!`,
    date: "2026-04-21",
    readTime: 5
  }
];
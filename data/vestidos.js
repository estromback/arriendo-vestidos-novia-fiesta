// Catálogo de vestidos y accesorios para arriendo
// Élégance Atelier — Novias, Gala & Fiesta

const DRESSES_DATA = [
  // =================== NOVIAS ===================
  {
    id: "nov-01",
    name: "Aura Celestial",
    category: "novias",
    categoryLabel: "Vestido de Novia",
    tag: "Exclusivo",
    priceRental: 390000,
    priceRentalFormatted: "$390.000",
    priceRetail: 1850000,
    priceRetailFormatted: "$1.850.000",
    securityDeposit: "$120.000",
    sizes: ["S", "M"],
    color: "Blanco Marfil / Ivory",
    silhouette: "Sirena / Corte Trompeta",
    neckline: "Corazón profundo con ilusión",
    fabric: "Encaje Chantilly francés y tul bordado con microcristales",
    length: "Largo con cola catedral desmontable (1.8m)",
    rentalPeriod: "4 días (Jueves a Lunes)",
    includedServices: ["Tintorería premium post-evento", "Ajuste de basta y entalle básico", "Funda portatraje y percha de terciopelo"],
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Una obra de arte nupcial para novias que buscan elegancia escultórica. Su corsetería interna define la silueta a la perfección, mientras el delicado encaje Chantilly dibuja bordados botánicos sobre una base de organza traslúcida.",
    measurements: {
      busto: "86 - 92 cm",
      cintura: "66 - 72 cm",
      cadera: "92 - 98 cm",
      estatura: "Hasta 1.78m con tacones"
    },
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 14
  },
  {
    id: "nov-02",
    name: "Monique Imperial",
    category: "novias",
    categoryLabel: "Vestido de Novia",
    tag: "Más Cotizado",
    priceRental: 420000,
    priceRentalFormatted: "$420.000",
    priceRetail: 2100000,
    priceRetailFormatted: "$2.100.000",
    securityDeposit: "$140.000",
    sizes: ["XS", "S", "M", "L"],
    color: "Blanco Natural",
    silhouette: "Princesa Real",
    neckline: "Barco clásico / Espalda en V abotonada",
    fabric: "Mikado de seda de alto gramaje con caída regia",
    length: "Largo majestuoso con cola real",
    rentalPeriod: "4 días (Jueves a Lunes)",
    includedServices: ["Tintorería premium post-evento", "Ajustes de modistería incluidos", "Funda portatraje"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "La cumbre de la elegancia atemporal. Su estructura impecable en mikado de seda confiere un porte majestuoso, incorporando bolsillos laterales ocultos que aportan modernidad y comodidad para tu gran día.",
    measurements: {
      busto: "84 - 96 cm (regulable)",
      cintura: "64 - 78 cm",
      cadera: "Libre (falda con volumen)",
      estatura: "Ajustable a medida"
    },
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 19
  },
  {
    id: "nov-03",
    name: "Bohemia Valparaíso",
    category: "novias",
    categoryLabel: "Vestido de Novia",
    tag: "Estilo Boho",
    priceRental: 320000,
    priceRentalFormatted: "$320.000",
    priceRetail: 1450000,
    priceRetailFormatted: "$1.450.000",
    securityDeposit: "$100.000",
    sizes: ["S", "M"],
    color: "Blanco Cáscara de Huevo / Nude",
    silhouette: "Evasé / Línea A fluida",
    neckline: "Escote en V profundo con espalda abierta",
    fabric: "Gasa de seda natural, encaje guipur y mangas aladas",
    length: "Largo fluido sin cola pesada",
    rentalPeriod: "4 días (Jueves a Lunes)",
    includedServices: ["Tintorería ecológica", "Entalle personalizado", "Funda de viaje"],
    image: "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Diseñado para bodas al aire libre, playas o viñedos. Ligereza absoluta, movimiento etéreo y detalles de encaje rústico refinado que te permitirán bailar toda la noche con total libertad.",
    measurements: {
      busto: "85 - 90 cm",
      cintura: "65 - 71 cm",
      cadera: "90 - 97 cm",
      estatura: "Hasta 1.75m"
    },
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 9
  },
  {
    id: "nov-04",
    name: "Lumière Minimalist",
    category: "novias",
    categoryLabel: "Vestido de Novia / Civil",
    tag: "Civil & Elegante",
    priceRental: 280000,
    priceRentalFormatted: "$280.000",
    priceRetail: 1200000,
    priceRetailFormatted: "$1.200.000",
    securityDeposit: "$90.000",
    sizes: ["XS", "S", "M", "L"],
    color: "Blanco Perla",
    silhouette: "Columna recta contemporánea",
    neckline: "Halter cruzado en cuello con espalda descubierta",
    fabric: "Crepé georgette pesado con forro de seda stretch",
    length: "Largo al piso con pequeña cola de arrastre",
    rentalPeriod: "4 días",
    includedServices: ["Tintorería post-evento", "Ajuste de basta", "Percha y portatraje"],
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "El favorito de las novias de matrimonio civil y amantes del minimalismo de los 90s. Líneas puras, caída líquida y una espalda espectacular que no necesita adornos para deslumbrar.",
    measurements: {
      busto: "82 - 94 cm",
      cintura: "62 - 76 cm",
      cadera: "88 - 100 cm",
      estatura: "Ajustable"
    },
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 11
  },

  // =================== GALA & MADRINAS ===================
  {
    id: "gal-01",
    name: "Zafiro Real Couture",
    category: "gala",
    categoryLabel: "Vestido de Gala & Madrinas",
    tag: "Alta Costura",
    priceRental: 95000,
    priceRentalFormatted: "$95.000",
    priceRetail: 480000,
    priceRetailFormatted: "$480.000",
    securityDeposit: "$45.000",
    sizes: ["S", "M", "L"],
    color: "Azul Medianoche / Royal Navy",
    silhouette: "Corte Evasé con Capa Fluida",
    neckline: "Asimétrico con hombrera joya",
    fabric: "Gasa de chifón plisada a mano y crepé premium",
    length: "Largo de gala",
    rentalPeriod: "4 días (Retiro jueves, devolución lunes)",
    includedServices: ["Lavado en seco profesional", "Ajuste de bastas", "Portatraje"],
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "El vestido definitivo para madrinas y galas solemnes. La capa posterior añade una presencia escénica regia que se mueve suavemente al caminar, ideal para eventos de etiqueta rigurosa.",
    measurements: {
      busto: "88 - 98 cm",
      cintura: "68 - 80 cm",
      cadera: "94 - 106 cm",
      estatura: "Hasta 1.76m"
    },
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 22
  },
  {
    id: "gal-02",
    name: "Borgoña Imperial",
    category: "gala",
    categoryLabel: "Vestido de Gala",
    tag: "Top Ventas",
    priceRental: 88000,
    priceRentalFormatted: "$88.000",
    priceRetail: 420000,
    priceRetailFormatted: "$420.000",
    securityDeposit: "$40.000",
    sizes: ["XS", "S", "M"],
    color: "Vino Tinto / Burgundy Intenso",
    silhouette: "Sirena con drapeado lateral",
    neckline: "Strapless estructurado con ballenas",
    fabric: "Satén duquesa de brillo aterciopelado",
    length: "Largo al piso con abertura discreta",
    rentalPeriod: "4 días",
    includedServices: ["Tintorería incluida", "Ajuste en busto", "Portatraje"],
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Color y textura que imponen respeto y glamour. El corsé interno esculpe el torso mientras la falda en satén duquesa cae en pliegues pesados y suntuosos.",
    measurements: {
      busto: "82 - 92 cm",
      cintura: "62 - 72 cm",
      cadera: "88 - 98 cm",
      estatura: "Ajustable"
    },
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 16
  },
  {
    id: "gal-03",
    name: "Esmeralda Aristocrática",
    category: "gala",
    categoryLabel: "Vestido de Gala & Madrinas",
    tag: "Novedad",
    priceRental: 92000,
    priceRentalFormatted: "$92.000",
    priceRetail: 450000,
    priceRetailFormatted: "$450.000",
    securityDeposit: "$45.000",
    sizes: ["M", "L", "XL"],
    color: "Verde Esmeralda Profundo",
    silhouette: "Línea A con mangas tres cuartos en gasa",
    neckline: "En V cruzado favorecedor",
    fabric: "Crepé pesado con pedrería sutil en cintura",
    length: "Largo sobrio",
    rentalPeriod: "4 días",
    includedServices: ["Lavado profesional", "Ajustes de modistería", "Portatraje"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Diseño refinado ideal para madres de la novia o novio. Su corte envuelve el cuerpo con comodidad insuperable, destacando por su tono verde joya que favorece a todas las pieles.",
    measurements: {
      busto: "92 - 106 cm",
      cintura: "74 - 90 cm",
      cadera: "98 - 114 cm",
      estatura: "Ajustable"
    },
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 12
  },
  {
    id: "gal-04",
    name: "Champagne Royale",
    category: "gala",
    categoryLabel: "Vestido de Gala",
    tag: "Brillo Sutil",
    priceRental: 110000,
    priceRentalFormatted: "$110.000",
    priceRetail: 590000,
    priceRetailFormatted: "$590.000",
    securityDeposit: "$50.000",
    sizes: ["S", "M"],
    color: "Champagne Dorado & Oro Rosa",
    silhouette: "Princesa moderna",
    neckline: "Corazón con tirantes de perlas",
    fabric: "Tul bordado con hilos metálicos y lentejuelas mate",
    length: "Largo de noche",
    rentalPeriod: "4 días",
    includedServices: ["Tintorería", "Entalle", "Portatraje"],
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Atrapa la luz con una calidez inigualable. El corpiño bordado a mano con miles de microcristales refleja un resplandor dorado sutil, complementado por una falda de tul multicapa suave.",
    measurements: {
      busto: "86 - 94 cm",
      cintura: "66 - 74 cm",
      cadera: "Libre",
      estatura: "Hasta 1.77m"
    },
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 8
  },

  // =================== FIESTA & GRADUACIONES ===================
  {
    id: "fie-01",
    name: "Aurora Crimson",
    category: "fiesta",
    categoryLabel: "Vestido de Fiesta & Graduación",
    tag: "Sensación",
    priceRental: 52000,
    priceRentalFormatted: "$52.000",
    priceRetail: 240000,
    priceRetailFormatted: "$240.000",
    securityDeposit: "$30.000",
    sizes: ["XS", "S", "M"],
    color: "Rojo Carmesí Brillante",
    silhouette: "Slip Dress Entallado",
    neckline: "Escote drapeado Cowl Neck con tirantes spaguetti",
    fabric: "Satén de seda italiano con caída líquida",
    length: "Largo al tobillo con abertura lateral pronunciada",
    rentalPeriod: "4 días",
    includedServices: ["Tintorería post-evento", "Funda protectora"],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Impacto visual absoluto. La espalda descubierta cruzada con tirantes ultradelgados y la abertura de pierna crean un efecto estilizador y audaz, perfecto para galas de graduación e invitadas de boda.",
    measurements: {
      busto: "82 - 90 cm",
      cintura: "60 - 70 cm",
      cadera: "88 - 96 cm",
      estatura: "Ajustable"
    },
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 31
  },
  {
    id: "fie-02",
    name: "Midnight Siren",
    category: "fiesta",
    categoryLabel: "Vestido de Fiesta",
    tag: "Básico Chic",
    priceRental: 48000,
    priceRentalFormatted: "$48.000",
    priceRetail: 210000,
    priceRetailFormatted: "$210.000",
    securityDeposit: "$25.000",
    sizes: ["XS", "S", "M", "L"],
    color: "Negro Ónix con Destellos",
    silhouette: "Tubo ajustado / Bodycon elegante",
    neckline: "Cuello halter alto con espalda libre",
    fabric: "Punto de crepé elastizado con microhilos de lúrex",
    length: "Largo completo",
    rentalPeriod: "4 días",
    includedServices: ["Tintorería incluida", "Portatraje"],
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "El 'little black dress' elevado a su máxima potencia de noche. Tela que moldea y estiliza la figura con total elasticidad y comodidad para disfrutar de principio a fin.",
    measurements: {
      busto: "80 - 96 cm",
      cintura: "60 - 78 cm",
      cadera: "86 - 104 cm",
      estatura: "Se adapta a diferentes alturas"
    },
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 15
  },
  {
    id: "fie-03",
    name: "Verde Botánico Glow",
    category: "fiesta",
    categoryLabel: "Vestido de Fiesta / Matrimonio de Día",
    tag: "Tendencia",
    priceRental: 46000,
    priceRentalFormatted: "$46.000",
    priceRetail: 195000,
    priceRetailFormatted: "$195.000",
    securityDeposit: "$25.000",
    sizes: ["S", "M", "L"],
    color: "Verde Sabia / Olivo",
    silhouette: "Evasé envolvente con lazo en cintura",
    neckline: "V cruzado",
    fabric: "Satén sedoso con acabado mate",
    length: "Largo midi asimétrico",
    rentalPeriod: "4 días",
    includedServices: ["Tintorería incluida", "Funda"],
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Fresco, moderno y sumamente favorecedor. Es la elección perfecta para matrimonios de día en jardines, viñedos o celebraciones de cóctel.",
    measurements: {
      busto: "84 - 98 cm",
      cintura: "64 - 82 cm (regulable)",
      cadera: "90 - 106 cm",
      estatura: "Todas las estaturas"
    },
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 14
  },
  {
    id: "fie-04",
    name: "Magenta Pop Star",
    category: "fiesta",
    categoryLabel: "Vestido de Fiesta & Graduación",
    tag: "Color Block",
    priceRental: 54000,
    priceRentalFormatted: "$54.000",
    priceRetail: 250000,
    priceRetailFormatted: "$250.000",
    securityDeposit: "$30.000",
    sizes: ["XS", "S", "M"],
    color: "Fucsia Magenta Vibrante",
    silhouette: "Corte columna con cola ligera",
    neckline: "Hombro caído con lazo escultural",
    fabric: "Tafetán de seda con memoria de forma",
    length: "Largo al piso",
    rentalPeriod: "4 días",
    includedServices: ["Tintorería incluida", "Portatraje"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Para no pasar desapercibida. Su tono fucsia vibrante aporta energía y juventud, mientras su diseño asimétrico con lazo aporta la dosis justa de drama y distinción.",
    measurements: {
      busto: "84 - 92 cm",
      cintura: "64 - 72 cm",
      cadera: "90 - 98 cm",
      estatura: "Hasta 1.76m"
    },
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 18
  },
  {
    id: "fie-05",
    name: "Rosa Empolvado Romancée",
    category: "fiesta",
    categoryLabel: "Vestido de Fiesta / Graduación",
    tag: "Dulce Elegancia",
    priceRental: 49000,
    priceRentalFormatted: "$49.000",
    priceRetail: 220000,
    priceRetailFormatted: "$220.000",
    securityDeposit: "$25.000",
    sizes: ["S", "M", "L"],
    color: "Rosa Palo / Dusty Rose",
    silhouette: "Falda A con vuelo en tul plisado",
    neckline: "Escote corazón con bordados florales tono sobre tono",
    fabric: "Gasa plisada y tul bordado",
    length: "Largo de fiesta",
    rentalPeriod: "4 días",
    includedServices: ["Lavado profesional", "Portatraje"],
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Elegancia delicada y femenina. Los plisados de la falda bailan con cada paso, convirtiéndolo en uno de los modelos más solicitados para graduaciones escolares y universitarias.",
    measurements: {
      busto: "86 - 96 cm",
      cintura: "66 - 76 cm",
      cadera: "Libre",
      estatura: "Ajustable"
    },
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 20
  },
  {
    id: "fie-06",
    name: "Golden Hour Glow",
    category: "fiesta",
    categoryLabel: "Vestido de Fiesta / Gala Corta",
    tag: "Fiesta Noche",
    priceRental: 45000,
    priceRentalFormatted: "$45.000",
    priceRetail: 180000,
    priceRetailFormatted: "$180.000",
    securityDeposit: "$25.000",
    sizes: ["XS", "S", "M"],
    color: "Dorado Bronce Satinado",
    silhouette: "Mini / Midi envolvente",
    neckline: "Cruzado en V",
    fabric: "Satén gloss",
    length: "Largo midi a media pantorrilla",
    rentalPeriod: "4 días",
    includedServices: ["Tintorería incluida", "Funda"],
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Brillo cálido que ilumina en fotos y bailes. Su largo midi estiliza las piernas y permite lucir tus mejores tacones o sandalias joya.",
    measurements: {
      busto: "82 - 92 cm",
      cintura: "62 - 74 cm",
      cadera: "88 - 98 cm",
      estatura: "Ideal para todas las alturas"
    },
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 7
  },

  // =================== ACCESORIOS ===================
  {
    id: "acc-01",
    name: "Velo Catedral Royal",
    category: "accesorios",
    categoryLabel: "Accesorio Nupcial",
    tag: "Exclusivo Novia",
    priceRental: 35000,
    priceRentalFormatted: "$35.000",
    priceRetail: 190000,
    priceRetailFormatted: "$190.000",
    securityDeposit: "$20.000",
    sizes: ["Única (3 metros)"],
    color: "Blanco Marfil",
    silhouette: "Velo largo catedral",
    neckline: "Peineta de fijación en baño de plata",
    fabric: "Tul de seda ilusión con orilla festoneada en encaje chantilly",
    length: "3.2 metros de caída",
    rentalPeriod: "4 días",
    includedServices: ["Planchado al vapor profesional", "Caja rígida protectora"],
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "El complemento soñado para la entrada triunfal de la novia. Confeccionado en tul ilusión de seda ultrasuave que no se arruga y enmarca las fotos con un aire cinematográfico.",
    measurements: {
      longitud: "320 cm",
      ancho: "210 cm",
      fijacion: "Peineta metálica de sujeción segura"
    },
    isFeatured: false,
    rating: 5.0,
    reviewsCount: 17
  },
  {
    id: "acc-02",
    name: "Tocado Cristal & Perlas de Río",
    category: "accesorios",
    categoryLabel: "Accesorio / Tocados",
    tag: "Artesanal",
    priceRental: 24000,
    priceRentalFormatted: "$24.000",
    priceRetail: 110000,
    priceRetailFormatted: "$110.000",
    securityDeposit: "$15.000",
    sizes: ["Ajustable"],
    color: "Oro Rosa con Perlas Naturales",
    silhouette: "Guía flexible para cabello",
    neckline: "Compatible con recogidos y pelo suelto",
    fabric: "Alambre de cobre bañado en oro rosa, cristales checos y perlas cultivadas",
    length: "28 cm de largo adaptable",
    rentalPeriod: "4 días",
    includedServices: ["Esterilización y pulido", "Estuche aterciopelado"],
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Hecho a mano por orfebres especializados en novias. Su estructura flexible permite trenzarlo en semi-recogidos, moños bajos o usarlo como diadema lateral.",
    measurements: {
      longitud: "28 cm",
      peso: "Ultraligero (45g)"
    },
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 13
  },
  {
    id: "acc-03",
    name: "Clutch Joya Nácar & Dorado",
    category: "accesorios",
    categoryLabel: "Accesorio / Carteras de Fiesta",
    tag: "Imprescindible",
    priceRental: 18000,
    priceRentalFormatted: "$18.000",
    priceRetail: 85000,
    priceRetailFormatted: "$85.000",
    securityDeposit: "$15.000",
    sizes: ["Mediano"],
    color: "Nácar Perlado con Marco Dorado",
    silhouette: "Caja rígida minaudière",
    neckline: "Broche de piedra facetada",
    fabric: "Resina con efecto nácar y herrajes metálicos dorados",
    length: "20cm x 12cm x 5cm (cabe iPhone Pro Max)",
    rentalPeriod: "4 días",
    includedServices: ["Limpieza y desinfección", "Cadena larga desmontable"],
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "El bolso de mano que eleva cualquier vestido de gala o fiesta. Cuenta con interior forrado en satén, broche magnético de alta seguridad y cadena dorada para llevar al hombro.",
    measurements: {
      dimensiones: "20 x 12 x 5.5 cm",
      capacidad: "Celular, labial, llaves y documentos"
    },
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 25
  }
];

// Testimonios reales de clientas
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Camila Valenzuela",
    role: "Novia (Matrimonio en Pirque)",
    dress: "Vestido Monique Imperial",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "Arrendar mi vestido en Élégance Atelier fue la mejor decisión de toda la boda. La prueba fue una experiencia hermosa con copa de espumante para mi mamá y hermana. El ajuste de modistería me quedó como hecho a la medida, y la devolución fue comodísima.",
    stars: 5,
    date: "Enero 2026"
  },
  {
    id: 2,
    name: "Valentina Errázuriz",
    role: "Madrina de Matrimonio",
    dress: "Vestido Zafiro Real Couture",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    text: "Tenía que ser madrina en CasaPiedra y no quería gastarme $500.000 en un vestido que no volvería a usar. Arrendé el modelo Zafiro Real por menos de $100.000 con tintorería incluida. Me llenaron de elogios en toda la fiesta.",
    stars: 5,
    date: "Marzo 2026"
  },
  {
    id: 3,
    name: "Francisca Silva",
    role: "Graduada de Ingeniería UC",
    dress: "Vestido Aurora Crimson",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    text: "El rojo carmesí en mi gala de titulación fue un sueño. La tela tiene una caída increíble que te estiliza mucho. Además, el servicio de atención por WhatsApp es súper rápido y me ayudaron a coordinar la hora de prueba enseguida.",
    stars: 5,
    date: "Diciembre 2025"
  }
];

// Preguntas frecuentes
const FAQ_DATA = [
  {
    question: "¿Cómo funciona el proceso de arriendo y cuántos días dura?",
    answer: "El arriendo estándar incluye 4 días consecutivos (por ejemplo, retiras el jueves o viernes y devuelves el lunes siguiente). Si necesitas días adicionales por viaje a regiones o destino, contamos con tarifas especiales por día extra."
  },
  {
    question: "¿El servicio incluye la tintorería después del evento?",
    answer: "¡Sí, 100%! Una de nuestras mayores ventajas es que tú solo disfrutas tu fiesta. El vestido se devuelve sin lavar y nuestro equipo de tintorería especializada en alta costura se encarga de dejarlo impecable."
  },
  {
    question: "¿Puedo realizar ajustes de modistería a mi talla?",
    answer: "Por supuesto. Contamos con modistas en nuestro showroom que realizan entalles temporales de basta, ajuste de tirantes o contorno de busto sin cortar la tela original, asegurando que te quede como un guante sin dañar la prenda."
  },
  {
    question: "¿Cómo y cuándo se cancela la garantía?",
    answer: "La garantía o depósito de seguridad se deja al momento de retirar el vestido (vía transferencia bancaria o tarjeta). Al devolver el vestido en las condiciones pactadas, la garantía se te transfiere de vuelta de forma íntegra en un plazo máximo de 24 horas hábiles."
  },
  {
    question: "¿Con cuánta anticipación debo reservar mi vestido?",
    answer: "Para vestidos de novia, recomendamos agendar tu prueba y reservar con 2 a 4 meses de anticipación. Para vestidos de fiesta, galas y graduaciones, 2 a 6 semanas antes de tu evento es el tiempo ideal para asegurar la disponibilidad de tu diseño favorito."
  },
  {
    question: "¿Puedo agendar una cita para ir a probarme con acompañantes?",
    answer: "¡Claro que sí! Nuestras citas en el showroom son privadas y personalizadas por 50 minutos. Puedes venir con hasta 2 acompañantes para compartir este momento especial con un café o copa de bienvenida."
  }
];

// Aruba Wakeboard School — language switcher (English / Nederlands / Español).
// English is the default; a visitor's choice is remembered in localStorage.

const AWS_LANGS = ['en', 'nl', 'es'];
const AWS_DEFAULT_LANG = 'en';

const AWS_I18N = {
  en: {
    doc_title: `Aruba Wakeboard School — The one and only wakeboard school on the island`,
    meta_desc: `Aruba Wakeboard School (AWS), founded 2008 in Oranjestad. Wakeboard, waterski, wakeskate, kneeboard, barefoot and hydrofoil lessons for all levels. 30-minute sessions, $50 per person. Open weekends.`,

    nav_menu: `Menu`,
    nav_lessons: `Lessons`,
    nav_how: `How it works`,
    nav_reviews: `Reviews`,
    nav_pricing: `Pricing`,
    nav_faq: `FAQ`,
    btn_book: `Book a session`,

    hero_location: `Bucutiweg, Oranjestad · Aruba`,
    hero_h1: `<em>The</em> wakeboard school on the island`,
    hero_lede: `Founded in 2008, Aruba Wakeboard School (AWS) runs private lessons in the calm, warm water off Oranjestad. First-timers to advanced riders — head instructor Edirik gets you up and riding in a single 30-minute session. The place to push your limits.`,
    hero_cta_options: `See lesson options`,
    hero_note: `30-minute sessions · $50 per person · Open Saturdays & Sundays`,

    why_label: `Why ride with us`,
    why_1: `Since 2008`,
    why_2: `5.0 on Tripadvisor`,
    why_3: `Flat-water bay`,
    why_4: `All levels`,
    why_5: `MasterCraft boat`,
    why_6: `Local crew`,

    feat_head_h2: `Lessons for every level`,
    feat_head_p: `Whether you've never touched a board or you're dialing in your first invert.`,
    feat_1_h: `First-timers`,
    feat_1_p: `Land your first ride. We cover body position, the deep-water start, and edging — most people are up within their first 30-minute session.`,
    feat_2_h: `Intermediate instruction`,
    feat_2_p: `Carving, jumping the wake, and toeside riding, with hands-on correction between every set.`,
    feat_3_h: `Advanced & tricks`,
    feat_3_p: `Wake-to-wake jumps, grabs, spins, flips, and inverts with an instructor who rides at that level.`,
    feat_4_h: `More than wakeboarding`,
    feat_4_p: `We also instruct waterski, wakeskate, kneeboard, barefoot, and hydrofoil. Try something new on the same session.`,
    feat_5_h: `MasterCraft & gear included`,
    feat_5_p: `We pull behind a MasterCraft X-Star, with a full range of boards and Coast Guard-approved vests in every size.`,
    feat_6_h: `Family & groups`,
    feat_6_p: `Bring the crew. We rotate riders through the boat so everyone gets water time and shade in between.`,

    how_head_h2: `How a session works`,
    how_head_p: `From booking to riding in three easy steps.`,
    how_1_h: `Message us to book`,
    how_1_p: `We ride Saturdays and Sundays, roughly 9am to 6pm. Send us a WhatsApp or email with the day and time you'd like.`,
    how_2_h: `Meet us at Bucutiweg`,
    how_2_p: `Find us at Bucutiweg, Oranjestad — search <strong>"Pure Diving Aruba"</strong> on Google Maps. Just bring swimwear, sunscreen, and a towel.`,
    how_3_h: `Get on the water`,
    how_3_p: `Short briefing on the boat, then you're riding for your 30-minute session. Instruction continues between every set.`,

    rev_head_h2: `Riders love it here`,
    rev_head_p: `Rated <strong>5.0 / 5</strong> from <strong>118 reviews</strong> on Tripadvisor — first-timers and competitive riders alike.`,
    stars_al: `Rated 5 out of 5`,
    rev_1_p: `"Most other places just wanted your money and didn't care about you. AWS is different. He will teach you tricks that bring you to a higher level. I would recommend Aruba Wakeboard School to anyone without a doubt."`,
    rev_1_f: `kocoland · Granby, Canada`,
    rev_2_p: `"Not only do you actually learn how to wakeboard effectively, you'll have tons of fun at the same time. You won't find a better place to wakeboard on the island."`,
    rev_2_f: `Cincyxile · Rotterdam, Netherlands`,
    rev_3_p: `"I travel a lot for wakeboarding and also do competitions. Edirik really understands the sport and gave me super tips that made me land a new trick. Highly recommend it for beginners and advanced riders."`,
    rev_3_f: `Frog900 · visiting rider`,
    rev_4_p: `"Edirik was absolutely amazing. He guided us every step of the way and made us feel comfortable from start to finish."`,
    rev_4_f: `Anais M. · recent visitor`,
    rev_cta: `Read all 118 reviews on Tripadvisor`,

    price_head_h2: `Sessions & pricing`,
    price_head_p: `All sessions are 30 minutes on the water. Boat, boards, vests, and fuel included.`,
    plan_badge: `Most booked`,
    price_unit: `/ person`,
    plan1_h: `Single Session`,
    plan1_desc: `One 30-minute ride with an instructor.`,
    plan1_li1: `30 minutes on the water`,
    plan1_li2: `1-on-1 instruction`,
    plan1_li3: `Boards & vests included`,
    plan1_li4: `Great for first-timers`,
    plan2_h: `3-Session Pack`,
    plan2_desc: `Save $15 — great for building real progress.`,
    plan2_li1: `Three 30-minute sessions`,
    plan2_li2: `1-on-1 instruction each session`,
    plan2_li3: `All gear included`,
    plan2_li4: `Build real progress week to week`,
    plan2_btn: `Book the pack`,
    plan3_h: `Group / Family`,
    plan3_desc: `Bring the crew — everyone gets their own 30 minutes.`,
    plan3_li1: `30 minutes on the water each`,
    plan3_li2: `Rotating turns for the group`,
    plan3_li3: `All gear & sizes included`,
    plan3_li4: `Shade and seating between turns`,
    plan3_btn: `Book for a group`,

    faq_head_h2: `Good to know`,
    faq_q1: `Do I need any experience?`,
    faq_a1: `None at all. Edirik has taught first-timers since 2008, and most people are up and riding within their first session. If you can swim and follow a few cues, you can wakeboard.`,
    faq_q2: `When are you open?`,
    faq_a2: `Saturdays and Sundays, roughly 9am to 6pm. Message us to lock in a slot — weekends fill up in high season.`,
    faq_q3: `Where do we meet?`,
    faq_a3: `We're at Bucutiweg in Oranjestad, Aruba. On Google Maps, search for <strong>"Pure Diving Aruba"</strong> — that's our spot. We'll send a pin and parking info when you book.`,
    faq_q4: `What should I bring?`,
    faq_a4: `Swimwear, reef-safe sunscreen, a towel, and water. We provide boards, vests, and everything else. Leave phones and valuables on shore or in our dry bag.`,
    faq_q5: `What if the weather is bad?`,
    faq_a5: `Aruba is dry and windy but rarely un-rideable. If conditions aren't safe we reschedule or refund in full — no questions asked.`,
    faq_q6: `Is there an age or weight limit?`,
    faq_a6: `Riders from about age 8 and up. No upper limit — we instruct plenty of adults trying it for the first time. Contact us if you're unsure.`,

    social_h2: `See the latest from the water`,
    social_p: `News, conditions, and updates go up on our Facebook page first — and it's the quickest way to reach us with a question.`,
    social_fb: `Open our Facebook page`,
    social_ta: `See us on Tripadvisor`,
    fb_note: `Feed not showing? <a href="https://www.facebook.com/297AWS">Open it on Facebook →</a>`,

    cta_h2: `Ready to get on the water?`,
    cta_p: `Send us your dates and we'll confirm a time. The fastest way to reach us is WhatsApp.`,
    cta_email: `Email us`,
    email_label: `Your email`,
    email_ph: `you@email.com`,
    cta_submit: `Request a callback`,

    foot_tagline: `The one and only wakeboard school on Aruba. Founded 2008, Oranjestad.`,
    foot_explore: `Explore`,
    foot_contact: `Contact`,
    foot_findus: `Find us`,
    foot_maps2: `"Pure Diving Aruba" on Maps`,
    foot_hours: `Open Sat & Sun, 9am–6pm`,
    foot_rights: `Aruba Wakeboard School (AWS). All rights reserved.`,

    form_invalid: `Please enter a valid email address.`,
    form_thanks: `Thanks! We'll get back to {email} to sort out a time.`,
  },

  nl: {
    doc_title: `Aruba Wakeboard School — Dé wakeboardschool van het eiland`,
    meta_desc: `Aruba Wakeboard School (AWS), opgericht in 2008 in Oranjestad. Lessen wakeboard, waterski, wakeskate, kneeboard, barefoot en hydrofoil voor alle niveaus. Sessies van 30 minuten, $50 per persoon. Open in het weekend.`,

    nav_menu: `Menu`,
    nav_lessons: `Lessen`,
    nav_how: `Zo werkt het`,
    nav_reviews: `Reviews`,
    nav_pricing: `Prijzen`,
    nav_faq: `FAQ`,
    btn_book: `Boek een sessie`,

    hero_location: `Bucutiweg, Oranjestad · Aruba`,
    hero_h1: `<em>Dé</em> wakeboardschool van het eiland`,
    hero_lede: `Aruba Wakeboard School (AWS) bestaat sinds 2008 en geeft privélessen in het rustige, warme water voor de kust van Oranjestad. Van complete beginners tot gevorderden — hoofdinstructeur Edirik krijgt je in één sessie van 30 minuten op het board. Dé plek om je grenzen te verleggen.`,
    hero_cta_options: `Bekijk de lesopties`,
    hero_note: `Sessies van 30 minuten · $50 per persoon · Open op zaterdag en zondag`,

    why_label: `Waarom kiezen voor ons`,
    why_1: `Sinds 2008`,
    why_2: `5,0 op Tripadvisor`,
    why_3: `Vlakke baai`,
    why_4: `Alle niveaus`,
    why_5: `MasterCraft-boot`,
    why_6: `Lokale crew`,

    feat_head_h2: `Lessen voor elk niveau`,
    feat_head_p: `Of je nu nog nooit op een board hebt gestaan of je eerste invert wilt finetunen.`,
    feat_1_h: `Beginners`,
    feat_1_p: `Sta voor het eerst op het board. We behandelen lichaamshouding, de start vanuit diep water en edgen — de meeste mensen staan al binnen hun eerste sessie van 30 minuten.`,
    feat_2_h: `Instructie voor gevorderden`,
    feat_2_p: `Carven, over de wake springen en toeside rijden, met directe correctie tussen elke set door.`,
    feat_3_h: `Gevorderd & tricks`,
    feat_3_p: `Wake-to-wake sprongen, grabs, spins, flips en inverts met een instructeur die zelf op dat niveau rijdt.`,
    feat_4_h: `Meer dan wakeboarden`,
    feat_4_p: `We geven ook les in waterski, wakeskate, kneeboard, barefoot en hydrofoil. Probeer iets nieuws in dezelfde sessie.`,
    feat_5_h: `MasterCraft & materiaal inbegrepen`,
    feat_5_p: `We trekken je achter een MasterCraft X-Star, met een volledig aanbod boards en goedgekeurde zwemvesten in elke maat.`,
    feat_6_h: `Gezin & groepen`,
    feat_6_p: `Neem je hele groep mee. We wisselen de riders af in de boot, zodat iedereen tijd op het water heeft en schaduw ertussenin.`,

    how_head_h2: `Zo verloopt een sessie`,
    how_head_p: `Van boeking tot op het water in drie eenvoudige stappen.`,
    how_1_h: `Stuur ons een bericht`,
    how_1_p: `We varen op zaterdag en zondag, ongeveer van 9.00 tot 18.00 uur. Stuur ons een WhatsApp of e-mail met je gewenste dag en tijd.`,
    how_2_h: `Kom naar Bucutiweg`,
    how_2_p: `Je vindt ons aan de Bucutiweg in Oranjestad — zoek op <strong>"Pure Diving Aruba"</strong> in Google Maps. Neem alleen zwemkleding, zonnebrand en een handdoek mee.`,
    how_3_h: `Het water op`,
    how_3_p: `Korte uitleg in de boot en daarna rijd je je sessie van 30 minuten. Tussen elke set door blijf je instructie krijgen.`,

    rev_head_h2: `Riders zijn er weg van`,
    rev_head_p: `Beoordeeld met <strong>5,0 / 5</strong> op basis van <strong>118 reviews</strong> op Tripadvisor — van complete beginners tot wedstrijdriders.`,
    stars_al: `Beoordeeld met 5 van de 5`,
    rev_1_p: `"Bij de meeste andere plekken ging het alleen om je geld en niet om jou. AWS is anders. Hij leert je tricks die je naar een hoger niveau tillen. Ik zou Aruba Wakeboard School zonder twijfel aan iedereen aanraden."`,
    rev_1_f: `kocoland · Granby, Canada`,
    rev_2_p: `"Je leert niet alleen echt effectief wakeboarden, je hebt ondertussen ook enorm veel plezier. Een betere plek om te wakeboarden vind je niet op het eiland."`,
    rev_2_f: `Cincyxile · Rotterdam, Nederland`,
    rev_3_p: `"Ik reis veel om te wakeboarden en doe ook wedstrijden. Edirik begrijpt de sport echt en gaf me supertips waardoor ik een nieuwe trick landde. Een aanrader voor zowel beginners als gevorderden."`,
    rev_3_f: `Frog900 · rider op bezoek`,
    rev_4_p: `"Edirik was echt geweldig. Hij begeleidde ons bij elke stap en zorgde dat we ons van begin tot eind op ons gemak voelden."`,
    rev_4_f: `Anais M. · recente bezoeker`,
    rev_cta: `Lees alle 118 reviews op Tripadvisor`,

    price_head_h2: `Sessies & prijzen`,
    price_head_p: `Alle sessies zijn 30 minuten op het water. Boot, boards, zwemvesten en brandstof inbegrepen.`,
    plan_badge: `Meest geboekt`,
    price_unit: `/ persoon`,
    plan1_h: `Losse sessie`,
    plan1_desc: `Eén rit van 30 minuten met een instructeur.`,
    plan1_li1: `30 minuten op het water`,
    plan1_li2: `1-op-1 instructie`,
    plan1_li3: `Boards & zwemvesten inbegrepen`,
    plan1_li4: `Ideaal voor beginners`,
    plan2_h: `3-sessiepakket`,
    plan2_desc: `Bespaar $15 — ideaal om echt vooruitgang te boeken.`,
    plan2_li1: `Drie sessies van 30 minuten`,
    plan2_li2: `1-op-1 instructie per sessie`,
    plan2_li3: `Alle materiaal inbegrepen`,
    plan2_li4: `Week na week echte vooruitgang`,
    plan2_btn: `Boek het pakket`,
    plan3_h: `Groep / gezin`,
    plan3_desc: `Neem je groep mee — iedereen krijgt zijn eigen 30 minuten.`,
    plan3_li1: `30 minuten op het water per persoon`,
    plan3_li2: `De groep wisselt elkaar af`,
    plan3_li3: `Alle materiaal & maten inbegrepen`,
    plan3_li4: `Schaduw en zitplaatsen tussen de beurten`,
    plan3_btn: `Boek voor een groep`,

    faq_head_h2: `Goed om te weten`,
    faq_q1: `Heb ik ervaring nodig?`,
    faq_a1: `Helemaal niet. Edirik geeft sinds 2008 les aan complete beginners, en de meesten staan al binnen hun eerste sessie op het board. Als je kunt zwemmen en een paar aanwijzingen kunt opvolgen, kun je wakeboarden.`,
    faq_q2: `Wanneer zijn jullie open?`,
    faq_a2: `Op zaterdag en zondag, ongeveer van 9.00 tot 18.00 uur. Stuur ons een bericht om een plek vast te leggen — in het hoogseizoen zitten de weekenden snel vol.`,
    faq_q3: `Waar spreken we af?`,
    faq_a3: `We zitten aan de Bucutiweg in Oranjestad, Aruba. Zoek in Google Maps op <strong>"Pure Diving Aruba"</strong> — dat is onze plek. Bij je boeking sturen we een pin en parkeerinfo.`,
    faq_q4: `Wat moet ik meenemen?`,
    faq_a4: `Zwemkleding, rifvriendelijke zonnebrand, een handdoek en water. Boards, zwemvesten en de rest verzorgen wij. Laat telefoons en waardevolle spullen aan wal of doe ze in onze dry bag.`,
    faq_q5: `Wat als het weer slecht is?`,
    faq_a5: `Aruba is droog en winderig, maar het is zelden onmogelijk om te varen. Als de omstandigheden niet veilig zijn, plannen we opnieuw in of betalen we het volledige bedrag terug — zonder gedoe.`,
    faq_q6: `Is er een leeftijds- of gewichtslimiet?`,
    faq_a6: `Riders vanaf ongeveer 8 jaar. Geen bovengrens — we geven veel volwassenen les die het voor het eerst proberen. Neem contact op als je twijfelt.`,

    social_h2: `Het laatste van het water`,
    social_p: `Nieuws, weersomstandigheden en updates verschijnen als eerste op onze Facebookpagina — en het is de snelste manier om ons een vraag te stellen.`,
    social_fb: `Open onze Facebookpagina`,
    social_ta: `Bekijk ons op Tripadvisor`,
    fb_note: `Feed niet zichtbaar? <a href="https://www.facebook.com/297AWS">Open op Facebook →</a>`,

    cta_h2: `Klaar om het water op te gaan?`,
    cta_p: `Stuur ons je gewenste data en wij bevestigen een tijd. Via WhatsApp bereik je ons het snelst.`,
    cta_email: `Mail ons`,
    email_label: `Je e-mailadres`,
    email_ph: `jij@email.com`,
    cta_submit: `Laat je terugbellen`,

    foot_tagline: `De enige echte wakeboardschool van Aruba. Opgericht in 2008, Oranjestad.`,
    foot_explore: `Ontdek`,
    foot_contact: `Contact`,
    foot_findus: `Vind ons`,
    foot_maps2: `"Pure Diving Aruba" op Maps`,
    foot_hours: `Open za & zo, 9.00–18.00 uur`,
    foot_rights: `Aruba Wakeboard School (AWS). Alle rechten voorbehouden.`,

    form_invalid: `Voer een geldig e-mailadres in.`,
    form_thanks: `Bedankt! We nemen contact op via {email} om een tijd af te spreken.`,
  },

  es: {
    doc_title: `Aruba Wakeboard School — La escuela de wakeboard de la isla`,
    meta_desc: `Aruba Wakeboard School (AWS), fundada en 2008 en Oranjestad. Clases de wakeboard, esquí acuático, wakeskate, kneeboard, barefoot e hidrofoil para todos los niveles. Sesiones de 30 minutos, $50 por persona. Abierto los fines de semana.`,

    nav_menu: `Menú`,
    nav_lessons: `Clases`,
    nav_how: `Cómo funciona`,
    nav_reviews: `Reseñas`,
    nav_pricing: `Precios`,
    nav_faq: `Preguntas`,
    btn_book: `Reserva una sesión`,

    hero_location: `Bucutiweg, Oranjestad · Aruba`,
    hero_h1: `<em>La</em> escuela de wakeboard de la isla`,
    hero_lede: `Fundada en 2008, Aruba Wakeboard School (AWS) ofrece clases privadas en las aguas tranquilas y cálidas de Oranjestad. Desde principiantes hasta riders avanzados: el instructor principal, Edirik, te pone de pie sobre la tabla en una sola sesión de 30 minutos. El lugar para superar tus límites.`,
    hero_cta_options: `Ver opciones de clase`,
    hero_note: `Sesiones de 30 minutos · $50 por persona · Abierto sábados y domingos`,

    why_label: `Por qué elegirnos`,
    why_1: `Desde 2008`,
    why_2: `5,0 en Tripadvisor`,
    why_3: `Bahía de agua plana`,
    why_4: `Todos los niveles`,
    why_5: `Barco MasterCraft`,
    why_6: `Equipo local`,

    feat_head_h2: `Clases para todos los niveles`,
    feat_head_p: `Tanto si nunca has tocado una tabla como si estás puliendo tu primer invert.`,
    feat_1_h: `Principiantes`,
    feat_1_p: `Consigue tu primer ride. Trabajamos la postura, la salida en aguas profundas y el canteo: la mayoría se pone de pie en su primera sesión de 30 minutos.`,
    feat_2_h: `Clases intermedias`,
    feat_2_p: `Carving, saltar la estela y navegar de toeside, con correcciones directas entre cada tanda.`,
    feat_3_h: `Avanzado y trucos`,
    feat_3_p: `Saltos wake-to-wake, grabs, giros, flips e inverts con un instructor que rida a ese nivel.`,
    feat_4_h: `Más que wakeboard`,
    feat_4_p: `También damos clases de esquí acuático, wakeskate, kneeboard, barefoot e hidrofoil. Prueba algo nuevo en la misma sesión.`,
    feat_5_h: `MasterCraft y equipo incluidos`,
    feat_5_p: `Remolcamos con una MasterCraft X-Star, con una gama completa de tablas y chalecos homologados en todas las tallas.`,
    feat_6_h: `Familias y grupos`,
    feat_6_p: `Trae a todo el grupo. Rotamos a los riders en el barco para que todos tengan tiempo en el agua y sombra entre turnos.`,

    how_head_h2: `Cómo es una sesión`,
    how_head_p: `De la reserva al agua en tres pasos sencillos.`,
    how_1_h: `Escríbenos para reservar`,
    how_1_p: `Salimos sábados y domingos, aproximadamente de 9:00 a 18:00. Envíanos un WhatsApp o correo con el día y la hora que prefieras.`,
    how_2_h: `Nos vemos en Bucutiweg`,
    how_2_p: `Estamos en Bucutiweg, Oranjestad — busca <strong>"Pure Diving Aruba"</strong> en Google Maps. Solo trae bañador, protector solar y una toalla.`,
    how_3_h: `Al agua`,
    how_3_p: `Breve explicación en el barco y luego a montar durante tu sesión de 30 minutos. Seguimos dándote indicaciones entre cada tanda.`,

    rev_head_h2: `A los riders les encanta`,
    rev_head_p: `Valorada con <strong>5,0 / 5</strong> a partir de <strong>118 reseñas</strong> en Tripadvisor — desde principiantes hasta riders de competición.`,
    stars_al: `Valorado con 5 de 5`,
    rev_1_p: `"En la mayoría de los sitios solo querían tu dinero y no se preocupaban por ti. AWS es diferente. Te enseña trucos que te llevan a otro nivel. Recomendaría Aruba Wakeboard School a cualquiera sin dudarlo."`,
    rev_1_f: `kocoland · Granby, Canadá`,
    rev_2_p: `"No solo aprendes a hacer wakeboard de forma efectiva, sino que además te diviertes muchísimo. No encontrarás un lugar mejor para hacer wakeboard en la isla."`,
    rev_2_f: `Cincyxile · Róterdam, Países Bajos`,
    rev_3_p: `"Viajo mucho para hacer wakeboard y también compito. Edirik entiende de verdad el deporte y me dio consejos buenísimos con los que saqué un truco nuevo. Muy recomendable para principiantes y avanzados."`,
    rev_3_f: `Frog900 · rider de visita`,
    rev_4_p: `"Edirik fue increíble. Nos guió en cada paso y nos hizo sentir cómodos de principio a fin."`,
    rev_4_f: `Anais M. · visitante reciente`,
    rev_cta: `Lee las 118 reseñas en Tripadvisor`,

    price_head_h2: `Sesiones y precios`,
    price_head_p: `Todas las sesiones son de 30 minutos en el agua. Barco, tablas, chalecos y combustible incluidos.`,
    plan_badge: `El más reservado`,
    price_unit: `/ persona`,
    plan1_h: `Sesión individual`,
    plan1_desc: `Un ride de 30 minutos con instructor.`,
    plan1_li1: `30 minutos en el agua`,
    plan1_li2: `Instrucción individual`,
    plan1_li3: `Tablas y chalecos incluidos`,
    plan1_li4: `Ideal para principiantes`,
    plan2_h: `Pack de 3 sesiones`,
    plan2_desc: `Ahorra $15: ideal para progresar de verdad.`,
    plan2_li1: `Tres sesiones de 30 minutos`,
    plan2_li2: `Instrucción individual en cada sesión`,
    plan2_li3: `Todo el equipo incluido`,
    plan2_li4: `Progresa semana a semana`,
    plan2_btn: `Reserva el pack`,
    plan3_h: `Grupo / familia`,
    plan3_desc: `Trae a tu grupo: cada persona tiene sus propios 30 minutos.`,
    plan3_li1: `30 minutos en el agua por persona`,
    plan3_li2: `Turnos rotativos para el grupo`,
    plan3_li3: `Todo el equipo y las tallas incluidos`,
    plan3_li4: `Sombra y asientos entre turnos`,
    plan3_btn: `Reserva para un grupo`,

    faq_head_h2: `Bueno saber`,
    faq_q1: `¿Necesito experiencia?`,
    faq_a1: `Ninguna. Edirik enseña a principiantes desde 2008 y la mayoría se pone de pie en su primera sesión. Si sabes nadar y seguir un par de indicaciones, puedes hacer wakeboard.`,
    faq_q2: `¿Cuándo abren?`,
    faq_a2: `Sábados y domingos, aproximadamente de 9:00 a 18:00. Escríbenos para reservar tu hueco: en temporada alta los fines de semana se llenan.`,
    faq_q3: `¿Dónde nos encontramos?`,
    faq_a3: `Estamos en Bucutiweg, Oranjestad, Aruba. En Google Maps busca <strong>"Pure Diving Aruba"</strong>: ese es nuestro sitio. Al reservar te enviamos la ubicación y la info de aparcamiento.`,
    faq_q4: `¿Qué debo llevar?`,
    faq_a4: `Bañador, protector solar respetuoso con el arrecife, una toalla y agua. Nosotros ponemos las tablas, los chalecos y todo lo demás. Deja el móvil y los objetos de valor en tierra o en nuestra bolsa estanca.`,
    faq_q5: `¿Y si hace mal tiempo?`,
    faq_a5: `Aruba es seca y ventosa, pero rara vez es imposible salir. Si las condiciones no son seguras, reprogramamos o devolvemos el importe completo, sin preguntas.`,
    faq_q6: `¿Hay límite de edad o de peso?`,
    faq_a6: `Riders a partir de unos 8 años. Sin límite máximo: damos clase a muchos adultos que lo prueban por primera vez. Escríbenos si tienes dudas.`,

    social_h2: `Lo último desde el agua`,
    social_p: `Las novedades, el estado del mar y las actualizaciones se publican primero en nuestra página de Facebook, y es la forma más rápida de hacernos una pregunta.`,
    social_fb: `Abrir nuestra página de Facebook`,
    social_ta: `Míranos en Tripadvisor`,
    fb_note: `¿No se ve el feed? <a href="https://www.facebook.com/297AWS">Ábrelo en Facebook →</a>`,

    cta_h2: `¿Listo para lanzarte al agua?`,
    cta_p: `Envíanos tus fechas y te confirmamos una hora. La forma más rápida de contactarnos es por WhatsApp.`,
    cta_email: `Escríbenos un correo`,
    email_label: `Tu correo electrónico`,
    email_ph: `tu@email.com`,
    cta_submit: `Que te llamemos`,

    foot_tagline: `La única escuela de wakeboard de Aruba. Fundada en 2008, Oranjestad.`,
    foot_explore: `Explora`,
    foot_contact: `Contacto`,
    foot_findus: `Dónde estamos`,
    foot_maps2: `"Pure Diving Aruba" en Maps`,
    foot_hours: `Abierto sáb y dom, 9:00–18:00`,
    foot_rights: `Aruba Wakeboard School (AWS). Todos los derechos reservados.`,

    form_invalid: `Introduce un correo electrónico válido.`,
    form_thanks: `¡Gracias! Te escribiremos a {email} para concretar una hora.`,
  },
};

let awsLang = AWS_DEFAULT_LANG;

function awsGetSavedLang() {
  try {
    const saved = localStorage.getItem('aws-lang');
    if (saved && AWS_LANGS.indexOf(saved) !== -1) return saved;
  } catch (e) {}
  return AWS_DEFAULT_LANG;
}

// Slide the black pill behind the active language button.
function awsPositionThumb(animate) {
  document.querySelectorAll('.lang-switch').forEach((sw) => {
    const thumb = sw.querySelector('.lang-thumb');
    const active = sw.querySelector('button.is-active');
    if (!thumb || !active || !active.offsetWidth) return;
    if (!animate) thumb.style.transition = 'none';
    thumb.style.width = active.offsetWidth + 'px';
    thumb.style.transform = 'translateX(' + active.offsetLeft + 'px)';
    if (!animate) {
      void thumb.offsetWidth; // flush, then let CSS drive future moves
      thumb.style.transition = '';
    }
  });
}

function awsApplyLang(lang, animate) {
  if (AWS_LANGS.indexOf(lang) === -1) lang = AWS_DEFAULT_LANG;
  awsLang = lang;
  const dict = AWS_I18N[lang];

  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.getAttribute('data-i18n')];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const v = dict[el.getAttribute('data-i18n-ph')];
    if (v != null) el.setAttribute('placeholder', v);
  });
  document.querySelectorAll('[data-i18n-al]').forEach((el) => {
    const v = dict[el.getAttribute('data-i18n-al')];
    if (v != null) el.setAttribute('aria-label', v);
  });

  if (dict.doc_title) document.title = dict.doc_title;
  const md = document.querySelector('meta[name="description"]');
  if (md && dict.meta_desc) md.setAttribute('content', dict.meta_desc);

  document.querySelectorAll('.lang-switch button').forEach((b) => {
    const on = b.getAttribute('data-lang') === lang;
    b.setAttribute('aria-pressed', String(on));
    b.classList.toggle('is-active', on);
  });
  awsPositionThumb(animate);

  try { localStorage.setItem('aws-lang', lang); } catch (e) {}
}

// Expose a tiny translator for script.js (form messages etc.)
window.awsT = function (key) {
  const d = AWS_I18N[awsLang] || AWS_I18N.en;
  return d[key] != null ? d[key] : (AWS_I18N.en[key] != null ? AWS_I18N.en[key] : key);
};

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-switch button');
  if (btn) {
    // let script.js know: don't let the resulting reflow close the mobile menu
    window.__awsLangChangedAt = Date.now();
    awsApplyLang(btn.getAttribute('data-lang'), true);
  }
});

// Keep the pill aligned when the switch resizes (menu opens, viewport changes).
if (window.ResizeObserver) {
  const ro = new ResizeObserver(() => awsPositionThumb(false));
  document.querySelectorAll('.lang-switch').forEach((el) => ro.observe(el));
}
window.addEventListener('resize', () => awsPositionThumb(false));

awsApplyLang(awsGetSavedLang(), false);

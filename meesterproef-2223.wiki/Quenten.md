# Productbiografie

## Week 1

In week één zijn we begonnen op dinsdag met een gesprek met de opdrachtgever bij het NDSM in Amsterdam.
Daar hebben we meer informatie gekregen van de opdrachtgever over de opdracht.
We kregen een Google Slides presentatie met user stories, wat gemaakte designs in Figma en wat assets om te gebruiken op de website.

Na dit gesprek hebben we een beetje de debriefing sessie met elkaar vergeten en niet helemaal gedaan.
Dit werd uiteindelijk een probleem waar we later tegenaan liepen.

Daarna zijn we wat pagina's gaan designen, maar zonder een echt doel waar we naar moesten werken.
Er is een overview pagina gemaakt voor de deelnemers om te zoeken naar challenges en een challenge-detailpagina door Jesse.
Deze laatste pagina is aangepast door Tingting en Sundous om het een edit-pagina te maken voor challengehouders.

![image](https://github.com/DutchEllie/meesterproef-2223/assets/6501187/b37101c3-82a5-4e39-a014-65e8911fa96b)

De opdrachtgever heeft ons geen code of database gegeven om mee te werken, waardoor er veel opgezet moest worden om te beginnen aan de opdracht.
Het design van zijn website moest deels worden nagemaakt in code om redelijk prototype op te kunnen bouwen, denk aan de header, footer en andere assets.
Ik heb me in deze week voornamelijk beziggehouden met het leren van Strapi en het helpen met het werken in SvelteKit.
Strapi is een headless CMS wat TIOC gebruikt als backend voor hun website.
Ik heb me verantwoordelijk gesteld voor dit systeem omdat ik de backender van de groep ben geworden.  
Hoewel het voor de opdracht niet 100% telt, wil ik toch even benadrukken wat voor werk er in dit systeem heeft gezeten om het op te zetten op een goede manier.
Strapi is een vreemde applicatie omdat je het zelf nog moet bouwen.
Het wordt geinstalleerd met NPM en vervolgens ook zo gedraait op een server.
Dit heb ik moeten uitzoeken en opzetten in een repository zodat er kon worden gewerkt aan het Strapi systeem als dat nodig was.
In eerste instantie had ik nog het idee dat er veel in Strapi zou moeten worden gedaan, maar achteraf bleek dat dit niet heel erg veel was.
Toch was het leerzaam en heb ik een nieuw systeem kunnen leren.

Wij hebben met de groep besloten om met SvelteKit te werken, omdat het een nieuwer framework is dat veel bedrijven hun aandracht lijkt te trekken.
Waar vroeger React voor verandering zorgde in het ecosysteem dat door JQuery en statische websites werd gedomineerd, lijkt SvelteKit dit nu te doen met React.
In eerste instantie had de groep ook gekozen voor NextJS, maar hebben we toch besloten om SvelteKit te gebruiken na een Weekly Nerd door Chanel, waarin zij vertelde hoe haar bedrijf ook de transitie aan het maken is naar SvelteKit.
SvelteKit is overigens ook makkelijker voor beginners dan React of NextJS, omdat het een minder gecompliceerd framework is, met minder gare workarounds voor de limitaties van het framework.
SvelteKit besluit gewoon hun eigen bestandsindeling te maken, in plaats van het erop aandringen dat alles Javascript moet worden.

SvelteKit heb ik ook opgezet met een CI/CD pipeline, zodat wijzigingen in de repository direct werden gedeployt op een server van mij.
Dit heb ik ook wel eens eerder gedaan, maar dan met de CI/CD pipelines van Gitlab ipv. Github.
Ik heb dit ook deels gedaan in de hoop om mensen goed te leren werken met Git, omdat dit nog een lastig punt voor sommige blijkt te zijn.
Het werken in Git bij sommigen is nog gelijk aan het uploaden van bestanden naar de Github repository d.m.v. slepen naar de browser, wat absoluut onacceptabel is als je ook maar een stap zet in een echt bedrijf...
Uiteindelijk is dit een lopend proces, maar de vooruitgang in de groep is al duidelijk te zien.

### Conclusie

In deze week hebben we met de opdrachtgever gesproken en zijn we begonnen aan het maken van het project.
Achteraf had er in deze week meer organisatie moeten plaatsvinden voordat we gingen werken, omdat we later in de problemen kwamen door de slechte organisatie en oplevering in week twee.
Ik heb deze week heel veel gewerkt aan de development-omgeving waar we de komende weken in zouden gaan werken.

## Week 2

In week twee ben ik begonnen met het omzetten van de designs van de challenge-formulier pagina naar een design in Svelte.
Het product daarvan is hieronder te zien.

![image](https://github.com/DutchEllie/meesterproef-2223/assets/6501187/a19b3086-e4ec-4921-971d-bcaa49ebdead)

Het design van deze pagina is sterk afgeleid van de al-gemaakte challenge detail-pagina gemaakt door Jesse de week hiervoor, met invloeden van Wordpress hun WYSIWYG editor.
Het voordeel hiervan is dat de challengehouder direct kan zien hoe hun pagina eruit zal komen te zien voor de gebruiker.
Zo kunnen ze hun pagina zo aantrekkelijk mogelijk maken voor de deelnemers voordat het online komt te staan.

Daarnaast heb ik me aan het begin van de week bezig gehouden met het opzetten van de authenticatie in de SvelteKit omgeving.
Echter bleek dit uiteindelijk niet helemaal nodig te zijn, want het had niet veel nut voor het project.

Aan het einde van de week hadden we een gesprek met de opdrachtgever.
In dit gesprek zijn wij als groep erop gewezen dat wij te weinig progressie hadden gemaakt in de tijd die we hadden.
Er was zonder direct doel begonnen aan het designen van enkele pagina's zonder dat er is gekeken naar de uiteindelijke functionaliteit voor de eindgebruikers.
Wij werden erop gewezen dat er nu hard gewerkt moest gaan worden om dit te restaureren om toch een goed product op te kunnen leveren.
Na het gesprek hebben wij als groep (minus Sundous en Melvin, die op CSS Day waren) een duidelijk plan opgezet voor de komende maandag, waar we zouden beginnen met het duidelijk uitwerken van het doel, de functionaliteiten en de wireframes voor de pagina's die nodig zijn voor het project.

### Conclusie

Vrijwel al het werk dat in deze week is verricht kon worden geschrapt om maandag opnieuw te beginnen.
Wat we echter zijn verloren in kwantitatief verricht werk, hebben we teruggewonnen in kennis over de opdracht en ervaring over hoe het werken voor een opdrachtgever dus niet moet.

## Week 3

Op maandag zijn we begonnen met een grote vergadering met iedereen van de twee aparte groepen.
Hier hebben we met z'n allen besproken hoe we het vanaf nu gingen aanpakken.
Deze vergadering heb ik geleid.
Hieronder is de agenda te zien die we hebben gebruikt tijdens deze vergadering:

```md
# Agenda

## Aanwezigen

- Quenten
- Safouane
- Sundous
- Tingting
- Melvin
- Bram
- Jeffrey
- Jesse

## Vergaderpunten

1. Reden van een vergadering
2. Doel van vandaag
    1. Bart-Jan komt vandaag om 4 uur langs
3. Werkzaamheden
    1. Requirements van gebruikers uitwerken in functionaliteiten
    2. Bedenken welke pagina's daarvoor nodig zijn.
        1. Daarna met dot-voting stemmen op eventuele feedback
    3. Opschrijven op papier
        1. Wat we verwachten te zien op de pagina
        2. Wat we verwachten te kunnen doen op de pagina
    4. Groepen van twee personen maken
        1. Iedereen werkt in die groepen aan wireflows van de pagina's (wireflows, absoluut geen hi-fi designs)
    5. Daarna gaan mensen aan de HTML zitten van die wireflows.
        1. En **twee** mensen gaan dan aan de Hi-Fi designs werken.
    6. Stand-up aan het einde van de dag en Bart-Jan komt langs.

## W.V.T.T.K.

## Rondvraag

## Afsluiting
```

Zoals te zien in de agenda is er duidelijke structuur opgezet voor het werk dat we vanaf nu gingen verrichten.
Als eerste was het nodig om nogmaals concreet de user stories uit te werken in functionaliteit en om alles uit te denken voordat we gingen werken aan wireflows.
Het gebruik van wireflows was ook iets dat we vanaf het begin hadden moeten doen, maar niet hadden gedaan.

Na de vergadering zijn de twee aparte groepen aan twee aparte tafels aan het werk gegaan, om elkaar zo min mogelijk te storen.
Ik merkte in onze groep dat er vanaf het begin bij de eerste stap van het uitdenken al heel snel weerstand was tegen het plan om alle functionaliteit uit te denken voordat we pagina's hadden gemaakt.
Uiteindelijk hebben we besloten om toch met de planning door te gaan en de functionaliteit uit te denken voordat we pagina's gingen designen.

Het maken van groepen van twee is uiteindelijk niet gebeurt, maar dat was geen probleem.
Uiteindelijk is er alsnog productief gewerkt, waarschijnlijk productiever dan wanneer we het plan hadden gevolgd.

Aan het einde van de dag hadden we naast een aantal wireframes een goed idee van de functionaliteiten van de pagina's en welke pagina's we nodig zouden hebben.
Dit hebben we opgeschreven op een stuk papier:

![image](https://github.com/DutchEllie/meesterproef-2223/assets/6501187/a3220f72-aa1e-492f-b27c-cc708da40611)

Om vier uur kwam de opdrachtgever weer langs om nogmaals te checken hoe het nu ging.
Toen we aanzienlijk veel progressie konden aantonen die we die dag hadden gemaakt was hij daar erg tevreden mee.

De rest van de week zijn we verder gegaan met het designen van de wireflows en daarna met het maken van de Hi-Fi designs.
Dit deden wij in Figma.

|![image](https://github.com/DutchEllie/meesterproef-2223/assets/6501187/16847c42-92fa-4fcf-b293-f6c9a62438c9)|![image](https://github.com/DutchEllie/meesterproef-2223/assets/6501187/0af6bd77-dc32-4452-8017-3b74d8e484a4)|
|--|--|
|Overview pagina|Detail dashboard pagina|

Op vrijdag hadden we nogmaals een gesprek met de opdrachtgever waar we uitgebreider in konden gaan op de details en meer vragen konden stellen.
De opdrachtgever was erg tevreden deze week en heeft de designs grotendeels goedgekeurd, op een paar kleine details na.
Deze designs zouden we de volgende week gaan verwerken.

### Conclusie

Over het algemeen is deze week een groot succes geweest.
Nadat we een beetje een wake-up call kregen van de opdrachtgever zijn we er volledig in geslaagd om onszelf aan het werk te zetten om het product snel te gaan maken.

## Week 4

Op maandag in week vier hebben we aan het begin in onze groep een beetje de taken verdeelt.
Tijdens de feedback van week drie hebben we bijvoorbeeld te horen gekregen dat we geen procenten moesten gebruiken op de overzichtspagina.
We hadden namelijk procenten gebruikt om te laten zien wat voor week-over-week verschil er is geweest voor de deelnemers- en inzendingaantallen.
Dit moest worden aangepast en er moest ook met rood en groen worden aangegeven wat voor verschil er is geweest.

![image](https://github.com/DutchEllie/meesterproef-2223/assets/6501187/9e70aba2-a943-4753-9233-2668b8ceaf77)

Maandag was dus veel designen, maar dinsdag heb ik meer aan code gewerkt.
Dit heb ik thuis gedaan, omdat de rest van de groep ook thuis bleef en dat voor mij ook beter uitkwam.
Ik heb de tijdline component gemaakt, waar ik best trots op ben uiteindelijk.

![image](https://github.com/DutchEllie/meesterproef-2223/assets/6501187/64b377f8-92c7-48a4-bd6b-66ccb6a81917)

De rest van de week heb ik hier en daar nog wat geprogrammeerd.
Ik heb bijvoorbeeld de deelnemerstabel op de challenge-detail pagina gemaakt.
Deze heeft sorteerfunctie en kan dynamisch worden gevult met data.

![image](https://github.com/DutchEllie/meesterproef-2223/assets/6501187/a594a802-9dee-4cde-a19a-c3ed2af04584)

Op vrijdag hadden wij weer een gesprek met de opdrachtgever, waar we weer feedback kregen op ons werk.
Zij vonden het deze keer wel weer goed en er hoefde niet veel aangepast te worden.
De groep die de deelnemerspagina's maakte kreeg echter te horen dat ze nog veel werk moesten doen aan hun pagina's.
De gehele flow van de applicatie was nog niet goed.

Echter, aan het einde van het gesprek werd voor de opdrachtgever pas duidelijk dat het project de volgende week zou eindigen, wat de situatie een beetje veranderde.
De opdrachtgever was onder indruk dat het project nog twee of drie weken zou duren, maar het was in werkelijkheid al bijna klaar.
Na het gesprek hebben we een goede debriefing gehad en een gesprekje met Vasilis om te bespreken wat onze volgende stap moest worden.
De opdracht zoals door school gegeven is een development opdracht en zo wordt het ook beoordeeld, maar de opdrachtgever wilt meer een design hebben en een werkend prototype.

We hebben tijdens het gesprek met Vasilis veel meer inzicht gekregen in wat we moesten doen.
Hieruit kwam als belangrijkste punt dat er geen design aangeleverd moet worden, maar dat we een design in de browser moeten maken, in plaats van in Figma.

## Week 5

Week vijf is de laatste week van de meesterproef.
In deze week hebben we een paar dingetjes afgemaakt en wat verfijnt wat we hadden.
Het fixen van de styling, responsiveness toepassen waar het nog nodig was en het afmaken van de flow van de applicatie.

Ik heb ook uitzonderlijk veel tech-support gespeeld voor de gehele groep wanneer het aankwam op Git.
De meesten konden ondertussen wel redelijk overweg met SvelteKit (wel is het jammer dat ChatGPT heel slecht is in SvelteKit en heel veel broken code genereerd), maar Git is voor een aantal mensen nog steeds magie.
Dit vond ik geen probleem, want ik was toch altijd op school.

Verder heb ik deze week niet super veel gedaan, mijn motivatie was echt super laag geworden en er was niet super veel nog te doen.

## Conclusie meesterproef

De meesterproef was voor mij een nuttig project waar ik voornamelijk heb geleerd hoe je moet werken voor een opdrachtgever.
Ik kon mijn skills in code toepassen om een aantal mooie componenten te maken en om iedereen te helpen om een nieuw framework in een korte tijd te leren.
Ook was het managen van het project een beetje in mijn handen na het gesprek met de opdrachtgever in week 2.
Ik heb al ervaring met het managen van projecten, en hoewel dit niet mijn persoonlijk sterkste punt is, heb ik het toch (met hulp van Jeffrey) kunnen doen.

## Conclusie minor

De meesterproef was een goede afsluiting van de minor, waar ik de skills die ik tijdens de minor heb geleerd heb kunnen toepassen in een echte opdracht.
Ik kom vanuit een puur technische ICT-opleiding, dus mijn achtergrondkennis op het gebied van design en web development was duidelijk minder dan mijn studiegenoten bij deze minor.
Door mijn achterstand in dit gebied heb ik wel heel veel geleerd over web development en over het designproces van een website, over UX en over de technologieën die aan bod komen bij frontend development.

Ik ging deze minor in met als reden dat ik web development als hobby wel leuk vind, en dat is nog steeds mijn insteek.
Ik ben veel technischer aangelegd en vind dat ook veel leuker, maar iedereen heeft wel eens een cool idee dat een GUI nodig heeft.
Uiteindelijk ben ik blij dat ik deze minor heb mogen doen en dat ik een hoop heb kunnen leren.
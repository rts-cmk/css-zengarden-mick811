# Opgave: Genskab et design fra CSS Zen Garden

## Formål

Du skal arbejde med CSS og demonstrere, hvordan man kan genskabe et komplekst layout og design udelukkende ved hjælp af stylesheets – **uden at ændre HTML'en**.

## Opgavebeskrivelse

1. Gå ind på [https://csszengarden.com/](https://csszengarden.com/).
2. Vælg ét af de mange designs som inspiration.
3. Din opgave er at **genskabe det valgte designs udseende så præcist som muligt i desktop-visning** – **uden at kopiere eller bruge det oprindelige stylesheet**.
4. Du skal **ikke bruge det design, som vises som standard** – vælg et andet fra oversigten.
5. Du kan **downloade den oprindelige HTML-fil direkte fra** [https://csszengarden.com/](https://csszengarden.com/) via linket “View the HTML source” nederst på siden.  
   - HTML-filen må **ikke ændres**.  
   - Alt arbejde foregår i din **egen CSS-fil**.

## Krav

- Dit færdige design skal ligne det valgte design **så meget som muligt på desktop-skærme**.
- Du må gerne tilføje **mobiltilpasning (responsivitet)** med media queries, **men det er ikke et krav**.
- Brug moderne CSS-teknikker som fx:
  - Flexbox
  - Grid
  - Typografi og farver
  - Billedeplacering og baggrunde
- Du må gerne bruge egne billeder, skrifttyper m.m., så længe rettighederne er i orden.

## Præsentation

Når opgaven er færdig, skal du **præsentere dit design**:
- Enten for hele holdet i plenum.
- Eller individuelt for underviseren.

Under præsentationen skal du:
- Vise hvilket design du har taget udgangspunkt i.
- Forklare dine designvalg og teknikker.
- Eventuelt pege på steder, hvor du har valgt at forenkle eller ændre.

## Vurderingskriterier

- Hvor tæt dit design ligger på det valgte i **desktop-visning**.
- Din evne til at analysere og genskabe layout og stil ud fra en visuel reference.
- **Valgfrit**: Bonus for mobilvenligt design.

## Mit valgte design

Jeg har valgt at prøve at replikere design **#175 – "Business Style"** fra CSS Zen Garden: [https://csszengarden.com/175/](https://csszengarden.com/175/)

## Sådan genskaber du dette repo

### Sådan genskaber du dette repo

1. **Klon repoet**
   
   Åbn Command Prompt og kør:
   ```
   git clone <repo-url>
   ```
   Erstat `<repo-url>` med adressen til dette repository.

2. **Navigér til mappen**
   ```
   cd <mappenavn>
   ```
   Erstat `<mappenavn>` med navnet på den mappe, der blev oprettet ved kloning.

3. **Åbn HTML-filen i din browser**
   
   Find HTML-filen (typisk `index.html`) og åbn den i din browser for at se designet.

4. **Redigér CSS-filen**
   
   Lav dine ændringer i `style.css` for at genskabe det valgte design.

5. **(Valgfrit) Slet repo-mappen igen**
   
   Hvis du vil fjerne mappen fra din computer, brug:
   ```
   del index.html
   del style.css
   rmdir <mappenavn>
   ```

**Bemærk:** Alt arbejde foregår i CSS-filen. HTML-filen må ikke ændres.

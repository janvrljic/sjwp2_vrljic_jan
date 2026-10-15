<!DOCTYPE html>
<html lang="hr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kontakt</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="hero">
    <h1>Kontakt</h1>
    <p>Obrazac za unos kontaktnih podataka.</p>
  </header>
  <nav class="navigacija" aria-label="Glavna navigacija">
    <a href="index.html">Početna</a>
    <a href="index.html#o-nama">O nama</a>
    <a href="kontakt.html">Kontakt</a>
  </nav>
  <main>
    <section class="kartica forma">
      <h2>Kontaktni obrazac</h2>
      <form action="#" method="get">
        <label for="ime">Ime i prezime</label>
        <input id="ime" name="ime" type="text" placeholder="Upišite ime i prezime" required>
        <label for="email">Email adresa</label>
        <input id="email" name="email" type="email" placeholder="ime@primjer.hr" required>
        <label for="adresa">Adresa</label>
        <input id="adresa" name="adresa" type="text" placeholder="Ulica i kućni broj" required>
        <label for="datum">Datum</label>
        <input id="datum" name="datum" type="date" required>
        <div class="gumbi">
          <button type="submit">Pošalji</button>
          <button type="reset">Poništi</button>
        </div>
      </form>
    </section>
  </main>
  <footer>Vježba iz HTML-a i CSS-a</footer>
</body>
</html>

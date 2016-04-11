Vežba 4
===

Zadaci definisani u ovoj vežbi se odnose na primer blog aplikacije sa predavanja.

1:  Definisati model `Person` sa idućim poljima:
      first_name: obavezno polje tipa string.
      last_name: obavezno polje tipa string.

2:  Definisati REST API za dodavanje, uklanjanje i modifikovanje osoba.

3:  Modifikovati `BlogEntry` shemu da zahteva `author` polje koje je tipa `ObjectId` i predstavlja referencu na `Person` dokument

4:  Modifikovati `Comment` shemu tako da sadrži embeded dokument tipa `Person` koje opisuje ko je postavio komentar.

5.  Omogućiti `Upvote` i `Downvote` komentara, pamćenjem osoba koje su izvršile pomenute operacije za određeni komentar.

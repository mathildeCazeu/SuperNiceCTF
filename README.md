# SuperNiceCTF
CTF réalisé pendant le module de Hacking éthique | formation maalsi - cesi | Inspiré du site SuperBad

Ceci est un exemple de diagramme de flux créé avec Mermaid.

```mermaid
graph TD;
    A[Accueil] --> B[Salle de la clé];
    B --> C[Bibliotheque];
    B --> D[Salle du mot de passe];
    B --> E[Salle du meep];
    B --> F[Salle des liens];

    C --> G[Salle de l'oeil];
    C --> H[Accueil bis]
    H --> B

    F --> I[Un lien avec une clé]

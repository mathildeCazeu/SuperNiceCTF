# SuperNiceCTF
CTF réalisé pendant le module de Hacking éthique | formation maalsi - cesi | Inspiré du site SuperBad

Ceci est un exemple de diagramme de flux créé avec Mermaid.

```mermaid
graph TD;
    A[Start] --> B{Decision?};
    B -->|Yes| C[Do something];
    B -->|No| D[Do something else];
    C --> E[End];
    D --> E;

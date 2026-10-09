# Portfolio — Imad Bouchareb

Site personnel : études de cas en Business Intelligence, préparation de données et IA appliquée.

## Stack

React 18, Vite, Tailwind CSS. Chaque page est prérendue en HTML statique au build
(accueil et études de cas, en français et en anglais), ce qui la rend lisible par
Google et par les aperçus LinkedIn, puis React prend le relais dans le navigateur.

## Lancer en local

```bash
npm install
npm run dev        # développement
npm run build      # build + prérendu dans dist/
npx serve dist     # vérifier le résultat final
```

## Modifier le contenu

- `src/content.js` : textes généraux, parcours, compétences, certifications, liens, photo
- `src/cases.js` : les six études de cas (FR et EN), dans l'ordre d'affichage
- `src/visuals.jsx` : les visuels des études de cas, dessinés en code avec des données fictives

Changer la photo : remplacer `public/photo.webp` (portrait 4:5, 600 × 750 px).
Les images d'aperçu LinkedIn sont `public/og-fr.jpg` et `public/og-en.jpg` (1200 × 630 px).

Ajouter un lien GitHub à une étude de cas : renseigner `link` dans `src/cases.js`.

## Déploiement

Vercel déploie automatiquement la branche `main`. `vercel.json` gère les URL avec
barre finale et le cache des fichiers statiques.

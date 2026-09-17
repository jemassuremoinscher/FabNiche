# FabNiche

Next.js 14 (App Router) + Vercel. Pas de Lovable, pas de Shopify.

## Départements
Trois, volontairement : **Pets** (40), **Fitness** (19), **Home** (32).
Les ~85 produits des anciennes catégories (auto, électronique, jouets, saisonnier,
bureau, voyage, jardin) sont conservés dans `archived` de `lib/catalog.js` mais
n'apparaissent pas sur le site.

## Bandeau promo
`lib/promos.js` — une entrée par diapo. Rotation auto toutes les 6 s, flèches, points,
pause au survol, désactivée si `prefers-reduced-motion`.

## Pages
- `/` accueil : bandeau promo, bande départements, un rail par département
- `/category/[slug]` : produits groupés par sous-rayon avec ancres
- `/products` : tout
- `/search?q=`
- `/admin`, `/admin/orders` : backoffice, aucun lien public, `noindex`

## Design
- Encre `#1A1D1B`, fond `#F3F1EC`, filets `#DEDAD3`, bleu de marque `#1B9CD9` en accent seulement
- Titres : Source Serif 4. Interface : Outfit. Chargées via `<link>` Google Fonts
  (pas `next/font`, qui échoue si le build n'a pas accès réseau)
- Une seule zone de couleur forte : le bandeau promo et les en-têtes de département

## Logo & favicon
- `public/logo-fabniche.png` (bleu), `public/logo-fabniche-white.png` (pied de page)
- `app/icon.png` + `app/apple-icon.png` : favicon, le F du logo en blanc sur le bleu de marque
  (le mot entier est illisible à 32 px)

## Reste à faire
1. Prix — 90 produits sur 91 n'en ont pas dans la source Drive
2. Photos produits — les cadres sont vides
3. Postgres à la place du fichier statique
4. Authentification sur `/admin`
5. Stripe
6. Clés API fournisseurs (`CJ_DROPSHIPPING_API_KEY`, `QK_SOURCE_API_KEY`)

## Déploiement
Build vérifié : 13 routes. Déposer le contenu de ce dossier à la racine du repo
`jemassuremoinscher/FabNiche` ; Vercel redéploie.

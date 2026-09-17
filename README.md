# FabNiche

Next.js 14 (App Router) + Vercel. Pas de Lovable, pas de Shopify.

## Design — Material 3 façon Google Store
- Palette tonale M3 construite **autour du bleu du logo** `#1B9CD9` (primary), avec
  `--primary-container #CBE9FA`, `--on-primary-container #05344C`, `--primary-dark #0B3E58`
- Neutres légèrement bleutés à la M3 : `--surface #FCFDFE`, `--surface-1/2/3`, `--outline-var`
- Échelle de formes M3 : 8 / 12 / 16 / 24 / 28 px + pilules complètes.
  Boutons, chips de tri, onglets départements, panier et recherche sont **entièrement arrondis**
- Élévation douce (pas de bordures dures), state layers au survol, Roboto
- Ergonomie marchande conservée (Amazon / noon) : recherche proéminente, barre départements,
  filtres à gauche, tri, fil d'Ariane, réassurance, barre d'onglets mobile

## Réseau de sites
`lib/network.js` alimente à la fois la colonne « Also from our founders » du pied de page
et la page `/about` : Mammouth AI, Mayo, EFFL, J'assure moins cher.
Liens en `rel="noopener"`, suivis (pas de `nofollow`).

## Départements
Pets (40), Fitness (19), Home (32). Les ~85 produits des anciens rayons restent dans
`archived` de `lib/catalog.js`, hors site.

## Pages
`/` · `/about` · `/category/[slug]` (+ `?sub=`, `?priced=1`, `?sort=`) · `/products` (+ `?sort=`)
· `/search?q=` · `/admin`, `/admin/orders` (aucun lien public, `noindex`)

## Promos
`lib/promos.js` — une entrée par diapo. Rotation 5,5 s, flèches, points, pause au survol,
coupée si `prefers-reduced-motion`.

## Reste à faire
1. **Prix** — 89 produits sur 91 n'en ont pas ; « Add to bag » reste désactivé sans prix
2. **Photos produits**
3. Postgres à la place du fichier statique
4. Authentification sur `/admin`
5. Stripe
6. Clés API fournisseurs (`CJ_DROPSHIPPING_API_KEY`, `QK_SOURCE_API_KEY`)

## Déploiement
Build vérifié : 14 routes. Déposer le contenu de ce dossier à la racine du repo
`jemassuremoinscher/FabNiche`.

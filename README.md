# FabNiche — boutique

Stack : Next.js 14 (App Router) + Vercel. Pas de Lovable, pas de Shopify.

## Structure
- `/` — accueil : hero, tuiles catégories, rails produits par département
- `/category/[slug]` — page catégorie, produits groupés par sous-catégorie
- `/products` — catalogue complet
- `/search?q=` — recherche
- `/admin` et `/admin/orders` — backoffice, **non lié depuis le header ni le footer**, accessible par URL uniquement

## Catalogue
`lib/catalog.js` contient 190 produits repris de la feuille Google Drive « FabNiche » (onglet Content),
réorganisés en 7 catégories : Home & Living, Fitness & Recovery, Electronics, Automotive,
Pet Supplies, Toys & Kids, Seasonal.

La source ne contenait pas de colonne prix : seuls 6 produits ont un tarif (AED). Les autres affichent
« Price to be set » — à compléter avant toute mise en vente.

Aucune image produit n'était disponible dans la source : les vignettes sont des placeholders.

## Identité
- Bleu de marque : `#1B9CD9`
- Police : Baloo 2 (Google Fonts, chargée via `<link>` — pas `next/font`, qui échoue si le build n'a pas accès réseau)
- Logo : `public/logo-fabniche.png` (bleu) et `public/logo-fabniche-white.png` (blanc, utilisé dans le header).
  Le sous-titre « marketing & finance consulting firm » a été retiré du fichier d'origine.

## Reste à brancher, dans l'ordre
1. Prix de vente sur les produits sans tarif
2. Images produits
3. Base de données Postgres (produits, commandes, clients) à la place du fichier statique
4. **Authentification sur `/admin`** — aujourd'hui accessible à quiconque connaît l'URL
5. Paiement Stripe (checkout + webhooks)
6. Clés API fournisseurs (CJ Dropshipping, QK Source) en variables d'environnement Vercel

## Variables d'environnement
- `CJ_DROPSHIPPING_API_KEY`
- `QK_SOURCE_API_KEY`
- `STRIPE_SECRET_KEY`
- `DATABASE_URL`

## Déploiement
Build vérifié localement (`npx next build`, 15 routes générées). Déposer le contenu de ce dossier
à la racine du repo GitHub `fabniche` ; Vercel redéploie automatiquement.

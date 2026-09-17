# FabNiche — squelette technique

Stack : Next.js (App Router) + Vercel. Pas de Lovable, pas de Shopify.

## Ce qui est en place
- Site vitrine (accueil, /produits) avec l'identité FabNiche (#1B9CD9)
- Backoffice /admin avec liste de commandes de démonstration
- Couche fournisseur (lib/suppliers.js) : tente l'API (CJ Dropshipping, BigBuy), bascule en statut manuel si la clé API n'est pas configurée ou si l'appel échoue

## Ce qui manque encore (dans l'ordre)
1. Niche + vrais produits (remplace lib/products.js par une vraie base)
2. Base de données persistante (Postgres — Supabase ou Vercel Postgres) pour produits, commandes, clients
3. Comptes fournisseurs réels (CJ Dropshipping / BigBuy) + clés API en variables d'environnement Vercel
4. Paiement Stripe (checkout + webhooks)
5. Authentification sur /admin (actuellement public, à protéger avant mise en prod réelle)

## Variables d'environnement à ajouter plus tard
- CJ_DROPSHIPPING_API_KEY
- BIGBUY_API_KEY
- STRIPE_SECRET_KEY
- DATABASE_URL

## Déploiement
Le déploiement direct via l'API Vercel a été refusé (permission "forbidden" sur le compte/plan actuel).
Solution : créer un repo GitHub "fabniche", glisser le contenu de ce dossier (pas le dossier lui-même)
via l'interface "Upload files" de GitHub, puis lier ce repo à un nouveau projet Vercel — même méthode
que pour les autres projets (jemassuremoinscher, mayogeneration, etc.).

// Couche d'abstraction fournisseur — chaque intégration doit implémenter cette interface.
// Tant qu'aucune clé API n'est configurée (variable d'environnement absente),
// toute commande automatique échoue proprement et bascule en mode manuel.

export const SUPPLIERS = {
  CJ_DROPSHIPPING: 'cj_dropshipping',
  BIGBUY: 'bigbuy',
};

async function placeOrderCJDropshipping(order) {
  if (!process.env.CJ_DROPSHIPPING_API_KEY) {
    throw new Error('CJ Dropshipping non configuré (CJ_DROPSHIPPING_API_KEY manquante)');
  }
  throw new Error("Intégration CJ Dropshipping non implémentée — à coder une fois le compte fournisseur ouvert");
}

async function placeOrderBigBuy(order) {
  if (!process.env.BIGBUY_API_KEY) {
    throw new Error('BigBuy non configuré (BIGBUY_API_KEY manquante)');
  }
  throw new Error("Intégration BigBuy non implémentée — à coder une fois le compte fournisseur ouvert");
}

const HANDLERS = {
  [SUPPLIERS.CJ_DROPSHIPPING]: placeOrderCJDropshipping,
  [SUPPLIERS.BIGBUY]: placeOrderBigBuy,
};

// Point d'entrée unique utilisé par le backoffice : tente l'API, retombe en mode manuel si ça échoue.
export async function placeSupplierOrder(supplier, order) {
  const handler = HANDLERS[supplier];
  if (!handler) {
    return { status: 'manuel', raison: `Fournisseur inconnu: ${supplier}` };
  }
  try {
    const result = await handler(order);
    return { status: 'auto', result };
  } catch (err) {
    return { status: 'manuel', raison: err.message };
  }
}

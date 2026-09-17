// Couche fournisseur : tente l'API, retombe proprement en mode manuel.
// Les fournisseurs historiques de FabNiche sont CJ Dropshipping et QK Source.

export const SUPPLIERS = {
  CJ_DROPSHIPPING: 'cj_dropshipping',
  QK_SOURCE: 'qk_source',
};

export const SUPPLIER_LABELS = {
  [SUPPLIERS.CJ_DROPSHIPPING]: 'CJ Dropshipping',
  [SUPPLIERS.QK_SOURCE]: 'QK Source',
};

async function placeOrderCJ(order) {
  if (!process.env.CJ_DROPSHIPPING_API_KEY) {
    throw new Error('CJ_DROPSHIPPING_API_KEY absente — commande à passer à la main');
  }
  throw new Error('Intégration CJ Dropshipping à implémenter (compte API à ouvrir)');
}

async function placeOrderQK(order) {
  if (!process.env.QK_SOURCE_API_KEY) {
    throw new Error('QK_SOURCE_API_KEY absente — commande à passer à la main');
  }
  throw new Error('Intégration QK Source à implémenter (compte API à ouvrir)');
}

const HANDLERS = {
  [SUPPLIERS.CJ_DROPSHIPPING]: placeOrderCJ,
  [SUPPLIERS.QK_SOURCE]: placeOrderQK,
};

export async function placeSupplierOrder(supplier, order) {
  const handler = HANDLERS[supplier];
  if (!handler) return { status: 'manuel', raison: `Fournisseur inconnu : ${supplier}` };
  try {
    return { status: 'auto', result: await handler(order) };
  } catch (err) {
    return { status: 'manuel', raison: err.message };
  }
}

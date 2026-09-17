export default function Item({ product }) {
  return (
    <article className="item">
      <div className="item-frame">
        <span>Photo to come</span>
      </div>
      <p className="item-sub">{product.sub}</p>
      <p className="item-name">{product.name}</p>
      <p className={product.price ? 'item-price' : 'item-price tbd'}>
        {product.price ? `AED ${product.price}` : 'Price not set'}
      </p>
    </article>
  );
}

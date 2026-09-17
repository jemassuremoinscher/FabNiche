export default function ProductCard({ product }) {
  return (
    <article className="product">
      <div className="product-thumb">{product.name.charAt(0)}</div>
      <div className="product-body">
        <span className="product-sub">{product.sub}</span>
        <span className="product-name">{product.name}</span>
        {product.price ? (
          <span className="product-price">AED {product.price}</span>
        ) : (
          <span className="product-price tbd">Price to be set</span>
        )}
      </div>
    </article>
  );
}

const DEPT_LABEL = { pets: 'Pets', fitness: 'Fitness', home: 'Home' };

export default function ProductCard({ product }) {
  return (
    <article className="pcard">
      <button className="pfav" aria-label={`Save ${product.name}`} type="button">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9Z" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="pimg"><span>Photo to come</span></div>

      <p className="pdept">{DEPT_LABEL[product.category]} · {product.sub}</p>
      <h3 className="pname">{product.name}</h3>

      <div className="prow">
        {product.price ? (
          <span className="pprice">AED {product.price}<small> incl. VAT</small></span>
        ) : (
          <span className="pnoprice">Price not set</span>
        )}
      </div>

      <button className="padd" type="button" disabled={!product.price}>
        {product.price ? 'Add to bag' : 'Unavailable'}
      </button>
    </article>
  );
}

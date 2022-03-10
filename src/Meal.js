export const Meal = (props) => {
  const { name } = props.meal;
  const { images } = props.meal;
  const { description } = props.meal;
  const { price } = props.meal;

  return (
    <article className="meal">
      <h3>{name}</h3>
      <img src={image} />
      <p>{description}</p>
      <p>{price}</p>
      <div className="promo-blocks__actions">
        <a className="button--anchor">Full Details</a>
        <button>Add to cart</button>
      </div>
    </article>
  );
};

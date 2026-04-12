// RecipeCard.jsx
// Purpose: Reusable component for displaying a single recipe card

export default function RecipeCard({ image, title, ingredients, steps, link, description }) {
  return (
    <article className="recipe-card">
      <figure>
        <img src={image} alt={title} className="picture" />
      </figure>

      <div className="recipe-content">
        <h3>{title}</h3>

        {/* Ingredients */}
        {ingredients && (
          <section>
            <h4>Ingredients:</h4>
            <ul>
              {ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Instructions */}
        {steps && (
          <section>
            <h4>Instructions:</h4>
            <ol>
              {steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>
        )}

        {/* Optional link section (for Amazon mold) */}
        {link && (
          <section>
            <p>{description}</p>
          </section>
        )}
      </div>
    </article>
  );
}

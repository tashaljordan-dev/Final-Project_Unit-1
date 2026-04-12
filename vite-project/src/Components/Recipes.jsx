import "./Recipes.css";
import RecipeCard from "./RecipeCard";

import sweetpotatotreat from "../assets/sptreat.jpg";
import peanutbuttertreat from "../assets/pbtreat.jpg";
import blueberrytreat from "../assets/bbtreats.jpg";
import dogtreatmold from "../assets/dogtreatmold.jpg";

export default function Recipes() {
  // Centralized recipe data for easy scaling
  const recipes = [
    {
      title: "🍠 Sweet Potato Treats",
      image: sweetpotatotreat,
      ingredients: ["Bag of large sweet potatoes"],
      steps: [
        "Preheat oven to 450°F.",
        "Wash and dry sweet potatoes.",
        "Slice into 1/4 inch chunks.",
        "Line baking sheet with foil.",
        "Place sweet potato chunks on baking sheet and bake 45–50 minutes.",
        "Let cool and scoop out the insides with a spoon.",
        "Press sweet potato into dog treat molds.",
        "Freeze for 2 hours or until solid.",
        "Store in freezer and give as needed when sugar drops."
      ]
    },
    {
      title: "🥜 Peanut Butter Treats",
      image: peanutbuttertreat,
      ingredients: ["Peanut butter (check with veterinarian for safe options)"],
      steps: [
        "Press peanut butter into dog treat molds.",
        "Freeze for 2 hours or until solid.",
        "Store in freezer and give as needed when sugar drops."
      ]
    },
    {
      title: "🫐 Blueberry Yogurt Treats",
      image: blueberrytreat,
      ingredients: ["Yogurt (check with veterinarian for safe options)", "Fresh or frozen blueberries"],
      steps: [
        "Press yogurt into dog treat molds.",
        "Add fresh or frozen blueberries.",
        "Freeze for 2 hours or until solid.",
        "Store in freezer and give as needed when sugar drops."
      ]
    },
    {
      title: "🐶 Dog Treat Mold",
      image: dogtreatmold,
      link:
        "https://www.amazon.com/Silicone-Elegant-Chocolate-Non-Stick-Biscuits/dp/B0C772VQLQ/ref=sr_1_6",
      description:
        "Get yours from Amazon today! This mold is perfect for making diabetic friendly treats for your fur baby. It has 24 cavities, so you can make a variety of flavors and keep them all in one place in the freezer. The mold is made of durable silicone, making it easy to pop out the treats when they're ready. Plus, it's dishwasher safe for easy cleanup!"
    }
  ];

  return (
    <div className="recipes-page">
      <h2>Diabetic Friendly Recipes</h2>

      {/* Render all recipes dynamically */}
      {recipes.map((recipe, index) => (
        <div className="about-row3" key={index}>
          <RecipeCard {...recipe} />
        </div>
      ))}
    </div>
  );
}

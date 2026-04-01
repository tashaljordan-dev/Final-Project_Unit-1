import "./Recipes.css";
import { useState } from "react";
import sweetpotatotreat from "../assets/sptreat.jpg";
import peanutbuttertreat from "../assets/pbtreat.jpg";
import blueberrytreat from "../assets/bbtreats.jpg";
import dogtreatmold from "../assets/dogtreatmold.jpg";


function Recipes() {
  return (
    <>
      <div>
        <h2>Diabetic Friendly Recipes</h2>

        <div className="about-row2">
          <img src={sweetpotatotreat} className="picture" alt="Sweet Potato Treats" />

          <div>
            <h3>Sweet Potato Treats</h3>

            <h4>Ingredients:</h4>
            <ul>
              <li>Bag of large sweet potatoes</li>
            </ul>

            <h4>Instructions:</h4>
            <ol>
              <li>Preheat oven to 450°F.</li>
              <li>Wash and dry sweet potatoes.</li>
              <li>Slice into 1/4 inch chunks.</li>
              <li>Line baking sheet with foil.</li>
              <li>Place sweet potato chunks on baking sheet and bake 45–50 minutes.</li>
              <li>Let cool and scoop out the insides with a spoon.</li>
              <li>Press sweet potato into dog treat molds.</li>
              <li>Freeze for 2 hours or until solid.</li>
              <li>Store in freezer and give as needed when sugar drops.</li>
            </ol>
          </div>
        </div>

        <div className="about-row2">
          <img src={peanutbuttertreat} className="picture" alt="Sweet Potato Treats" />

          <div>
            <h3>Peanut Butter Treats</h3>

            <h4>Ingredients:</h4>
            <ul>
              <li>peanut butter (please check with veterinarian for best options</li>
            </ul>

            <h4>Instructions:</h4>
            <ol>
              <li>Press peanut butter into dog treat molds.</li>
              <li>Freeze for 2 hours or until solid.</li>
              <li>Store in freezer and give as needed when sugar drops.</li>
            </ol>
          </div>
        </div>

        <div className="about-row2">
          <img src={blueberrytreat} className="picture" alt="Blueberry Yogurt  Treats" />

          <div>
            <h3>Blueberry Yogurt Treats</h3>

            <h4>Ingredients:</h4>
            <ul>
              <li>yogurt (please check with veterinarian for best options) </li>
            </ul>

            <h4>Instructions:</h4>
            <ol>
              <li>Press yogurt into dog treat molds.</li>
              <li>Add fresh or frozen blueberries.</li>
              <li>Freeze for 2 hours or until solid.</li>
              <li>Store in freezer and give as needed when sugar drops.</li>
            </ol>
          </div>
        </div>

        <div className="about-row2">
          <img src={dogtreatmold} className="picture" alt="Dog Treat Mold" />

          <div>
            <h3>Dog Treat Mold</h3>
            <p> 
                Get yours from Amazon today! This mold is perfect for making diabetic friendly treats for your fur baby. It has 24 cavities, so you can make a variety of flavors and keep them all in one place in the freezer. The mold is made of durable silicone, making it easy to pop out the treats when they're ready. Plus, it's dishwasher safe for easy cleanup!
    
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
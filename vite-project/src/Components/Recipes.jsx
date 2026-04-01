import "./Recipes.css";
import { useState } from "react";
import sweetpotatotreat from "./assets/sweetpotatotreat.jpg";



function Recipes() {
  return (
    <>
        <div>
            <h2>
                Diabetic Friendly Recipes
            </h2>
            <div className = "about-row">
                <img src={sweetpotatotreat} className="picture" alt="Taz" />
                <h3>
                    Sweet Potato Treats
                </h3>
                <p>
                    Ingredients: 
                    <ul>
                        <li>Bag of large sweet potato</li>            
                    </ul>
                </p>
                <p>
                    Instructions:
                    <ol>
                        <li>Preheat oven to 450 degrees F.</li>
                        <li>Wash and dry sweet potatoes.</li>
                        <li>Slice into 1/4 inch chunks.</li>
                        <li>Line baking sheet with foil</li>
                        <li>Place sweet potato chunks on baking sheet and bake for 45-50 minutes.</li>
                        <li>Let cool and scoop out the insides with a spoon</li>
                        <li> Press sweet potato into dog molds</li>
                        <li>Freeze for 2 hours or until solid</li>
                        <li>Store in freezer and give to your dog as a treat whenever their sugar drops</li>
                    </ol>
                </p>
            </div>
        </div>
    </>
  );
}
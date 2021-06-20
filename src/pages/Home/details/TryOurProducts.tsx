import { CContainer } from "@coreui/react";

export interface TryOurProductsProps {}

const TryOurProducts: React.FC<TryOurProductsProps> = () => {
  return (
    <CContainer style={{ margin: "5rem auto" }}>
      <h2>Try Our Products</h2>
      <p>
        Quail isn’t just delicious. It’s also a healthy addition to your diet.
        When you cook with our quail products, you are getting a meal that’s a
        rich source of protein as well as essential vitamins and minerals. And
        as you’ll see on our recipes page, you can create exciting, elevated
        dishes with our quail as your main course.
      </p>
      <p>
        As for quail’s macro nutrients, a typical 4-oz. cooked portion contains
        around 260 calories, 28 grams of protein, 16 grams of total fat, and no
        carbohydrates. If you follow a 2,000-calorie diet, this means that a
        meal of quail will give you 56% of your daily protein without overdoing
        the fat.
      </p>
      <p>
        Our quality quail meat also gives you the vitamins niacin, A, B6,
        riboflavin, thiamin, and C, as well as the minerals phosphorous, iron,
        zinc, and magnesium. All of these are essential for maintaining good
        health. As a point of comparison to chicken, which is the fattier of the
        two meats, quail has up to 4 times more vitamin C, 3 times more iron,
        and significantly more minerals and amino acids.
      </p>
      <p>
        Make our healthy quail products a regular feature in your kitchen and
        enjoy the flavor and nutrition that this meat has to offer.
      </p>
    </CContainer>
  );
};

export default TryOurProducts;

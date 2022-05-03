import { Recipe } from '../_models/recipe.model';

export const RECIPES: Recipe[] = [
    {   id: 11,
        name: 'Chinese Chicken',
        description: 'Chinese Chicken with sweet and sour sauce',
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg',
        //[new Ingredient('Chicken Portions', 4), new Ingredient('Chinese spices', 1)]
    },
    {   id: 12,
        name: 'Sausage Casserole',
        description: 'Sausage Casserole with onion gravy',
        imagePath: 'http://d3udvtnhu4gqbm.cloudfront.net/wp-content/uploads/Italian-Sausage.jpg',
        //[new Ingredient('Sausages', 6), new Ingredient('onions', 2)]
    }
];
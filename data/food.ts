// Food log for the unlisted /food page.
// Add new entries at the top. rating is out of 5 (halves allowed, e.g. 3.5).
//
// photo is optional. If you leave it out, the page uses, in order:
//   1. your Instagram post (@cascading_sweet_and_savory) whose caption contains the title
//   2. the main image from the recipe page at `url`
//   3. a placeholder
// Set photo only to override that (a file in /public/images/food/ or any full image URL).

export interface FoodEntry {
  title: string;
  url?: string; // recipe link; card isn't clickable without one
  rating?: number; // shows "Not rated yet" without one
  photo?: string;
  date?: string; // optional, e.g. "2026-11-18"
}

const food: FoodEntry[] = [
  {
    title: "Beef Stroganoff",
    url: "https://www.recipetineats.com/beef-stroganoff/", // TODO: stand-in for testing, swap for the recipe you used
    rating: 4.5,
    photo: "/images/food/beef-stroganoff.jpg",
    date: "2026-11-18",
  },
  {
    title: "Dublin Coddle",
    photo: "/images/food/dublin-coddle-2026-11-10.jpg",
    date: "2026-11-10",
  },
  {
    title: "Julia Child's Coq au Vin",
    photo: "/images/food/julia-child-s-coq-au-vin-2026-09-25.jpg",
    date: "2026-09-25",
  },
  {
    title: "Fettuccine Alfredo with Broccoli",
    photo: "/images/food/fettuccine-alfredo-with-broccoli-2026-09-11.jpg",
    date: "2026-09-11",
  },
  {
    title: "Guinness Braised Beef Stew",
    photo: "/images/food/guinness-braised-beef-stew-2026-09-02.jpg",
    date: "2026-09-02",
  },
  {
    title: "Fried Chicken and Waffles",
    photo: "/images/food/fried-chicken-and-waffles-2026-06-27.jpg",
    date: "2026-06-27",
  },
  {
    title: "Chilaquiles",
    photo: "/images/food/chilaquiles-2026-06-26.jpg",
    date: "2026-06-26",
  },
  {
    title: "Black and White Devil's Food Cake",
    photo: "/images/food/black-and-white-devil-s-food-cake-2026-06-12.jpg",
    date: "2026-06-12",
  },
  {
    title: "Italian Shrimp Risotto with Grilled Asparagus",
    photo: "/images/food/italian-shrimp-risotto-with-grilled-asparagus-2026-06-01.jpg",
    date: "2026-06-01",
  },
  {
    title: "Ice Cream Cake",
    photo: "/images/food/ice-cream-cake-2026-05-25.jpg",
    date: "2026-05-25",
  },
  {
    title: "Cedar Plank Salmon",
    photo: "/images/food/cedar-plank-salmon-2026-05-23.jpg",
    date: "2026-05-23",
  },
  {
    title: "Banana Coffee Cake with Cinnamon Pecan Topping",
    photo: "/images/food/banana-coffee-cake-with-cinnamon-pecan-topping-2026-05-19.jpg",
    date: "2026-05-19",
  },
  {
    title: "Braised Lamb Shoulder with Fig",
    photo: "/images/food/braised-lamb-shoulder-with-fig-2026-04-22.jpg",
    date: "2026-04-22",
  },
  {
    title: "Oferi Spiced Chicken and Butternut Squash Stew",
    photo: "/images/food/oferi-spiced-chicken-and-butternut-squash-stew-2026-03-25.jpg",
    date: "2026-03-25",
  },
  {
    title: "Gluten-Free Gingerbread Coffee Glazed Bundt",
    photo: "/images/food/gluten-free-gingerbread-coffee-glazed-bundt-2026-03-24.jpg",
    date: "2026-03-24",
  },
  {
    title: "Gluten-Free Banana Bread",
    photo: "/images/food/gluten-free-banana-bread-2026-03-22.jpg",
    date: "2026-03-22",
  },
  {
    title: "Guinness Braised Cottage Pie",
    photo: "/images/food/guinness-braised-cottage-pie-2026-03-17.jpg",
    date: "2026-03-17",
  },
  {
    title: "Coq au Vin",
    photo: "/images/food/coq-au-vin-2026-03-09.jpg",
    date: "2026-03-09",
  },
  {
    title: "Banana Coffee Cake with Cinnamon Pecan Topping",
    photo: "/images/food/banana-coffee-cake-with-cinnamon-pecan-topping-2026-01-28.jpg",
    date: "2026-01-28",
  },
  {
    title: "Eclair Trifle",
    photo: "/images/food/eclair-trifle-2026-01-17.jpg",
    date: "2026-01-17",
  },
  {
    title: "Gluten-Free, Sugar-Free Cheesecake",
    photo: "/images/food/gluten-free-sugar-free-cheesecake-2026-01-09.jpg",
    date: "2026-01-09",
  },
  {
    title: "Beef and Bean Chili",
    photo: "/images/food/beef-and-bean-chili-2026-01-06.jpg",
    date: "2026-01-06",
  },
  {
    title: "Cast Iron Cornbread",
    photo: "/images/food/cast-iron-cornbread-2026-01-06.jpg",
    date: "2026-01-06",
  },
  {
    title: "Marbled Chocolate Chip Banana Bread",
    photo: "/images/food/marbled-chocolate-chip-banana-bread-2025-12-29.jpg",
    date: "2025-12-29",
  },
  {
    title: "Orange Grand Marnier Cheesecake",
    photo: "/images/food/orange-grand-marnier-cheesecake-2025-12-25.jpg",
    date: "2025-12-25",
  },
  {
    title: "Banana Bread Bundt",
    photo: "/images/food/banana-bread-bundt-2025-11-15.jpg",
    date: "2025-11-15",
  },
  {
    title: "Apple Pie",
    photo: "/images/food/apple-pie-2025-10-05.jpg",
    date: "2025-10-05",
  },
  {
    title: "Homemade Crunchwrap Supremes",
    photo: "/images/food/homemade-crunchwrap-supremes-2025-10-03.jpg",
    date: "2025-10-03",
  },
  {
    title: "Lamb",
    photo: "/images/food/lamb-2025-09-16.jpg",
    date: "2025-09-16",
  },
  {
    title: "Banana Bourbon Cream Pie",
    photo: "/images/food/banana-bourbon-cream-pie-2025-08-23.jpg",
    date: "2025-08-23",
  },
  {
    title: "Seafood Risotto",
    photo: "/images/food/seafood-risotto-2025-08-04.jpg",
    date: "2025-08-04",
  },
  {
    title: "Dairy-Free Mint Chocolate Chip Ice Cream",
    photo: "/images/food/dairy-free-mint-chocolate-chip-ice-cream-2025-07-08.jpg",
    date: "2025-07-08",
  },
  {
    title: "Brioche",
    photo: "/images/food/brioche-2025-05-28.jpg",
    date: "2025-05-28",
  },
  {
    title: "Strawberry Rhubarb Coffee Cake",
    photo: "/images/food/strawberry-rhubarb-coffee-cake-2025-05-22.jpg",
    date: "2025-05-22",
  },
  {
    title: "Caramelized Onion and Caraway Noodle Kugel",
    photo: "/images/food/caramelized-onion-and-caraway-noodle-kugel-2025-05-10.jpg",
    date: "2025-05-10",
  },
  {
    title: "Avgolemono Greek Chicken Soup",
    photo: "/images/food/avgolemono-greek-chicken-soup-2025-04-24.jpg",
    date: "2025-04-24",
  },
  {
    title: "Portokalopita",
    photo: "/images/food/portokalopita-2025-04-18.jpg",
    date: "2025-04-18",
  },
  {
    title: "Mediterranean Stuffed Bell Peppers",
    photo: "/images/food/mediterranean-stuffed-bell-peppers-2025-03-09.jpg",
    date: "2025-03-09",
  },
  {
    title: "Scallop Lo Mein",
    photo: "/images/food/scallop-lo-mein-2025-03-01.jpg",
    date: "2025-03-01",
  },
  {
    title: "Fish and Chips with Lemon Dill Green Beans",
    photo: "/images/food/fish-and-chips-with-lemon-dill-green-beans-2025-02-27.jpg",
    date: "2025-02-27",
  },
  {
    title: "Rosemary Garlic Confit",
    photo: "/images/food/rosemary-garlic-confit-2025-02-24.jpg",
    date: "2025-02-24",
  },
  {
    title: "Valentine's Day Rotisserie Chicken Dinner",
    photo: "/images/food/valentine-s-day-rotisserie-chicken-dinner-2025-02-14.jpg",
    date: "2025-02-14",
  },
  {
    title: "Apple Strudel Cheesecake",
    photo: "/images/food/apple-strudel-cheesecake-2025-01-20.jpg",
    date: "2025-01-20",
  },
  {
    title: "Lasagna Bolognese",
    photo: "/images/food/lasagna-bolognese-2025-01-02.jpg",
    date: "2025-01-02",
  },
  {
    title: "Cinnamon Bun Cheesecake",
    photo: "/images/food/cinnamon-bun-cheesecake-2025-01-01.jpg",
    date: "2025-01-01",
  },
  {
    title: "Thanksgiving Spread",
    photo: "/images/food/thanksgiving-spread-2024-11-29.jpg",
    date: "2024-11-29",
  },
  {
    title: "Pumpkin and Apple Pies",
    photo: "/images/food/pumpkin-and-apple-pies-2024-11-28.jpg",
    date: "2024-11-28",
  },
  {
    title: "Salmon Risotto with Roasted Veggies",
    photo: "/images/food/salmon-risotto-with-roasted-veggies-2024-11-17.jpg",
    date: "2024-11-17",
  },
  {
    title: "Beef and Bacon Hand Pies",
    photo: "/images/food/beef-and-bacon-hand-pies-2024-11-09.jpg",
    date: "2024-11-09",
  },
  {
    title: "Salmon Piccata",
    photo: "/images/food/salmon-piccata-2024-10-15.jpg",
    date: "2024-10-15",
  },
  {
    title: "Pound Cake",
    photo: "/images/food/pound-cake-2024-10-13.jpg",
    date: "2024-10-13",
  },
  {
    title: "Apple Cake",
    photo: "/images/food/apple-cake-2024-10-09.jpg",
    date: "2024-10-09",
  },
  {
    title: "Chocolate Chip, Oatmeal and Chile Caramel Sugar Cookies",
    photo: "/images/food/chocolate-chip-oatmeal-and-chile-caramel-sugar-cookies-2024-09-21.jpg",
    date: "2024-09-21",
  },
  {
    title: "Croquembouche",
    photo: "/images/food/croquembouche-2024-09-15.jpg",
    date: "2024-09-15",
  },
  {
    title: "Whole Wheat Loaf",
    photo: "/images/food/whole-wheat-loaf-2024-09-12.jpg",
    date: "2024-09-12",
  },
  {
    title: "Stir-Fried Noodles with Mushrooms, Carrots and Basil",
    photo: "/images/food/stir-fried-noodles-with-mushrooms-carrots-and-basil-2024-08-04.jpg",
    date: "2024-08-04",
  },
  {
    title: "Almond-Anise Biscotti",
    photo: "/images/food/almond-anise-biscotti-2024-07-06.jpg",
    date: "2024-07-06",
  },
  {
    title: "Air Fried Chicken Strips with Egg Fried Rice",
    photo: "/images/food/air-fried-chicken-strips-with-egg-fried-rice-2024-06-28.jpg",
    date: "2024-06-28",
  },
  {
    title: "Lemon Garlic Halibut",
    photo: "/images/food/lemon-garlic-halibut-2024-06-25.jpg",
    date: "2024-06-25",
  },
  {
    title: "Arancini",
    photo: "/images/food/arancini-2024-06-16.jpg",
    date: "2024-06-16",
  },
  {
    title: "Everything Brownies",
    photo: "/images/food/everything-brownies-2024-06-10.jpg",
    date: "2024-06-10",
  },
  {
    title: "Shrimp Fried Rice",
    photo: "/images/food/shrimp-fried-rice-2024-05-31.jpg",
    date: "2024-05-31",
  },
  {
    title: "Honey Teriyaki Chicken Thighs",
    photo: "/images/food/honey-teriyaki-chicken-thighs-2024-05-28.jpg",
    date: "2024-05-28",
  },
  {
    title: "Rhubarb Muffins with Butter Crumble",
    photo: "/images/food/rhubarb-muffins-with-butter-crumble-2024-05-28.jpg",
    date: "2024-05-28",
  },
  {
    title: "Chocolate Chip Banana Bread",
    photo: "/images/food/chocolate-chip-banana-bread-2024-05-26.jpg",
    date: "2024-05-26",
  },
  {
    title: "Spanakopita",
    photo: "/images/food/spanakopita-2024-05-11.jpg",
    date: "2024-05-11",
  },
  {
    title: "Dill Mustard Haddock en Papillote",
    photo: "/images/food/dill-mustard-haddock-en-papillote-2024-05-10.jpg",
    date: "2024-05-10",
  },
  {
    title: "Steak Tips with Mashed Potatoes",
    photo: "/images/food/steak-tips-with-mashed-potatoes-2024-05-07.jpg",
    date: "2024-05-07",
  },
  {
    title: "Egg Fried Rice",
    photo: "/images/food/egg-fried-rice-2024-05-03.jpg",
    date: "2024-05-03",
  },
  {
    title: "Mediterranean Stuffed Peppers with Turkey and Feta",
    photo: "/images/food/mediterranean-stuffed-peppers-with-turkey-and-feta-2024-04-25.jpg",
    date: "2024-04-25",
  },
  {
    title: "Beer Battered Fish and Chips",
    photo: "/images/food/beer-battered-fish-and-chips-2024-04-20.jpg",
    date: "2024-04-20",
  },
  {
    title: "Falafel",
    photo: "/images/food/falafel-2024-04-19.jpg",
    date: "2024-04-19",
  },
  {
    title: "Bulgogi Bibimbap",
    photo: "/images/food/bulgogi-bibimbap-2024-04-02.jpg",
    date: "2024-04-02",
  },
  {
    title: "Bourbon Brown Sugar Glazed Corned Beef",
    photo: "/images/food/bourbon-brown-sugar-glazed-corned-beef-2024-03-17.jpg",
    date: "2024-03-17",
  },
  {
    title: "Ribs with Homemade BBQ Sauce",
    photo: "/images/food/ribs-with-homemade-bbq-sauce-2024-02-22.jpg",
    date: "2024-02-22",
  },
  {
    title: "Shrimp and Scallop Risotto",
    photo: "/images/food/shrimp-and-scallop-risotto-2024-02-20.jpg",
    date: "2024-02-20",
  },
  {
    title: "Portokalopita",
    photo: "/images/food/portokalopita-2024-02-16.jpg",
    date: "2024-02-16",
  },
  {
    title: "Miner's Pie",
    photo: "/images/food/miner-s-pie-2024-02-13.jpg",
    date: "2024-02-13",
  },
  {
    title: "Roast Turkey Dinner",
    photo: "/images/food/roast-turkey-dinner-2024-01-16.jpg",
    date: "2024-01-16",
  },
  {
    title: "Air Fried Salmon with Coconut Rice",
    photo: "/images/food/air-fried-salmon-with-coconut-rice-2024-01-12.jpg",
    date: "2024-01-12",
  },
  {
    title: "Paczki",
    photo: "/images/food/paczki-2023-12-31.jpg",
    date: "2023-12-31",
  },
  {
    title: "Waffles",
    photo: "/images/food/waffles-2023-12-30.jpg",
    date: "2023-12-30",
  },
  {
    title: "Apple Pie",
    photo: "/images/food/apple-pie-2023-12-25.jpg",
    date: "2023-12-25",
  },
  {
    title: "Mujaddara",
    photo: "/images/food/mujaddara-2023-12-21.jpg",
    date: "2023-12-21",
  },
  {
    title: "Pumpkin Pie",
    photo: "/images/food/pumpkin-pie-2023-12-15.jpg",
    date: "2023-12-15",
  },
  {
    title: "Stuffed Shells with Spinach and Mushrooms",
    photo: "/images/food/stuffed-shells-with-spinach-and-mushrooms-2023-12-04.jpg",
    date: "2023-12-04",
  },
  {
    title: "Miso Soup with Cod",
    photo: "/images/food/miso-soup-with-cod-2023-12-03.jpg",
    date: "2023-12-03",
  },
  {
    title: "Roast Turkey",
    photo: "/images/food/roast-turkey-2023-11-24.jpg",
    date: "2023-11-24",
  },
  {
    title: "Apple Pies",
    photo: "/images/food/apple-pies-2023-11-22.jpg",
    date: "2023-11-22",
  },
  {
    title: "Truffled Mushroom and Pine Nut Pasta",
    photo: "/images/food/truffled-mushroom-and-pine-nut-pasta-2023-11-05.jpg",
    date: "2023-11-05",
  },
  {
    title: "Red Velvet Cupcakes",
    photo: "/images/food/red-velvet-cupcakes-2023-09-19.jpg",
    date: "2023-09-19",
  },
  {
    title: "Apple Crisp",
    photo: "/images/food/apple-crisp-2023-09-11.jpg",
    date: "2023-09-11",
  },
  {
    title: "Spanakopita",
    photo: "/images/food/spanakopita-2023-06-23.jpg",
    date: "2023-06-23",
  },
  {
    title: "Strawberry Rhubarb Pie",
    photo: "/images/food/strawberry-rhubarb-pie-2023-06-13.jpg",
    date: "2023-06-13",
  },
  {
    title: "Bibimbap with Honey Soy Chicken",
    photo: "/images/food/bibimbap-with-honey-soy-chicken-2023-06-01.jpg",
    date: "2023-06-01",
  },
  {
    title: "Banh Mi",
    photo: "/images/food/banh-mi-2023-05-06.jpg",
    date: "2023-05-06",
  },
  {
    title: "Bibimbap",
    photo: "/images/food/bibimbap-2023-05-04.jpg",
    date: "2023-05-04",
  },
  {
    title: "BBQ Coffee Rubbed Rotisserie Chicken",
    photo: "/images/food/bbq-coffee-rubbed-rotisserie-chicken-2023-03-26.jpg",
    date: "2023-03-26",
  },
  {
    title: "Buffalo Chicken Dip",
    photo: "/images/food/buffalo-chicken-dip-2023-03-24.jpg",
    date: "2023-03-24",
  },
  {
    title: "Brioche French Toast",
    photo: "/images/food/brioche-french-toast-2023-01-28.jpg",
    date: "2023-01-28",
  },
  {
    title: "Apple Cake Bundt",
    photo: "/images/food/apple-cake-bundt-2022-11-27.jpg",
    date: "2022-11-27",
  },
  {
    title: "Rotisserie Chicken with Parsley Carrots",
    photo: "/images/food/rotisserie-chicken-with-parsley-carrots-2022-11-12.jpg",
    date: "2022-11-12",
  },
  {
    title: "New York Style Coffee Cake",
    photo: "/images/food/new-york-style-coffee-cake-2022-09-25.jpg",
    date: "2022-09-25",
  },
  {
    title: "Homemade Cheez-Its",
    photo: "/images/food/homemade-cheez-its-2022-05-05.jpg",
    date: "2022-05-05",
  },
  {
    title: "Spinach, Pickled Onion and Olive Omelette",
    photo: "/images/food/spinach-pickled-onion-and-olive-omelette-2022-05-04.jpg",
    date: "2022-05-04",
  },
  {
    title: "Cranberry Pecan French Toast",
    photo: "/images/food/cranberry-pecan-french-toast-2022-05-03.jpg",
    date: "2022-05-03",
  },
  {
    title: "Dairy-Free Banana Bread",
    photo: "/images/food/dairy-free-banana-bread-2022-04-10.jpg",
    date: "2022-04-10",
  },
  {
    title: "Garlic Herb and Maple Cinnamon Butters",
    photo: "/images/food/garlic-herb-and-maple-cinnamon-butters-2022-04-09.jpg",
    date: "2022-04-09",
  },
  {
    title: "Ted Lasso's Shortbread Biscuits",
    photo: "/images/food/ted-lasso-s-shortbread-biscuits-2022-04-06.jpg",
    date: "2022-04-06",
  },
  {
    title: "Cardamom Cookies",
    photo: "/images/food/cardamom-cookies-2022-04-06.jpg",
    date: "2022-04-06",
  },
  {
    title: "Spinach Manicotti with Sausage San Marzano Sauce",
    photo: "/images/food/spinach-manicotti-with-sausage-san-marzano-sauce-2022-04-02.jpg",
    date: "2022-04-02",
  },
  {
    title: "Bacon and Sausage Cottage Pie",
    photo: "/images/food/bacon-and-sausage-cottage-pie-2022-03-21.jpg",
    date: "2022-03-21",
  },
  {
    title: "Caramel Flan",
    photo: "/images/food/caramel-flan-2022-03-06.jpg",
    date: "2022-03-06",
  },
  {
    title: "Oyster and Porcini Tort",
    photo: "/images/food/oyster-and-porcini-tort-2022-03-01.jpg",
    date: "2022-03-01",
  },
  {
    title: "Vegan Cottage Pie",
    photo: "/images/food/vegan-cottage-pie-2022-02-02.jpg",
    date: "2022-02-02",
  },
  {
    title: "Beyond Beef Cottage Pie",
    photo: "/images/food/beyond-beef-cottage-pie-2021-12-28.jpg",
    date: "2021-12-28",
  },
  {
    title: "Smashed Potatoes and Creamed Corn",
    photo: "/images/food/smashed-potatoes-and-creamed-corn-2021-12-22.jpg",
    date: "2021-12-22",
  },
  {
    title: "Black Bean and Garlic Skordalia",
    photo: "/images/food/black-bean-and-garlic-skordalia-2021-12-03.jpg",
    date: "2021-12-03",
  },
  {
    title: "Balsamic Honey Zoodles",
    photo: "/images/food/balsamic-honey-zoodles-2021-12-01.jpg",
    date: "2021-12-01",
  },
  {
    title: "Allergy-Friendly Gingerbread",
    photo: "/images/food/allergy-friendly-gingerbread-2021-11-29.jpg",
    date: "2021-11-29",
  },
  {
    title: "Creamed Corn",
    photo: "/images/food/creamed-corn-2021-11-24.jpg",
    date: "2021-11-24",
  },
  {
    title: "Chocolate Chip Cookies",
    photo: "/images/food/chocolate-chip-cookies-2021-11-20.jpg",
    date: "2021-11-20",
  },
  {
    title: "Cookies",
    photo: "/images/food/cookies-2021-10-28.jpg",
    date: "2021-10-28",
  },
  {
    title: "Pie Lineup",
    photo: "/images/food/pie-lineup-2021-10-23.jpg",
    date: "2021-10-23",
  },
  {
    title: "Key Lime Pie",
    photo: "/images/food/key-lime-pie-2021-09-30.jpg",
    date: "2021-09-30",
  },
  {
    title: "Apple, Blueberry, Banana Cream and Chocolate Cream Pies",
    photo: "/images/food/apple-blueberry-banana-cream-and-chocolate-cream-pies-2021-09-17.jpg",
    date: "2021-09-17",
  },
  {
    title: "Chocolate Cream Pie",
    photo: "/images/food/chocolate-cream-pie-2021-09-10.jpg",
    date: "2021-09-10",
  },
  {
    title: "Blueberry Pie",
    photo: "/images/food/blueberry-pie-2021-09-09.jpg",
    date: "2021-09-09",
  },
  {
    title: "Bibimbap",
    photo: "/images/food/bibimbap-2021-08-12.jpg",
    date: "2021-08-12",
  },
  {
    title: "Salmon Piccata with Roasted Garlic Broccoli",
    photo: "/images/food/salmon-piccata-with-roasted-garlic-broccoli-2021-08-05.jpg",
    date: "2021-08-05",
  },
  {
    title: "Sausage and Egg Breakfast Hash",
    photo: "/images/food/sausage-and-egg-breakfast-hash-2021-03-31.jpg",
    date: "2021-03-31",
  },
  {
    title: "Halal Marinated Tofu and Basmati Rice",
    photo: "/images/food/halal-marinated-tofu-and-basmati-rice-2021-02-19.jpg",
    date: "2021-02-19",
  },
  {
    title: "Jamaican Rice and Beans",
    photo: "/images/food/jamaican-rice-and-beans-2021-01-30.jpg",
    date: "2021-01-30",
  },
  {
    title: "Guinness Braised Beef Stew",
    photo: "/images/food/guinness-braised-beef-stew-2021-01-26.jpg",
    date: "2021-01-26",
  },
  {
    title: "Roasted Whole Chickens with Root Vegetables",
    photo: "/images/food/roasted-whole-chickens-with-root-vegetables-2021-01-04.jpg",
    date: "2021-01-04",
  },
  {
    title: "Ribs with Roasted Root Vegetables and Creamed Corn",
    photo: "/images/food/ribs-with-roasted-root-vegetables-and-creamed-corn-2021-01-01.jpg",
    date: "2021-01-01",
  },
  {
    title: "Roasted Root Vegetables",
    photo: "/images/food/roasted-root-vegetables-2020-12-30.jpg",
    date: "2020-12-30",
  },
  {
    title: "Strawberry, Banana and Pineapple Trifle",
    photo: "/images/food/strawberry-banana-and-pineapple-trifle-2020-12-27.jpg",
    date: "2020-12-27",
  },
  {
    title: "Filet Mignon with Twice Baked Potato",
    photo: "/images/food/filet-mignon-with-twice-baked-potato-2020-12-23.jpg",
    date: "2020-12-23",
  },
  {
    title: "Shoyu Miso Ramen",
    photo: "/images/food/shoyu-miso-ramen-2020-12-15.jpg",
    date: "2020-12-15",
  },
  {
    title: "Vegan Twice Baked Potatoes",
    photo: "/images/food/vegan-twice-baked-potatoes-2020-12-12.jpg",
    date: "2020-12-12",
  },
  {
    title: "Air Fryer Salmon with Cajun Green Beans",
    photo: "/images/food/air-fryer-salmon-with-cajun-green-beans-2020-12-09.jpg",
    date: "2020-12-09",
  },
  {
    title: "Beef and Bean Chili",
    photo: "/images/food/beef-and-bean-chili-2020-12-06.jpg",
    date: "2020-12-06",
  },
  {
    title: "Overnight French Toast Bake",
    photo: "/images/food/overnight-french-toast-bake-2020-12-05.jpg",
    date: "2020-12-05",
  },
  {
    title: "Spanakopita and Oatmeal Cookies",
    photo: "/images/food/spanakopita-and-oatmeal-cookies-2020-12-02.jpg",
    date: "2020-12-02",
  },
  {
    title: "Cookies, Biscotti and Pistachio Baklava",
    photo: "/images/food/cookies-biscotti-and-pistachio-baklava-2020-11-25.jpg",
    date: "2020-11-25",
  },
  {
    title: "Filet Mignon with Brussels Sprouts",
    photo: "/images/food/filet-mignon-with-brussels-sprouts-2020-11-20.jpg",
    date: "2020-11-20",
  },
  {
    title: "Salmon with Roasted Broccoli",
    photo: "/images/food/salmon-with-roasted-broccoli-2020-11-20.jpg",
    date: "2020-11-20",
  },
  {
    title: "Halal Spiced Pork Tenderloin",
    photo: "/images/food/halal-spiced-pork-tenderloin-2020-11-15.jpg",
    date: "2020-11-15",
  },
  {
    title: "Maple Pecan Glazed Pork Tenderloin",
    photo: "/images/food/maple-pecan-glazed-pork-tenderloin-2020-11-13.jpg",
    date: "2020-11-13",
  },
  {
    title: "Guinness Braised Beef Stew",
    photo: "/images/food/guinness-braised-beef-stew-2020-11-11.jpg",
    date: "2020-11-11",
  },
  {
    title: "Filet Mignon with Twice Baked Potatoes",
    photo: "/images/food/filet-mignon-with-twice-baked-potatoes-2020-11-09.jpg",
    date: "2020-11-09",
  },
  {
    title: "Balsamic Fig Chicken",
    photo: "/images/food/balsamic-fig-chicken-2018-07-26.jpg",
    date: "2018-07-26",
  },
  {
    title: "Stuffed Shells",
    photo: "/images/food/stuffed-shells-2016-09-06.jpg",
    date: "2016-09-06",
  },
];

export default food;

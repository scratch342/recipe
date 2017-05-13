var name1 = document.querySelector('.name');
var desc = document.querySelector('.description');
var prep = document.querySelector('.prep-time');
var ingredients1 = document.querySelector('.ingredients');
var instructions1 = document.querySelector('.instructions');
var container = document.querySelector('.container-fluid');
var img = document.querySelector('img');
var bool = false;
var bool2 = false;
var detailCalled = 0;
var container2 = document.createElement('div');
container2.setAttribute('class', 'col-sm-7');

//Creating elements for appending later
var ul = document.createElement('ul');
ul.setAttribute("class", "list-group");

//site is cookforyourlife.org

var items = {

	couscous: {
		name: "Cous Cous",
		imgUrl: "http://www.cookforyourlife.org/wp-content/uploads/2015/08/shutterstock_304113206-min.jpg",
		description: "Couscous is extremely simple and fast to make, and a great pantry standby. Whip this up next time you need to add a quick starch to your meal. The general rule is 1 cup of dry couscous to 1/2 cups of water. You can use stock for extra flavor. Unless your doctor has put you on a low fiber diet, we recommend using whole wheat couscous.",
		preptime: "15 minutes",
		ingredients: [
			'3 cups water or stock',
			'Olive oil',
			'Salt',
			'2 cups of couscous',
			'Vegetables',
			'Meat'
		],
		instructions: {
			n1: "Bring water or stock, olive oil, and salt to a boil.",
			n2: " Add couscous and stir once. Turn off heat and cover to allow couscous steam for 5 minutes. Fluff with a fork and add vegetables and meat. Serve.",

		}

	},
	hummus: {
		name: "Hummus",
		imgUrl: "http://www.cookforyourlife.org/wp-content/uploads/2015/09/Hummus-Closeup.jpg",
		description: "Hummus is a nourishing, delicious snack from the Middle East that is really quick and easy to make. It is a mix of cooked or canned chickpeas and tahini (sesame paste) that is packed with protein, vitamins, and minerals. For a tasty, healthy snack eat it with vegetable sticks or Baked Whole Wheat Pita Chips If you are on chemo, steam whatever vegetable you want to snack on.You can find tahini at most big supermarkets these days, often in the health food or international sections.",
		preptime: "15 minutes",
		ingredients: [
			'4 tablespoons lemon juice',
			'2 cloves of garlic, roughly chopped',
			'1/2 cup of tahini',
			'Sea salt, to taste',
			'Water, as needed',
			'2 1/2 cups chickpeas, drained and rinsed'
		],
		instructions: {
			n1: "Pour half the lemon juice, the garlic, and 1 tablespoon of water into a blender. Blend.",
			n2: "Add chickpeas and tahini, alternately adding lemon juice, until you have a creamy paste. Taste as you go, adding salt, more lemon juice, and garlic until desired taste is achieved."
		}
	},
	honeyCake: {
		name: "Honey Cake",
		imgUrl: "http://www.cookforyourlife.org/wp-content/uploads/2015/08/shutterstock_215254717-min-1200x796.jpg",
		description: "At Rosh Hashanah, honey cake is traditionally eaten to ensure a sweet New Year. And at other times, it makes a great breakfast or mid-morning treat with a cup of tea or coffee. This honey cake is less sweet than most and tastes best the day after it has been made. Try it sliced with butter or some young goat cheese.",
		preptime: "30 minutes",
		ingredients: [
			'3 cups whole wheat pastry flour',
			'2 teaspoons baking soda',
			'1 teaspoon baking powder',
			'2 teaspoons ground cinnamon',
			'1 teaspoon ground ginger',
			'1/2 teaspoon freshly ground black pepper',
			'1/2 teaspoon salt',
			'1/4 cup grape seed or canola oil',
			'2 large eggs, at room temperature',
			'1 cup of honey',
			'1/2 cup orange juice'

		],
		instructions: {
			n1: 'Preheat the oven to 350 degrees. Grease a 9-inch loaf pan, and line the bottom with a greased piece of parchment paper cut to fit.',
			n2: 'In a large bowl, sift together the whole wheat pastry flour, baking soda, baking powder, cinnamon, ginger, nutmeg, black pepper, and salt. Set aside.',
			n3: 'In another large bowl, using an electric mixer, whisk the oil, eggs, and honey at high speed until well blended. Turn the speed down to low and add the orange juice, until just combined.',
			n4: 'Fold the dry ingredients into the wet ingredients a third at a time. When the batter is well blended, pour into the prepared 9-inch baking pan. Bake for 45-50 minutes or until a toothpick comes out clean. Let cool in the loaf pan. Store in an airtight tin.'
		}

	},
	poundCake: {
		name: "Almond Pound Cake",
		imgUrl: "http://www.cookforyourlife.org/wp-content/uploads/2015/08/shutterstock_302799536-min.jpg",
		description: "Pound cake is traditionally made from equal amounts of flour, butter, sugar and eggs. Originally the weight of all the ingredients totaled 1-pound, hence the name!This recipe is a little different in that we have cut down on the sugar and substituted almond flour for half of the usual wheat flour. The resulting pound cake is a little heavier but has less starch. Glazing with lemon syrup gives it an extra bite. This cake is delicious as a simple dessert with berries or cooked fruit, or just with a cup of good coffee.",
		preptime: "30 minutes",
		ingredients: [
		'2 large eggs, seperated',
		'1 large egg',
		'4 tablespoons milk, divided',
		'1/2 cup almond flour',
		'1/2 all purpose flour',
		'Pinch of salt',
		'1 1/4 teaspoon baking powder',
		'3/4 cup plus 3 tablespoons brown sugar(give or take)',
		'1 cup unsalted butter, softened at room temperature',
		'Grated zest of 1 lemon',
		'1 lemon'
		],
		instructions: {
			n1: "Preheat the oven to 350 degrees. Grease a small loaf pan with butter or line with parchment paper. Set aside.",
			n2: "With an electric whisk, beat the egg whites to soft peaks. Set aside. In a separate small bowl, beat together the 2 yolks, 1 egg and 2 tablespoons of milk. Set aside.",
			n3: "Mix the almond flour, whole wheat pastry flour, salt and the baking powder together in a bowl. Set aside.",
			n4: "In a separate large bowl, cream the butter and the sugar together until light and fluffy. Gradually beat in the egg yolk mixture, a little at a time, until absorbed. Beat in the lemon zest.",
			n5: "Using a spatula or wooden spoon, gradually fold in the flour mixture into the butter and eggs until well blended. If the batter seems too stiff, fold in a little of the remaining milk, a teaspoon at a time until the batter has reached dropping consistency.",
			n6: "Gently fold in the egg whites, until well mixed but a few white streaks remain. Pile the batter into the prepared loaf tin.",
			n7: "Bake for 45 minutes or until the cake is well risen and golden, and a toothpick comes out clean. Let the cake sit for 5 minutes, then carefully turn out the cake to cool on a wire rack.",
			n8: "In a small saucepan mix together the juice of 1 large lemon and 1 teaspoon of sugar. Heat gently over medium-low heat until the sugar has dissolved and a thick, tart syrup has formed. While the cake is still warm, spoon the syrup over it. Allow to cool, then serve."
		}

	},
	yBiscuits: {
		name: "Yogurt Whole Wheat Biscuits",
		imgUrl: "http://www.cookforyourlife.org/wp-content/uploads/2015/09/Yogurt-Whole-Wheat-Bisctuits.jpg",
		description: "These Yogurt Whole Wheat Biscuits are delicious. Served with fresh sliced strawberries topped with Greek yogurt instead of cream, they make a wonderful, healthy version of strawberry shortcake. Wait until they are cool before cutting them gently in half with a serrated bread knife.",
		preptime: "20 minutes",
		ingredients: [
		'1 cup low-fat Greek yogurt or 1/4 cup low-fat yogurt',
		'3/4 cup low-fat milk(only if using Greek yogurt)',
		'3 cups all purpose flour',
		'1/2 cup organic sugar',
		'4 teaspoons baking powder',
		'1 teaspoon baking soda',
		'1 teaspoon kosher salt',
		'3/4 cup unsalted butter, chilled and cut into small pieces'
		],
		instructions: {
			n1: "Preheat the oven to 400 degrees.",
			n2: "Mix yogurt with milk until smooth(only if using Greek yogurt). Set aside.",
			n3: "Whisk flour, sugar, baking powder, salt, and baking soda in large bowl to blend.",
			n4: "Rub chilled butter between fingertips into dry ingredients until mixture resembles coarse meal.  Add yogurt mixture and stir with a wooden spoon until the mixture is evenly moist and begins to form a ball of dough. Add 1 tablespoon of milk if too dry.",
			n5: "Using a cup dry measure, scoop dough, and drop onto baking sheet, spacing 2 inches apart. Bake until golden brown, about 15 minutes.  Transfer to a rack to cool."
		}
	}

}

function master(){
 

if(bool2 == false){
	bool2 = true;
	for(let key in items){

		var listItem1 = document.createElement('li');
		listItem1.textContent = items[key].name;
		listItem1.setAttribute("class", "list-group-item");
		ul.setAttribute('class', 'col-sm-5')
		ul.appendChild(listItem1);
		container.appendChild(ul);
		console.log(key);
		listItem1.addEventListener('click', function(){
			detail(items[key]);
		});

	}


}

}

function detail(passedListItem){


		img.setAttribute('src', passedListItem.imgUrl);
		name1.textContent = passedListItem.name; 
		desc.textContent = passedListItem.description;
		prep.textContent = 'Preperation Time: ' + passedListItem.preptime;


		//this while loop only works because it is run before the loop is run
		//for the first time

		//have to use while loop because if not it will not loop through all
		//children to find firstChild with if statement
		//if statement can't loop through list and find firstChild
		//you must use loops when applying conditionals to children of lists

		while(ingredients1.firstChild){
			console.log(ingredients1.firstChild.innerHTML + 'I am the first child')
			ingredients1.removeChild(ingredients1.firstChild);
		}

		for(let i = 0; i < passedListItem.ingredients.length; i++){	

			var listItem = document.createElement('li');
			listItem.textContent = passedListItem.ingredients[i];
			ingredients1.appendChild(listItem);
			
		}

		while(instructions1.firstChild){
			instructions1.removeChild(instructions1.firstChild);
		}
		for(let j in passedListItem.instructions){
			var listItem2 = document.createElement('li');
			listItem2.innerHTML = passedListItem.instructions[j] + '<hr>';
			listItem2.setAttribute('class', 'listItem');
			instructions1.appendChild(listItem2);
		}

		ingredients1.setAttribute('class', 'ingredientsagain');
		prep.setAttribute('class', 'prep-timeagain');

		container.appendChild(name1);
		container.appendChild(desc);
		container.appendChild(prep);
		container.appendChild(ingredients1);
		container.appendChild(instructions1);
		container.appendChild(container2);
		container.appendChild(img)

		container2.appendChild(name1);
		container2.appendChild(img);
		container2.appendChild(desc);
		container2.appendChild(prep);
		container2.appendChild(ingredients1);
		container2.appendChild(instructions1);

}
master();
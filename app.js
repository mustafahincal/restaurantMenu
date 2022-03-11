const menu = [
    {
        id: 14,
        title: "Fettuccine Alfredo",
        category: "pasta",
        price: 9.99,
        img: "./images/fettuccine-alfredo.jpg",
        desc: `Italian pasta dish of fresh fettuccine tossed with butter and Parmesan cheese.`,
    },
    {
        id: 4,
        title: "Snack Eggplant",
        category: "entrees",
        price: 5.99,
        img: "./images/eggplant.jpg",
        desc: `Crispy eggplant chips make an excellent snack that satisfies that "crunchy/ salty" craving. They are very tasty, keto, and paleo!`,
    },
    {
        id: 5,
        title: "Fried Zucchini",
        category: "entrees",
        price: 12.99,
        img: "./images/courgette.jpg",
        desc: `Oven-Fried: Preheat oven to 400°F. Place in a single layer on a parchment-lined baking sheet and spray with cooking spray.`,
    },
    {
        id: 6,
        title: "Italian Chicken",
        category: "sandwiches",
        price: 9.99,
        img: "./images/chicken.jpg",
        desc: `Saute red pepper, green pepper and red onion until tender. Stir in a few slices of hot banana pepper`,
    },
    {
        id: 2,
        title: "Squid",
        category: "entrees",
        price: 7.99,
        img: "./images/squid.jpg",
        desc: `Squid's, a seafood restaurant in Chapel Hill, NC, is famous for the area's best seafood and a warm inviting oyster bar.`,
    },
    {
        id: 3,
        title: "French Beans",
        category: "entrees",
        price: 8.99,
        img: "./images/beans.jpeg",
        desc: `This green bean recipe uses fresh green beans and garlic, making it an easy, healthy, and flavorful side dish.`,
    },
    {
        id: 7,
        title: "Philly Steak Sub",
        category: "sandwiches",
        price: 15.99,
        img: "./images/philly.jpg",
        desc: `Philly Cheesesteak is a sandwich made with super thinly sliced ribeye steak, caramelized onion, and provolone cheese. `,
    },
    {
        id: 8,
        title: "Pescaraz Club",
        category: "sandwiches",
        price: 12.99,
        img: "./images/pescaraz.jpg",
        desc: `Grilled chicken topped with pepper jack cheese on a lightly toasted Italian bun with fried green beans`,
    },
    {
        id: 9,
        title: "Grilled Cheese",
        category: "sandwiches",
        price: 3.99,
        img: "./images/grilledcheese.jpg",
        desc: `Thinly spread one side of each bread slice with butter.`,
    },
    {
        id: 10,
        title: "Tortellini",
        category: "pasta",
        price: 7.99,
        img: "./images/tortellini.jpg",
        desc: `A delicious marinara sauce is cooked all day in the slow cooker.`,
    },
    {
        id: 11,
        title: "Cascia Fettuccine",
        category: "pasta",
        price: 8.99,
        img: "./images/fettucini.png",
        desc: `A Lovely Linguini In A Sausage Lemon Sauce`,
    },
    {
        id: 1,
        title: "Fried Ravioli",
        category: "entrees",
        price: 10.99,
        img: "./images/ravioli.jpeg",
        desc: `Fried ravioli, a popular appetizer in St. Louis, Missouri, is breaded and deep-fried pasta.`,
    },
    {
        id: 12,
        title: "Spaghetti Sisco",
        category: "pasta",
        price: 5.99,
        img: "./images/spagetti.jpg",
        desc: `Try Barilla's Classic Blue Box Spaghetti in your next pasta dish.`,
    },
    {
        id: 13,
        title: "Lopez Special",
        category: "pasta",
        price: 12.99,
        img: "./images/lopez.jpg",
        desc: `Pasta, black pepper, and Pecorino Romano join together to form one of the best Roman pasta dishes. `,
    }
];



//* App Controller
const App = (function (menu) {
    const selectors = {
        container : "#item-container",
        btnAll: "#all",
        btnEntrees: "#entrees",
        btnSandwiches: "#sandwiches",
        btnPasta: "#pasta",
    };

    const eventListeners = function(){
        document.querySelector(selectors.btnAll).addEventListener("click",getAllItems);
        document.querySelector(selectors.btnEntrees).addEventListener("click",getEntreesItems);
        document.querySelector(selectors.btnSandwiches).addEventListener("click",getSandwichesItems);
        document.querySelector(selectors.btnPasta).addEventListener("click",getPastaItems);
    }

    const getAllItems = function(e){
        let container = document.querySelector(selectors.container);
        container.innerHTML="";
        let html="";
        menu.forEach(item => {
            html = `
                    <div class="item">
                        <div class="image">
                            <img src=${item.img} />
                        </div>
                        <div class="text">
                            <div class="text-header">
                                <h2>${item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <p>
                                ${item.desc}
                            </p>
                        </div>
                    </div>
                    `
            container.innerHTML += html;       
        })

        e.preventDefault();
    }
    const getEntreesItems = function(e){
        let container = document.querySelector(selectors.container);
        container.innerHTML="";
        let html="";
        menu.forEach(item => {
            if(item.category == "entrees"){
                html = `
                    <div class="item">
                        <div class="image">
                            <img src=${item.img} />
                        </div>
                        <div class="text">
                            <div class="text-header">
                                <h2>${item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <p>
                                ${item.desc}
                            </p>
                        </div>
                    </div>
                    `
                container.innerHTML += html; 
            }
        })

        e.preventDefault();
    }
    const getSandwichesItems = function(e){
        let container = document.querySelector(selectors.container);
        container.innerHTML="";
        let html="";
        menu.forEach(item => {
            if(item.category == "sandwiches"){
                html = `
                    <div class="item">
                        <div class="image">
                            <img src=${item.img} />
                        </div>
                        <div class="text">
                            <div class="text-header">
                                <h2>${item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <p>
                                ${item.desc}
                            </p>
                        </div>
                    </div>
                    `
                container.innerHTML += html; 
            }
        })

        e.preventDefault();
    }
    const getPastaItems = function(e){
        let container = document.querySelector(selectors.container);
        container.innerHTML="";
        let html="";
        menu.forEach(item => {
            if(item.category == "pasta"){
                html = `
                    <div class="item">
                        <div class="image">
                            <img src=${item.img} />
                        </div>
                        <div class="text">
                            <div class="text-header">
                                <h2>${item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <p>
                                ${item.desc}
                            </p>
                        </div>
                    </div>
                    `
                container.innerHTML += html; 
            }
        })

        e.preventDefault();
    }

    

    return {
        init: function () {
            console.log("app is starting");
            
            eventListeners();

            getAllItems();
            
        },
    };
})(menu);

App.init();
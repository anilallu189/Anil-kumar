const fruitData = {
    "fruits": [
        {
            "name": "Apple",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
            "page": "Delicious and Juicy Red Apple",
            "price": 99
        },
        {
            "name": "Banana",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
            "page": "Fresh Ripe Bananas for Healthy Snacking",
            "price": 50
        },
        {
            "name": "Grapes",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
            "page": "Sweet and Juicy Green Grapes",
            "price": 99
        },
        {
            "name": "Pineapple",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
            "page": "Exotic Pineapple Slices",
            "price": 199
        },
        {
            "name": "Pina Apple",
            "image": "https://www.tomra.com/_images/-/media/project/tomra/tomra/solutions/food/categories/fruit/pineapples/adobestock_201429431.jpeg?hash=5003a7fcce1a4c56bbbdbcd68d3d3726bf0b949d53fae16de4405c4f2141317c&w=642&h=350&q=75&fit=crop&format=webp",
            "page": "High-Quality Pina Apples for Smoothies",
            "price": 350
        },
        {
            "name": "Strawberry",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/320px-PerfectStrawberry.jpg",
            "page": "Fresh and Sweet Strawberries",
            "price": 60
        },
        {
            "name": "Orange",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/320px-Orange-Fruit-Pieces.jpg",
            "page": "Juicy Oranges, Perfect for Juice",
            "price": 149
        },
        {
            "name": "Kiwi",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Kiwifruit.jpg/320px-Kiwifruit.jpg",
            "page": "Delicious and Nutritious Kiwi Fruit",
            "price": 129
        },
        {
            "name": "Mango",
            "image": "https://media.istockphoto.com/id/1440736398/photo/mango-photo-of-fresh-vegetables-and-fruits-with-clear-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=qM7f3V3OS-xnyrBpb2SetoQi6wMMZVh5LmNdoH-MeHY=",
            "page": "Sweet and Ripe Mangoes",
            "price": 99
        },
        {
            "name": "Cantaloupe",
            "image": "https://media.istockphoto.com/id/170000601/photo/sliced-cantaloupe-melons-on-a-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=cYNTJg62f8P9wb0S_N591gUl1NDnU3tY3efHgkq0aRc=",
            "page": "Fresh Cantaloupe, Perfect for Salads",
            "price": 50
        },
        {
            "name": "Fig",
            "image": "https://media.istockphoto.com/id/172317642/photo/figs-still-life-picture-in-halves.webp?a=1&b=1&s=612x612&w=0&k=20&c=N5Yajz2PO_K-Pcn2LzZyLI52F-vvwcVBL0y3kACsbPA=",
            "page": "Sweet and Healthy Figs",
            "price": 80
        },
        {
            "name": "Pomegranate",
            "image": "https://media.istockphoto.com/id/185218827/photo/piece-of-pomegranate.webp?a=1&b=1&s=612x612&w=0&k=20&c=AIhRTfafK6dLP0XE10ppW9s13n2MsTFesY1gYHHj5D0=",
            "page": "Juicy Pomegranate Seeds for Snacking",
            "price": 100
        },
        {
            "name": "Cherry",
            "image": "https://media.istockphoto.com/id/157428769/photo/cherry-trio-with-stem-and-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=YoyqxIqWp0jgz7yQOSfTgkI0iBryX0aPPiW3itj598Q=",
            "page": "Fresh and Sweet Cherries",
            "price": 150
        },
        {
            "name": "Coconut",
            "image": "https://media.istockphoto.com/id/175554153/photo/fresh-coconut.webp?a=1&b=1&s=612x612&w=0&k=20&c=wnekrz7G0VzgxZjeo6VLaw9Idam4KnsTkwQLeAmpmpI=",
            "page": "Fresh Organic Coconut - Nature's Hydration",
            "price": 250
        },
        {
            "name": "Blackberry",
            "image": "https://media.istockphoto.com/id/108311169/photo/blueberries.webp?a=1&b=1&s=612x612&w=0&k=20&c=t3RncJj2zzx1yQb-rsw7aVSWGeJFiogV391Fs6kKZbQ=",
            "page": "Fresh Blackberries for Smoothies",
            "price": 200
        },
        {
            "name": "Dragon Fruit",
            "image": "https://media.istockphoto.com/id/1364034447/photo/fresh-pitahaya-on-white-background-dragon-fruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=czLZkvxXUdyfErO2rQ2dd-1ssWgXLddFntIJ5i3_RE4=",
            "page": "Exotic Dragon Fruit",
            "price": 150
        },
        {
            "name": "Lychee",
            "image": "https://media.istockphoto.com/id/182834723/photo/lychee-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=pDeVqNBDuHIEh8HT90vF0C0EiVZGpw6xmw69TBzIRW8=",
            "page": "Fresh Lychee for a Tropical Taste",
            "price": 100
        },
        {
            "name": "Passion Fruit",
            "image":  "https://media.istockphoto.com/id/468689850/photo/passion-fruit-passion-fruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=LAkUE0V9-O87sFTc19qkFUnscJitPnXmUX7lVYi5usI=",
            "page": "Sweet and Tart Passion Fruit",
            "price": 75
        }
    ]
};

function createFruitCard(fruit) {
    return `
        <div class="col-md-4" onclick="redirectToDetailPage('${fruit.name}', '${fruit.image}', ${fruit.price})">
            <div class="fruit-card">
                <img src="${fruit.image}" alt="${fruit.name}">
                <h2>${fruit.name}</h2>
                <p>${fruit.page}</p>
                <p>Price:  ₹${fruit.price}</p>
            </div>
        </div>
    `;
}

function displayFruits() {
    const fruitContainer = document.getElementById('fruitContainer');
    fruitData.fruits.forEach(fruit => {
        fruitContainer.innerHTML += createFruitCard(fruit);
    });
}

displayFruits();

const pickleData = {
    "pickles": [
        {
            "name": "Mango Pickle",
            "image": "https://media.istockphoto.com/id/1257810694/photo/mango-pickle.webp?a=1&b=1&s=612x612&w=0&k=20&c=NOPDohxY7pG9dq8rMJG98fkfr9S8MRuLz-H1_s2Aveg=",
            "page": "Spicy Mango Pickle",
            "price": 60
        },
        {
            "name": "Lemon Pickle",
            "image": "https://media.istockphoto.com/id/1474267042/photo/photo-of-lemon-pickle-at-indian-market-spicy-street-food-for-sale-at-outdoor-chutney-stall.webp?a=1&b=1&s=612x612&w=0&k=20&c=gNgM-0rS9cX7Ff8JPGPd6s4psrrtpvkuoNswjFB79BE=",
            "page": "Tangy Lemon Pickle",
            "price": 99
        },
        {
            "name": "Mixed Pickle",
            "image": "https://media.istockphoto.com/id/490050316/photo/assorted-indian-pakistani-condiments-pickles-and-chutney.webp?a=1&b=1&s=612x612&w=0&k=20&c=HDsgj1oPxlsj4k6dGZsK2gW9V346EwaVA3q50s34hxA=",
            "page": "Aromatic Mixed Pickle",
            "price": 150
        },
        {
            "name": "Garlic Pickle",
            "image": "https://media.istockphoto.com/id/1283671296/photo/fermented-garlic-cloves-in-honey.webp?a=1&b=1&s=612x612&w=0&k=20&c=4bWfRHzE-01A_-8zZkH4Z0AXikcatgeHEa1AoRs3jh0=",
            "page": "Flavorful Garlic Pickle",
            "price": 70
        },
        {
         "name": "Carrot Pickle",
                  "image": "https://media.istockphoto.com/id/929638510/photo/traditional-regional-carrot-pickle-daucus-carota-subsp-sativus-pickle-with-ingredients-like.webp?a=1&b=1&s=612x612&w=0&k=20&c=eOBMeIGoK58_L9jhVOnrllbM2F6238dayM5j1IosYv4=",
                  "page": "Crunchy Carrot Pickle",
                  "price": 159
              },
              {
                  "name": "Green Chili Pickle",
                  "image": "https://media.istockphoto.com/id/929638510/photo/traditional-regional-carrot-pickle-daucus-carota-subsp-sativus-pickle-with-ingredients-like.webp?a=1&b=1&s=612x612&w=0&k=20&c=eOBMeIGoK58_L9jhVOnrllbM2F6238dayM5j1IosYv4=",
                  "page": "Spicy Green Chili Pickle",
                  "price": 150
              },
              {
                  "name": "Tomato Pickle",
                  "image": "https://media.istockphoto.com/id/1436420225/photo/pickled-vegetables-and-fruits-in-a-jar-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=Je7CJGbj3dF0VeUAQl1pr-_h75KUGaPUVR9xNSBhgmA=",
                  "page": "Tangy Tomato Pickle",
                  "price": 80
              },
              {
                  "name": "Onion Pickle",
                  "image": "https://media.istockphoto.com/id/1407091616/photo/jars-of-sliced-onions-in-brine-ready-for-sterilization.webp?a=1&b=1&s=612x612&w=0&k=20&c=fLwvXq2zFqA944_KAW1fCe7YA1Ow-bb6F85YQR6X5Ac=",
                  "page": "Sweet and Sour Onion Pickle",
                  "price": 99
              },
              {
                  "name": "Lime Pickle",
                  "image": "https://media.istockphoto.com/id/666981148/photo/group-photograph-of-indian-pickles-like-mango-pickle-lemon-pickle-and-green-chilli-pickle.webp?a=1&b=1&s=612x612&w=0&k=20&c=m-8ejQzfIrG1uyR-5-ABK1Mdv7pN4-v72Ti4DZsmaq0=",
                  "page": "Sour Lime Pickle",
                  "price": 120
              },
              {
                  "name": "Radish Pickle",
                  "image": "https://media.istockphoto.com/id/929638510/photo/traditional-regional-carrot-pickle-daucus-carota-subsp-sativus-pickle-with-ingredients-like.webp?a=1&b=1&s=612x612&w=0&k=20&c=eOBMeIGoK58_L9jhVOnrllbM2F6238dayM5j1IosYv4=",
                  "page": "Crispy Radish Pickle",
                  "price": 170
              },
              {
                  "name": "Beetroot Pickle",
                  "image": "https://media.istockphoto.com/id/503026132/photo/sliced-beet.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZZ10cpD1Fg3hAKRwgwrCcB2wdDepQqPiC9JHMIFLhJo=",
                  "page": "Sweet Beetroot Pickle",
                  "price": 130
              },
              {
                  "name": "Cabbage Pickle",
                  "image": "https://media.istockphoto.com/id/155709518/photo/sauerkraut-pickle.webp?a=1&b=1&s=612x612&w=0&k=20&c=V7d6Hm3ee4-yYPLMezduymnigaYXOo_FXQDJfNKCDw8=",
                  "page": "Fermented Cabbage Pickle",
                  "price": 150
              },
              {
                  "name": "Cauliflower Pickle",
                  "image": "https://media.istockphoto.com/id/655003206/photo/carrots-cauliflowers-and-turnip-pickle.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZJgT_H-4RjkIri-NjpTZH6nqaN3Nz3Po919G7l4VFBo=",
                  "page": "Crispy Cauliflower Pickle",
                  "price": 200
              },
              {
                  "name": "Ginger Pickle",
                  "image": "https://media.istockphoto.com/id/1437049937/photo/ginger-slices-pickle.webp?a=1&b=1&s=612x612&w=0&k=20&c=7UJ-6x6oBmSLHcT8_HLRbkGfvU_2vJtsGz2NnzWHQcM=",
                  "page": "Spicy Ginger Pickle",
                  "price": 70
              },
              {
                  "name": "Apple Pickle",
                  "image": "https://media.istockphoto.com/id/872775970/photo/fruit-chutney.webp?a=1&b=1&s=612x612&w=0&k=20&c=bGy5fh6tjLiqOtOxvvHuVArxXMOzJnZnEOSUgrJjU6I=",
                  "page": "Sweet Apple Pickle",
                  "price": 150
              },
              {
                  "name": "Peach Pickle",
                  "image": "https://media.istockphoto.com/id/1313341596/photo/peaches-canned-in-glass-jar-sweet-peaches-in-syrup-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=2WVcuNk4WtdjK_pRv9tBw465epYDSTFc8dUFd9SM9W0=",
                  "page": "Tangy Peach Pickle",
                  "price": 99
              }
          ]
      };
        

    
      function createPickleCard(pickle) {
        return `
            <div class="col-md-4" onclick="redirectToDetailPage('${pickle.name}', '${pickle.image}', ${pickle.price})">
                <div class="fruit-card">
                    <img src="${pickle.image}" alt="${pickle.name}">
                    <h2>${pickle.name}</h2>
                    <p>${pickle.page}</p>
                   <p>Price: ₹${pickle.price}</p>

                </div>
            </div>
        `;
    }
    
    function redirectToDetailPage(name, image, price) {
        if (!navigator.onLine) {
            alert("You are currently offline. Please connect to the internet to view details.");
            return; // Exit the function if offline
        }
    
        const encodedName = encodeURIComponent(name);
        const encodedImage = encodeURIComponent(image);
        const url = `anil.html?name=${encodedName}&image=${encodedImage}&price=${price}`;
        window.location.href = url;
    }
    
    function displayPickles() {
        if (!navigator.onLine) {
            // Optionally, you can notify the user without stopping the function
            console.warn("You are currently offline. Pickles will not be displayed.");
            return; // Exit the function if offline
        }
    
        const pickleContainer = document.getElementById('pickleContainer');
        pickleContainer.innerHTML = ''; // Clear the container before adding items
    
        if (pickleData.pickles.length === 0) {
            console.warn("No pickles available to display.");
            return; // Exit if there are no pickles to display
        }
    
        pickleData.pickles.forEach(pickle => {
            pickleContainer.innerHTML += createPickleCard(pickle);
        });
    }
    
    function fruits() {
        const query = document.getElementById('searchBox').value.toLowerCase();
    
        if (!navigator.onLine) {
            // Optionally, notify the user without stopping the function
            console.warn("You are currently offline. Search results will not be shown.");
            return; // Exit the function if offline
        }
    
        const filteredFruits = book.filter((ele) => ele.title.toLowerCase().includes(query));
    
        if (filteredFruits.length > 0) {
            display(filteredFruits);
        } else {
            alert("No items found.");
        }
    
        // Clear the input field after the search
        document.getElementById('searchBox').value = '';
    }
    
    // Check if the user is online when the script is loaded
    window.addEventListener('load', () => {
        if (!navigator.onLine) {
            alert("You are currently offline. Some functionalities will be disabled.");
        }
    });
    
    // Optionally, listen for online/offline events to notify users
    window.addEventListener('online', () => {
        alert("You are back online!");
    });
    
    window.addEventListener('offline', () => {
        alert("You are currently offline. Some functionalities may not work.");
    });


    // Display fruit cards
document.getElementById("fruitContainer").innerHTML = fruitData.fruits.map(createFruitCard).join('');

// Display pickle cards
document.getElementById("pickleContainer").innerHTML = pickleData.pickles.map(createPickleCard).join('');

    





const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
});

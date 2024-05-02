//search for open weather map -> go to https://openweathermap.org/ -> and click on API on top and get URL by clicking on API doc in Current Weather Data and subscribe, no need to pay.
// to get API Key sign in to the open weather and get key 


const weatherAPIKey = "f7663de5c51ceb886c717bf7cb2d979"
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric` // addding units=metric(For temperature in Celsius use units=metric) as Temperature in Kelvin is used by default


const galleryImages = [
    {
        src : "./assets/gallery/image1.jpg",
        alt : "Thumbnail Image 1"
    },
    {
        src : "./assets/gallery/image2.jpg",
        alt : "Thumbnail Image 2"
    },
    {
        src : "./assets/gallery/image3.jpg",
        alt : "Thumbnail Image 3"
    }
];

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ];

// Menu Section

function menuHandler(){
    document.querySelector("#open-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });
    
    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

/*
const consumer = "John";
let balance = 2000
console.log("Hi," + consumer + ".Your Balance is USB " + balance);
balance = balance + 200;
console.log("Hi," + consumer + ".Your New Balance is USB " + balance);
*/

// Temperature Conversion Section

function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

// Greeting Section 
function greetingHandler(){
    let currentHour = new Date().getHours();
    let greetingText;
    
    if(currentHour < 12){
        greetingText = "Good Morning!";
    }else if(currentHour < 19){
        greetingText = "Good Afternoon!";
    }else if(currentHour < 24){
        greetingText = "Good Evening!";
    }else{
        greetingText = "Welcome!";
    }
    
    //const greetingText = "Good Afternoon!";
    const weatherCondition = "Sunny";
    const userLocation = "Mumbai";
    let temperature = 30; 
    
    document.querySelector("#greeting").innerHTML = greetingText;

    let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;
    let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`;
    
    document.querySelector("p#weather").innerHTML = celsiusText;
    
    // Temperature Switch
    
    document.querySelector(".weather-group").addEventListener("click",function(e){
        //console.log(e);

        if(e.target.id == "celsius"){
            document.querySelector("p#weather").innerHTML = celsiusText;
        }else if(e.target.id == "fahr"){
            document.querySelector("p#weather").innerHTML = fahrText;  
        }    
            // console.log(e.target.id);
    });
}

// Weather Text
/* function weatherHandler(){
    navigator.geolocation.getCurrentPosition(position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let url = weatherAPIURL
        .replace({lat},latitude)
        .replace({lon},longitude)
        .replace({API key},weatherAPIKey);
        fetch(url)
        .then(response => response.json)
        .then(data => {
            console.log(data);
            const condition = "data.weather[0].description";
            const location = "data.name";
            const temperature = data.main.temp;
    
            console.log(condition, location,temperature);
    
            let celsiusText = `The weather is ${condition} in ${location} and it's ${temperature.toFixed(1)}°C outside.`;
        let fahrText = `The weather is ${condition} in ${location} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`;
        
        document.querySelector("p#weather").innerHTML = celsiusText;
        
        // Temperature Switch
        
        document.querySelector(".weather-group").addEventListener("click",function(e){
            //console.log(e);
    
            if(e.target.id == "celsius"){
                document.querySelector("p#weather").innerHTML = celsiusText;
            }else if(e.target.id == "fahr"){
                document.querySelector("p#weather").innerHTML = fahrText;  
            }    
                // console.log(e.target.id);
        });
    
        });
    });
    } */


// Clock Section

//new Date().getHours()

//new Date().getMinutes()

//new Date().getSeconds()

function clockHandler(){
    setInterval(function(){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
    },1000);
}

// Gallery Section

/* for(let i  in galleryImages){
    console.log(galleryImages[i]);
} */

 function galleryHandler(){
    let MainImage = document.querySelector("#gallery > img")
    let thumbnails = document.querySelector("#gallery .thumbnails");
    
    MainImage.src = galleryImages[0].src;
    MainImage.alt = galleryImages[0].alt; 
    
        /* 
{ <img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" data-array-index="0" data-selected="true">
          <img src="./assets/gallery/image2.jpg" alt="Thumbnail Image 2" data-array-index="1" data-selected="false">
          <img src="./assets/gallery/image3.jpg" alt="Thumbnail Image 3" data-array-index="2" data-selected="false"></img>
 } */
 
    galleryImages.forEach(function(image,index){
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false;
    
    /* if(index === 1){
        thumb.dataset.selected = true;
    }else{
        thumb.dataset.selected = false;
    } */
    
    thumb.addEventListener("click", function(e){
    let selectedIndex = e.target.dataset.arrayIndex;
    let selectedImage = galleryImages[selectedIndex];
    MainImage.src = selectedImage.src;
    MainImage.alt = selectedImage.alt;
    
    thumbnails.querySelectorAll("img").forEach(function(img){   // this to show which thumbnail has selected-to show white border on selection
        img.dataset.selected = false;
    });
    
    e.target.dataset.selected = true;
    
    });
    
    thumbnails.appendChild(thumb);
    });
 }


 // Products Section

 /* {<div class="products-area">
          <div class="product-item">
             <img src="./assets/products/img6.png" alt="AstroFiction">
             <div class="product-details">
                <h3 class="product-title">AstroFiction</h3>
                <p class="product-author">John Doe</p>
                <p class="price-title">Price</p>
                <p class="product-price">$ 49.90</p>
          </div>
</div> }*/

function populateProducts(productList){
    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";  // everytime we run this function first its going to erase everything inside and then create the items accordingly
    
      // Run a loop through the products and create an HTML element ("product-item") for each of them
      productList.forEach(function(product,index){
        //console.log(product);
         // create the HTML element for the individual products
         let productElm = document.createElement("div"); //div is the name of the tag
         productElm.classList.add("product-item");
         
         // Create the Product image
         let productImage = document.createElement("img");
         productImage.src = product.image;
         productImage.alt = "Image for" + product.title;
   
         // Create a product details section
         let productDetails = document.createElement("div");
         productDetails.classList.add("product-details");
   
         //Create product title, product author, price-title, product price
         let productTitle = document.createElement("h3");
         productTitle.classList.add("product-title");
         productTitle.textContent = product.title;
   
         let productAuthor = document.createElement("p");
         productAuthor.classList.add("product-author");
         productAuthor.textContent = product.author;
   
         let priceTitle = document.createElement("p");
         priceTitle.classList.add("price-title");
         priceTitle.textContent = "Price";
   
         let productPrice = document.createElement("p");
         productPrice.classList.add("product-price");
         productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "free";
   
         //Append the product details
         productDetails.append(productTitle);
         productDetails.append(productAuthor);
         productDetails.append(priceTitle);
         productDetails.append(productPrice);
   
         
   
   
         // Add all Child HTML elements of the products
         productElm.append(productImage);
         productElm.append(productDetails);
   
   
         // Add the Complete individual product to the product section
         productsSection.append( productElm);
       
       });
}

function productHandler(){

    /* let freeProducts = products.filter(function(item){
        return !item.price || item.price <= 0;
    });  */
    let freeProducts = products.filter(item => !item.price || item.price <= 0); 
    /* let paidProducts = products.filter(function(item){
        return item.price > 0;
    });  */
    let paidProducts = products.filter(item => item.price > 0); 

    //console.log("free", freeProducts);
    //console.log("paid", paidProducts);

    populateProducts(products);


    /*
    <div class="products-filter">
          <input type="radio" checked="true" id="all" name="products" />
          <label for="all">
            All
            <span class="product-amount">3</span>
          </label>
          <input type="radio" id="paid" name="products" />
          <label for="paid">
            Paid
            <span class="product-amount">2</span>
          </label>
          <input type="radio" id="free" name="products" />
          <label for="free">
            Free
            <span class="product-amount">1</span>
          </label>

          <span class="glider"></span>
    </div>
        */

    // Total  Products
    //let totalProducts = products.length;
    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

    let productFilter = document.querySelector(".products-filter");
    productFilter.addEventListener("click",function(e){
        //console.log(e.target.id);
        if(e.target.id === "all"){
            populateProducts(products);
        }else if(e.target.id === "paid"){
            populateProducts(paidProducts);
        }else if(e.target.id === "free"){
            populateProducts(freeProducts);
        }
    });
}

// Example on array filter 

/* let numbers = [1,2,3,4,5,6,7,8,9];
let greaterThan4 = numbers.filter(function(item){
    return item > 4;                                    // console output - (5) [5, 6, 7, 8, 9]
    //return true;                                     //console output - (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // return false                                  //console output - [] - empty array
}); 

console.log(greaterThan4); */

// Footer Section

// Ⓒ 2023 - All rights reserved.
let currentYear = new Date().getFullYear();
document.querySelector("footer").textContent = `ⓒ ${currentYear} - All rights reserved.`

// To get weather details according to user location

/* navigator.geolocation.getCurrentPosition(function(position){
    fetch("https://opentdb.com/api.php?amount=1")
    .then(response => response.json)
    .then(data => console.log(data));
}); */




// Page Load

menuHandler();
greetingHandler();
//weatherHandler()
clockHandler();
galleryHandler();
productHandler();
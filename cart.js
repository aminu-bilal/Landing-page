
const SEARCH = document.getElementById('filtersearch');
const Container = document.querySelector(".items_container")
const cartModal = document.querySelector(".cartModal")
function Filteritems(){
    const SEARCHvalue = document.getElementById('filtersearch').value.toUpperCase();
    const Cart = document.querySelector('.items_container');
    const Items = Cart.querySelectorAll('div.items');
    for(i = 0; i < Items.length;i++){
        let p = Cart[i].getElementByTagName('p')[0];
        if(p.innerHTML.toUpperCase().indexOf(SEARCHvalue) > -1){
            Cart[i].style.display = ''; 
        } else {
            Cart[i].style.display = 'none';
        }
    }
}; 
SEARCH.addEventListener('keyup', Filteritems);

// Function that fetch product from json file using async and await
const getAllProducts = async () => {
    const res = await fetch("./db.json")
    const products = await res.json()
    return products
}

const generateCartNode = () => {
    cartModal.innerHTML = ""
    cartItems.map(item => {
        const sapa = createCartAddedItmes(item)
        cartModal.appendChild(sapa)
        // console.log(sapa);
    })
}


// Creating a defunction, calling element and creating element 
const createCartNode = ({name, price, image, id}) => {
    // const cartBoxContainer = document.getElementsByClassName('.items_container');
    const cartBox = document.createElement("div");
    cartBox.classList.add("items");
    // const imageNode = document.createElement('img');
    // imageNode.setAttribute("width", 200);
    // imageNode.setAttribute("height", 200);
    const imageNode = new Image(200, 200);
    imageNode.src = image;
    const titleNode = document.createElement('p');
    titleNode.innerText = name;
    const priceNode = document.createElement('p');
    priceNode.innerText = price;
    const buttonNode = document.createElement('button');
    buttonNode.setAttribute("onClick", `addingToCart(${id})`);
    buttonNode.classList.add('btn');
    buttonNode.innerText = 'Add To Cart';
    // cartBoxContainer.appendElement(cartBox);
    cartBox.appendChild(imageNode);
    cartBox.appendChild(titleNode);
    cartBox.appendChild(priceNode);
    cartBox.appendChild(buttonNode);

    return cartBox;
}
const CheckOutBTN = document.getElementById('Checkout_btn');
const ClearCart = () => {
    console.log(cartItems);
    cartItems = [];
    console.log("Clear Cart.1");
}

CheckOutBTN.addEventListener('click', ClearCart);
// Add to cart function

let cartItems = []

const addingToCart = async (id) => {
const PRODUCTS = await getAllProducts()
    const product = PRODUCTS.items.find((product) => product.id === id)
    const existingItem = cartItems.find((cartitem) => cartitem.id === product.id)
    if (!existingItem){
        const newObject = { ...product, priceQuantity: 1, totalValue: product.price }
        cartItems.push(newObject)
    } else {
        existingItem.priceQuantity++
        existingItem.totalValue = existingItem.price * existingItem.priceQuantity
        // console.log(cartItems);
    }
    generateCartNode()
    checkoutTotal()
    // ClearCart()
}
const checkoutTotal = () => {
    const SubTotal = document.getElementById('subTotal');
    SubTotal.innerText = "";
    const ServiceCharges = document.getElementById('serviceCharges');
    const OverAllTotal = document.getElementById('overAllTotal');

    const serviceCharge = 200;
    ServiceCharges.innerText = `$${serviceCharge}`

    let PreTotal = 0;
    cartItems.forEach(element => {
        PreTotal += Number(element.totalValue)
        // console.log(PreTotal);
    });

    SubTotal.innerText = PreTotal;
    OverAllTotal.innerText =  Number(PreTotal) + Number(serviceCharge);
}

// Creating cart item card
const createCartAddedItmes = ({name, price, image, totalValue, priceQuantity}) => {
    const AddedItemBoxInContainer = document.createElement('div');
    AddedItemBoxInContainer.classList.add('Added_item');
    const CartImageNamePriceDIv = document.createElement('div')
    AddedItemBoxInContainer.appendChild(CartImageNamePriceDIv);
    const imageNode = new Image(100, 100);
    imageNode.src = image;
    const titleNode = document.createElement('p');
    titleNode.innerText = name;
    const priceNode = document.createElement('p');
    priceNode.innerText = price;
    CartImageNamePriceDIv.appendChild(imageNode);
    CartImageNamePriceDIv.appendChild(titleNode);
    CartImageNamePriceDIv.appendChild(priceNode);
    const PriceQuantity = document.createElement('div');
    PriceQuantity.classList.add('price-div');
    AddedItemBoxInContainer.appendChild(PriceQuantity);
    const CartQuqntityAddSub = document.createElement('div');
    CartQuqntityAddSub.classList.add('add-sub');
    PriceQuantity.appendChild(CartQuqntityAddSub);
    const SubButten = document.createElement('button');
    SubButten.classList.add('sub-btn');
    SubButten.innerText = '-';
    const QuantityDiv = document.createElement('div');
    QuantityDiv.innerText = priceQuantity;
    const AddButten = document.createElement('div');
    AddButten.classList.add('add-btn');
    AddButten.innerText = '+';
    CartQuqntityAddSub.appendChild(SubButten);
    CartQuqntityAddSub.appendChild(QuantityDiv);
    CartQuqntityAddSub.appendChild(AddButten);
    const TotalDiv = document.createElement('div');
    TotalDiv.classList.add('Total-div');
    PriceQuantity.appendChild(TotalDiv)
    const TotalItem = document.createElement('p')
    TotalItem.innerText = "Total:";
    const TotalValue = document.createElement('p');
    TotalValue.innerText = totalValue;
    TotalDiv.appendChild(TotalItem);
    TotalDiv.appendChild(TotalValue);
    
    
    return AddedItemBoxInContainer;
}

// Creating a modal
const CartModal = document.getElementById('MainCart')
const CartModalContainer = document.getElementById('cart-modal');
// Function that display the cart modal
const displayModal = () => {
    CartModalContainer.style.display ='block';
}
// Function that close cart modal
const CloseModal = (e) => {
    if (e.target.id === "cart-modal" || e.target.id === "close-btn") {
        CartModalContainer.style.display ='none';
    }
} 
// Adding event listener to the cart to activite the functions above
CartModal.addEventListener('click', displayModal);
CartModalContainer.addEventListener('click', CloseModal);

// Function that generate the product to the cart modal 
const generateNode = async () => {
const PRODUCTS = await getAllProducts()
    PRODUCTS.items.map(item => {
        const cartItem = createCartNode(item)
        Container.appendChild(cartItem)
        // console.log(cartItem);
    })

    generateCartNode()
    checkoutTotal()
}
generateNode()

// const testFn = (item) => {
//     console.log(item.image);
//     console.log(item.name);
//     console.log(item.price);
// }

// items.forEach(item => testFn(item))


{/* 
1. Create a cartList ==> HTML and CSS [done]
2. ad an id to all of the items in your db.json [done]
3. Create a utility function that saves cart items to the cart array [half way done]
4. Use the Id available in the function to find the right product in the products List
5. Calculate the total cost by multiplying the price to the quantity
*/}
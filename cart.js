
const SEARCH = document.getElementById('filtersearch');
const Container = document.querySelector(".items_container")

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


// calling element, creating element and creating a defunction
const createCartNode = ({name, price, image}) => {
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
    buttonNode.classList.add('btn');
    buttonNode.innerText = 'Add To Cart';
    // cartBoxContainer.appendElement(cartBox);
    cartBox.appendChild(imageNode);
    cartBox.appendChild(titleNode);
    cartBox.appendChild(priceNode);
    cartBox.appendChild(buttonNode);

    return cartBox;
}

const CartModal = document.getElementById('MainCart')
const CartModalContainer = document.getElementById('cart-modal');

const displayModal = () => {
    CartModalContainer.style.display ='block';
}

const CloseModal = () => {
    CartModalContainer.style.display ='none';
}
CartModal.addEventListener('click', displayModal);
CartModalContainer.addEventListener('click', CloseModal);


const getAllProducts = async () => {
    const res = await fetch("./db.json")
    const products = await res.json()
    return products
}

const generateNode = async () => {
    const products = await getAllProducts();
    // console.log(products);
    
    products.items.map(item => {
        const cartItem = createCartNode(item)
        Container.appendChild(cartItem)
        // console.log(cartItem);
    })
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
2. Create a utility function that saves cart items to the cart array
3. ad an id to all of the items in your db.json [done]


*/}
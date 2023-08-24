
let list = document.getElementById("list")

let items = [
    {id: 1, title: "Book", price: "#500"},
    {id: 2, title: "Shoe", price: "#900"},
    {id: 3, title: "Shirt", price: "#300"},
    {id: 4, title: "Chair", price: "#700"},
]

function showList(){
    for(i = 0; i < items.length; i++ ){
        let item = document.createElement("p")
        item.innerText = `${items[i].title} - ${items[i].price}`
        list.appendChild(item)
    } 
}

showList()
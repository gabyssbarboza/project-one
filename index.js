

const items = [
    {
        "title": "Lorem Ipsum 1",
        "subtitle": "UI",
        "color": "purple",
        "img": "path.png",
        "stock": "20 in stock",
        "price": "65",
        "rating": "4.1",
        "src": "https://friconix.com/png/fi-ewsuxx-equilateral-triangle.png"
    },
    {
        "title": "Lorem Ipsum 2",
        "subtitle": "UI",
        "color": "green",
        "img": "path.png",
        "stock": "28 in stock",
        "price": "68",
        "rating": "3.0",
        "src": "https://friconix.com/png/fi-ewsuxx-equilateral-triangle.png"
    },
    {
        "title": "Lorem Ipsum 3",
        "subtitle": "UI",
        "color": "red",
        "img": "path.png",
        "stock": "2 in stock",
        "price": "67",
        "rating": "1.0",
        "src": "https://friconix.com/png/fi-ewsuxx-equilateral-triangle.png"
    },
    {
        "title": "Lorem Ipsum 4",
        "subtitle": "UI",
        "color": "black",
        "img": "path.png",
        "stock": "29 in stock",
        "price": "60",
        "rating": "4.0",
        "src": "https://friconix.com/png/fi-ewsuxx-equilateral-triangle.png"
    },
    {
        "title": "Lorem Ipsum 5",
        "subtitle": "UI",
        "color": "aquamarine",
        "img": "path.png",
        "stock": "85 in stock",
        "price": "60",
        "rating": "3.0",
        "src": "https://friconix.com/png/fi-ewsuxx-equilateral-triangle.png"
    },
    {
        "title": "Lorem Ipsum 6",
        "subtitle": "UI",
        "color": "grey",
        "img": "path.png",
        "stock": "12 in stock",
        "price": "60",
        "rating": "3.2",
        "src": "https://friconix.com/png/fi-ewsuxx-equilateral-triangle.png"
    },
    {
        "title": "Lorem Ipsum 7",
        "subtitle": "UI",
        "color": "pink",
        "img": "path.png",
        "stock": "8 in stock",
        "price": "60",
        "rating": "2.0",
        "src": "https://friconix.com/png/fi-ewsuxx-equilateral-triangle.png"
    },
    {
        "title": "Lorem Ipsum 8",
        "subtitle": "UI",
        "color": "orange",
        "img": "path.png",
        "stock": "88 in stock",
        "price": "60",
        "rating": "1.0",
        "src": "https://friconix.com/png/fi-ewsuxx-equilateral-triangle.png"
    }
];


function createNode(element) {
    return document.createElement(element); // Append the second parameter(element) to the first one
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

const menu = document.querySelector(".side")
const openMenu = document.querySelector(".side-titulo")
console.log(openMenu)
openMenu.addEventListener("click", function() {
    menu.classList.toggle("mobile")
})



// const table = document.querySelector(".middle-content-table")
const table = document.querySelector(".middle-content-table__all")


// for(let i = 0; i < items.length; i ++){
//     const price = Number(items[i].price);
//     const currency = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//     const priceTd = createNode("td")
//     priceTd.innerHTML = currency;


// }



items.forEach((item) => {
    
    // const head = createNode("table");
        var tr = createNode("tr");
        const checkbox = createNode("td")
        const check = createNode("input")
        const name = createNode("td")
        const price = createNode("td")
        const rating = createNode("td")
        const img = createNode("img")
        const colored = createNode("div");
        const priced = Number(item.price);
        const currency = priced.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        // console.log(currency)
        colored.style.width = "14px"
        colored.style.height = "14px"
        colored.style.borderRadius = "3px";
        colored.style.display = "inline-block";
        colored.style.background = item.color;
        console.log(colored)
        price.innerText = currency;
        console.log(price)
        check.type = "checkbox";
        check.className = "table-check-edit-remove"
        const stock = createNode("td")
        const color = createNode("td")
        const title = createNode("input")
        title.disabled = true;
        // name.innerHTML = item.title;
        stock.innerHTML = item.stock;
        title.value = item.title;
        color.innerHTML = item.color;
        rating.innerHTML = item.rating;
        img.src = item.src;
        append(name, img)
        append(color, colored)
        append(name, title)
        append(tr, checkbox);
        append(checkbox, check);
        append(tr, name);
        append(tr, stock);
        append(tr, color);
        append(tr, price);
        append(tr, rating);
    // append(head, tr)
    append(table, tr)
    // console.log(head)
    return table;
})


const allChecks = document.querySelectorAll(".table-check-edit-remove");
console.log(allChecks)

allChecks.forEach((item => {
    item.addEventListener("click", function(){
        console.log(item.parentNode.parentNode)
        const rowTag = item.parentNode.parentNode;
        const teste = item.parentNode.parentNode.parentNode;
    teste.removeChild(rowTag)
        

    })
}))
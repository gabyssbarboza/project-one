////change theme 

var toggle = document.querySelector(".side-container-toggle__content")

toggle.addEventListener("change", function() {
        if(this.checked){
            document.documentElement.setAttribute("data-theme", "dark")
        }else{
            document.documentElement.setAttribute("data-theme", "clean")
        }
})




const items = [
    {
        "title": "Lorem Ipsum 1",
        "subtitle": "Lorem 1",
        "color": "purple",
        "img": "path.png",
        "stock": "no stock",
        "price": "65",
        "rating": "4.1",
        "src": "./teste.png"
    },
    {
        "title": "Lorem Ipsum 2",
        "subtitle": "Lorem 2",
        "color": "green",
        "img": "path.png",
        "stock": "28 in stock",
        "price": "68",
        "rating": "3.0",
        "src": "./teste.png"
    },
    {
        "title": "Lorem Ipsum 3",
        "subtitle": "Lorem 3",
        "color": "red",
        "img": "path.png",
        "stock": "2 in stock",
        "price": "67",
        "rating": "1.0",
        "src": "./teste.png"
    },
    {
        "title": "Lorem Ipsum 4",
        "subtitle": "Lorem 4",
        "color": "black",
        "img": "path.png",
        "stock": "no stock",
        "price": "60",
        "rating": "4.0",
        "src": "./teste.png"
    },
    {
        "title": "Lorem Ipsum 5",
        "subtitle": "Lorem 5",
        "color": "aquamarine",
        "img": "path.png",
        "stock": "85 in stock",
        "price": "60",
        "rating": "3.0",
        "src": "./teste.png"
    },
    {
        "title": "Lorem Ipsum 6",
        "subtitle": "Lorem 6",
        "color": "grey",
        "img": "path.png",
        "stock": "12 in stock",
        "price": "60",
        "rating": "3.2",
        "src": "./teste.png"
    },
    {
        "title": "Lorem Ipsum 7",
        "subtitle": "Lorem 7",
        "color": "pink",
        "img": "path.png",
        "stock": "8 in stock",
        "price": "60",
        "rating": "2.0",
        "src": "./teste.png"
    },
    {
        "title": "Lorem Ipsum 8",
        "subtitle": "Lorem 8",
        "color": "orange",
        "img": "path.png",
        "stock": "88 in stock",
        "price": "60",
        "rating": "1.0",
        "src": "./teste.png"
    }
];


function createNode(el) {
    return document.createElement(el); 
}

function append(parent, el) {
    return parent.appendChild(el);
}


const menu = document.querySelector(".side-container");
const openMenu = document.querySelector(".side-mobile");
openMenu.addEventListener("click", function() {
    menu.classList.toggle("mobile");
})

const table = document.querySelector(".middle-content-table__content")

const makeTable = () => {
items.forEach((item) => {

        var content = createNode("div");
        const checkbox = createNode("div");
        const check = createNode("input");
        check.type = "checkbox";
        check.className = "table-check-edit-remove";
        content.classList = "middle-content-table__row" ;
        append(checkbox, check);
        append(content, checkbox);



       
        // então, a principio o title e o subTitle eram inputs disabled que ficavam editaveis quando ativados, 
        // mas ai eu descobri a propriedade de contentEditable do html e acabei usando ela
        const name = createNode("div");

        const img = createNode("img");
        img.src = item.src;
        append(name, img)


        const title = createNode("p");
        const subTitle = createNode("p");
        title.innerText = item.title;
        subTitle.innerText = item.subtitle;
        title.className = "middle-content-table__row--inputs__title";
        subTitle.className = "middle-content-table__row--inputs__subtitle";
        name.classList = "middle-content-table__row--title";
        const titlesContainer = createNode("div");
        titlesContainer.classList = "middle-content-table__row--inputs";
        append(titlesContainer, title);
        append(titlesContainer, subTitle);
        append(name, titlesContainer)
        append(content, name);

        
      




 
        const stock = createNode("div");
        const stockTxt = createNode("p");
        stockTxt.innerText = item.stock;
        stock.className = "middle-content-table__row--stock";
        append(stock, stockTxt);
        append(content, stock);



        const colored = createNode("div");
        const color = createNode("div")
        const colorName = createNode("p")
        colored.style.width = "14px"
        colored.style.height = "14px"
        colored.style.borderRadius = "3px";
        colored.style.display = "inline-block";
        colored.style.background = item.color;
        colorName.innerText = item.color;
        color.className = "middle-content-table__row--colors";
        append(color, colored)
        append(color, colorName)
        append(content, color)





        const price = createNode("div");
        const priceTxt = createNode("p");
        const currency = Number(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        priceTxt.innerText = currency;
        price.classList = "middle-content-table__row--prices";
        append(price, priceTxt);
        append(content, price)




        const rating = createNode("div");
        const ratingTxt = createNode("p");
        ratingTxt.innerText = item.rating;
        rating.classList = "middle-content-table__row--ratings";
        append(rating, ratingTxt)
        append(content, rating)



        append(table, content)
        return table;
})
};

makeTable();





const allChecks = document.querySelectorAll(".table-check-edit-remove");
const deleteBtn = document.querySelector(".delete-button");
const editBtn = document.querySelector(".edit-button");

deleteBtn.addEventListener("click", function() {
    Array.from(allChecks).filter((item) => {
        if(item.checked){
             const rowTag = item.parentNode.parentNode;
            const parentAll = item.parentNode.parentNode;
            parentAll.remove(rowTag)
        }
    })
});



editBtn.addEventListener("click", function()  {
    Array.from(allChecks).filter((item) => {
        if(item.checked){
           const editFields = item.parentElement.parentNode;
        //    const editables = item.querySelectorAll(".middle-content-table__row--inputs");
           console.log(editFields)
        //    console.log(editables)
           const editables = editFields.querySelectorAll(".middle-content-table__row--inputs");
          

           for(let i = 0; i < editables.length; i++){
               const paragrafos = editables[i];
               const titulos = paragrafos.querySelectorAll(".middle-content-table__row--inputs__title")
               console.log(titulos)
               titulos.contentEditable = true;
            paragrafos.contentEditable = true;
            // paragrafos.style.background = "red";

            

            // inputs[i].addEventListener("keyup", function(event) {

            //     console.log('evento')
            //     if (event.keyCode === 13) {
            //         event.preventDefault();
            //         this.disabled = true;
            //     }
            // });
           } 
        }
    })
});

const select = document.getElementById("teste")
console.log(select)
select.addEventListener("change", function(e){
    const stockRow = document.querySelectorAll(".middle-content-table__row--stock");
    const target = e.target.value
    if(target != "all"){
    for(i = 0; i < stockRow.length; i++){
        const inStock = stockRow[i].innerText;
        var parentRow = stockRow[i].parentElement;
        const onStock = inStock.split(" ").join("").toUpperCase();
       if(onStock.includes(target.toUpperCase())){
           console.log("inclui")
          
           parentRow.style.display = "";
       }else{
        parentRow.style.display = "none";
       }
       
    }
} else{
    for(i = 0; i < stockRow.length; i++){
    var parent = stockRow[i].parentElement;
    parent.style.display = "flex";
    }
}
})


function searching(){
var input, filter, ul, li, a, i, txtValue;

input = document.querySelector("#input-search");
filter = input.value.toUpperCase();
ul = document.querySelector(".middle-content-table__content");
console.log(ul)
li = ul.getElementsByClassName("middle-content-table__row");

for(i = 0; i < li.length; i++){
    a = li[i].getElementsByTagName('p')[0];
    console.log(a)
    txtValue =  a.textContent || a.innerText ;
    // console.log(txtValue)
    console.log(a.innerHTML)
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // console.log(textValue)
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    
}
}
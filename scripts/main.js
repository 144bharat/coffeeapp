let login = document.getElementById("login_id");
login.addEventListener("click", () => {

    window.location.href = "../component/login.html";
})
let signup = document.getElementById("signup_id");
signup.addEventListener("click", () => {

    window.location.href = "../component/signup.html";
})
async function mydata() {

    let res = await fetch(`http://localhost:3000/all`)
    let data = await res.json();
    console.log("data:", data);
    getdata(data);
}
mydata();


function getdata(data) {
    let menu = document.getElementById("menu");
    menu.innerHTML = null;
    data.forEach((e) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = e.image;

        let title = document.createElement("h2");
        title.innerText = e.title;

        let price = document.createElement("h4");
        price.innerText = "$" + e.price;

        let button = document.createElement("button");
        button.innerText = "AddCart";
        button.className = "custom-btn btn-6";
        button.addEventListener("click", function() {
            addme(e);
        })

        let cartimg = document.createElement("i");
        // cartimg.src = "https://cdn-icons-png.flaticon.com/512/1170/1170576.png";
        cartimg.className = "fa-solid fa-cart-shopping";
        cartimg.style.fontSize="30px";
        cartimg.style.color="blue";
        div.append(img, title, price, button, cartimg);

        menu.append(div);
    })
}

let arr = JSON.parse(localStorage.getItem("coffee")) || [];

function addme(e) {
    arr.push(e);
    localStorage.setItem("coffee", JSON.stringify(arr));
    window.location.reload();
}
let count = document.getElementById("coffee_count");
count.innerText = arr.length;
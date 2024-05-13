const menuIcon = document.querySelector(".ri-menu-line");
const dropdownMenu = document.getElementById("fullscreenMenu");
// const menuItems = document.querySelectorAll("#menuItems li");

function openFullscreenMenu() {
  // Show the dropdown menu
  dropdownMenu.style.display = "block";

  // Animate menu items
  gsap.from("#fullscreenMenu ul li", {
    opacity: 0,
    y: -80,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger:{
        trigger:"menuIcon",
        scroller:"dropdownMenu",
    }
  });
}

function closeFullscreenMenu() {
  // Hide the dropdown menu
  dropdownMenu.style.display = "none";
  
}
document.getElementById("signin").addEventListener("click", function() {
    dropdownMenu.style.display = "none";
    document.getElementById("signinForm").style.display = "block";
  });

  document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("signinForm").style.display = "none";
    dropdownMenu.style.display = "block";
  })

  document.getElementById("signUP").addEventListener("click", function() {
    document.getElementById("signinForm").style.display = "none";
    document.getElementById("signUPForm").style.display = "block";
  });
document.getElementById("backMenu").addEventListener("click", function() {
    document.getElementById("signUPForm").style.display = "none";
    dropdownMenu.style.display = "block";
  });

document.getElementById("signIn").addEventListener("click", function() {
    document.getElementById("signUPForm").style.display = "none";
    document.getElementById("signinForm").style.display = "block";
  });
document.getElementById("forgetP").addEventListener("click", function() {
    document.getElementById("signinForm").style.display = "none";
    document.getElementById("forgetForm").style.display = "block";
})


const product = [
    {
        id: 'child1',
        image: './assests/f1.jpg',
        'data-color': "#D4D0D3",
        title: 'Brown wooden Base',
        price: 350,
    },
    {
        id: 'child2',
        image: './assests/f2.jpg',
        'data-color': "#D4D0D3",
        title: 'Patio',
        price: 250,
    },
    {
        id: 'child3',
        image: "./assests/f8.jpg",
        'data-color': "#E6DFD7",
        title: 'Modern Self',
        price: 399,
    },
    {
        id: 'child4',
        image: "./assests/f9.jpg",
        'data-color': "#B4D5B6",
        title: 'Self',
        price:  499,
    }
];

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Function to render products
    function renderProducts() {
        const productHTML = product.map(item => {
            const { id, image, title, price, 'data-color': dataColor } = item;
            return `
                <div class="child" id="${id}" data-color="${dataColor}" data-title="${title}" data-price="${price}">
                    <img src="${image}" alt="">
                    <div class="childInfo">
                          <a href="#">${title}</a>
                    </div>
                    
                </div>`;
        }).join('');
        document.getElementById('page3').innerHTML = productHTML;
    }

    renderProducts();


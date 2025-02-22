// saving the data
const products = [
    {
      image: "./assets/200w-solar-panel.jpeg",
      name: "White Solar Panel",
      id: "234askfhjebjdyuw1",
      brandID: "LPBA4A200",
      description: "Long-term white solar panel.",
      rating: { stars: 4.5, count: 87 },
      price: 1290,
      keywords: ["white", "solar", "Panels"],
      realatedImages: {
        img1: "./assets/200w-solar-panel.jpeg",
        img2: "./assets/client-a.jpg",
        img3: "./assets/client-b.jpg",
        img4: "./assets/client-c.jpg",
        img5: "./assets/client-d.jpg",
        img6: "./assets/200w-solar-panel.jpeg",
        img7: "./assets/200w-solar-panel.jpeg",
      },
      pdf: "./assets/files/LPBA48200.pdf",
      imgVid: "./assets/img_video.mp4"
    }
  ];
  
  // the cart variable - containing items added to the cart
  const cart = [];
  

  const productsContainer = document.getElementById("products-container");
  const cartCount = document.getElementById("cart-count");
  const modal = document.getElementById("details-modal");
  const modalDetails = document.getElementById("modal-details");
  const closeModal = document.getElementById("close-modal");
  
  function renderProducts() {
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">$${product.price}</div>
        <button class="add">Add to Cart</button>
        <button class="details">View Details</button>
      `;
  
      productDiv.querySelector(".add").addEventListener("click", () => {
        cart.push(product);
        cartCount.textContent = cart.length;
      });
  
      productDiv.querySelector(".details").addEventListener("click", () => {
        showDetails(product);
      });
  
      productsContainer.appendChild(productDiv);
    });
  }
  
  renderProducts();
  
  function showDetails(product) {
    modalDetails.innerHTML = `
    <div class="product-details-container">
        <div class="container">
            <div class="elements">
                <img class="item" data-content="${product.realatedImages.img1}" src="${product.realatedImages.img1}" alt="Image 1" />
                <img class="item" data-content="${product.realatedImages.img2}" src="${product.realatedImages.img2}" alt="Image 2" />
                <img class="item" data-content="${product.realatedImages.img3}" src="${product.realatedImages.img3}" alt="Image 3" />
                <img class="item" data-content="${product.realatedImages.img4}" src="${product.realatedImages.img4}" alt="Image 4" />
                <video class="item" data-content="${product.imgVid}" controls>
                    <source src="${product.imgVid}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="display-box">
                Click an image or video to display it here.
            </div>
        </div>
    </div>
    <div class="product-other-detail">
        <div>${product.name}</div>
        <div>${product.brandID}</div>
        <div>${product.description}</div>
        <div class="product-table-detail">
            <tr><th>Name</th><td>${product.name}</td></tr>
            <tr><th>Description</th><td>${product.description}</td></tr>
            <tr><th>Price</th><td>$${product.price}</td></tr>
            <tr><th>Rating</th><td>${product.rating.stars} stars (${product.rating.count} reviews)</td></tr>
        </div>
        <iframe class="pdf-preview" src="${product.pdf}" width="100%" height="500px"></iframe>
        <a href="../assets/files/LPBA48200.pdf" download="LPBA48200.pdf">Download PDF</a>
        <div class="order-now-btn"><button class="order-btn">Order Now</button></div>
    </div>
    `;

    modal.style.display = "flex";

    // 🛠 Fix: Ensure event listeners reattach after updating modal content
    document.querySelectorAll(".item").forEach(item => {
        item.addEventListener("click", function () {
            let contentSrc = this.getAttribute("data-content");
            console.log("Clicked Content:", contentSrc); // Debugging

            if (!contentSrc) {
                console.error("data-content is missing!");
                return;
            }

            let displayBox = document.querySelector(".display-box");

            // Slide out animation
            displayBox.classList.add("slide-out");

            setTimeout(() => {
                displayBox.innerHTML = ""; // Clear old content

                if (this.tagName === "IMG") {
                    let img = document.createElement("img");
                    img.src = contentSrc;
                    img.style.width = "100%";
                    displayBox.appendChild(img);
                } else if (this.tagName === "VIDEO") {
                    let video = document.createElement("video");
                    video.controls = true;
                    video.autoplay = true;
                    video.style.width = "100%";
                    
                    let source = document.createElement("source");
                    source.src = contentSrc;
                    source.type = "video/mp4";

                    video.appendChild(source);
                    displayBox.appendChild(video);
                }

                // Slide back in
                displayBox.classList.remove("slide-out");
                displayBox.classList.add("slide-in");
            }, 300);
        });
    });
}

// Close modal event
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

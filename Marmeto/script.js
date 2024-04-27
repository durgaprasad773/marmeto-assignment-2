const productData = {
    "product": {
        "id": 6937548554342,
        "title": "Embrace Sideboard",
        "description": "<p data-mce-fragment=\"1\">The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.</p>",
        "vendor": "Marmeto",
        "product_type": "Cloth",
        "price": "$12999",
        "compare_at_price": "$19999",
        "options": [
            {
                "name": "Color",
                "position": 1,
                "values": [
                    {
                        "Yellow": "#ECDECC"
                    },
                    {
                        "Green": "#BBD278"
                    },
                    {
                        "Blue": "#BBC1F8"
                    },
                    {
                        "Pink": "#FFD3F8"
                    }
                ]
            },
            {
                "name": "Size",
                "position": 2,
                "values": [
                    "Small",
                    "Medium",
                    "Large",
                    "Extra large",
                    "XXL"
                ]
            }
        ],
        "images": [
            {
                "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-6Y2XstWtDvM-unsplash.jpg?v=1701946731"
            },
            {
                "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-HVlOLCHlzJs-unsplash.jpg?v=1701946732"
            },
            {
                "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-om8qxMDlGfI-unsplash.jpg?v=1701946732"
            },
            {
                "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-WQgvRkmqRrg-unsplash.jpg?v=1701946731"
            }
        ]
    }
};

const product = productData.product;

document.querySelector('.product-image img').src = product.images[0].src;
document.querySelector('.vendor').textContent = product.vendor;
document.querySelector('.title').textContent = product.title;
document.querySelector('.price').textContent = product.price;
document.querySelector('.compare-price').textContent = product.compare_at_price;
const percentageOff = Math.round(((parseInt(product.compare_at_price.replace('$', '')) - parseInt(product.price.replace('$', ''))) / parseInt(product.compare_at_price.replace('$', ''))) * 100);
document.querySelector('.percentage-off').textContent = `${percentageOff}% off`;

const colorSelector = document.querySelector('.color-selector');
product.options[0].values.forEach(value => {
    const button = document.createElement('button');
    button.classList.add('color-button');
    button.style.backgroundColor = Object.values(value)[0];
    button.addEventListener('click', () => {
        document.querySelectorAll('.color-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    });
    colorSelector.appendChild(button);
});

const sizeSelector = document.querySelector('.size-selector');
product.options[1].values.forEach(value => {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'size';
    radio.value = value;
    radio.id = value;
    const label = document.createElement('label');
    label.setAttribute('for', value);
    label.textContent = value;
    sizeSelector.appendChild(radio);
    sizeSelector.appendChild(label);
});


const thumbnailsContainer = document.querySelector('.thumbnails');
product.images.forEach(image => {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.innerHTML = `<img src="${image.src}" alt="Thumbnail">`;
    thumbnail.addEventListener('click', () => {
        document.querySelector('.product-image img').src = image.src;
    });
    thumbnailsContainer.appendChild(thumbnail);
});


const quantityElement = document.querySelector('.quantity');
let quantity = 1;
document.querySelector('.quantity-button.minus').addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
    }
});
document.querySelector('.quantity-button.plus').addEventListener('click', () => {
    quantity++;
    quantityElement.textContent = quantity;
});


const addToCartButton = document.querySelector('.add-to-cart');
const addToCartMessage = document.querySelector('.add-to-cart-message');
addToCartButton.addEventListener('click', () => {
    addToCartMessage.textContent = `Added to cart: ${product.title}, Color: ${document.querySelector('.color-button.selected').style.backgroundColor}, Size: ${document.querySelector('input[name="size"]:checked').value}, Quantity: ${quantity}`;
});
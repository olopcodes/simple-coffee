$(document).ready(function () {
    const coffeeFilterBtns = $('.btn-filter');
    const items = $('.coffee-collection-item');
    const collectionList = $('.coffee-collection-list');
    const cartBtn = $('.btn-cart');
    const coffeeCartEl = $('.coffee-cart');
    const coffeeCartListEl = $('.coffee-cart-list');
    const cart = {
        items: [1],
        totalPrice: 0,
        totalItems: 0,
        calcTotalPrice() {

        },
        calcTotalItems() {

        }
    };

    $(coffeeFilterBtns).click(function (e) {
        e.preventDefault();
        const id = $(e.target).attr('id');
        let html = ''
        // if active class not present run code
        if (!$(e.target).hasClass('btn-active')) {
            $(coffeeFilterBtns).removeClass('btn-active');
            $(e.target).addClass('btn-active');
            filteredItems(id)
        }

    });

    $(cartBtn).click(function (e) {
        e.preventDefault();
        if (!$(coffeeCartEl).hasClass('hide')) {
            $(coffeeCartEl).addClass('hide')
        } else {
            $(coffeeCartEl).removeClass('hide');

            if (cart.items.length > 0) {
                $('.coffee-cart h3').addClass('hide');
                $(coffeeCartListEl).removeClass('hide');

                cart.items
            }
        }
    });

    $(cartBtn).on('click', '.coffee-cart-btn', function () {
        // cartCoffeeItemHtml(cart.items);
    });

    $(collectionList).click(function (e) {
        if ($(e.target).hasClass('coffee-btn-add-to-cart')) {
            const item = $(e.target).parent()[0];

            const name = $(item).find('h2').text().trim();
            const price = $(item).find('.coffee-price').text().trim();

            cart.items.push({
                name: name,
                price: price,
                quantity: 1
            });
        }
    })

    function filteredItems(id) {
        $(collectionList).html('')

        $.each(items, function (index, value) {
            if (!$(value).hasClass('sold-out') && id === 'available') {
                $(collectionList).append(value);
            } else if (id === 'all') {
                $(collectionList).append(value);
            }

        });

    }

    function cartCoffeeItemHtml(arr) {
        let html = ``;

        $.each(arr, function (indexInArray, valueOfElement) {
            console.log(valueOfElement)
        });

        reuturn`
        <li class="coffee-cart-item">
            <h4 class="coffee-cart-name">hot chocolate</h4>
            <button id="decrease" class="coffee-cart-btn">-</button>
            <span class="coffee-cart-amount">1</span>
            <button id="increase" class="coffee-cart-btn">+</button>
            <span class="coffee-cart-item-price">$5.10</span>
        </li>
        `;
    }


});
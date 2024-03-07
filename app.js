$(document).ready(function () {
    const coffeeFilterBtns = $('.btn-filter');
    const items = $('.coffee-collection-item');
    const collectionList = $('.coffee-collection-list');
    const cartBtn = $('.btn-cart');
    const coffeeCartEl = $('.coffee-cart');
    const coffeeCartListEl = $('.coffee-cart-list');
    const cart = {
        items: [],
        totalPrice: 0,
        totalItems: 0,

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
            let html = '';

            $(coffeeCartEl).removeClass('hide');

            if (cart.items.length > 0) {
                $('.coffee-cart h3').addClass('hide');
                $(coffeeCartListEl).removeClass('hide');

                $.each(cart.items, function (index, value) {
                    html += cartCoffeeItemHtml(value)
                });
            }
            $(coffeeCartListEl).html('');

            calcTotalPrice(cart);

            html += cartTotalHTML(cart.totalPrice);

            $(coffeeCartListEl).append(html);
        }
    });

    $(coffeeCartListEl).on('click', '.coffee-cart-btn', function (e) {

        const btnClickedId = $(e.target).attr('id');
        const itemId = $(e.target).parent().attr('id');
        const currentItem = getCartItem(cart.items, itemId);

        if (btnClickedId === 'decrease' && currentItem.quantity !== 0) {

        }


    });

    $(collectionList).click(function (e) {
        if ($(e.target).hasClass('coffee-btn-add-to-cart')) {
            const id = $(e.target).parent().parent().attr('id')
            const item = $(e.target).parent()[0];
            const name = $(item).find('h2').text().trim();
            const price = $(item).find('.coffee-price').text().trim();

            cart.items.push({
                id: id,
                name: name,
                price: price,
                quantity: 1
            });
        }
    })

    function getCartItem(arr, id) {
        let item
        $.each(arr, function (index, value) {
            if (value.id === id) {
                item = value;
            }
        });

        return item;
    }

    function calcTotalPrice(obj) {
        let total = 0;

        $.each(obj.items, function (index, value) {
            const price = Number(value.price.slice(1));

            total += price;
        });

        cart.totalPrice = total.toFixed(2);
    }

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

    function cartCoffeeItemHtml(obj) {

        return `
        <li id="${obj.id}" class="coffee-cart-item">
            <h4 class="coffee-cart-name">${obj.name}</h4>
            <button id="decrease" class="coffee-cart-btn">-</button>
            <span class="coffee-cart-amount">${obj.quantity}</span>
            <button id="increase" class="coffee-cart-btn">+</button>
            <span class="coffee-cart-item-price">${obj.price}</span>
        </li>
        `;
    }

    function cartTotalHTML(price) {
        return `
        <li class="coffee-cart-item-total">
            <h4>total:</h4>
            <span class="coffee-cart-total-cost">$${price}</span>
        </li>
        `
    }

    function updatePrice(obj) {

    }


});
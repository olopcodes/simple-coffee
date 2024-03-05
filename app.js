$(document).ready(function () {
    const coffeeFilterBtns = $('.btn-filter');
    const items = $('.coffee-collection-item');
    const collectionList = $('.coffee-collection-list');
    const cartBtn = $('.btn-cart');
    const coffeeCartEl = $('.coffee-cart');
    const itemsInCart = $('.items-in-cart');
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
                $(itemsInCart).text(cart.totalItems);
            }
        }
    });



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


});
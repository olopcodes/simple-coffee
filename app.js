$(document).ready(function () {
    const coffeeFilterBtns = $('.btn-filter');
    const items = $('.coffee-collection-item');
    const collectionList = $('.coffee-collection-list');

    const cart = {
        items: [],
        totalPrice: 0
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

    function render(filteredItems) {
        let html = ''
        $.each(filteredItems, function (indexInArray, valueOfElement) {
            html += filteredItems[indexInArray];
        });

        $('.coffee-collection-list').append(html)

    }
});
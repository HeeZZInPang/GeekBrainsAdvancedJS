const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

class GoodsList {
    goods = [];

    __getGoodsItemTemplated = ({ title, price }) => {
        return `<div class="goods-item">
            <h3>${title}</h3>
            <p>${price}</p>
        </div>`
    }

    getGoods(goods) {
        this.goods = goods;
    }

    render(selector = '.goods-list') {
        if (this.goods.length === 0) return;
        const goodsList = this.goods.map(item => this.__getGoodsItemTemplated(item)).join("");
        document.querySelector(selector).innerHTML = goodsList;
    }

    sumOfGoods() {
        let arrGoods = this.goods;
        let sum = 0;
        arrGoods.forEach(elemGoods => sum += +elemGoods.price);
        return sum;
    }
}

class BasketOfGoods {
    goods = [];

    addGoodsToBasket() {

    }

    editGoodsInBasket() {

    }

    removeGoodsFromBasket() {

    }
}

class ItemBasketOfGoods {

}

const list = new GoodsList();

list.getGoods(goods);
list.render();
list.sumOfGoods();


class FruitBasket {
  constructor() {
    this.fruitsBasket = [];
  }

  addItem(fruit) {
    console.log(`${fruit} ditambahkan ke dalam keranjang.`);
    this.fruitsBasket.push(fruit);
  }

  removeLastItem() {
    if (this.fruitsBasket.length > 0) {
      const removed = this.fruitsBasket.pop();
      console.log(`${removed} dihapus dari keranjang.`);
    } else {
      console.log('Keranjang kosong, tidak ada buah yang bisa dihapus.');
    }
  }

  getInformation() {
    console.log('Isi keranjang buah:');
    console.log(this.fruitsBasket.length > 0 ? this.fruitsBasket.join(', ') : 'Kosong');
  }
}


const basket = new FruitBasket();
basket.addItem('Melon');
basket.addItem('Semangka');
basket.getInformation();
basket.removeLastItem();
basket.getInformation();

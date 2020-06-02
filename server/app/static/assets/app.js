let items = [
  {
    name: 'pencil',
    price: 300,
    quantity: 3
  },
  {
    name: 'note',
    price: 400,
    quantity: 2
  },
  {
    name: 'eraser',
    price: 500,
    quantity: 0
  }
]

let vm = new Vue({
  el: '#app',
  data: {
    items: items,
    count: 0,
    timerId: null
  },
  filters: {
    numberWithDelimiter: function (value) {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
  },
  computed: {
    totalPrice: function () {
      return this.items.reduce(
        function (sum, item) {
          return sum + (item.price * item.quantity);
        },
        0
      )
    },
    totalPriceWithTax: function () {
      return Math.floor(this.totalPrice * 1.10);
    },
    canBuy: function() {
      return this.totalPrice >= 1000;
    },
    errorMessageStyle: function () {
      return {
        border: this.canBuy ? '' : '1px solid red',
        color: this.canBuy ? '' : 'red'
      }
    }
  },
  created: function () {
    console.log('created');
    let that = this
    console.log(this.count);
    console.log(this.$el);
    this.timerId = setInterval(function () {
      that.count += 1;
    }, 1000)
  },
  mounted: function () {
    console.log('mounted');
    console.log(this.$log);
  },
  beforeDestroy: function () {
    console.log('beforeDestroy');
    clearInterval(this.timerId);
  },
  methods: {
    doBuy: function () {
      alert('Total price with tax is JPY' + this.totalPriceWithTax);
      this.items.forEach(function (item) {
        item.quantity = 0;
      });
    }
  }
})

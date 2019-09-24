const app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    image: "./assets/vmSocks-green.jpg",
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue.jpg"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart++;
    },
    updateProduct: function(variantImage) {
      this.image = variantImage;
    }
  }
});

function vibratePhone(pattern=[60]) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

const products = [
  { category:'Bebidas', name:'Coca-Cola 350mL', price:1300, img:'bebidas/coca5.jfif' },
  { category:'Bebidas', name:'Coca-Cola 600mL', price:2000, img:'bebidas/coca5.jfif' },
  { category:'Bebidas', name:'Coca-Cola 1,5L', price:2800, img:'bebidas/coca15.jpg' },
  { category:'Bebidas', name:'Coca-Cola 2L', price:3200, img:'bebidas/cocaR.png' },
  { category:'Bebidas', name:'Coca-Cola 2.5L', price:3800, img:'bebidas/cocaR.png' },
  { category:'Bebidas', name:'Coca-Cola 3L', price:4800, img:'bebidas/coca3.jfif' },
  { category:'Bebidas', name:'Fanta/Sprite 2L', price:3200, img:'bebidas/fanta.jfif' },

  { category:'Bebidas', name:'Manaos 3L', price:2000, img:'bebidas/manaos.jfif' },
  { category:'Bebidas', name:'Secco 3L', price:2500, img:'bebidas/secco.jfif' },
  { category:'Bebidas', name:'Marinaro 3L', price:1900, img:'bebidas/marin.jfif' },
  { category:'Bebidas', name:'Ice 2,25L', price:1600, img:'bebidas/ice.jfif' },
    // jugos

  { category:'Jugos', name:'Cepita del valle 1L', price:2800, img:'bebidas/cepita2.jfif' },
  { category:'Jugos', name:'Cepita del valle 1,5L', price:3600, img:'bebidas/cepita.jfif' },
  { category:'Jugos', name:'Fresh 500mL', price:900, img:'bebidas/fresh.jfif' },
  { category:'Jugos', name:'Fresh 1,5L', price:1700, img:'bebidas/fresh2.jfif' },
  { category:'Jugos', name:'Cepita Fresh 1,5L', price:1500, img:'bebidas/Cfresh2.jfif' },
  { category:'Jugos', name:'Cepita Fresh 3L', price:2200, img:'bebidas/Cfresh.jfif' },

  { category:'Jugos', name:'Agua mineral 1,5L', price:1300, img:'bebidas/Agua.jfif' },
  { category:'Jugos', name:'Soda TalcaL', price:2000, img:'bebidas/soda.jfif' },
  { category:'Jugos', name:'Ades 1L', price:2900, img:'bebidas/ades.jfif' },



  { category:'Mercadería', name:'Yerba 500g', price:1800, img:'mercaderias/bdia.png' },
  { category:'Golosinas', name:'Chocolate', price:1500, img:'mercaderias/bdia.png' }
];

let cart = [];
let selectedPayment = 'efectivo';

function getQty(name) {
  const item = cart.find(p => p.name === name);
  return item ? item.qty : 0;
}

function renderProducts() {
  const list = document.getElementById('productList');
  list.innerHTML = '';

  const cats = [...new Set(products.map(p => p.category))];

  cats.forEach(c => {
    list.innerHTML += `<h2>${c}</h2>`;
    products.filter(p => p.category === c).forEach(p => {
      list.innerHTML += `
        <div class="product">
          <img src="${p.img}">
          <h3>${p.name}</h3>
          <div class="price">$${p.price}</div>
          <div class="controls">
            <button onclick="addToCart('${p.name}',${p.price},event)">+</button>
            <span class="counter">${getQty(p.name)}</span>
            <button class="remove" onclick="removeOne('${p.name}')">−</button>
          </div>
        </div>`;
    });
  });
}

function addToCart(name, price, e) {
  const item = cart.find(p => p.name === name);
  item ? item.qty++ : cart.push({ name, price, qty: 1 });

  document.getElementById('addSound').play();
  vibratePhone([40]);

  const card = e.target.closest('.product');
  card.classList.add('added');
  setTimeout(() => card.classList.remove('added'), 300);

  renderProducts();
  renderCart();
}

function removeOne(name) {
  const item = cart.find(p => p.name === name);
  if (!item) return;

  item.qty--;
  vibratePhone([20,30,20]);

  if (item.qty === 0)
    cart = cart.filter(p => p.name !== name);

  renderProducts();
  renderCart();
}

function renderCart() {
  const ul = document.getElementById('cart');
  const totalSpan = document.getElementById('total');
  const totalFloat = document.getElementById('totalFloat');
  const totalBox = document.getElementById('totalBox');

  ul.innerHTML = '';
  let total = 0;

  cart.forEach(p => {
    ul.innerHTML += `<li>${p.qty} × ${p.name} — $${(p.price*p.qty).toFixed(2)}</li>`;
    total += p.price * p.qty;
  });

  totalSpan.textContent = total.toFixed(2);
  totalFloat.textContent = total.toFixed(2);

  totalBox.classList.add('vibrate');
  setTimeout(() => totalBox.classList.remove('vibrate'), 300);
}

// Método de pago
document.querySelectorAll('.payOption').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.payOption')
      .forEach(e => e.classList.remove('selected'));

    el.classList.add('selected');
    selectedPayment = el.dataset.value;

    document.getElementById('aliasBox').style.display =
      selectedPayment === 'transferencia' ? 'block' : 'none';
  });
});

function sendWhatsApp() {
  if (cart.length === 0)
    return alert('Carrito vacío');

  let msg = 'Hola! Quiero pedir:%0A';
  let total = 0;

  cart.forEach(p => {
    msg += `- ${p.qty} x ${p.name} ($${(p.price*p.qty).toFixed(2)})%0A`;
    total += p.price * p.qty;
  });

  msg += `%0ATotal: $${total.toFixed(2)}`;
  msg += selectedPayment === 'transferencia'
    ? `%0APago por transferencia%0AAlias: barrientos0820`
    : `%0APago en efectivo`;

  window.open(
    'https://wa.me/5493873656775?text=' + msg,
    '_blank'
  );
}

renderProducts();

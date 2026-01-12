// Vibración del teléfono
function vibratePhone(pattern = [60]) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

// Lista de productos completa
const products = [
  // Bebidas
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

  // Jugos
  { category:'Jugos', name:'Cepita del valle 1L', price:2800, img:'bebidas/cepita2.jfif' },
  { category:'Jugos', name:'Cepita del valle 1,5L', price:3600, img:'bebidas/cepita.jfif' },
  { category:'Jugos', name:'Fresh 500mL', price:900, img:'bebidas/fresh.jfif' },
  { category:'Jugos', name:'Fresh 1,5L', price:1700, img:'bebidas/fresh2.jfif' },
  { category:'Jugos', name:'Cepita Fresh 1,5L', price:1500, img:'bebidas/Cfresh2.jfif' },
  { category:'Jugos', name:'Cepita Fresh 3L', price:2200, img:'bebidas/Cfresh.jfif' },
  { category:'Jugos', name:'Agua mineral 1,5L', price:1300, img:'bebidas/Agua.jfif' },
  { category:'Jugos', name:'Soda TalcaL', price:2000, img:'bebidas/soda.jfif' },
  { category:'Jugos', name:'Ades 1L', price:2900, img:'bebidas/ades.jfif' },
  { category:'Jugos', name:'Chocolatada 1L', price:2700, img:'bebidas/chocolatada.jfif' },
  { category:'Jugos', name:'Chocolatada 200mL', price:1200, img:'bebidas/chocolatada.jfif' },
  { category:'Jugos', name:'Cepita 200mL', price:1200, img:'bebidas/cepita3.jfif' },
  { category:'Jugos', name:'Baggio 200mL', price:1200, img:'bebidas/baggio.jfif' },

  // Mercadería
  { category:'Mercadería', name:'Buen Dia 250g', price:1300, img:'mercaderias/bdia.png' },
  { category:'Mercadería', name:'Mañanita 500g', price:2600, img:'mercaderias/maña.jfif' },
  { category:'Mercadería', name:'Amanda 260g', price:1500, img:'mercaderias/amanda.jfif' },
  { category:'Mercadería', name:'Arroz 1Kg', price:1400, img:'mercaderias/arroz.jfif' },
  { category:'Mercadería', name:'Caja de Te', price:1500, img:'mercaderias/te.jfif' },
  { category:'Mercadería', name:'Caja Mate cocido', price:1700, img:'mercaderias/mate.jfif' },
  { category:'Mercadería', name:'Picadillo', price:700, img:'mercaderias/picadillo.jfif' },
  { category:'Mercadería', name:'Atun', price:2500, img:'mercaderias/atun.jfif' },
  { category:'Mercadería', name:'Mermelada 500g', price:1600, img:'mercaderias/mermelada.jfif' },
  { category:'Mercadería', name:'Dulce de Leche 200g', price:2700, img:'mercaderias/dulcedl.jfif' },
  { category:'Mercadería', name:'Leche 1L', price:2300, img:'mercaderias/leche.jfif' },
  { category:'Mercadería', name:'pure de tomate', price:1200, img:'mercaderias/tomate.jfif' },
  { category:'Mercadería', name:'Harina', price:1100, img:'mercaderias/leche.jfif' },
  { category:'Mercadería', name:'Sal 500mg', price:500, img:'mercaderias/sal.jfif' },
  { category:'Mercadería', name:'Azucar 1K', price:1400, img:'mercaderias/azucar.jfif' },
  { category:'Mercadería', name:'Fideo Spagetti', price:1700, img:'mercaderias/fideoS.jfif' },
  { category:'Mercadería', name:'Fideo Guiseros', price:1700, img:'mercaderias/FideoG.jfif' },
  { category:'Mercadería', name:'Aceite 900mL', price:3900, img:'mercaderias/aceite.jfif' },
  { category:'Mercadería', name:'Vinagre 900mL', price:2600, img:'mercaderias/vinagre.jfif' },

  // Golosinas
  { category:'Golosinas', name:'Chocolate', price:1500, img:'mercaderias/bdia.png' }
];

let cart = [];
let selectedPayment = 'efectivo';

// Obtener cantidad de un producto en el carrito
function getQty(name) {
  const item = cart.find(p => p.name === name);
  return item ? item.qty : 0;
}

// Renderizar productos
function renderProducts() {
  const list = document.getElementById('productList');
  list.innerHTML = '';

  const categories = [...new Set(products.map(p => p.category))];

  categories.forEach(cat => {
    // Título de categoría
    list.innerHTML += `<h2>${cat}</h2><div class="horizontal-scroll" id="scroll-${cat}"></div>`;
    const container = document.getElementById(`scroll-${cat}`);

    products
      .filter(p => p.category === cat)
      .forEach(p => {
        container.innerHTML += `
          <div class="product">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <div class="price">$${p.price}</div>
            <div class="controls">
              <button class="remove" onclick="removeOne('${p.name}')">−</button>
              <span class="counter">${getQty(p.name)}</span>
              <button onclick="addToCart('${p.name}',${p.price},event)">+</button>
            </div>
          </div>
        `;
      });
  });
}

// Agregar al carrito
function addToCart(name, price, e) {
  const item = cart.find(p => p.name === name);
  item ? item.qty++ : cart.push({ name, price, qty: 1 });

  // Sonido y vibración
  document.getElementById('addSound')?.play();
  vibratePhone([40]);

  const card = e.target.closest('.product');
  card.classList.add('added');
  setTimeout(() => card.classList.remove('added'), 300);

  renderProducts();
  renderCart();
}

// Quitar del carrito
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

// Renderizar carrito
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

  totalBox?.classList.add('vibrate');
  setTimeout(() => totalBox?.classList.remove('vibrate'), 300);
}

// Selección de método de pago
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

// Enviar pedido por WhatsApp
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

  window.open('https://wa.me/5493873656775?text=' + msg, '_blank');
}

// Inicializar
renderProducts();

const seccionProductos = document.querySelector('.productos');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productosHTML = data.map(producto => `
      <article class="producto">
        <h2>${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p>Precio: $${producto.precio}</p>
      </article>
    `).join('');

    seccionProductos.innerHTML = productosHTML;
  })
  .catch(error => console.error(error));

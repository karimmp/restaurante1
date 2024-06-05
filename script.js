// Datos de los platillos
const dishes = [
    {
      name: "Guacamole",
      type: "antojitos",
      price: 8.99,
      ingredients: "Aguacate, tomate, cebolla, cilantro, limón, sal",
      imageUrl: "https://images.pexels.com/photos/5737254/pexels-photo-5737254.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Nachos",
      type: "antojitos",
      price: 10.99,
      ingredients: "Tortillas de maíz, frijoles refritos, queso cheddar, jalapeños, crema ácida, guacamole",
      imageUrl: "https://images.pexels.com/photos/7613427/pexels-photo-7613427.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Enchiladas Rojas",
      type: "platos-fuertes",
      price: 14.99,
      ingredients: "Tortillas de maíz, pollo deshebrado, salsa roja, queso fresco, crema ácida, cebolla",
      imageUrl: "https://images.pexels.com/photos/9772454/pexels-photo-9772454.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Fajitas de Carne Asada",
      type: "platos-fuertes",
      price: 18.99,
      ingredients: "Carne de res, pimientos, cebolla, frijoles refritos, tortillas de maíz, guacamole, salsa",
      imageUrl: "https://images.pexels.com/photos/20582037/pexels-photo-20582037/free-photo-of-trio-loco.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Margarita",
      type: "bebidas",
      price: 8.99,
      ingredients: "Tequila, triple sec, limón, sal",
      imageUrl: "https://images.pexels.com/photos/3407782/pexels-photo-3407782.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Agua de Jamaica",
      type: "bebidas",
      price: 3.99,
      ingredients: "Flor de jamaica, azúcar, limón",
      imageUrl: "https://images.pexels.com/photos/5947035/pexels-photo-5947035.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Flan Napolitano",
      type: "postres",
      price: 6.99,
      ingredients: "Huevos, leche condensada, azúcar, caramelo",
      imageUrl: "https://images.pexels.com/photos/15895833/pexels-photo-15895833/free-photo-of-flan-dessert-with-passion-fruit-sauce-on-a-plate-and-striped-tea-towel.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Churros",
      type: "postres",
      price: 5.99,
      ingredients: "Harina, agua, aceite, azúcar, canela",
      imageUrl: "https://images.pexels.com/photos/372886/pexels-photo-372886.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];
  
  // Función para generar las tarjetas de los platillos
  function createDishCards(dishes) {
    const menuItemsContainer = document.querySelector('.menu-items');
    menuItemsContainer.innerHTML = '';
  
    dishes.forEach(dish => {
      const card = document.createElement('div');
      card.classList.add('menu-item');
      card.innerHTML = `
        <img src="${dish.imageUrl}" alt="${dish.name}">
        <div class="menu-item-content">
          <h3>${dish.name}</h3>
          <p class="price">$${dish.price}</p>
          <p>Ingredientes: ${dish.ingredients}</p>
        </div>
      `;
      menuItemsContainer.appendChild(card);
    });
  }
  
  // Función para filtrar los platillos
  function filterDishes(filter) {
    const filteredDishes = filter === 'all' ? dishes : dishes.filter(dish => dish.type === filter);
    createDishCards(filteredDishes);
  }
  
  // Event listeners para los botones de filtro
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      filterDishes(button.dataset.filter);
    });
  });
  
  // Cargar todos los platillos al inicio
  createDishCards(dishes);
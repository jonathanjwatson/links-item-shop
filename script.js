var availableItems = $("#available-items");

var items = [
  {
    name: "Shield",
    price: 3,
    quantity: 100,
  },
  {
    name: "Sword",
    price: 5,
    quantity: 90,
  },
  {
    name: "Heart",
    price: 10,
    quantity: 10,
  },
  {
    name: "Arrows",
    price: 15,
    quantity: 5,
  },
];

function generateItems() {
  availableItems.empty();
  for (var i = 0; i < items.length; i++) {
    var colDiv = $("<div>").addClass("col-sm-3");
    colDiv.append($("<h1>").text(items[i].name));
    colDiv.append(
      $(
        "<h3>Price: " +
          items[i].price +
          "<img src='https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-hd/6/67/GreenRupee2.png?width=640' alt='rupee'></h3>"
      )
    );
    colDiv.append($("<h3>Quantity: " + items[i].quantity + "</h3>"));
    colDiv.append(
      $(
        '<button class="btn btn-primary" data-index="' +
          i +
          '">Buy Now</button>'
      )
    );
    availableItems.append(colDiv);
  }
}

function init() {
  var itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  if (itemsFromLocalStorage !== null) {
    items = itemsFromLocalStorage;
  }
  generateItems();
}

availableItems.on("click", ".btn-primary", function () {
  console.log($(this).attr("data-index"));
  var clickedIndex = $(this).attr("data-index");
  items[clickedIndex].quantity--;
  localStorage.setItem("items", JSON.stringify(items));
  generateItems();
});

init();

// 11-dom-read — Reading the page

/**
 * Returns the text of the page's main heading.
 */
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

/**
 * Returns the number of product cards on the page.
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * Returns the names of all products in order.
 */
export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map(
    (heading) => heading.textContent
  );
}

/**
 * Returns the price of the product with the given name.
 * Returns null if the product does not exist.
 */
export function priceOf(name) {
  const cards = document.querySelectorAll(".card");

  const card = Array.from(cards).find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

/**
 * Returns the names of products marked as sold out.
 */
export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out")).map(
    (card) => card.querySelector("h3").textContent
  );
}
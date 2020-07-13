export const getFilteredProducts = ({ ingredients, products, search }) => {
  if (!search) {
    return products
  }

  // filter ingredients by name that matches search
  const filteredIngredients = ingredients.filter((ingredient) => {
    return ingredient.name.toLowerCase().includes(search.toLowerCase())
  })

  // filter products that have ids from filteredIngredients
  const filteredProducts = products.filter((product) => {
    return product.ingredientIds.find(id => {
      return filteredIngredients.find(ingredient => ingredient.id === id)
    })
  })

  // return array of products
  return filteredProducts
}

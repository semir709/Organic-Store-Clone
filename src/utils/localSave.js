export const localSave = (product, amount) => {
  const storage = localStorage.getItem("cart");
  const local = storage ? JSON.parse(storage) : [];
  let newEntry = true;

  const newData = {
    id: product.id,
    slug: product.slug,
    title: product.title,
    image: product.image,
    price: product.price,
    shipping: product.shipping,
    amount: amount,
  };

  let checkedData = local.map((el) => {
    if (el.id === product.id) {
      newEntry = false;
      return { ...el, amount: parseInt(el.amount) + parseInt(amount) };
    }
    return el;
  });

  let error = "";

  try {
    localStorage.setItem(
      "cart",
      JSON.stringify(newEntry ? [...local, newData] : [...checkedData])
    );
  } catch (err) {
    error = err.message;
  }

  const data = {
    local: newEntry ? [...local, newData] : [...checkedData],
    error,
  };

  return data;
};

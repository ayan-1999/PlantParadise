export const fetchProduct = async () => {
  const response = await fetch("/products.json");
  const data = await response.json();
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, .5 * 1000);
  });
  return promise;
};

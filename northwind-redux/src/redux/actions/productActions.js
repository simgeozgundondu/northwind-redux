import * as actionTypes from "./actionsTypes.js";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: products };
}
export function createProductsSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductsSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    //(product.id||"") id gönderilmiş ise onu al gönderilmemişse aynı kalsın
    method: product.id ? "PUT" : "POST", //id varsa put request
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((saveProduct) => {
        product.id
          ? dispatch(updateProductsSuccess(saveProduct))
          : dispatch(createProductsSuccess(saveProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json;
  }
  const error= await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.error("api error");
  throw error;
}


export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}

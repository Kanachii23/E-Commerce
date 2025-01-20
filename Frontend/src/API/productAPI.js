import { baseURL } from ".";

export const postProductAPI = async (postData) => {
  const response = await fetch(`${baseURL}/api/products/`, {
    method: "POST",
    body: postData,
  });

  const res = await response.json();
  return res;
};

export const getProductAPI = async (postData) => {
  const response = await fetch(`${baseURL}/api/products/`, {
    method: "GET",
  });

  const res = await response.json();
  return res;
};

export const patchProductAPI = async (postData) => {
  const response = await fetch(`${baseURL}/api/products/`, {
    method: "PATCH",
  });

  const res = await response.json();
  return res;
};

export const deleteProductAPI = async (postData) => {
  const response = await fetch(`${baseURL}/api/products/`, {
    method: "DELETE",
  });

  const res = await response.json();
  return res;
};
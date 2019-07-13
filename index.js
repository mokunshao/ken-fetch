const fetch = require("node-fetch");

module.exports.get = async url => {
  const response = await fetch(url);
  const responseData = await response.json();
  return responseData;
};

module.exports.post = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();
  return responseData;
};

module.exports.put = async (url, data) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();
  return responseData;
};

module.exports.delete = async url => {
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  });
  const responseData = await "successfully deleted";
  return responseData;
};

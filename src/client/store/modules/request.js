module.exports = (type, urlString, payload = {}) => {
  const url = `/api/${urlString}`;
  if (type === 'get') {
    return fetch(url, {
      method: 'GET',
      headers: {},
      credentials: 'omit'
    })
      .then(res => {
        return res.json();
      })
      .then(
        res => {
          return res;
        },
        error => {
          throw error;
        }
      );
  }
  if (type === 'post') {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {},
      credentials: 'omit'
    })
      .then(res => {
        return res.json();
      })
      .then(
        res => {
          return res;
        },
        error => {
          throw error;
        }
      );
  }
  if (type === 'put') {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {},
      credentials: 'omit'
    })
      .then(res => {
        return res.json();
      })
      .then(
        res => {
          return res;
        },
        error => {
          throw error;
        }
      );
  }
  if (type === 'delete') {
    return fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(payload),
      headers: {},
      credentials: 'omit'
    })
      .then(res => {
        return res.json();
      })
      .then(
        res => {
          return res;
        },
        error => {
          throw error;
        }
      );
  }
  throw new Error('specify a valid request method');
};

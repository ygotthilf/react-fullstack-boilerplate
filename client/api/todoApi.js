import request from 'superagent';

export default {

  query() {
    return promisify(
      request.get('/api/todos')
    );
  },

  create(todo) {
    return promisify(
      request.post('/api/todos').send(todo)
    );
  }
};

function promisify(q) {

  return new Promise((resolve, reject) => {
    q.end((err, res) => {

      if (err) return reject(err);

      if (res.ok) return resolve(res.body);

      return reject(res);
    });
  });
}

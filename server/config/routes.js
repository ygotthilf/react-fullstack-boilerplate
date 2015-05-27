export default function(app) {

  ['todo']
    .forEach((res) => app.use(require('../api/' + res).routes()));
}

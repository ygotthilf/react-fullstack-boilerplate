import alt from '../core/alt';
import toastr from 'toastr';

class ActionsCreator {

  log(type, message, title) {
    toastr[type](message, title);
    this.dispatch(type, message, title);
  }

  error(err, title) {
    this.action.log('error', err.toString(), title);
  }
}

export default alt.createActions(ActionsCreator);

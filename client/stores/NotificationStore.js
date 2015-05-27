import alt from '../core/alt';
import NotificationActions from '../actions/NotificationActions';

class Store {

  constructor() {
    this.model = [];
    this.bindActions(NotificationActions);
  }

  onLog(type, message, title) {
    this.type = type;
    this.message = message;
    this.title = title;
  }
}

export default alt.createStore(Store, 'NotificationStore');

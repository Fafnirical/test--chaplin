import * as Chaplin from 'chaplin';
import Model from 'models/base/model';

export default class Collection extends Chaplin.Collection {
  // Mixin a synchronization state machine.
  // initialize: function() {
  //   _.extend(this, Chaplin.SyncMachine);
  //   Chaplin.Model.prototype.apply(this, arguments);
  //   this.on('request', this.beginSync);
  //   this.on('sync', this.finishSync);
  //   this.on('error', this.unsync);
  // }
  model = Model;
  // Place your application-specific model features here
}

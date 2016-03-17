import * as Chaplin from 'chaplin';
import View from 'views/base/view';

export default class CollectionView extends Chaplin.CollectionView {
  getTemplateFunction() {
    return View.prototype.getTemplateFunction(arguments);
  };
}

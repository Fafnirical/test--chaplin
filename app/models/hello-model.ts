import Model from 'models/base/model';

export default class HelloModel extends Model {
  defaults = {
    message: 'Hello World!',
  };
}

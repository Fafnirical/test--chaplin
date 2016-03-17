// Type definitions for Chaplin
// Project: http://chaplinjs.org/
// Definitions by: Wade Burelbach <https://github.com/Fafnirical>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Chaplin {
  interface ChaplinOptions {
    routes?: (match: Function) => void;
    title?: string;
    controllerSuffix?: string;
    pushState?: boolean;
  }

  class Application extends EventBroker {
    //extends = Backbone.Model.extends;
    title: String;
    dispatcher: Dispatcher;
    layout: Layout;
    router: Router;
    composer: Composer;
    started: boolean;

    constructor(options: ChaplinOptions);
    // extend(): Backbone.Model.extend;
    initialize(options: ChaplinOptions): Object;
    initDispatcher(options: ChaplinOptions): Dispatcher;
    initLayout(options: ChaplinOptions): Layout;
    initComposer(options: ChaplinOptions): Composer
    initMediator(): Object;
    initRouter(routes: any, options: ChaplinOptions): any | void;
    start(): Object | void;
  }
  interface CompositionOptions {
    compose: Function; // TODO
    composition?: Function; // TODO as a class
    check?: boolean; // TODO
  }
  class Composer extends EventBroker {
    compositions: Object; // TODO
    disposed: boolean;

    constructor(options: ChaplinOptions);
    // extend(): Backbone.Model.extend;
    initialize(options: ChaplinOptions): Object; // TODO
    compose(name: string, second: Function /* TODO class */, options?: CompositionOptions): any; // TODO
    compose(name: string, second: Function): any; // TODO
    compose(name: string, second: CompositionOptions, options: Function): any; // TODO
    compose(name: string, second: CompositionOptions): any; // TODO
    compose(name: string, second: Composition, options?: CompositionOptions): any; // TODO
    _compose(name: string, options: CompositionOptions): any; // TODO
    retrieve(name: string): Composition | void;
    cleanup(): void;
    dispose(): Object | void;
  }
  class Controller extends Backbone.Events implements EventBroker {
    view: Object;
    redirected: boolean;
    disposed: boolean;

    constructor();
    initialize(): void;
    beforeAction(): void;
    adjustTitle(subtitle: string): string;
    // reuse(name: string): Composer.retrieve();
    reuse(name: string, second: Function /* TODO class */, options?: CompositionOptions): any; // TODO
    reuse(name: string, second: Function): any; // TODO
    reuse(name: string, second: CompositionOptions, options: Function): any; // TODO
    reuse(name: string, second: CompositionOptions): any; // TODO
    reuse(name: string, second: Composition, options?: CompositionOptions): any; // TODO
    // reuse(): Composer.compose()
    // compose(): void // TODO: throws error
    // redirectTo: Router.route();
    dispose(): Object | void;
  }
  class Dispatcher {}
  class Composition {}
  class EventBroker {}
  class History {}
  class Route {}
  class Router {}
  class support {}
  class SyncMachine {}
  class utils {}
  class mediator {}
  class Collection {}
  class Model {}
  class CollectionView {}
  class Layout {}
  class View {}
}

declare module 'chaplin' {
  export = Chaplin;
}

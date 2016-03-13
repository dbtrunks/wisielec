export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'game'], name: 'game',      moduleId: 'game',      nav: true, title: 'Graj' },
      { route: 'top',         name: 'top',        moduleId: 'top',        nav: true, title: 'Ranking' },
      { route: 'info',  name: 'info', moduleId: 'info', nav: true, title: 'Info' }
    ]);

    this.router = router;
  }
}

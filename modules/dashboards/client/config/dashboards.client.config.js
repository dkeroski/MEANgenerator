(function () {
  'use strict';

  angular
    .module('dashboards')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Dashboards',
      state: 'dashboards',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'dashboards', {
      title: 'List Dashboards',
      state: 'dashboards.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'dashboards', {
      title: 'Create Dashboard',
      state: 'dashboards.create',
      roles: ['user']
    });
  }
})();

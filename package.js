Package.describe({
  name: 'ostrio:iron-router-helpers',
  version: '0.4.0',
  summary: 'Deprecated! Use zimme:active-route',
  git: 'https://github.com/VeliovGroup/iron-router-helpers-for-Meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('zimme:active-route@2.0.4');
  api.imply('zimme:active-route');
});

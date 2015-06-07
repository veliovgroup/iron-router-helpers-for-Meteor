Package.describe({
  name: 'ostrio:iron-router-helpers',
  version: '2.0.5',
  summary: 'Active route helpers for iron-router and flow-router',
  git: 'https://github.com/VeliovGroup/iron-router-helpers-for-Meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('zimme:active-route@2.0.5');
  api.imply('zimme:active-route');
});

Package.describe({
  name: 'ostrio:iron-router-helpers',
  version: '0.3.0',
  summary: 'An iron-router helpers for quickly adding classnames to your active navigation elements.',
  git: 'https://github.com/VeliovGroup/iron-router-helpers-for-Meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('iron:router@1.0.5', 'client');
  api.addFiles('ostrio:iron-router-helpers.js', 'client');
});

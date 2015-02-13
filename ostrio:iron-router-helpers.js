/*
 * STOLEN FROM: https://github.com/XpressiveCode/iron-router-active/blob/master/lib/client/helpers.js
 * @description An iron-router module for quickly adding classnames to your active navigation elements.
 *
 * @license
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 XpressiveCode
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
var routeUtils = {
    context: function() {
        return Router.current();
    },

    regex: function(expression) {
        return new RegExp(expression, 'i');
    },

    testRoutes: function(routeNames) {
        var reg = this.regex(routeNames);
        return this.context() && reg.test(this.context().route.getName());
    },

    testPaths: function(paths) {
        var reg = this.regex(paths);
        return this.context() && reg.test(this.context().route._path);
    }
};

Template.registerHelper('isActiveRoute', function(routes, className) {
    className = (className.hash) ? 'active' : className;

    return routeUtils.testRoutes(routes) ? className : '';
});

Template.registerHelper('isActivePath', function(paths, className) {
    className = (className.hash) ? 'active' : className;

    return routeUtils.testPaths(paths) ? className : '';
});

Template.registerHelper('isNotActiveRoute', function(routes, className) {
    className = (className.hash) ? 'disabled' : className;

    return ! routeUtils.testRoutes(routes) ? className : '';
});

Template.registerHelper('isNotActivePath', function(paths, className) {
    className = (className.hash) ? 'disabled' : className;

    return ! routeUtils.testPaths(paths) ? className : '';
});
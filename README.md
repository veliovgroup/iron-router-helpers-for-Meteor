iron-router-helpers
==================

Quick Template helper to determine if the current route is active, for nav links. 

Forked and updated from: [iron-router-active](https://github.com/XpressiveCode/iron-router-active)

Installation
============

`meteor add ostrio:iron-router-helpers`

Update
======

1. Updated to support Meteor 1.0.

Usage
=====

After installing the smart package, you'll have access to four new Templates helpers called `isActiveRoute`, `isActivePath`, `isNotActiveRoute` and `isNotActivePath`.

isActiveRoute|isNotActiveRoute works against route names, while isActivePath|isNotActivePath works against the current routes path. It works well with dynamic routes.

The helpers take 2 arguments.

1) routeName or routePath: used to determine whether or not the current route matches the routename that you've passed in. (mandatory)

This value is a regex expression so that you can pass in multiple routes with the | operator.

2) className: this is an optional argument. if you do not set it, it will default to `active`. you can override that value, by specifying your own. The two `not active` apis will return a class of `disabled` if you do not specify one.

```html
<nav>
  <ul>
    <li class="{{ isActiveRoute 'dashboard' }}">...</li>
    <li class="{{ isActiveRoute 'dashboard|root' }}">...</li>
    <li class="{{ isActiveRoute 'users' 'on' }}">...</li>
    <li class="{{ isActivePath 'products' }}">...</li>
    <li class="{{ isNotActiveRoute 'dashboard' }}">...</li>
    <li class="{{ isNotActivePath 'products' }}">...</li>
  </ul>
</nav>
```

In the first example, the LI element will have a class of `active`, as we've used the default value.

In the second example, you can see an example of passing in multiple routes. 

In the third example, the LI element will have a class of `on`, as we've overridden the default value with our own.

In the fourth example, you can see an example of checking to see if the current url contains the noun `products`, which will handle multiple scenarios, such as

1. /products
2. /products/new
3. /products/edit

So now if you had a top level `products` navigation element, it would stay highlighted even though your routename changes. 

In the fifth and sixth examples returns `disabled` if routes is not active
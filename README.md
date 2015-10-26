# Lego

A module, forked from [`mrt:define`](https://github.com/apendua/require), allowing modules to be named and 
loaded inside the Meteor build system, today, in Meteor 1.1 or greater

# Installation

`meteor add deanius:lego`

# Rationale

As of Meteor 1.2, we have ES2015 support - but without true modules (`import`/`export`).

In Meteor 1.3, full modules are promised, but exactly how that looks remains to be seen.

Some desirable features from a module system, as I see it are:

* Use `*.js` files, no additional suffixes required
* Should work well inside the Meteor build system, including
  * Source map support
  * Quick rebuilding, hot loading
  * Deployment to multiple platforms (web, cordova)

While WebPack meets many of these requirements, it is a bit alien to your average Meteor user. I think a shim for modules is a reasonable alternative with a small learning curve. Additionally, if the modules are 1-to-1 translatable to ES6 format

# Examples

See the [test suite](https://github.com/deanius/meteor-lego/blob/master/tests/shared/tests.js)


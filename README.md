# knockout.persist

A simple persistance extender for the [knockout.js](https://github.com/SteveSanderson/knockout) project. At the moment uses only localStorage if it exists in the browser.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/spoike/knockout.persist/master/dist/knockout.persist.min.js
[max]: https://raw.github.com/spoike/knockout.persist/master/dist/knockout.persist.js

## Usage

This extender can be used as any other [knockout.js extender](http://knockoutjs.com/documentation/extenders.html). Include the javascript file, `knockout.persist.js`, in your script imports or script bundle.

To make an observable to persist it's value to the `localStorage`. Extend it with `persist`, the value for it is the key to store the observable in localStorage:

    // Will automatically load and save the value if it exists in the localStorage
    this.persistedValue = ko.observable().extend({ persist: 'persistedValue' });

    // Will automatically load and save the array if it exists in the localStorage
    this.persistedArray = ko.observableArray().extend({ persist: 'persistedArray' });

## Contributions

Feel free to fork the [project at github](http://github.com/spoike/knockout.persist) and send pull requests if you want to add any features.

## License

This project is licensed under the MIT license. For more info, go to http://opensource.org/licenses/MIT.


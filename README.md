# knockout.persist

A simple persistance extender for the [knockout.js](https://github.com/SteveSanderson/knockout) project. At the moment uses only localStorage if it exists in the browser.

## Usage

This extender can be used as any other [knockout.js extender](http://knockoutjs.com/documentation/extenders.html). Include the javascript file, `knockout.persist.js`, in your script imports or script bundle.

To make an observable to persist it's value to the `localStorage`. Extend it with `persist`, the value for it is the key to store the observable in localStorage:

    // Will automatically load and save the value if it exists in the localStorage
    this.persistedValue = ko.observable().extend({ persist: 'persistedValue' });

    // Will automatically load and save the array if it exists in the localStorage
    this.persistedArray = ko.observableArray().extend({ persist: 'persistedArray' });

## License

This project is licensed under the MIT license. For more info, go to http://opensource.org/licenses/MIT.

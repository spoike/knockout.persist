# knockout.persist

A simple localstorage extender for the [knockout.js](https://github.com/SteveSanderson/knockout) project.

## Usage

This extender can be used as any other [knockout.js extender](http://knockoutjs.com/documentation/extenders.html). Include the javascript file, `knockout.persist.js`, in your script imports or script bundle.

To make an observable to persist it's value to the `localStorage`. Extend it with `persist`, the value for it is the key to store the observable in to:

    // Will automatically load the value if it exists in the localStorage
    this.persistedValue = ko.observable().extend({ persist: 'persistedValue' });

    // Will automatically load the array if it exists in the localStorage
    this.persistedArray = ko.observableArray().extend({ persist: 'persistedArray' });

## License

This project is licensed under the MIT license. For more info, go to http://opensource.org/licenses/MIT.

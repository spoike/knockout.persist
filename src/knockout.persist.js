(function(ko) {

    // Don't crash on browsers that are missing localStorage
    if (typeof (localStorage) === "undefined") { return; }

    ko.extenders.persist = function(target, key) {

        var initialValue = target();

        // Load existing value from localStorage if set
        if (key && localStorage.getItem(key) !== null) {
            try {
                initialValue = JSON.parse(localStorage.getItem(key));
            } catch (e) {
            }
        }
        target(initialValue);

        // Subscribe to new values and add them to localStorage
        target.subscribe(function (newValue) {
            localStorage.setItem(key, ko.toJSON(newValue));
        });
        return target;

    };

})(ko);

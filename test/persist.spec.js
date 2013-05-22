var toJSON = function(value) { return ko.toJSON(value); },
	parseJSON = function(json) { return JSON.parse(json); };

describe('knockout.persist', function() {
	
	it('assumes that localstorage is available', function() {
		expect(localStorage).toBeDefined();
	});
	
	describe('when localstorage is empty', function() {
		var key = 'thekey', value = 'test', o;
		
		beforeEach(function() {
			localStorage.clear();
		});
		
		it('should not put values on localstorage when initialized', function() {
			o = ko.observable('').extend({ persist: key });
			expect(localStorage[key]).not.toBeDefined();
		});
		
		it('should set localstorage with new value when changed', function() {
			var o;
			o = ko.observable('').extend({ persist: key });
			o(value);
			expect(parseJSON(localStorage[key])).toBe(value);
		});
		
		describe('when localstorage has persisted value', function() {
			
			beforeEach(function() {
				localStorage[key] = toJSON(value);
			});
			
			it('should load with persisted value', function() {
				o = ko.observable('').extend({ persist: key });
				expect(o()).toBe(value);
			});
			
		});
		
	});	
});
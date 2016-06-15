describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter on favorite food correct', function() {
    var mockedList = [
    {
      name: "Colton",
      favoriteFood: "Salad"
    },
    {
      name: "Matthew",
      favoriteFood: "Apples"
    },
    {
      name: "Johnny",
      favoriteFood: "Bananas"
    }];
    var results = $filter('favoriteFood')(mockedList,'Salad')

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Colton');
  });
	
});

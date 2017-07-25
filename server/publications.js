Meteor.publish('terms', function(search) {
	check(search, Match.OneOf(String, null, undefined));
	let query = {},
	projection = {limit: 10, sort: {name:1}};

	if (search) {
		let regex = new RegExp(search, 'i');

		query = {
			$or: [
			{name:regex}]
		};
	projection.limit=100;
	}
	return Terms.find(query, projection);
});
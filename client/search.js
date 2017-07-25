Template.search.onCreated( () => {
	let template = Template.instance();
	template.SearchQuery = new ReactiveVar();
	template.searching = new ReactiveVar(false);

	template.autorun( () => {
	template.subscrive('terms', template.searchQuery(), () => {
	setTimeout( () => {
	template.searching.set(false);
	}, 300);
	});
	});
});

Template.search.helpers({
	searching() {
		return Template.instance().searching.get();
	},
	query() {
		return Template.instance().searchQuery.get();
	},
	terms() {
		let terms = Terms.find();
		if (terms) {
			return terms;
		}
	}
});

Template.search.events({
	'keyup [name="search"]' (event, template) {
		let value = event.target.value.trim();
	if (value != '' && event.keyCode == 13) {
		template.searchQuery.set(value)
		template.searching.set(true);
	}
	if (value == '') {
		template.SearchQuery.set(value);
	}
}
});
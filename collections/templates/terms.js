Terms = new Mongo.Collection('terms');

if (Meteor.isServer) {
	Terms._ensureIndex({name:1})
}

Terms.allow({
	insert: () => false,
	update: () => false,
	remove: () => false
});

Terms.deny({
	insert: () => true,
	update: () => true,
	remove: () => true
});

let TermSchema = new SimpleSchema({
	'name': {
		type: String,
		label: 'Term'
	}
});

Terms.attachSchema(TermSchema);
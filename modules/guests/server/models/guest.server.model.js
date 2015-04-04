'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Guest Schema
 */
var GuestSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Guest name',
		trim: true
	},
	email: {
		type: String,
		trim: true,
		default: '',
		match: [/.+\@.+\..+/, 'Please fill a valid email address']
	},
	signedin: {
		type: Date,
		default: Date.now
	},
	member: {
		type: String,
		default: ''
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Guest', GuestSchema);


// Sing In Timestamp
// Member
// Guest Name
// Guest Sign in
// Guest Sign out
// Guest Total
// Guest Email
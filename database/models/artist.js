// Todo: Create Artist Model
const mongoose = require('mongoose')
const AlbumSchema = require('./album')
const Schema = mongoose.Schema;

const ArtistSchema = new Schema ({
	name: String,
	//dateOfBirth: Date,
	age: Number,
	//startYear: Date,
	yearsActive: Number,
	image: String,
	genre: String,
	website: String,
	netWorth: Number,
	labelName: String,
	retired: Boolean,
	albums: [AlbumSchema]
});

/*
ArtistSchema.virtual('yearsActive').get(function(){
	return 2019-startYear;
});

ArtistSchema.virtual('age').get(function()){
	
	return 2019-dateOfBirth,
});
*/

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;

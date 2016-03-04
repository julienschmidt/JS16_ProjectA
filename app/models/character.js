var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: {type: String, required: true},                                // Rhaegar
    title: String,                                                        // Prince of Dragonstone Ser
    male: Boolean,                                                       // Male
    culture: String,             // Valyrian
    age: {type: Number, min: 1, max: 200},                              // ??
    dateOfBirth: Number,                                                        // 259 AC
    dateOfDeath: Number,  	                                                     // 283 AC
    actor: String,

    mother: {type: String, ref: 'Character'},
    father: {type: String, ref: 'Character'},
    heir: {type: String, ref: 'Character'},

    //Deal with these when we have the main system up and running
    //brothers: [{type: Schema.Types.ObjectId, ref: 'Character'}],
    //sisters: [{type: Schema.Types.ObjectId, ref: 'Character'}],
    //children: [{type: Schema.Types.ObjectId, ref: 'Character'}],
    //spouses: [{type: Schema.Types.ObjectId, ref: 'Character'}],            // Princess Elia Martell

    //Omit for now till we know what exactly is needed from other projects.
    //battles: [{type: Schema.Types.ObjectId, ref: 'Battle'}],

    placeOfBirth: {type: String, ref: "Region"},                                                 // Summerhall
    placeOfDeath: {type: String, ref: "Region"},                                                 // Trident
    house: {type: String, ref: "House"},                   // House Targaryen
    skills: [{type: Schema.Types.ObjectId, ref: "Skill"}],                // one to many - talented musician and skilled knight
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Character', CharacterSchema);

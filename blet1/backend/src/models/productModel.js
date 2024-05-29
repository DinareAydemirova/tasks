const mongoose = require("mongoose")

const prodSchema = mongoose.Schema({
	image:String,
	name: String,
	description:String,
	price: String,
}, { collection: "Products", timestamps: true })

module.exports = mongoose.model("Products", prodSchema)
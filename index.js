const curry = require('ramda/src/curry')

module.exports = curry((that, f) => function () {
	const args = Array.prototype.slice.call(arguments)
	return new Promise((resolve, reject) => {
		f.apply(that, [...args, (err, result) => err ? reject(err) : resolve(result)])
	})
})

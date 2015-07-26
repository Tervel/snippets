var profile = require("./profile");
console.dir(process.argv);

var users = process.argv.slice(2); // Equivalent to process.arvgv[2:]
users.forEach(profile.get);

// users.forEach(function(username) {
//     profile.get(username);
// });

// profile.get("chalkers");
// profile.get("joykesten2");





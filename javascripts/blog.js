
let blogPosts = [];
blogPosts.push({title: "Getting Git", copy: "blah blah blah", date: "July 10,2017"});
blogPosts.push({title: "First Group Project", copy: "blah blah blah", date: "July 14, 2017"});

console.log("ourDogs", ourDogs);

//pass in the array and look at each item in the array and pass it back
//for each one of thsese things, perform function (set of instructions)

ourDogs.forEach(function(item){
	console.log("name", item.name, item.age);
	jediText += `<li>${item.name}<li>`;
}
});

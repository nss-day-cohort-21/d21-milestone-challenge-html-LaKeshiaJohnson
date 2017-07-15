
let blogPosts = [];
blogPosts.push({
	title: "Using Git", 
	copy: "text text text text text text text text text text text text text text text text text", 
	date: "Posted: July 10,2017"});

blogPosts.push({
	title: "First Group Project", 
	copy: "text text text text text text text text text text text text text text text text text", 
	date: "Posted: July 14, 2017"});

//console.log("blogPosts", blogPosts); 

//pass in the array and look at each item in the array and pass it back
//for each one of thsese things, perform function (set of instructions)


blogPosts.forEach(function(item){
	document.getElementById("blog").innerHTML += `<article><h5>${item.title}</h5><p>${item.copy}</p><h6>${item.date}</h6></article>`;
	
});
	



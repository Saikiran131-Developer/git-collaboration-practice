let text = "Hello World, welcome to JavaScript!";

console.log(text.length);
console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text.at(-1));
console.log(text.slice(6, 11));
console.log(text.substring(6, 11));
console.log(text.substr(6, 5));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.concat(" Let's learn strings."));
console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());
console.log(text.padStart(40, "*"));
console.log(text.padEnd(40, "*"));
console.log(text.repeat(2));

//Replace  methods

let replaceText = "Visit Microsoft and Microsoft!";

console.log(replaceText.replace("Microsoft", "Google"));
console.log(replaceText.replace(/Microsoft/g, "Google"));
console.log(replaceText.replaceAll("Microsoft", "Google"));

//search methods

let searchText = "Please locate where 'locate' occurs!";

console.log(searchText.indexOf("locate"));
console.log(searchText.lastIndexOf("locate"));
console.log(searchText.search("locate"));
console.log(searchText.match(/locate/g));
console.log(searchText.matchAll(/locate/g));
console.log(searchText.includes("locate"));
console.log(searchText.startsWith("Please"));
console.log(searchText.endsWith("occurs!"));

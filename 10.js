function capitalizeEachWord(sentence) {
    return sentence
        .split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "); 
}
const sentence = "ram is a good person";
const result = capitalizeEachWord(sentence);
console.log(result);  
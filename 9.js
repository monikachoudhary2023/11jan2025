
let s1 = "       ram      is a  good person        .";
let s2 =  s1.trim().split(/\s+/).join(" ")
console.log(s2);
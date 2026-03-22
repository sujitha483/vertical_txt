function vertical_txt(str){
    const words = str.split(" ");
    count = 0;
    result= []
    word1 = Array.from(words[0]);
    word2 = Array.from(words[1])
    
    maxLen = Math.max(word1.length,word2.length)
    for(let i=0;i<maxLen;i++){
        temp = []
        temp.push(word1[i] || "")
        temp.push(word2[i] || "")
        result.push(temp)
    }
    return result;
}

console.log(vertical_txt("Holy bananas"))
/* output = [
  ["H", "b"],
  ["o", "a"],
  ["l", "n"],
  ["y", "a"],
  [" ", "n"],
  [" ", "a"],
  [" ", "s"]
] */

console.log(vertical_txt("Hello fellas"))
/* output= [
  ["H", "f"],
  ["e", "e"],
  ["l", "l"],
  ["l", "l"],
  ["o", "a"],
  [" ", "s"]
] */

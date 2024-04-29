let para = prompt('Enter the text:');
alert(para);

function replaceWord (removed,added) {
    let newPara = para.replace(removed,added);
    alert(`New Para : ${newPara}`);   
}

let wordToReplace = prompt('Enter a character you want to replace');
let newWord = prompt('Enter a character you want to add');

replaceWord (wordToReplace,newWord);








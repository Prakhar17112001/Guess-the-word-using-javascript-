const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector('.btn');
let play = false;
let newwords = "";
let randomwords = "";
let Words = ['python','javascript','c++','php','java','html','css','reactjs','angular','swift','android','sql'];

const createNewWords = ()=>{
    let randNum = Math.floor((Math.random()*Words.length));
    let newtemperorywords = Words[randNum];
    return newtemperorywords;
}

const scramblewords = (arr) =>{
    for (let i = arr.length-1 ; i>=0 ; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        console.log(i);
        console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener("click",()=>{
if(!play){
    play = true;
    btn.innerHTML =  "Guess";
    guess.classList.toggle('hidden');
    newwords = createNewWords();
    randomwords = scramblewords(newwords.split("")).join("");
    msg.innerHTML = `Guess the Word :${randomwords}`;
}else{
    let tempword = guess.value;
    if(tempword === newwords){
        play = false;
        msg.innerHTML = ` Awesome it's correct , It is ${newwords} `;
        btn.innerHTML = 'Start Again'
        guess.classList.toggle('hidden');
        guess.value = '';
    }else{
        msg.innerHTML = ` Sorry it's Incorrect , plz try again ${randomwords} `;
    }
}
})
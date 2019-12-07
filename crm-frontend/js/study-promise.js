function createRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let asyncDraw = function (min, max, size) {
    return new Promise ((resolve,reject)=>{
        let numbers = [];
        while (numbers.length < size) {
            let num = createRandomInteger(min, max);
            if (!numbers.includes(num))
                numbers.push(num);
        }
        numbers.sort((x, y) => x - y);
        setTimeout(()=>{
            resolve(numbers);
        }, 3000);
    }) ;
}

let draw = function (min, max, size) {
    let numbers = [];
    while (numbers.length < size) {
        let num = createRandomInteger(min, max);
        if (!numbers.includes(num))
            numbers.push(num);
    }
    numbers.sort((x, y) => x - y);
    return numbers;
}

let asyncDrawES6 = async function (min, max, size) {
    let numbers = [];
    while (numbers.length < size) {
        let num = createRandomInteger(min, max);
        if (!numbers.includes(num))
            numbers.push(num);
    }
    numbers.sort((x, y) => x - y);
    return numbers;
}

/*
window.onload = () => {
    let counter = 0;
    document.querySelector("#draw")
        .addEventListener("click", () => {
            asyncDrawES6(1, 50, 6).then(numbers =>{
                let spanNumbers = document.querySelector("#numbers");
                spanNumbers.innerText = numbers.toString();
            });
            counter++;
            document.querySelector("#counter").innerText = counter;
        }, false);
};
*/
window.onload = () => {
    let counter = 0;
    document.querySelector("#draw")
        .addEventListener("click", async () => {
            counter++;
            document.querySelector("#counter").innerText = counter;
            let numbers = await asyncDraw(1, 50, 6);
            let spanNumbers = document.querySelector("#numbers");
            spanNumbers.innerText = numbers.toString();
        }, false);
};


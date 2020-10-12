// task 1
let nums = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];
let max = Math.max(...nums);
console.log(max);


//task 2
let arr = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!']; 
let newArr = [];
function stringArr(array){
    for(let i=0; i< array.length; i++){
        if(typeof array[i] != "string"){
            continue;
        }else {
            newArr.push(array[i]); 
        }
        }
console.log(newArr);
}
stringArr(arr);


//task 3

let usersInfo =  [
    {
        name: "Yura", 
        age: 55,
        hobby: ["football", "ski", "hiking"], 
        type: "Admin"
    }, 
    {
        name: "Yulian", 
        age: 28, 
        hobby: ["films", "games", "hiking"], 
        type: "user"
    }, 
    {
        name: "Taras", 
        age: 38, 
        hobby: ["hunting", "TV", "javascript"], 
        type: "user"
    }
];

let users = [];
function allUsers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === 'user') {
            users.push(arr[i].name)
        }
    }
    return users;
}
console.log(allUsers(usersInfo));

let userHiking = [];
function hikingHobby (arr) {
    for (let k = 0; k < arr.length; k++) {
        if (arr[k].hobby) {
            for (let j = 0; j < arr.length; j++) {
                if (hobby[j] === 'hiking') {
                    userHiking.push(arr[k].name)
                }
            }
            
        }
    }
    return userHiking;
} 
console.log(hikingHobby(userHiking));


//task 4
//Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту)
// і сповіщати що це інтелектуальна власність власника.


let test = document.getElementById('test');

document.addEventListener('keydown',function (event) {
    if (event.ctrlKey && event.code == 'KeyC') {
        alert('інтелектуальна власність власника');
    }

});

document.oncontextmenu = function () {
    alert('інтелектуальна власність власника');
};


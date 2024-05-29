let variable = 'chipi';
let type = typeof variable;
if (type === 'number') {
    console.log("число.");
} else if (type === 'string') {
    console.log("строка.");
} else if (type === 'boolean') {
    console.log("логическое значение.");
} else {
    console.log("другой тип.");
}

// Задание 1
let zodiac = prompt("Введите ваш знак зодиака:");
switch (zodiac.toLowerCase()) {
    case "лев":
        alert("Привет я тоже лев");
        break;
    default:
        alert("нет такого знака");
}

// Задание 2
for (let i = 1; i <= 40; i++) {
    console.log(i);
}
let j = 1;
while (j <= 40) {
    console.log(j);
    j++;
}
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 40);
//Задание 3 
// while(1){
//     alert("привет");
//     console.log("собака");
//     prompt("привет же?");
// }
// задание 4
let n1 = parseInt(prompt("Введите первое число:"));
let n2 = parseInt(prompt("Введите второе число:"));
let n3 = parseInt(prompt("Введите третье число:"));
let numbers = [n1, n2, n3];
numbers.sort((a, b) => a - b); 
console.log("Числа по возрастанию:", numbers);
// задание 5
for (let i = 0; i <= 15; i++) 
    {
        if (i % 2 === 0) 
        {
            console.log(i + ' четное');
        } 
        else 
        {
            console.log(i + ' нечетное');
        }
    }
// задание 6
let w = prompt('Введите число больше 5:');
    
while (w <= 5 || isNaN(w)) 
{
    w = prompt('Повторите попытку. Введите число больше 5:');
}

alert('Поздравляем! Вы ввели правильное число: ' + w);

// задание 7
for (let i = 8; i <= 20; ) 
{
    console.log(i);
    i+=2;
}  
// задание 8
let sum = 0;

for (let i = 0; i <= 1000; i++) 
{
    if (i % 3 === 0 || i % 5 === 0) 
    {
        sum += i;
    }
}
//задание 10  
console.log('Сумма всех чисел:', sum);

for (let i = 0; i <= 10; i++) {
    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += '*';
    }
    console.log(stars);
}
// задание 9
let summ = 0;
let arm = prompt('введите трехзначное число: ');
let temp = arm;
while (temp > 0) {
    let promez = temp % 10;
    summ += promez **3;
    temp = parseInt(temp / 10); 
}
if (summ == arm) {
    console.log('число армстронга.');
}
else {
    console.log('не число армстронга.');
}
// практическая №2

// задание 1
function greet() 
{
    alert('приветики ;)');
}
greet();

// задание 2
function greetUser() 
{
    let name = document.getElementById('username').value;
    alert('Привет, ' + name + '!');
}
  
// задание 3
function min()
{
    let min;
    let num1 = parseFloat(prompt("Введите число a:"));
    let num2 = parseFloat(prompt("Введите число b:"));
    if (num1<num2)
    {
        min=num1;
    }
    else
    {
        min=num2;
    }
    console.log(min + ' минимальное');
}
min();
// задание 4

function solveQuadraticEquation() 
{
    let abc = prompt('Введите коэффициент a:');
    if (abc === null) {
        alert('Вы отменили ввод коэффициента a.');
        return;
    }
  
    let deb = prompt('Введите коэффициент b:');
    if (deb === null) {
        alert('Вы отменили ввод коэффициента b.');
        return;
    }

    let bab = prompt('Введите коэффициент c:');
    if (bab === null) {
        alert('Вы отменили ввод коэффициента c.');
        return;
    }

    if (abc.trim() === '' || deb.trim() === '' || bab.trim() === '') {
        alert('Пожалуйста, введите все коэффициенты.');
        return;
    }

    abc = parseFloat(abc);
    deb = parseFloat(deb);
    bab = parseFloat(bab);

    let discriminant = deb ** 2 - 4 * abc * bab;
    if (discriminant > 0) 
    {
        let x1 = (-deb + Math.sqrt(discriminant)) / (2 * abc);
        let x2 = (-deb - Math.sqrt(discriminant)) / (2 * abc);
        console.log('ответ' + [x1, x2]);
    } 
    else if (discriminant === 0) 
    {
        let x = -deb / (2 * abc);
        console.log('ответ' + x);
    } 
    else 
    {
        console.log('Уравнение не имеет действительных корней'); 
    }
}
solveQuadraticEquation();
// практическая №3

// задание 1
let array1 = [6, 9, 3, 4, 13, 1, 22];
let array2 = new Array(4, 1, 2);
let array3 = Array.of(17, 66, 69);

// задание 2
console.log(array1[4]);
array1[4] = 231;
console.log(array1[4]);
// задание 3
let arri=[123,321,231,743,9321,1341,421,844];
function len(){
    console.log(arri.length);
}
document.addEventListener("mouseover", len); 

// задание 4
for (let i = 0; i < arri.length; i++) {
    console.log(arri[i]);
}

arri.forEach(function(element) {
    console.log(element);
});
// задание 5
let array4 = [1210, 211, 2];
let array5 = [133, 141, 1];
let megaArray = array4.concat(array5);
console.log(megaArray);
// задание 6
let deletedElement = megaArray.pop();
console.log(deletedElement); 

// задание 8
let inArray = prompt("Введите значения массива через пробелы:");
let val = inArray.split(" ").map(Number);

let RootArray = val.map(val=> Math.sqrt(val));

console.log("Массив значений с квадратными корнями:");
console.log(RootArray);

// задание 9
let currDate = new Date();
console.log(currDate);

// задание 10
const options = { year: 'numeric', month: 'long', day: 'numeric' };
console.log(currDate.toLocaleDateString('ru-RU', options));

// задание 11
function multiplyRandomNumbers() {
    let num1 = Math.floor(Math.random() * 51);
    let num2 = Math.floor(Math.random() * 51);
    return num1 * num2;
}
console.log(multiplyRandomNumbers());
//практическая 4
let student = {
    name:"Егор",
    age: 18,
    sayName: function() {
      console.log("Меня зовут " + this.name);
    },
    currAge: function() {
      let currentYear = new Date().getFullYear();
      console.log("Мой возраст: " + (currentYear - this.age));
    }
  };
function Student2(name, age) {
    this.name = name;
    this.age = age;
}
  
Student2.prototype.sayName = function() {
    console.log("Меня зовут " + this.name);
};
  
Student2.prototype.calculateAge = function() {
    let currentYear = new Date().getFullYear();
    console.log("Мой возраст: " + (currentYear - this.age));
};
  
let student2 = new Student2("неЕгор", 2005);  

function INPITStudent(name, age, course) {
    Student2.call(this, name, age);
    this.course = course;
  } 
  INPITStudent.prototype = Object.create(Student2.prototype);
  INPITStudent.prototype.constructor = INPITStudent;
  INPITStudent.prototype.sayCourse = function() {
    console.log("Я учусь на курсе " + this.course);
  };
  
  let inpitStudent = new INPITStudent("Егор", 18, "ИФСТ");
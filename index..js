const workers = [
  {
    name: "bill",
    job: "architect",
    salary: 10000,
  },
  {
    name: "Arni",
    job: "actor",
    salary: 100000,
  },
  {
    name: "Bob",
    job: "singer",
    salary: 40000,
  },
  {
    name: "Ann",
    job: "manager",
    salary: 30000,
  },
  {
    name: "Antony",
    job: "Footballer",
    salary: 90000,
  },
  {
    name: "John",
    job: "builder",
    salary: 25000,
  },
  {
    name: "Arthur",
    job: "teacher",
    salary: 20000,
  },
];

//1) створити функцію яка порахує середню зарплатню робітників.


function average(array){
  let sum = []


  let result = 0


  for (const worker of array) {
sum.push(worker.salary)

result += worker.salary
  }
  let total = result / sum.length
  return total
}
const i = average(workers)
//
console.log('a :>> ', i);

const workers1 = [
  {
    name: "Robert",
    job: "Dentist",
    salary: 90000,
  },
  {
    name: "Pietro",
    job: "Computer Systems Analyst",
    salary: 120000,
  },
  {
    name: "James",
    job: "Web Developer",
    salary: 100000,
  },
];

// 2) за допомогою синтаксису трьох крапок(...spread) поєднати масиви workers та workers1 та вивести у консоль
let spread  = [...workers , ...workers1]
console.log('spread :>> ', spread);
//



//3) виконати деструктуризацію масиву arr та вивести отримані константи у консоль.

const arr = [1, 2, 3, 4, 5, 6];

const [a, b , c ,d , e , f] = arr
console.log('i :>> ', a);
console.log('i :>> ', b);
console.log('i :>> ', c);
console.log('i :>> ', d);
console.log('i :>> ', e);
console.log('i :>> ', f);


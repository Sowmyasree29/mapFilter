arr=[1,2,3,4]
const result=arr.map((each)=>each*2)
console.log(result)


const names = ['Alice', 'Bob', 'Charlie', 'David'];
names.forEach((name)=>console.log(name))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered=numbers.filter((each)=>each%2==0)
console.log(filtered)


const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 88 }
];

const res1=students.map((each)=>`${each.name} has scored ${each.score}`)
console.log(res1)


const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 15 },
  { name: 'David', age: 22 }
];
const filter=people.filter((each)=>each.age>18)
console.log(filter)


const words = ['hello', 'world', 'javascript', 'map'];
const word=words.map((each)=>each.toUpperCase())
console.log(word)


function add(arr,added)
{
    arr.forEach((each)=>console.log(added(each)))
}
const added=(num)=>
{
    return num+1
}


add( [10, 20, 30, 40, 50],added)


const words1 = ['hi', 'hello', 'hey', 'world', 'js'];
const res2=words1.filter((each)=>each.length>3)
console.log(res2)















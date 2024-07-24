//Using forEach
const arr = [3,1,6,0,7,4]

arr.forEach((item,index)=>{
    console.log(`at ${index} we have ${item}`);  
})


//Using map
const arr1 = [3,1,6,0,7,4]
let arr2=arr1.map((item,index)=>{
     return item*2
})
console.log(arr2);

//using filter
let arr3=[1,2,3,4,5,6,7,8,9]
let evennumbers=arr3.filter((item)=>item%2===0)
    console.log(evennumbers);

//using reduce
let arr4=[0,1,2,4,5,6,9]    
let sum=arr4.reduce((item,index)=> item=item+index,0)
console.log(sum);

//using find
let arr5=[
    {
        name:"mani",
        age:21,
    },
    {
        name:"vamsi",
        age:34,
    }
]
let olderthan25=arr5.find((item)=>item.age>25)
console.log(olderthan25);

//using findindex
let arr6=[
    {
        name:"mani",
        age:16,
    },
    {
        name:"vamsi",
        age:20,
    }
]
let youngerthan18=arr6.findIndex((item,)=>item.age<18);
console.log(youngerthan18);

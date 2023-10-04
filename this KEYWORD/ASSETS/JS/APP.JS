// fun = ()=>{
//     return this;
// }
// console.log(fun());

//  let pankaj={
//     Name:'Pankaj Maurya ',
//     id:229050 ,
//     fun:function()
//     {
//     return this;
//    }

// }
// console.log(pankaj.fun());




// --------------------------
const person1 ={
    name:'pankaj',
    surname:'maurya',
    sayname: function(city,country){
        return `${this.name} ${this.surname}${city} ${country}`
    }

};
const person2 ={
    name:'Ayush',
    surname:'tyagi',
}
// console.log(person1.sayname.call(person2,'faribadad','india'));

// console.log(person1.sayname.apply(person2,['delhi,india']));
// const p2=person1.sayname.bind(person2,'delhi,india');
// console.log(p2());



function student(name,age,rollno){
    this.name=name;
    this.age = age;
    this . rollno;

}

let s2= new student('rohit',19,225090);
let s3= new student("pankaj",20,229050);
 console.log(s2);
 console.log(s3);





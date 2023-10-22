const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button?.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

///type of data simpe

let num: number;

num = 10; //цілі
num = -10; // відємні
num = 10.3; //дробові

let string: string;
string = "Some";

let bool: boolean;
bool = true;

///type of data complex

let arr: string[] = [];
arr = ["string"];

let arrNumber: number[] = [];
arrNumber = [1, 2, 3];

let arrAny: any[] = [];
arrAny = [1, "string", {}];

let arrObject: { name: string }[];
arrObject = [{ name: "Alex" }, { name: "John" }];

let obj: { name: string };
obj = { name: "Alex" };
obj.name;



let db: {
  id: number;
  name: string;
  age: number;
  title: string;
  info?: {
    date: Date;
    isNew?: boolean;
  };
};

db = {
  age: 1,
  id: 1234,
  title: "Some",
  name: "Alex",
  info: { date: new Date(), isNew:true},
};


//any type


let some: any;
some = 'Alex';
some = 1;
some = { name: 'Ant' };
some.name;

//give us no errors

//type unknow

let number: number;
number = some;
//give no errors

let somthing: unknown;
somthing = 18;
somthing = 'qwe';

let str: string;

if (typeof somthing === 'string') { str = somthing;} //no error //type guard
// str = somthing;    //give us error


// type tuple

let fixed: [string, number];
fixed = ['string', 1];


//type enum

enum Togggle { ENABLE, DISABLE };

const service = {
    status: Togggle.ENABLE,

};

if (service.status === Togggle.ENABLE) { 
    console.log("It is active");
    
}

//union type

let union: number | string;
union = 10;
union = 'qwe';
// union = true; //will give an error

function combine(param1: string | number, param2: string | number) {
    if (typeof param1 === 'string' || typeof param2 === 'string') { return param1.toString()+param2.toString(); }
    return param1+param2;
}


//literal type


const fruit:string[] = [];
function workWithArrr(arr:string[], value:string,action: 'add'| 'delete') {
    if (action === 'add') {
    arr.push(value)
    } else {
        const index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
};
workWithArrr(fruit, 'Banana', 'add')
workWithArrr(fruit, 'Melon', 'add')
workWithArrr(fruit, 'Pear', 'add')

console.log(fruit);

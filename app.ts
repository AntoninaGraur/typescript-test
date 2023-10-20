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

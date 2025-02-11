/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2024-12-15 00:11:31
 * @LastEditors: Seven
 * @LastEditTime: 2025-02-02 14:20:45
 */
// 优化：使用 constructor 初始化状态和绑定方法
import React, { Component } from 'react';


function Capture (props:Object) {
  const [name, setName] = React.useState('ChildComponent');
  const [age, setAge] = React.useState(22);
  const changeName = () => {
    setAge(18);
  };
  // 优化：使用 React.memo 进行性能优化
  // React.useEffect(() => {
  //   console.log('执行了');
  // }
  //   , [props.value]);

  // console.dir(props);

  return (

    <>

      <h1>{name}</h1>
      <button onClick={changeName}>改变名称</button>

    </>

  );

}

export default Capture;


class Student {
  fullName: string;
  constructor(public firstName:any, public middleInitial:any, public lastName:any) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function greeter(person : Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = new Student("Jane", "M.", "User");


// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[3];

// console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

// let list: any[] = [1, true, "free"];

// list[1] = 100;
// console.log(list);


// function warnUser(): void {
//   console.log("This is my warning message");
// }

// warnUser();

// let someValue: any = "this is a string";

// let strLength: number = (someValue as string).length;

// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }

// function createSquare(config: SquareConfig): {readonly color: string; area: number} {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ width: 100, opacity: 0.5 });

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc = function(source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];


class Animal {
  name: string;
  //
  
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: string]: Animal;
  [x: string]: Dog;
}
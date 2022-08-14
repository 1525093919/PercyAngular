import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.less'],
})
export class Es6Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.blockScope();
    this.destructuringFuc();
  }
  /**
   * 块级作用域
   * @date 2022/08/14
   */
  private blockScope(): void {
    var a = 1;
    if (true) {
      var a = 2;
    }
    console.log(a); //输出结果 2 内层变量覆盖外层变量

    var arr = [1, 2, 3];
    for (var index = 0; index < arr.length; index++) {
      const element = arr[index];
      console.log(element);
    }
    console.log(index); //输出结果 3 循环变量泄露为全局变量
    // for (let i = 0; index < arr.length; index++) {
    //   const element = arr[i];
    //   console.log(element);
    // }
    // console.log(i); //找不到名称“i”。

    //变量提升
    //b = 'hello'; 暂时性死区
    let b;
    console.log(b); //undefined

    //重复申明
    var c = 4;
    var c = 3;
    console.log(c); // 3
    // let d ;
    // let d ;  无法重复声明
  }

  /**
   * 解构赋值
   * @date 2022/08/14 23:42
   */
  destructuringFuc(): void {
    //数组解构
    //具有Iterator接口的数据结构，都可以采用数组形式解构赋值
    const [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log(foo, bar, baz);

    //对象解构
  }
}

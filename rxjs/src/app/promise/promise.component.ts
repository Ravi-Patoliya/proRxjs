import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  element1: any
  element2: any
  element3: any
  constructor() { }

  ngOnInit(): void {

    //promise example
    let buyLaptop = new Promise((resolve, reject) => {
      resolve('promise resolved')
    })

    buyLaptop.then(res => {
      console.log(res);
    })

    //async await example
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('data received')
      }, 3000);
    })

    async function getData() {
      let response = await promise;
      console.log(response);
    }
    getData()// data received after 3 second

  }

  dell = {
    Brand: 'Dell',
    hardDisk: '1 TB',
    Color: 'Silver'
  }

  BuyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell)
    }, 2000);
  })

  BuyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())

  //ex-01-With Promise
  fetch1() {
    this.BuyLaptop.then(res => {
      this.element1 = JSON.stringify(res)

    })
  }

  //ex-02- With Async /Await
  async fetch2() {
    let data = await this.BuyLaptop
    this.element2 = JSON.stringify(data)
  }

  //ex-03- With Fetch Api
  async fetch3() {
    //can use promise or async/await methods
    let data = await this.BuyLaptop2
    this.element3 = JSON.stringify(data)
  }

}

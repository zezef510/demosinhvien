import {Student} from "../model/Student.js";

export class StudentService{
    constructor() {
        this.listStudent = []
        this.listStudent.push(new Student(1, `Q`, 7))
        this.listStudent.push(new Student(2, `A`, 8))
        this.listStudent.push(new Student(3, `B`, 9))
        this.listStudent.push(new Student(4, `C`, 10))
    }
    findAll(){
        return this.listStudent
    }
    add(student){
        this.listStudent.push(student)
    }
    findName(name){
        let listFindName = []
        for (let i = 0; i < this.listStudent.length; i++) {
            if (this.listStudent[i]._name === name ){
                listFindName.push(this.listStudent[i])
            }
        }
        console.log(listFindName)
        return listFindName
    }
}
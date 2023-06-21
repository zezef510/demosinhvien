import http from 'http';
import fs from 'fs';
import qs from 'qs';
import {StudentService} from "./service/StudentService.js";
let studentService = new StudentService()

const se = http.createServer((req, res)=>{
    let data = ``;
    req.on(`data`,dataRaw=>{
        data += dataRaw
    })
    req.on(`end`,()=>{

        if (req.method === "GET") {
            const name = req.url.split(`search=`)[1]
            if(name){
                const students = studentService.findName(name);

                showList(req,res,students)
            }else {
                const all = studentService.findAll()
                showList(req,res,all)
            }
        }else {
            data = qs.parse(data)
            studentService.add(data);
            const allStudents = studentService.findAll();

            showList(req,res,allStudents)
        }
    })

})
function showList(req,res,students){
    fs.readFile(`views/listStudent.html`, "utf8", (err, stringHTML) => {
        let str = '';
        for (const item of students) {
            str += `<h2>${item.id}. ${item.name}</h2>`
        }
        stringHTML = stringHTML.replace('{list}', str)
        res.write(stringHTML);
        res.end()
    })
}
se.listen(8080,()=>{
    console.log(`Da ket noi`)
})

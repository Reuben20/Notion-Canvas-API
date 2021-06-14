import { Client } from "@notionhq/client"
import fetch from "node-fetch"
import addItem from './notion.js'

const canvasToken = process.env.CANVAS_TOKEN

var IDs = ['5966','5967','5968','5970','5972','6588']
var names = ['ASI','SIE','Mainframes','Tesis I','DESAP','Ética y Deontologia']

for(let i=0;i<IDs.length;i++){

	var url = 'https://upao.instructure.com/api/v1/courses/'+IDs[i]+'/assignments'

	fetch(url,{
		method: 'GET', 
		headers: {'Authorization': 'Bearer '+canvasToken}
	})
	.then(res => res.json())
	.then(data => {
		data.forEach(element => addItem(element.name,names[i]))	
	}).catch(err => console.log(err))

}

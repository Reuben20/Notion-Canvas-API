import fetch from "node-fetch"
import addItem from './notion.js'
import { keys } from './keys.js'

const canvasToken = keys.CANVAS_TOKEN

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
		data.forEach(e => {
			let now = new Date()
			now.setHours(0,0,0)
			if(now.toISOString() > e.due_at){
				addItem(e.name,names[i],e.due_at)
				//e.created_at - e.workflow_state - e.html_url
			}
		})
	}).catch(err => console.log(err))

}

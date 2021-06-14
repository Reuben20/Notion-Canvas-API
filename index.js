import { Client } from "@notionhq/client"
import fetch from "node-fetch"
import addItem from './notion.js'

const canvasToken = process.env.CANVAS_TOKEN

const url = 'https://upao.instructure.com/api/v1/courses'

fetch(url,{
	method: 'GET', 
	headers: {'Authorization': 'Bearer '+canvasToken}
})
.then(res => res.json())
.then(data => {
	data.forEach(element => addItem(element.name))	
})
.catch(err => console.log(err))

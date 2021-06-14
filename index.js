import { Client } from "@notionhq/client"
import fetch from "node-fetch"

const canvasToken = process.env.CANVAS_TOKEN

const url = 'https://upao.instructure.com/api/v1/courses'

const notion = new Client({auth: process.env.NOTION_KEY})

const databaseId = process.env.NOTION_DATABASE_ID

async function addItem(text) {
	try {
		await notion.request({
			path: "pages",
			method: "POST",
			body: {
				parent: { database_id: databaseId },
				properties: {
					title: {
						title: [
							{
								"text": {
									"content": text
								}
							}
						]
					}
				}
			}
		})
		console.log("Success! Entry added.")
	} catch (error) {
		console.log(error.body)
	}
}

fetch(url,{
	method: 'GET', 
	headers: {'Authorization': 'Bearer '+canvasToken}
})
.then(res => res.json())
.then(data => {
	data.forEach(element => addItem(element.name))	
})
.catch(err => console.log(err))



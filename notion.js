import { Client } from "@notionhq/client"
import { keys } from './keys.js'
import createObject from './n_objs/tabla_1.js'

const notion = new Client({auth: keys.NOTION_KEY })

const databaseId = keys.NOTION_DATABASE_ID

export default async function addItem(tarea,curso,fecha){
	try{
		await notion.request({
			path: "pages",
			method: "POST",
			body: {
				parent: { database_id: databaseId },
				properties: createObject(tarea,curso,fecha) 
			}
		})
	} catch (error) {
		console.log(error.body)
	}
}

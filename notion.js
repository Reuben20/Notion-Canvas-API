import { Client } from "@notionhq/client"

const notion = new Client({auth: process.env.NOTION_KEY})

const databaseId = process.env.NOTION_DATABASE_ID

export default async function addItem(tarea,curso){
	try{
		await notion.request({
			path: "pages",
			method: "POST",
			body: {
				parent: { database_id: databaseId },
				properties: {
					'Tema':{
						title: [
							{
								text: {
									content: tarea
								}
							}
						]
					},
					'Column':{
						select: {
							name: curso
						},
					},
				}
			}
		})
	} catch (error) {
		console.log(error.body)
	}
}

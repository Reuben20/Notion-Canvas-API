export default function createObject(tarea,curso){
	return {
		'Tema': {
			title: [
				{
					text: { content: tarea }
				}
			]
		},
		'Column': {
			select: { name: curso }
		}
	}
}

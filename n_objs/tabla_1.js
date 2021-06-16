export default function createObject(tarea,curso,fecha){
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
		},
		'Fecha': {
			"date": {
				"start":fecha
			}	
		}
	}
}

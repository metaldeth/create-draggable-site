window.onload = function() {

	setTimeout(function() {

		document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 300px)').matches) { // If not mobile

			Draggable.create('.gallery', {
				bounds: 'body',
				inertia: true
			})
			
		}

	}, 200)

}
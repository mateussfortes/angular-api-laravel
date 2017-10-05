import { Component } from '@angular/core';

@Component({
	selector: 'paginate',
	template: `
	<div class="center-align">
		<ul class="pagination">
			<li class="waves-effect active">
				<a>1</a>
			</li>
			<li class="waves-effect">
				<a>2</a>
			</li>
			<li class="waves-effect">
				<a>3</a>
			</li>
			<li class="waves-effect">
				<a>4</a>
			</li>
			<li class="waves-effect">
				<a>5</a>
			</li>
		</ul>

		<p>Você tem um total de 100 registros, exibindo página 3 de 30</p>

	</div>
	`
})

export class AppPaginateComponent {}


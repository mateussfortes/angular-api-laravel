import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';

@Component({
	templateUrl: './accounts.component.html',
	styles: ['tbody tr {cursor: pointer}'],
})

export class AccountsComponent {
	public accounts: Array<Object>;

	constructor (private httpService: AppHttpService) {}

	ngOnInit() {
		this.list();
	}

	list() {
		return this.httpService.builder('accounts')
		.list()
		.then((res) => {
			this.accounts = res.data;
		})
	}
}
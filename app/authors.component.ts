import {Component} from 'angular2/core'
import {AuthorService} from './authors.service'

@Component({
	selector: 'author',
	template: `
			<h2>{{title}}</h2>
			<ul>
				<li *ngFor="#author of authors">{{author}}</li>
			</ul>
	`,
	providers:[AuthorService]
})

export class AuthorsComponent{
	title= "The title of the Authors page";
	authors;
	
	constructor(authorService: AuthorService){
		this.authors = authorService.getAuthors();
	}
}
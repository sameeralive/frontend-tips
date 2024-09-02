import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MtCountryListService} from "mt-common";

@Component({
    selector: 'app-library',
    standalone: true,
    imports: [
        FormsModule, ReactiveFormsModule, NgForOf
    ],
    templateUrl: './library.component.html',
    styleUrl: './library.component.scss'
})
export class LibraryComponent {
    country: string = '';
    countries: any[] = [
        {
            "name": "Afghanistan",
            "code": "AF"
        },
        {
            "name": "Aland Islands",
            "code": "AX"
        },
    ];

    constructor(private countryListService: MtCountryListService) {
        this.countries = this.countryListService.countryList();
    }

}

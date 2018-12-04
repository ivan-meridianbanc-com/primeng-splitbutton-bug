import { Component, OnInit } from '@angular/core';
import { Car } from '../../components/domain/car';
import { CarService } from '../../service/carservice';
import {MenuItem} from '../../../components/common/api';

@Component({
    templateUrl: './tablecolresizedemo.html'
})
export class TableColResizeDemo implements OnInit {

    cars1: Car[];

    cars2: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars1 = cars);
        this.carService.getCarsMedium().then(cars => this.cars2 = cars);

        this.cols = [
            { field: 'vin', header: 'Vin', width: '25%' },
            { field: 'year', header: 'Year', width: '15%' },
            { field: 'brand', header: 'Brand', width: '35%' },
            { field: 'color', header: 'Color', width: '25%' }
        ];
        this.items = [
            {label: 'Update', icon: 'pi pi-refresh', command: () => {
                this.update();
            }},
            {label: 'Delete', icon: 'pi pi-times', command: () => {
                this.delete();
            }},
            {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
            {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
        ];
    }

    items: MenuItem[];
    
    save(severity: string) {
    }
    
    update() {
    }
    
    delete() {
    }    
}
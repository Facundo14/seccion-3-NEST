import { Car } from './interfaces/cars.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
    
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee',
        },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        
        const car = this.cars.find(car => car.id === id);

        if(!car) throw new NotFoundException(`El auto con el id: '${id}' no encontrado`);

        return car;
    }
}

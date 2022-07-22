import { Car } from './interfaces/cars.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    
    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Jeep',
        //     model: 'Cherokee',
        // },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        
        const car = this.cars.find(car => car.id === id);

        if(!car) throw new NotFoundException(`El auto con el id: '${id}' no encontrado`);

        return car;
    }

    create(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        };

        this.cars.push(car);

        return car;
        
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        const carDB = this.findOneById(id);

        if(!carDB) throw new NotFoundException(`El auto con el id: '${id}' no encontrado`);

        const car: Car = {
            ...carDB,
            ...updateCarDto,
            id
        };

        return car;
    }

    fillCarsWithSeedData( cars: Car[] ) {
        this.cars = cars;
    }
}

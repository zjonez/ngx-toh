import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDbService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0, name: 'Zero'},
            { id: 1, name: 'Empath' }, 
            { id: 2, name: 'Pebbles' },
            { id: 3, name: 'Predator' },
            { id: 4, name: 'Chronos' },
            { id: 5, name: 'Slither' },
            { id: 6, name: 'Chipper' },
            { id: 7, name: 'Pyromancer' },
            { id: 8, name: 'Witch Hunter' },
            { id: 9, name: 'Magnus' },
            { id: 10, name: 'Zephyr' }
        ];
        return {heroes};
    }
}
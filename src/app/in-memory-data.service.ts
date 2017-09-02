import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0, name: 'Zelda of Hyrule' },
            { id: 1, name: 'Link of Hyrule' },
            { id: 2, name: 'Geralt of Rivia' },
            { id: 3, name: 'Big Boss of the Diamond Dogs' },
            { id: 4, name: 'Joker of the Phantom Thieves' },
            { id: 5, name: 'Aloy of the Nora' },
            { id: 6, name: 'Bayonetta of the Umbra' },
            { id: 7, name: 'Death of the Four Horsemen' },
            { id: 8, name: 'Ryu of the Brood' },
            { id: 9, name: '2B of the YorHa' },
            { id: 10, name: 'Noctis of Insomnia' } 
        ];
        return {heroes};
    }
}

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Garen' },
      { id: 2, name: 'Lux' },
      { id: 3, name: 'Annie' },
      { id: 4, name: 'Varus' },
      { id: 5, name: 'Caitlyn' },
      { id: 6, name: 'Ezreal' },
      { id: 7, name: 'Rammus' },
      { id: 8, name: 'Trundle' },
      { id: 9, name: 'Leona' },
      { id: 10, name: 'Sion' }
    ];
    return {heroes};
  }
}

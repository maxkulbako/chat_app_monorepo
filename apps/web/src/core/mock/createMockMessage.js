import { faker } from '@faker-js/faker';

export function createMockMessage (override) {
  return {
    id: faker.datatype.uuid(),
    fromId: faker.datatype.uuid(),
    created: faker.date.past().getTime(),
    secondary: faker.lorem.text(),
    person: '',
    ...override
  };
}

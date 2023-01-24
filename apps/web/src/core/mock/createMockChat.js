import { faker } from '@faker-js/faker';
import { createMockMessage } from './createMockMessage';

export function createMockChat (override) {
  const date = new Date(faker.date.past()).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });
  const randomMessagesQuantity = Math.floor(Math.random() * (10 - 3));
  const messages = [];
  for (let i = 0; i < randomMessagesQuantity; i++) {
    messages.push(createMockMessage());
  };

  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    date: [date],
    messages,
    ...override
  };
}

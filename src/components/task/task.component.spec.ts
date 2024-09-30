import { render, screen } from '@testing-library/angular';
import { Task } from './task.component';

it('shoud render', async () => {
  const mockTask = { title: 'Title', status: 'done' };
  await render(Task, {
    inputs: {
      task: mockTask,
    },
  });

  const title = await screen.findByText('Title');
  expect(title).toBeInTheDocument();
});

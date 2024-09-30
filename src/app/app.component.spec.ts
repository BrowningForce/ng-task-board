import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { Dialog } from '@angular/cdk/dialog';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(AppComponent, {
      providers: [Dialog],
    });
    expect(await screen.findByText(/hello, task-tracker/i)).toBeTruthy();
  });

  it(`should have the 'task-tracker' title`, async () => {
    await render(AppComponent, {
      providers: [Dialog],
    });

    const app = screen.getByText(/hello, task-tracker/i).textContent;

    expect(app).toContain('task-tracker');
  });

  it('should render title', async () => {
    await render(AppComponent, {
      providers: [Dialog],
    });

    const titleElement = screen.getByRole('heading', {
      name: 'Hello, task-tracker',
    });

    expect(titleElement).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await render(AppComponent);
  });

  it('should create the app', () => {
    expect(screen.getByText(/hello, task-tracker/i)).toBeTruthy();
  });

  it(`should have the 'task-tracker' title`, () => {
    const app = screen.getByText(/hello, task-tracker/i).textContent;
    expect(app).toContain('task-tracker');
  });

  it('should render title', () => {
    const titleElement = screen.getByRole('heading'); // Assuming your title is in an <h1>
    expect(titleElement).toHaveTextContent('Hello, task-tracker');
  });
});

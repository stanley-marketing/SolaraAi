import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

function HelloSolaraAi() {
  return <h1>SolaraAi</h1>;
}

describe('Smoke Test', () => {
  it('renders the app heading', () => {
    render(<HelloSolaraAi />);
    expect(screen.getByText('SolaraAi')).toBeInTheDocument();
  });
});

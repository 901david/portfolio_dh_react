import React from 'react';
import { render, screen } from '@testing-library/react';

import SkillsInfo from './SkillsInfo';

describe('SkillsInfo Tests', () => {
  beforeEach(() => {
    render(<SkillsInfo />);
  });

  test('should render correct title', () => {
    expect(screen.getByText(/Who Am I?/)).toBeInTheDocument();
  });
});

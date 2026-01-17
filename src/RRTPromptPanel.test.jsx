import { render } from '@testing-library/react';
import RRTPromptPanel from './RRTPromptPanel';

test('renders RRTPromptPanel without crashing', () => {
  const mockOnEnter = jest.fn();
  render(<RRTPromptPanel onEnter={mockOnEnter} />);
});

test('renders RRTPromptPanel with custom height', () => {
  const mockOnEnter = jest.fn();
  render(<RRTPromptPanel onEnter={mockOnEnter} height={600} />);
});

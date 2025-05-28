

import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm component', () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  const availableTimes = ['17:00', '18:00', '19:00'];

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  it('renders all form fields', () => {
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Make Your Reservation/i })).toBeInTheDocument();
  });

  it('dispatches when date is selected', () => {
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2025-06-01' } });
    expect(mockDispatch).toHaveBeenCalledWith('2025-06-01');
  });

  it('submits form when all fields are valid', () => {
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-06-01' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2025-06-01',
      time: '17:00',
      guests: 2,
      occasion: 'Birthday'
    });
  });
});
import RadioGroupControl from './RadioGroupControl';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('RadioGroupControl component', () => {

    it('displays provided options', () => {
        const options = ['option1', 'option2'];
        render(
            <RadioGroupControl options={options} value={options[0]} onChange={() => null}/>
        );

        expect(screen.queryByText(options[0])).toBeInTheDocument();
        expect(screen.queryByText(options[1])).toBeInTheDocument();
    });

    it('calls change handler when option is selected', () => {
        const options = ['option1', 'option2'];
        const changeHandler = jest.fn();
        render(
            <RadioGroupControl options={options} value={options[0]} onChange={changeHandler}/>
        );

        fireEvent.click(screen.getByText(options[1]));

        expect(changeHandler).toHaveBeenCalledTimes(1);
        expect(changeHandler).toHaveBeenCalledWith(options[1]);
    });
});

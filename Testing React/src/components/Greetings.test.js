import { render } from "@testing-library/react";
import Greetings from "./Greetings";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
    test('renders hello world', () => {
        // three A's of Testing
        // 1. Arrange
        render(<Greetings />);
        // 2. Act: perform the action that intersts you like clicking a button
        // right now its nothing
        // 3. Assert
        const myElement = screen.getByText('Hello World', { exact: false });
        expect(myElement).toBeInTheDocument();
    });
    test('detect conditional text if button not clicked', () => {
        // three A's of Testing
        // 1. Arrange
        render(<Greetings />);
        // 2. Act: perform the action that intersts you like clicking a button
        // right now its nothing
        // 3. Assert
        const myElement = screen.getByText('Its good to see you', { exact: false });
        expect(myElement).toBeInTheDocument();
    });
    test('detect conditional text if button is clicked', () => {
        // three A's of Testing
        // 1. Arrange
        render(<Greetings />);
        // 2. Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // 3. Assert
        const myElement = screen.getByText('changed!');
        expect(myElement).toBeInTheDocument();
    });
    test('detect conditional text hidden if button is clicked', () => {
        // three A's of Testing
        // 1. Arrange
        render(<Greetings />);
        // 2. Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // 3. Assert
        const myElement = screen.queryByText('good to see you', {exact: false});
        expect(myElement).toBeNull();
    });
})


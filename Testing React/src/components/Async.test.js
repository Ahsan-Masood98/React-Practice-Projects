import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async Compoenent', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: "first Post"}], 
        });
        render(<Async />);
        // find queries we are able to get async reults as get will instently check for results find will check it after 1s as defult time which can be changed
        const listItemElement = await screen.findAllByRole('listitem');
        expect(listItemElement).not.toHaveLength(0);
    })
})
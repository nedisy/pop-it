import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
    it("starts on the player name form", () => {
        render(<App />);

        expect(screen.getByText(/enter players' name/i)).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /play/i })
        ).toBeInTheDocument();
    });

    it("warns when the player names are missing", async () => {
        const user = userEvent.setup();
        render(<App />);

        await user.click(screen.getByRole("button", { name: /play/i }));

        expect(
            screen.getByText(/please enter first player name/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/please enter second player name/i)
        ).toBeInTheDocument();
    });

    it("starts the game when both names are valid", async () => {
        const user = userEvent.setup();
        render(<App />);

        await user.type(
            screen.getByPlaceholderText(/first player name/i),
            "Alice"
        );
        await user.type(
            screen.getByPlaceholderText(/second player name/i),
            "Bob"
        );
        await user.click(screen.getByRole("button", { name: /play/i }));

        expect(
            screen.getByRole("heading", { name: "Alice" })
        ).toBeInTheDocument();
        expect(
            screen.queryByText(/enter players' name/i)
        ).not.toBeInTheDocument();
    });
});

import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

const mockColors = [
    {
        code: {hex: "#f0f8ff"},
        color: "aliceblue",
        id: 1
    },
    {
        code: {hex: "#99ddbc"},
        color: "limegreen",
        id: 2
    },
    {
        code: {hex: "#00ffff"},
        color: "aqua",
        id: 3
    }
]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={mockColors}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { queryByTestId , rerender } = render(<ColorList colors={[]} editing={false}/>)
    const EditMenu = queryByTestId("edit_menu")
    expect(EditMenu).not.toBeInTheDocument()
    rerender(<ColorList colors={[]} editing={true}/>)
    const EditMenu2 = queryByTestId("edit_menu")
    expect(EditMenu2).toBeInTheDocument()
});

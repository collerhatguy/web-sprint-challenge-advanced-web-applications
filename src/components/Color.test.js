import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const mockColor = {
    code: { hex: "#f0f8ff" },
    color: "aliceblue",
    id: 1,
}
const mockColorBlank = {
    code: { hex: null },
    color: null,
    id: null,
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={mockColorBlank}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={mockColor} />)

});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const deleteColor = jest.fn()
    const toggleEdit = jest.fn()
    const { getByTestId } = render(
        <Color 
            color={mockColor} 
            deleteColor={deleteColor} 
            toggleEdit={toggleEdit}
        />
    )
    const deleteButton = getByTestId("delete")
    userEvent.click(deleteButton)
    expect(deleteColor.mock.calls).toHaveLength(1)
    expect(toggleEdit.mock.calls).toHaveLength(1)
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const setEditColor = jest.fn()
    const toggleEdit = jest.fn()
    const { getByTestId } = render(
        <Color 
            color={mockColor} 
            setEditColor={setEditColor} 
            toggleEdit={toggleEdit}
        />
    )
    const colorDiv = getByTestId("color")
    userEvent.click(colorDiv)
    expect(setEditColor.mock.calls).toHaveLength(1)
    expect(toggleEdit.mock.calls).toHaveLength(1)
});
import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen } from "@testing-library/react";
import BubblePage from './BubblePage';
import fetchColorService from "../services/fetchColorService";
import { expect, jest } from '@jest/globals';

jest.mock("../services/fetchColorService", () => (setter) => {
    setter([
        {
            code: {hex: "#f0f8ff"},
            color: "aliceblue",
            id: 1,
        }
    ])
})

test("Renders without errors", ()=> {
    render(<BubblePage/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    const { findAllByTestId } = render(<BubblePage/>)
    const bubbles =  await findAllByTestId("color")
    expect(bubbles).toHaveLength(1)
    //Keep in mind that our service is called on mount for this component.
});
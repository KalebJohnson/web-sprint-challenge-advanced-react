import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeVisible()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    const checkoutButton = screen.getAllByText(/checkout/i)

    expect(firstName).toBeVisible()
    expect(lastName).toBeVisible()
    expect(address).toBeVisible()
    expect(city).toBeVisible()
    expect(state).toBeVisible()
    expect(zip).toBeVisible()

    fireEvent.change(firstName, { target: { value: 'kaleb' } })
    fireEvent.change(lastName, { target: { value: 'johnson' } })
    fireEvent.change(address, { target: { value: '1234 hello St.' } })
    fireEvent.change(city, { target: { value: 'whereevertown' } })
    fireEvent.change(state, { target: { value: 'state' } })
    fireEvent.change(zip, { target: { value: '12345' } })
    fireEvent.click(checkoutButton[1])

    const name = screen.getByText(/kaleb/i)
    const successMsg = screen.getByTestId('successMessage')

    expect(name).toBeVisible()
    expect(successMsg).toBeVisible()
});
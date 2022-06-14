import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react'
import App from "../src/App"
/* eslint-disable no-undef */

describe('Phone Store APP', () => {

    beforeAll(()=> jest.spyOn(window, "fetch"))
    afterEach(cleanup);
    it("should product list API FILE", async () => { 
        window.fetch.mockResolvedValue({
            data: [
               {
                "id": "ZmGrkLRPXOTpxsU4jjAcv",
                "brand": "Acer",
                "model": "Iconia Talk S",
                "price": "170",
                "imgUrl": "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"}
            ]
        });
        render(<App/>);
        expect(window.fetch).toHaveBeenCalledTimes(1)
        expect(window.fetch).toHaveBeenCalledWith("https://front-test-api.herokuapp.com/api/product");
    });

    it("should say some title", ()=>{
        render(<App/>);
        const title = screen.getByText(/PHONE STORE/i)
        expect(title).toBeInTheDocument()
    });

    it("should render the input search", ()=>{
        render(<App/>);
        const inputEL = screen.queryByPlaceholderText(/search/i)
        expect(inputEL).toBeInTheDocument()
    });

    it("should search product", async ()=>{
        render(<App/>)
        const products = window.fetch.mockResolvedValueOnce({
           data: []
        });
        const inputEL = screen.queryByPlaceholderText(/search/i)
        fireEvent.change(inputEL, { target: { value: products.brand }})
    });
});
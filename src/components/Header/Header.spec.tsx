import React from 'react';
import {render, screen} from '@testing-library/react'
import Header from './index'

describe('Header', () => {
    it('Should render correctly', () => {
        const {} = render(
            <Header/>
        )
        expect(screen.getByText('WhatToPlay')).toBeInTheDocument()
    })
})
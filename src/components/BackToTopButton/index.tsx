import React from 'react';
import { Button } from './styles'
import { BiUpArrow } from 'react-icons/bi'

export default function BackToTopButton() {


    function backToTop() {
        const getTarget = document.getElementById('top')
        getTarget.scrollIntoView()
    }


    return (
        <Button onClick={backToTop}>
            <BiUpArrow size={24} />
        </Button>
    )
}
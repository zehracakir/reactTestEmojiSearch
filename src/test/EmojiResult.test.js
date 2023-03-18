import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import emojiList from '../emojiList.json'
describe("emoji-list-render",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("Emoji list render",()=>{
        const emojieList = emojiList.slice(0, 20);
        emojieList.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    })
})
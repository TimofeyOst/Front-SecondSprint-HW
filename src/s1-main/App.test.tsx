import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'
import {AffairType, deleteAffair, filterAffairs} from "../s2-homeworks/hw02/HW2";


test('renders learn react link', () => {
    render(<App/>)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
    expect(1).toBe(1)
})

test('affairs should be filtered', () => {
    const defaultAffairs: AffairType[] = [ // need to fix any
        {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
        {_id: 2, name: 'anime', priority: 'low'},
        {_id: 3, name: 'games', priority: 'low'},
        {_id: 4, name: 'work', priority: 'high'},
        {_id: 5, name: 'html & css', priority: 'middle'},
    ]


    const filteredAffairs = filterAffairs(defaultAffairs, 'high')

    // expect(filteredAffairs.length).toBe(2)
    expect(filteredAffairs).toStrictEqual(
        [
            {_id: 1, name: 'React', priority: 'high'},
            {_id: 4, name: 'work', priority: 'high'},
        ]
    )
})

test('1 affair should be deleted', () => {
    const defaultAffairs: AffairType[] = [ // need to fix any
        {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
        {_id: 2, name: 'anime', priority: 'low'},
        {_id: 3, name: 'games', priority: 'low'},
        {_id: 4, name: 'work', priority: 'high'},
        {_id: 5, name: 'html & css', priority: 'middle'},
    ]

    const remainingAffairs = deleteAffair(defaultAffairs, 3)

    expect(remainingAffairs).toStrictEqual(
        [
            {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
            {_id: 2, name: 'anime', priority: 'low'},
            {_id: 4, name: 'work', priority: 'high'},
            {_id: 5, name: 'html & css', priority: 'middle'},
        ]
    )
})
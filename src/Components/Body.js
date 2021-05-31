import React from 'react'


export default function Body(props) {
    const searchHandler = (e) => {
        e.preventDefault()
        console.log(props.submitFlag)
        props.setSubmitFlag(!props.submitFlag)

    }

    const handleSearchInputChanges = (e) => {
        props.setSearchValue(e.target.value)
    }
    return (
        <div>
            <label htmlFor='zip'>
                Enter Your Zip Code
            </label>
            <input
                id="zip"
                name="zip"
                type="text"
                pattern="[0-9]*"
                value={props.searchValue}
                onChange={handleSearchInputChanges}
            />
            <input
                type='submit'
                onClick={searchHandler}
            />
            <hr />
            
        </div>
    )
}

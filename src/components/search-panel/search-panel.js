import React from 'react'

import './search-panel.css'

export default class SearchPanel extends React.Component {

    constructor(props) {
        super(props)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(event) {
        const term = event.target.value; 
        this.props.onSearch(term);   
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        ) 
    }

}


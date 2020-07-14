import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { rateEntry } from './redux/entries'

const ControlPanel = ({ setSelectedItem = f => f, selectedItem, rateItem = f => f }) => {

    const onRate = (id, r) => () => {
        setSelectedItem()
        rateItem(id, r)
    }

    return (
        <div className='control-panel'>
            <h2>
                {selectedItem ?
                    <React.Fragment>
                        <div onClick={onRate(selectedItem, -1)}>-1</div>
                        <div onClick={onRate(selectedItem, 0)}>0</div>
                        <div onClick={onRate(selectedItem, 1)}>+1</div>
                    </React.Fragment>
                    :
                    <Link to='/ranker/create'>+</Link>
                }
            </h2>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    rateItem: (id, r) => dispatch(rateEntry(id, r))
})

export default connect(null, mapDispatchToProps)(ControlPanel)

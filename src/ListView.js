import React, { useState } from 'react'
import ListEntryView from './ListEntryView'
import ControlPanel from './ControlPanel'
import { connect } from 'react-redux'

const ListView = ({ entries = [] }) => {
    const [selectedItem, setSelectedItem] = useState()
    const addToSelection = id => setSelectedItem(id)
    const removeSelection = id => setSelectedItem(-1)

    const getArrayAverage = (array = []) => array.reduce((pv, cv) => pv + cv, 0) / array.length || 0

    const calculateRanking = entry => ({ ...entry, ranking: getArrayAverage(entry.ratings) })

    return (
        <div className='list-view'>
            <h1>Dein Ranking</h1>
            {entries
                .map(calculateRanking)
                .sort((a, b) => b.ranking - a.ranking)
                .map((item, index) => (
                    <ListEntryView
                        {...item} key={index}
                        onSelect={addToSelection}
                        onUnSelect={removeSelection}
                        selected={item.id === selectedItem} />
                ))}
            <ControlPanel setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    entries: Object.values(state.entries),
    ...ownProps
})

export default connect(mapStateToProps)(ListView)

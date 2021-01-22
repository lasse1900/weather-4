import React from 'react'

const Filter = ({ filter, handleFilter }) => {
  // console.log('filter', filter)
  return (
    <div>
      search: <input value={filter} onChange={handleFilter} />
    </div>
  )
}

export default Filter

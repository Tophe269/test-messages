import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import List from '../components/List'
import fetchData from 'common/workers/fetchHandler'

const propTypes = {
  setList: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    private: PropTypes.bool.isRequired,
  })),
}

const ListContainer = ({ list, setList }) => {

  useEffect( () => {
    if (!list.length) {
      async function getData () {
        const list = await fetchData({url: 'table'})
        setList(list)
      }
      getData()
      
    }
  })

  return(
  <List list={list} />
)}

ListContainer.propTypes = propTypes

export default ListContainer

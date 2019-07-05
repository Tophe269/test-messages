import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    private: PropTypes.bool.isRequired,
  }))
}

const ListContainer = ({ list }) => (
  <Fragment>
    <h1>Liste de vos messages</h1>
    {list.length ? (
      <ul>
        {list.map((message, index) => (
          <li key={index}>
            <div>{message.text}</div>
            <div>message {message.private ? 'privé' : 'public'}</div>
          </li>
          ))}
      </ul>
    ) : (
      <div>
        Vous n'avez pas de message.
      </div>
    )}
  </Fragment>
)

ListContainer.propTypes = propTypes

export default ListContainer

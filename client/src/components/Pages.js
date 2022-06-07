import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { Context } from '..'

export default observer(function Pages() {
    const {art} = useContext(Context)
    const pageCount = Math.ceil(art.totalCount / art.limit)
    const pages = []

    for(let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
      <Pagination className='mt-5'>
        {pages.map(page => 
            <Pagination.Item
                key={page}
                active={art.page === page}
                onClick={() => art.setPage(page)}
            >
                {page}
            </Pagination.Item>
        )}
      </Pagination>
    )
  }) 

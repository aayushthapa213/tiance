import React from 'react'
import useFinancialRecords from '../../store/financialRecords.js'

const RecordList = () => {
  const { fetchRecord, deleteRecord, updateRecord } = useFinancialRecords();
  return (
    <div className='table-container'>
      
    </div>
  )
}

export default RecordList
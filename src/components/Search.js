import React, { useState } from 'react'
import axios from 'axios'
import FormInput from './FormInput'
import SearchResultTable from './SearchResultTable'

const Search = () => {
  const [filteredData, setFilteredData] = useState([])

  const handleSubmit = async zipcodeValueFromChild => {
    console.log('submitted', zipcodeValueFromChild)

    const response = await axios({
      url: '/list',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      params: { zipcode: zipcodeValueFromChild }
    })

    const results = response.data.filteredData
    console.log(results)
    setFilteredData(results)
  }
  return (
    <div>
      <FormInput handleSubmit={handleSubmit} />
      <SearchResultTable data={filteredData} />
    </div>
  )
}

export default Search

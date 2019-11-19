import React from 'react'
import { Card, CardBody, CardTitle, Row, Col, Table, Button } from 'reactstrap'

const SearchResultTable = props => {
  const handleSave = e => {
    const index = e.target.parentNode.parentNode.getAttribute('label')
    const tobeSaved = props.data[index]
    console.log('data to be saved:', tobeSaved)

    //axios -> backend -> save
  }

  return (
    <Row className='mb-5'>
      <Col sm={{ size: 10, offset: 1 }}>
        <Card>
          <CardBody>
            <CardTitle>Search Result</CardTitle>
            <Table striped>
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Title</td>
                  <td>Type</td>
                  <td>Location</td>
                  <td />
                </tr>
              </thead>
              <tbody>
                {(!props.data || props.data.length === 0) && (
                  <tr>
                    <td colSpan='6'>No data found</td>
                  </tr>
                )}
                {props.data &&
                  props.data.length > 0 &&
                  props.data.map((element, index) => (
                    <tr key={index} label={index}>
                      <td>{index + 1}</td>
                      <td>{element.name}</td>
                      <td>{element.title}</td>
                      <td>{element.type}</td>
                      <td>{element.location}</td>
                      <td>
                        <Button onClick={handleSave}>Save</Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default SearchResultTable

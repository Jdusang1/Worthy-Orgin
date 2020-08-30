import React from 'react';

import styled from "styled-components";

import { Table, Card, CardHeader } from 'reactstrap';

const TableWrapper = styled.div`
#results{
    text-align: center;
}

th{
    text-align: center;
    
}

td{
    text-align: center;
}
`





const MarketTable = (props) => {
    return (
        <TableWrapper>
            <Card>
                <CardHeader id="results">RESULTS</CardHeader>
                <Table>

                    <thead>
                        <tr>

                            <th>MARKET NAME</th>
                            <th>DESCRIPTION</th>
                            <th>MILES FROM ZIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </Table>
            </Card>
        </TableWrapper>
    );
}

export default MarketTable;
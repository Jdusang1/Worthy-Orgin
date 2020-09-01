import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

import ghgData from "../data/wid.json";
import styled from "styled-components";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Legend
} from 'recharts';


const DropdownWrapper = styled.div`
  .scrollable {
  height: auto;
  max-height: 200px;
  overflow-x: hidden;
}
`
const ChartWrapper = styled.div`
  div{

    margin: 10px auto;
  }
  
`

const Charts = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] =useState([]);
  const [name, setName] = useState("")
  const COLORS = ["#424b3f", "#3f5961", "#87a6b0", "#cb5744", "#ec9a59", "#dbaa56" ]

  const data = ghgData;
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const setData = e => {
    const dropdownItem = e.target
   
    setSelected([{
      landUse: dropdownItem.getAttribute("landUse"),
      animalFeed: dropdownItem.getAttribute("animalFeed"),
      farm: dropdownItem.getAttribute("farm"), 
      processing: dropdownItem.getAttribute("processing"),
      transport: dropdownItem.getAttribute("transport"), 
      packaging: dropdownItem.getAttribute("packaging"), 
      retail: dropdownItem.getAttribute("retail"), 
      name: dropdownItem.getAttribute("name")
    }])
    console.log(selected)
  }

  const setTargetName = e => {
    setName({name: e.target.value})
    console.log(name)
  }


const renderPieChart=(
  //   

      <div style={{ width: '100%', height: 500 }}>
        <ResponsiveContainer>
        <BarChart
  //     
          data={selected}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid  />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar type="monotone" dataKey="retail"  stroke="#8884d8" fill="#424b3f" />
          <Bar type="monotone" dataKey="packaging"  stroke="#82ca9d" fill="#3f5961" />
          <Bar type="monotone" dataKey="farm"  stroke="#ffc658" fill="#87a6b0" />
          <Bar type="monotone" dataKey="landUse"  stroke="#ffc658" fill="#cb5744" />
          <Bar type="monotone" dataKey="animalFeed"  stroke="#ffc658" fill="#ec9a59" />
          <Bar type="monotone" dataKey="transport"  stroke="#ffc658" fill="#ffc658" />
          <Bar type="monotone" dataKey="processing"  stroke="#ffc658" fill="#ffc658" />
      </BarChart>
          
        </ResponsiveContainer>
      </div>

)
  
  return (
    <>
      <DropdownWrapper>

        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            Foods
          </DropdownToggle>
          <DropdownMenu 
            
            className="scrollable">
            {data.map(item => (
                <DropdownItem 
                  onClick={(e)=> setData(e)}
                  key={item.id}
                  landuse={item.land_use}
                  animalfeed={item.animal_feed}
                  farm={item.Farm}
                  processing={item.Processing}
                  transport={item.Transport}
                  packaging={item.Packging}
                  retail={item.Retail}
                  name={item.name}
                  value={item.name}
                >
                  {item.name}
                </DropdownItem>
            ))}
      
          </DropdownMenu>
        </Dropdown>

      </DropdownWrapper>
    
      <ChartWrapper>
        {selected ? renderPieChart : <div></div>}
      </ChartWrapper>        
    </>


  );
}

export default Charts;

import React, {useState} from 'react'

export default function SearchTask(props) {
  // const [state, setState] = useState({
  //   kw: props.kw
  // });
  const handleOnKwChange = (evt)=>{
    // setState({
    //   kw: evt.target.value
    // })
    console.log("handleOnKwChange");
    console.log(evt.target.value);
    props.onKwChange(evt.target.value);
  }
  
  return (
    <div className="d-flex align-items-center">
            <input
              type="search"
              value={props.kw}
              placeholder="Search staff"
              className="w-25 form-control me-2"
              onChange={handleOnKwChange}
            />
            <a href="" className="btn btn-outline-secondary">
              Search
            </a>
          </div>
  )
}

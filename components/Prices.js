import { useState } from "react"

const Prices = (props) => {
  const [currency, setCurrency] = useState('USD')
  const currencies = Object.keys(props.bpi)

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {props.bpi[currency].description}: <span className="badge badge-primary">{props.bpi[currency].code}</span> <strong>{props.bpi[currency].rate}</strong>
        </li>
      </ul>
      <br />
      <select onChange={e => setCurrency(e.target.value)} className="form-control">
        {(() => {
          const options = []
          currencies.forEach(c => options.push(
            <option value={c} key={c}>{c}</option>
          ))

          return options
        })()}
      </select>
    </div>
  )
}

export default Prices
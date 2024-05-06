//userInput.jsx
export default function UserInput({changingCondition, userInput}) {
 

 return( <section id="user-input">
  <div className="input-group">
    <p>
       <label>Initial Investment</label>
       <input type="number" required value={userInput.InitialInvestment}
       onChange={(event) => changingCondition('InitialInvestment', event.target.value)}
       />
    </p>
    <p>
       <label>Annual Investment</label>
       <input type="number" required value={userInput.AnnualInvestment}
       onChange={(event) => changingCondition('AnnualInvestment', event.target.value)} 
       />
    </p>
    
  </div>

  <div className="input-group">
    <p>
       <label>Expected Return</label>
       <input type="number" required value={userInput.ExpectedReturn}
       onChange={(event) => changingCondition('ExpectedReturn', event.target.value)}
       />
    </p>
    <p>
       <label>Duration</label>
       <input type="number" required value={userInput.Duration} 
       onChange={(event) => changingCondition('Duration', event.target.value)}
       />
    </p>
    
  </div>
 </section>
  )
}
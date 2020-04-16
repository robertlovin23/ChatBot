import React from 'react'

const Result = ({result}) => {
    console.log(result)
    if(!result.length){
        return(
            <div>No Results</div>
        )
    }
    return(
        <div>
            {result.map(item => {
                return(
                    <div key={item.defid}>
                        {item.definition}
                    </div>
                )
            })}
        </div>
    )
}

export default Result;
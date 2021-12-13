// Code EyesOnMe Component Here
function EyesOnMe(){
    
    return(
        <div>
            <button input onFocus={(e) => console.log('Good!')}
                    input onBlur={(e) => console.log('Hey! Eyes on me!')}>Eyes on me
            </button>
            {/*<button onBlur={(e) => console.log('Hey! Eyes on me!')}></button>*/}
        </div>
    )
}

export default EyesOnMe;
import { useState } from 'react'
import { reviews } from '../data'

export default function Reviews () {
    const [index, setIndex] = useState(0)
    const hasNext = index < reviews.length - 1
    function handleNext() {
        if (hasNext) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    function handlePrev() {
        if (index > 0) {
            setIndex(index - 1)
        } else {
            setIndex(reviews.length - 1)
        }
    }
    let review = reviews[index]
    return (
        <div className="reviews">
            <div className="container">
                <div className="row" style={{width: "100%"}}>
                    <div className="col-md-5">
                        <h2>REVIEWS</h2>
                    </div>
                    <div className="col-md-7">
                        <div className="row" style={{width: "100%"}}>
                            <div className="col-1">
                                <button onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
                            </div>
                            <div className="col-10">
                                <p className='active'>
                                    { review }
                                </p>
                            </div>
                            <div className="col-1">
                                <button onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
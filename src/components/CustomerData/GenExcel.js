import React, { useState } from 'react'
import GenSuccess from './GenSuccess';

const GenExcel = () => {
    const [showGenSuccess, setShowGenSuccess] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowGenSuccess(true);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input type='checkbox' />
                    <label> Dining</label>
                    <input type='checkbox' />
                    <label>Tiffin</label>
                </div>

                {
                    showGenSuccess ? <GenSuccess onClose={() => setShowGenSuccess(false)} /> :
                        null
                }

                <div>
                    {/* backend data  */}
                </div>

                <div >
                    <button className="bg-yellow-400 px-8 border border-black outline-8 
                font-semibold">
                        Generate
                    </button>

                </div>
            </form>
        </div>
    )
}

export default GenExcel
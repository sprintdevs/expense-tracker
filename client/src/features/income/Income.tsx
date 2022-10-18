import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Income: FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='text-3xl font-bold text-green-300 underline'>Income</div>
            <div>
                <button onClick={() => navigate('/')}>Go Back</button>
            </div>
        </>
    )
}

export default Income

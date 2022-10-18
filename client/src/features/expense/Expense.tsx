import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Expense: FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='text-3xl font-bold text-red-300 underline'>Expense</div>
            <div>
                <button onClick={() => navigate('/')}>Go Back</button>
            </div>
        </>
    )
}

export default Expense

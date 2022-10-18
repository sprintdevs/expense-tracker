import { FC } from 'react'
import { Link } from 'react-router-dom'

const Dashboard: FC = () => {
    return (
        <>
            <div className='text-3xl font-bold underline'>Expense Tracker</div>
            <div>
                <Link to='income' className='font-bold underline'>
                    Income
                </Link>
                <br />
                <Link to='expense' className='font-bold underline'>
                    Expense
                </Link>
            </div>
        </>
    )
}

export default Dashboard

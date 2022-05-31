import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, deleteUser } from './redux/slices/userSlice'
const User = () => {
    const users = useSelector(state => state.userSlice.users)
    const dispatch = useDispatch()
    console.log(users);
    React.useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])
    return (
        <div>
            {users.map(item => (
                <div key={item.id}>
                    {item.name}
                    <button onClick={() => dispatch(deleteUser(item.id))}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default User
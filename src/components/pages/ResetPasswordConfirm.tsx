import { useActions } from '@utils/index'
import { useParams } from 'react-router-dom';
import React, { useState } from 'react'



const ResetPasswordConfirm = ({  }: any) => {
    const { uid, token } = useParams();
    const { ResetPasswordConfirm } = useActions()
    const [password, setPassword] = useState<string>('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       
        
        const data = {
            uid: uid,
            token: token,
            new_password: password
        }
        // console.log(data)

        ResetPasswordConfirm(data)

    }


    return (
        <div className='container mt-5'>
            <form onSubmit={e => onSubmit(e)}>

                <input

                    type='text'
                    placeholder='New Password'


                    onChange={e => setPassword(e.target.value)}


                />

            </form>
        </div>
    );
};

export default ResetPasswordConfirm
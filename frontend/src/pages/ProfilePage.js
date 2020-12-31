import React, { useEffect } from 'react'
import {useSelector, useDispatch } from 'react-redux';
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProfilePage() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);

    const submitHandler = (e) => {
        e.preventDefault();
        //update profile
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>{userInfo.name} Profile's</h1>
                </div>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter Name"
                            value={user.name}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            value={user.email}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter Password"
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                        ></input>
                    </div>
                    <div>
                        <label />
                        <button className="primary" type="submit">
                            Update Profile
                        </button>
                    </div>
                    </>
                )
            }
            </form>
        </div>
    )
};

import React from 'react'
// import { Spinner } from 'react-bootstrap/Spinner';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingTask(props) {
    if(props.loading){
        return (
            <>
                <section className="staff-list mt-4">
                    <div className="container">
                        <div className="row justify-content-center">
                        <Spinner variant="primary" animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        </div>
                    </div>
                </section>
    
            </>
        )
    }else{
        return null;
    }
    
}

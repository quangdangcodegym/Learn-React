import React, {useState} from 'react'
import "../css/pagination.css"

function getPagesArray(totalPages){
    let pages = [];
    for(let i=1;i<=totalPages;i++){
        pages.push(i);
    }
    return pages;
}
export default function Pagination(props) {
    // const [state, setState] = useState({
    //     page: props.page,
    //     limit: props.limit,
    //     totalPages: props.totalPages
    // })


    return (
        <>
            <session className="staff-list">
                <div className="container">
                    <nav
                        aria-label="Page navigation example"
                        className="row justify-content-end"
                    >
                        <ul className="pagination justify-content-end">
                            {
                                props.page > 1 && (<li className="page-item">
                                    <a className="page-link" name={props.page-1} onClick={()=> props.onPageChange(props.page-1, props.totalPages)}>
                                        Previous
                                    </a>
                                </li>)
                            }
                            {
                                getPagesArray(props.totalPages).map((item)=>
                                    <li class={item == props.page ? 'page-item active' : 'page-item'}><a class="page-link" name={item} onClick={()=> props.onPageChange(item, props.totalPages)}>{item}</a></li>
                                )
                            }
                            {
                                props.page < props.totalPages && (
                                    <li className="page-item">
                                        <a className="page-link" name={props.page+1} onClick={()=> props.onPageChange(props.page+1, props.totalPages)}>
                                            Next
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                </div>
            </session>
        </>
    )
}

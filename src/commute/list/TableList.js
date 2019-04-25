import React from 'react';
//import classNames from 'classnames/bind';
import { Table } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
//import moment from 'moment';
//import removeMd from 'remove-markdown';

//const cx = classNames.bind(styles);
/*
const PostItem = ({ title, body, publishedDate, tags, id}) => {
    const tagList = tags.map(
        tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>
    );
    return (
        <div className={cx('page-item')}>
            <h2><Link to={`/post/${id}`}>{title}</Link></h2>
            <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
            <p>{removeMd(body)}</p>
            <div className={cx('tags')}>
                {tagList}
            </div>
        </div>
    )
}   
*/

const TableList = ({tables}) => {
    const TableList = tables.map(
        (table, index) => {
            const { user_no, insert_user_id, day, total_worktime, state, commute } = table.toJS();
            return (
                <tr key={index}>
                    <td>{user_no}</td>
                    <td>{insert_user_id}</td>
                    <td>{day}</td>
                    <td>{total_worktime}</td>
                    <td>{state}</td>
                    <td>{commute}</td>
                </tr>
            )
        }
    );
    return (
        <div>
            <Table responsive hover>
                <thead>
                <tr>
                    <th>User No</th>
                    <th>이름</th>
                    <th>일자</th>
                    <th>총근무시간</th>
                    <th>상태</th>
                    <th>구분</th>
                </tr>
                </thead>
                <tbody>
                    { TableList }
                </tbody>
            </Table>
        </div>
    )
    
};


export default TableList;
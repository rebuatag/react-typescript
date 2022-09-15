import React from 'react';
import Reminder from '../models/reminder';

// defining the shape of our reminder
interface ReminderListProps {
    items: Reminder[];
    onRemoveReminder: (id: number) => void;
}

function ReminderList({items, onRemoveReminder}: ReminderListProps) {
    return (
        <ul className='list-group'>
            {items.map( item => <li className= 'list-group-item' key = {item.id}>
                {item.title}
                {/* m= margin x= horizontal then the value */}
                <button onClick={() => onRemoveReminder(item.id)} className="btn btn-outline-danger mx-2 rounded-pill">Delete</button>
            </li>)}
        </ul>
    );
}

export default ReminderList;
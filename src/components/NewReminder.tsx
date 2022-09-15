import React, { useState } from 'react';

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

// annotate return valeu
// if we dont return something we get compilation error
// Object destructiong
function NewReminder({onAddReminder}: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('');

    const submitForm = ( e: React.FormEvent) => {
        e.preventDefault();     //prevent default submission of the form
        if( !title ) return;
        onAddReminder(title);
        setTitle(' ');
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title"></label>
            <input value={title} onChange={e => setTitle(e.target.value)} id= "title" type="text" className="form-control" />
            <button type='submit' className="btn btn-primary rounded-pill my-3">Add Reminder</button>
        </form>
    );
}

export default NewReminder;
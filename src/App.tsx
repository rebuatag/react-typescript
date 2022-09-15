// import React from 'react';
// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import NewReminder from './components/NewReminder';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';

function App() {
  // state hooks
  const [reminders, setReminders] = useState<Reminder[]>([]);
  
  // Effect hook cannot be an async function
  useEffect(() => {
    loadReminders();
  },[])

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };
  
  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders])
  }

  return (
    <div className="App">
      {/* button.btn.btn.primary */}
      {/* <button className="btn btn primary">Click Me</button> */}
      <NewReminder onAddReminder={addReminder}/>
      <ReminderList items={reminders} onRemoveReminder = {removeReminder}/>
    </div>
  );
}

export default App;

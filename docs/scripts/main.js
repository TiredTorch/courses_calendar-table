'use strict';

const calendar = document.querySelector('#calendar');
const dayOfWeek = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];

function calendarTable(year, month, element) {
  const header = document.createElement('h2');

  header.innerHTML = 'Calendar';
  element.append(header);

  const userDate = new Date(year, month - 1);
  const daysInAMonth = new Date(year, month, 0).getDate();

  const newCalendarTable = document.createElement('table');

  createHeader(newCalendarTable);
  fillCalendar(newCalendarTable, userDate.getDay(), daysInAMonth);

  element.append(newCalendarTable);
}

const createHeader = (root) => {
  const calendarHeader = document.createElement('tr');

  dayOfWeek.forEach(element => {
    const day = document.createElement('th');

    day.innerHTML = element;
    calendarHeader.append(day);
  });
  
  root.append(calendarHeader);

};
const fillCalendar = (root, positionOfFirstDayInTheWeek, amountOfDays) => {
  const DAYS_IN_THE_WEEK = 7;
  let cursor = 1;
  let tempDay = 1;

  for (let indexRow = 0; tempDay < amountOfDays + 1; indexRow++) {
    const newRow = document.createElement('tr');
    
    for (let indexCell = 0; indexCell < DAYS_IN_THE_WEEK; indexCell++) {
      const newCell = document.createElement('td');
      
      if (cursor > positionOfFirstDayInTheWeek && tempDay < amountOfDays + 1){
        newCell.innerHTML = tempDay;
        tempDay++;
      }

      cursor++;
      newRow.append(newCell);

    }

    root.append(newRow);
  }
};

calendarTable(2019, 10, calendar);

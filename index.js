/* Your Code Here */
let createEmployeeRecord = function (array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

let createEmployeeRecords = function (employeeData) {
  return employeeData.map(function (array) {
    return createEmployeeRecord(array);
  });
};

let createTimeInEvent = function (dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  
  let object = {
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  };
  this.timeInEvents.push(object);
  return this;
};

let createTimeOutEvent = function (dateStamp) {
  let [date, hour] = dateStamp.split(" ");

  let object = {
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  };
  this.timeOutEvents.push(object);
  return this;
};

let hoursWorkedOnDate = function (soughtDate) {
  let TimeIn = this.timeInEvents.find(function (e) {
    return e.date === soughtDate;
  });

  let TimeOut = this.timeOutEvents.find(function (e) {
    return e.date === soughtDate;
  });

  return (TimeOut.hour - TimeIn.hour) / 100;
};

let wagesEarnedOnDate = function (dateSought) {
  let Wages = hoursWorkedOnDate.call(this, dateSought) * this.payPerHour;
  return parseFloat(Wages.toString());
};

let findEmployeeByFirstName = function (srcArray, firstName){
  return srcArray.find(record => record.firstName === firstName)
}

let calculatePayroll = function (arrayOfEmployeeRecords) {
  return arrayOfEmployeeRecords.reduce(function (total=0, record) {
    return total + allWagesFor.call(record);
  }, 0);
};

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


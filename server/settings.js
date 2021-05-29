const schedule = require('node-schedule');

var job = schedule.scheduleJob('0 0 0 1 * *', function() {
    let now = new Date();
  
    
  
    let students_sql = "SELECT stnum, name FROM students";
    let insert_sql = `INSERT INTO check_students (stnum, name, temp, date, checked) 
                        VALUES (?, ?, "", ?, 0);`
    db.query(students_sql, function(error, students) {  //자정이 되면 초기화
        for(let i=0; i<students.length; i++) {
            let snum = students[i].stnum;
            let sname = students[i].name;
            db.query(insert_sql, [snum, sname, getFormDate(now)], function(e, result) {
                if(e) throw e;
            });
        }
    });
})


module.exports = job;
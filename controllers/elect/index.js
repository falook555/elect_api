
exports.findeletri = (req, res, next) => {
    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = "SELECT name,monthlast,monthcurrent,unit,paypal,water,perunit,total,persent FROM paypal LIMIT 100";
        connection.query(sql, (err, results) => {
            if (err) return console.log(err)
            res.send(results)
        })
    })
}


exports.showmonth = (req, res, next) => {
    let id = req.params.id
    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT numhome,Badgenumber,name,SUM(water) as water , SUM(paypal) as elect ,emonth , eyear,

        if(emonth = "01",'มกราคม',
        if(emonth = "02",'กุมภาพันธ์',
        if(emonth = "03",'มีนาคม',
        if(emonth = "04",'เมษายน',
        if(emonth = "05",'พฤษภาคม ',
        if(emonth = "06",'มิถุนายน',
        if(emonth = "07",'กรกฎาคม',
        if(emonth = "08",'สิงหาคม',
        if(emonth = "09",'กันยายน',
        if(emonth = "10",'ตุลาคม',
        if(emonth = "11",'พฤศจิกายน',
        if(emonth = "12",'ธันวาคม','')))))))))))) as month
        
        FROM paypal 
        where Badgenumber = ${id}
        GROUP BY eyear , emonth
        order by concat(eyear , emonth) DESC `;
        connection.query(sql,(err, results) => {
            if (err) return console.log(err)
            res.send(results)
        })
    })
}
exports.showDetail = (req, res, next) => {
    let emonth = req.params.emonth
    let eyear = req.params.eyear
    let badgenumber = req.params.badgenumber
    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT * FROM paypal WHERE emonth=? AND eyear=? AND Badgenumber= ?`;
        connection.query(sql,[emonth,eyear,badgenumber],(err, results) => {
            if (err) return console.log(err)
            res.send(results)
        })
    })
}

exports.profile = (req, res, next) => {
    let badgenumber = req.params.badgenumber
    req.getConnection((err, connection) => {
        if (err) return next(err)
        var sql = `SELECT Name,DEFAULTDEPTID FROM userinfo WHERE Badgenumber =?`;
        connection.query(sql,[badgenumber],(err, results) => {
            if (err) return console.log(err)
            res.send(results)
        })
    })
}


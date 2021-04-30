const db = require("../config/connection")

module.exports = {
    serviceAddBarang: (data, callBack) => {
        db.query(
            `insert into barang (namaBarang, harga, stok)
            values (?,?,?)`,
            [
                data.nama_barang,
                data.harga,
                data.stok
            ],
            (err, results) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results)
                }
            }
        )
    },

    serviceGetBarang: callBack => {
        db.query(
            `select*from barang`,
            [],
            (err, results) => {
                if (err) {
                    return callBack(err)
                } else {
                    return callBack(null, results)
                }
            }
        )
    },

    serviceGetBarangByKodeBarang: (kodeBarang, callBack) => {
        db.query(
            `select*from barang where kodeBarang=?`,
            [kodeBarang],
            (err, results) => {
                if (err) {
                    return callBack(err)
                } else {
                    return callBack(null, results[0])
                }
            }
        )
    },

    serviceUpdateBarang: (data, callBack) => {
        db.query(
            `update barang set namaBarang=?, harga=?, stok=? where kodeBarang=?`,
            [
                data.nama_barang,
                data.harga,
                data.stok,
                data.kodeBarang
            ],
            (err, results) => {
                if (err) {
                    return callBack(err)
                } else {
                    return callBack(null, results)
                }
            }
        )
    },

    serviceDeleteBarang: (data, callBack) => {
        db.query(
            `delete from barang where kodeBarang=?`,
            [data.kodeBarang],
            (err,results) => {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null,results)
                }
            }
        )
    }
}
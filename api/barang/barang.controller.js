const{
    serviceAddBarang,
    serviceGetBarang,
    serviceGetBarangByKodeBarang,
    serviceUpdateBarang,
    serviceDeleteBarang
}=require("./barang.service")

module.exports = {
    controllerAddBarang: (req,res)=> {
        const body = req.body
        serviceAddBarang(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success:1,
                data: results
            })
        })
    },

    controllerGetBarang: (req,res) => {
        serviceGetBarang((err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },
    
    controllerGetBarangByKodeBarang: (req,res)=>{
        const kodeBarang=req.params.kodeBarang
        serviceGetBarangByKodeBarang(kodeBarang,(err,results)=>{
            if(err){
                console.log(err)
                return
            }if(!results){
                return res.json({
                    success:0,
                    message: "Record not found"
                })
            }else{
                return res.json({
                    success: 1,
                    data: results
                })
            }
        })
    },

    controllerUpdateBarang: (req,res)=>{
        const body=req.body
        serviceUpdateBarang(body, (err,results)=>{
            if(err){
                console.log(err)
                return
            }if(!results){
                return res.json({
                    succes: 0,
                    message: "update failed"
                })
            }else{
                return res.json({
                    success: 1,
                    message: "update success"
                })
            }
        })
    },

    controllerDeleteBarag: (req,res)=>{
        const body = req.body
        serviceDeleteBarang(body, (err,results)=>{
            if(err){
                console.log(err)
                return
            }if(!results){
                return res.json({
                    success: 0,
                    message: "record not found"
                })
            }else{
                return res.json({
                    success: 1,
                    message: "delete success"
                })
            }
        })
    }
}
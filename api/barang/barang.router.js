const{
    controllerAddBarang,
    controllerGetBarang,
    controllerGetBarangByKodeBarang,
    controllerUpdateBarang,
    controllerDeleteBarag
}=require("./barang.controller")

const router = require("express").Router()
const{checkToken}=require("../auth/token_validation")

router.post("/addBarang", checkToken, controllerAddBarang)
router.get("/getBarang", checkToken, controllerGetBarang)
router.get("/getBarang/:kodeBarang", checkToken, controllerGetBarangByKodeBarang)
router.patch("/updateBarang", checkToken, controllerUpdateBarang)
router.delete("/deleteBarang", checkToken, controllerDeleteBarag)

module.exports=router
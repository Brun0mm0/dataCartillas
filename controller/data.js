const dataArr = require('../data/dataOutput.json')

exports.empresas = (req,res,next) => {
    
    const {data} = dataArr
    const {nombre} = req.query
    const nombrePrestadores = data.map( prestadores => prestadores["NOMBRE COMPLETO DEL PRESTADOR"])
    const nombresUnicos = [ ...new Set(nombrePrestadores)]
    console.log(nombre)
    res.status(200).json({
        cantidad:nombresUnicos.length,
        nombresUnicos
    })
}
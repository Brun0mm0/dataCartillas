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

exports.prestadores = (req,res,next) => {
    
    const {prestador} = req.query
    const {data} = dataArr

    const respuesta = data.filter(
        (prestadores) => prestadores["NOMBRE COMPLETO DEL PRESTADOR"] === prestador 
    );

    const especialidades = data.map( prestadores => prestadores["ESPECIALIDAD"])
    const tipo = data.map( prestadores => prestadores["TIPO DE PRESTADOR"])
    const tipoAtencion = [ ...new Set(tipo) ]

    res.status(200).json({
        count: respuesta.length,
        tipoAtencion,
        especialidades,
        resp:respuesta[0]
    })
}

exports.provincias = (req,res,next) => {
    
    const {provincia} = req.query
    const {data} = dataArr

    const respuesta = data.filter(
        (provincias) => provincias["PROVINCIA"] === provincia
    );

    res.status(200).json({
        count: respuesta.length,
        respuesta
    })
}
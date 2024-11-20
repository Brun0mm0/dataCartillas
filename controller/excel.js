const fs = require('fs')
const ExcelJS = require('exceljs');

exports.excel = async (req,res,next) => {
    
    try {
        const workbook = new ExcelJS.Workbook();
        
        await workbook.xlsx.readFile('../cartilla-anexos/cartilla.xlsx'); // Espera a que el archivo se lea
        
        const sheetCount = workbook.worksheets.length;

    // Obtener los nombres de todas las hojas
        const sheetNames = workbook.worksheets.map(sheet => sheet.name);
        
        // const worksheet = workbook.

        if (sheetCount > 0) {
            const firstSheet = workbook.worksheets[1];
            const headers = firstSheet.getRow(3).values.slice(1);
            const rowValues = [];
            firstSheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
                if (rowNumber > 3) {  // Omitimos las primeras 3 filas (encabezados)
                    // let rowData = {};
                    let rowData = { id: rowNumber - 3 };
                    headers.forEach((header, colIndex) => {
                        rowData[header] = row.getCell(colIndex + 1).value ?? null; // Respetar celdas vacías como `null`
                      });
                    rowValues.push(rowData);
                  }
            });

            // fs.writeFile('dataOutput.json',JSON.stringify(rowValues, null, 2), (err)=>{console.error(err)})
      
            res.json(
              rowValues, // Muestra los valores de la primera hoja
            );
          } else {
            res.status(400).json({ error: 'El archivo no contiene hojas' });
          }
        
        
        } catch (error) {
            console.log(error)
          res.status(400).json({
              err: error
          })
        // console.error('Error leyendo el archivo Excel:', error); // Manejo de errores
      }

}
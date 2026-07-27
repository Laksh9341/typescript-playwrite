import * as XLSX from "xlsx";

export function getExcelData(sheetName: string) {
    const workbook = XLSX.readFile("dataDriver/LoginInfo.xlsx");
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
}
import XLSX from 'xlsx';

const downloadExcel = (translateMessage, data, columns, fileName) => {
  const listFilterColumns = data.map(item => {
    const obj = {};
    columns.forEach(col => {
      if (col.type === 'bool') {
        obj[col.text] =
          item[col.apiFieldName] === 1
            ? translateMessage({ id: 'yes' })
            : translateMessage({ id: 'no' });
      } else {
        obj[col.text] = item[col.apiFieldName];
      }
    });
    return obj;
  });

  const ws = XLSX.utils.json_to_sheet([...listFilterColumns]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'List');
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};

export default downloadExcel;

import XLSX from 'xlsx';

const downloadExcel = (translateMessage, data, columns, fileName, isDownloadFile = true) => {
  const listFilterColumns = data.map(item => {
    const obj = {};
    columns.forEach(col => {
      if (col.type === 'bool') {
        obj[col.text] =
          item[col.apiFieldName] === 1
            ? translateMessage({ id: 'yes' })
            : translateMessage({ id: 'no' });
      } else if (col.type === 'flag') {
        if (item[col.apiFieldName] === 208)
          obj[col.text] = translateMessage({ id: 'country.portugal' });
        if (item[col.apiFieldName] === 150)
          obj[col.text] = translateMessage({ id: 'country.brazil' });
        if (item[col.apiFieldName] === 231)
          return translateMessage({ id: 'country.unitedKingdom' });
        if (item[col.apiFieldName] === 232)
          obj[col.text] = translateMessage({ id: 'country.unitedStates' });
      } else {
        obj[col.text] = item[col.apiFieldName];
      }
    });
    return obj;
  });

  if (isDownloadFile) {
    const ws = XLSX.utils.json_to_sheet([...listFilterColumns]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'List');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  } else {
    return [...listFilterColumns];
  }
};

export default downloadExcel;

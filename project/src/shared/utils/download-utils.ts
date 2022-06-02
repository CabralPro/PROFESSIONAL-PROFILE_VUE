/**
 * @description
 * Calculates the download status and returns a string
 */
 export const statusDownload = (numberFilesToUpload: number, totalNumberFilesToUpload: number) =>
 `${((numberFilesToUpload * -1) + 1) + totalNumberFilesToUpload} de ${totalNumberFilesToUpload}`


/**
* @description
* Downloads a file base64
*/
export const downloadFile = (fileName: string, fileBase64: string) => {
 var element = document.createElement('a');
 element.setAttribute('href', fileBase64);
 element.setAttribute('download', fileName);
 element.style.display = 'none';
 document.body.appendChild(element);
 element.click();
 document.body.removeChild(element);
}

/**
* @description
* Downloads a file html
*/
export const downloadFileHtml = (fileName: string, html: string) => {
 var element = document.createElement('a');
 element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(html));
 element.setAttribute('download', fileName);
 element.style.display = 'none';
 document.body.appendChild(element);
 element.click();
 document.body.removeChild(element);
}

/**
* @description
* Download file by url
*/
export const downloadFileByUrl = (url: string) => {
 var element = document.createElement('a');
 element.setAttribute('href', url);
 element.setAttribute('targer', '_blank');
 element.style.display = 'none';
 document.body.appendChild(element);
 element.click();
 document.body.removeChild(element);
}
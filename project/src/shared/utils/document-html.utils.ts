/**
 * Ca end scrool page
 */

 export const isEndScrollPage = (beforeEnd = 0) =>
 (window.innerHeight + window.scrollY) >= document.body.offsetHeight - beforeEnd;


/**
* @description
* Copies a value to the clipboard
*/
export const copyTextToClipboard = (value: string, msgToast: string) => {
	let inputTest = document.createElement("input");
	inputTest.value = value;
	document.body.appendChild(inputTest);
	inputTest.select();
	document.execCommand('copy');
	document.body.removeChild(inputTest);
	// window.toaster?.success('', msgToast ?? 'Link copiado!')
}

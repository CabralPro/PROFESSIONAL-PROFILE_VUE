/**
 * @description
 * Turns the initials of the name into capital letters
 */
export const getInitialsLeters = (string: string) => {
	const initials = string.split(' ');
	return (
		initials[0]?.charAt(0)
		+ (initials[1]?.charAt(0) ? initials[1]?.charAt(0) : '')
	).toUpperCase();
};

/**
 * @description
 * Turns the initials of the name into capital letters
 */
export const capitalize = (string: string) =>
	string.toLocaleLowerCase()
		.replace(/(^|\s)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());

/**
* @description
* Turns a value into the real currency
*/
export const convertToReal = (value: string | number) => {
	const newValue = (typeof (value) === 'string') ? parseFloat(value as string) : value;
	return (!value && value != 0) ?
		null :
		newValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

/**
* @description
* Remove all spaces of string
*/
export const removeAllSpaces = (value: string) => value.replace(/\s/g, '');

/**
* @description
* Remove all spaces of string
*/
export const getOnlyNumbers = (value: string) => value.replace(/^\D+/g, '');

/**
* @description
* Remove all spaces of string
*/
export const trimWithString = (string: string, replaces: string[]) => {
	replaces.forEach((replacer) => {
		if (string.startsWith(replacer)) string = string.slice(replacer.length);
		if (string.endsWith(replacer)) string = string.substring(0, string.length - replacer.length);
	});
	return string;
};

/**
* @description
* Remove pimctuation
*/
export const removePunctuation = (text: string) => text.replace(/[?!;.…]/g, ' ');

/**
* @description
* Remove tags
*/
export const removeTags = (text: string) => text.replace(/(<[^>]+)>/ig, ' ').trim();

/**
* @description
* Remove simbols
*/
export const removeSimbols = (text: string) =>
	text.replace(/[\])}[{<>("]|♪|♪♪|&nbsp|&amp/g, ' ').trim();

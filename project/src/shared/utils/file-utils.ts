/**
 * @description
 * Returns the extension the file
 */
export const getExtensionFile = (file: File) =>
	(file.name.split('.').pop() as string).toLowerCase()
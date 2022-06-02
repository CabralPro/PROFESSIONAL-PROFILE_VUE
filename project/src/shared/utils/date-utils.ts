/**
 * @description
 * Transforms the date to local format
 */
export const convertToLocalDate = (value: string | Date) => value instanceof Date ?
	value.toLocaleDateString() :
	(value ? new Date(value.replace('Z', '')).toLocaleDateString() : null);

/**
	* @description
	* Transforms the date and hour to local format
	*/
export const convertToLocalDateTime = (value: string | Date) => value instanceof Date ?
	value.toLocaleString() :
	(value ? new Date(value.replace('Z', '')).toLocaleString() : null);

/**
	* @description
	* Return the current date from Brazil in en-US format
	*/
export const dateTimeNow = () => new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });

/**
 * @description
 * Return a date increased of days
 */
export const addDays = (date: Date, days: number) => {
	const futureDate = new Date(date.toISOString());
	futureDate.setDate(date.getDate() + days);
	return futureDate
}

/**
 * @description
 * Return a date increased of months
 */
export const addMonths = (date: Date, months: number) => {
	const futureDate = new Date(date.toISOString());
	futureDate.setMonth(date.getMonth() + months);
	return futureDate
}

/**
 * @description
 * Return a diference in days enter two dates
 */
export const subtractDate = (startDate: Date, endDate: Date) =>
	( (endDate as any) - (startDate as any) ) / (1000 * 60 * 60 * 24);
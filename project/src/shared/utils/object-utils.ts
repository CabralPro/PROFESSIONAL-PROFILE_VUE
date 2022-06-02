/**
 * @description
 * Get prop nested at object
 */
export const setPropValueObj = (obj: any, path: string, value: any) => {
	const keys = path.split('.');
	let count = 0;

	const entri = (objeto: any) => {
		count++;
		const key = keys[count - 1];

		if (count == keys.length) {
			objeto[key] = value;
			return;
		}

		if (objeto[key] === undefined) objeto[key] = {};

		entri(objeto[key]);
	};

	entri(obj);
	return obj;
};

/**
 * @description
 * Get prop nested at object
 */
export const getPropObj = (obj: any, path: string) => {
	const keys = path?.split('.');
	let child: any = obj ?? {};
	keys?.forEach((e) => child = child[e] ?? {});
	return JSON.stringify(child) == '{}' ? null : child;
};

/**
 * @description
 * Delete all null, undefined, empty objects and empty strings properties from an object.
 * Set recursion to false if you don't want to exclude aligned properties
 */
export const cleanObject = <T>(obj: any, recurse = true) => {
	
	const isNull = (obj: any, arrayCheckNull?: Array<boolean>) => {
		const isNullArray = arrayCheckNull ?? [];

		for (const prop in obj) {
			const el = obj[prop];

			if (el === null || el === '') {
				isNullArray.push(true);
				continue;
			}

			if (typeof el === 'object') {
				if (Object.keys(el).length == 0) {
					isNullArray.push(true);
					continue;
				}

				if (recurse) {
					isNull(el, isNullArray);
					continue;
				}
			}

			isNullArray.push(false);
			break;
		}

		return !isNullArray.some((e) => e === false);
	};

	for (const prop in obj) {
		const el = obj[prop];
		if (el === null || el === '' || (typeof el === 'object' && isNull(el))) { delete obj[prop]; }
	}

	return obj as T;
};

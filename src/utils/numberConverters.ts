/** Converter file that host a selection of number converters */


/** Number grouping converter. Converts and groups number inputs with " ". eg. 1000000 to 1 000 000 */

export const convertNumberGrouping = (value:string | number) => {
    let convertValue:string = value as string;
        convertValue.replace(/\s/g, '');
        return parseInt(convertValue, 10);
}
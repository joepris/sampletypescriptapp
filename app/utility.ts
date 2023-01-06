class Utility {
    
    static getInputValue(elementID: string): string {
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
        return inputElement.value;
        //getElementId is the first thing thing this function does.
    }
}
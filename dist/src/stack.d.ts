export declare class Stack<T> {
    stackArray: T[];
    constructor();
    /**
     * Returns element on top of the stack
     * @returns Element on top of the stack
     */
    Top(): T;
    /**
     * Adds new element on top of the stack
     * @param item Item to add
     */
    Push(item: T): void;
    /**
     * Removes element on top of the stack
     */
    Pop(): void;
    /**
     * Tells if stack is empty
     * @returns True if stack is empty
     */
    Empty(): boolean;
    /**
     * Removes all elements in the stack
     */
    Clear(): void;
    /**
     * Returns length of the stack
     * @returns Number of elements in the stack
     */
    Size(): number;
}

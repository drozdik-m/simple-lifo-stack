﻿
//--------------------------------------------------
//----------STACK-----------------------------------
//--------------------------------------------------
export class Stack<T>
{
    //--------------------------------------------------
    //----------VARIABLES-------------------------------
    //--------------------------------------------------
    //Array storage
    stackArray: T[] = [];

    //--------------------------------------------------
    //---------CONSTRUCTOR------------------------------
    //--------------------------------------------------
    constructor()
    {

    }

    //--------------------------------------------------
    //----------METHODS---------------------------------
    //--------------------------------------------------

    /**
     * Returns element on top of the stack
     * @returns Element on top of the stack
     */
    Top(): T
    {
        if (this.Empty())
            return null;
        return this.stackArray[this.stackArray.length - 1];
    }
    /**
     * Adds new element on top of the stack
     * @param item Item to add
     */
    Push(item: T)
    {
        this.stackArray.push(item);
    }
    /**
     * Removes element on top of the stack
     */
    Pop()
    {
        this.stackArray.pop();
    }

    /**
     * Tells if stack is empty
     * @returns True if stack is empty
     */
    Empty(): boolean
    {
        return this.stackArray.length === 0;
    }
    /**
     * Removes all elements in the stack
     */
    Clear()
    {
        this.stackArray = [];
    }
    /**
     * Returns length of the stack
     * @returns Number of elements in the stack
     */
    Size(): number    
    {
        return this.stackArray.length;
    }

}
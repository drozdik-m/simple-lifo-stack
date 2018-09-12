exports.__esModule = true;
//--------------------------------------------------
//----------STACK-----------------------------------
//--------------------------------------------------
var Stack = /** @class */ (function () {
    //--------------------------------------------------
    //---------CONSTRUCTOR------------------------------
    //--------------------------------------------------
    function Stack() {
        //--------------------------------------------------
        //----------VARIABLES-------------------------------
        //--------------------------------------------------
        //Array storage
        this.stackArray = [];
    }
    //--------------------------------------------------
    //----------METHODS---------------------------------
    //--------------------------------------------------
    /**
     * Returns element on top of the stack (null if empty)
     * @returns Element on top of the stack
     */
    Stack.prototype.Top = function () {
        if (this.Empty())
            return null;
        return this.stackArray[this.stackArray.length - 1];
    };
    /**
     * Adds new element on top of the stack
     * @param item Item to add
     */
    Stack.prototype.Push = function (item) {
        this.stackArray.push(item);
    };
    /**
     * Removes element on top of the stack (doesn't return it)
     */
    Stack.prototype.Pop = function () {
        this.stackArray.pop();
    };
    /**
     * Tells if stack is empty
     * @returns True if stack is empty
     */
    Stack.prototype.Empty = function () {
        return this.stackArray.length === 0;
    };
    /**
     * Removes all elements in the stack
     */
    Stack.prototype.Clear = function () {
        this.stackArray = [];
    };
    /**
     * Returns length of the stack
     * @returns Number of elements in the stack
     */
    Stack.prototype.Size = function () {
        return this.stackArray.length;
    };
    return Stack;
}());
exports.Stack = Stack;

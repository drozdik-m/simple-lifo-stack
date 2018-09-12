
![Stack class - banner](images/heading-image.png?raw=true "Stack - simple and light stack")

# Stack

"Stack" is a **simple stack class**. This module is easy to use, light, small and has **no dependencies**, except assert-testing module for testing (not needed for usage).

The module is written in TypeScript and compiled into commonJS. 

**This is not any high-tech code. It is not dependent on 314159265359 modules and does not offer unseen JavaScript magic. Download this, save an hour of your time and use it to create something awesome and efficient. We #keepItSimple.**

## Download

You can download the module on [GitHub/simple-lifo-stack](https://github.com/drozdik-m/simple-lifo-stack) or using [npm/simple-lifo-stack](https://www.npmjs.com/package/simple-lifo-stack) service.

```
npm install simple-lifo-stack --save
```

## Stack - What is that? (skip if you know)

Stack is a **way to store unknown or large quantity of content**, just like an array or a linked list. **Usually, it has good usage in recursive functions or specific algorithms.**

Stack has different structure and functionality, then an array or a linked list though. Stack is LIFO (last-in, first-out) structure. Stack remembers all added values in its inserted order but can return only the last inserted item. It is like putting things in a bucket. They are all there, but only the top one can be picked up. If you pick it up, it reveals the item underneath, which can be also picked up (etc.). 

```
 INSERT (PUSH)        WITHDRAW (POP)                    INSERT (PUSH)        WITHDRAW (POP)                  INSERT (PUSH)        WITHDRAW (POP)
 -------------       ------------->                     -------------       ------------->                    ------------       ------------->
             |       |                                              |       |                                            |       |
       +     |       |      +                                 +     |       |      +                               +     |       |      +
       |     |       |      |                                 |     |       |      |                               |     |       |      |
       |     v       |      |                                 |     v       |      |                               |     v       |      |
       |                    |                                 |                    |                               |                    |
       +--------------------+                                 |                    |                               +--------------------+
       |    third added     |      Popped the top item        |                    |      Pushed fourth item       |   fourth added     |
       |   item (pickable)  |     +-------------------->      |                    |     +------------------>      |   item (pickable)  |
       +--------------------+                                 +--------------------+                               +--------------------+
       |    second added    |                                 |    second added    |                               |    second added    |
       |       item         |                                 |   item (pickable)  |                               |       item         |
       +--------------------+                                 +--------------------+                               +--------------------+
       |    first added     |                                 |    first added     |                               |    first added     |
       |       item         |                                 |       item         |                               |       item         |
       +--------------------+                                 +--------------------+                               +--------------------+
```

```javascript

//Create a stack and add 3 values
var stack = new Stack();
stack.Push("first added item");
stack.Push("second added item");
stack.Push("third added item");

//Now we have the same situation like the first stack on the ASCII art image above

//Pop the top item (2nd stack on the image above)
stack.Pop();

//Now add a new item (3rd stack on the image obove)
stack.Push("fourth added item");

```


You may ask, why would anyone want or need this. It can be easily made with an array. Well, you are right. It is made using an array. I am sure, that anyone could manage without this software implementation of a stack and use just an array, but that means excessive and possibly confusing code. Using the Stack is much more elegant. 

Perfect example of the stack is checking, if a text has correctly paired brackets. You iterate the text letter by letter and every time you see a bracket, you do one of two actions: If the bracket on the top of the stack is the same you currently hold, you put the holding bracket in the stack. If the brackets are different, you remove the bracket on the top of the stack. When you iterate on the end of the text and the stack is empty, the brackets are paired correctly (every bracket has its partner). Otherwise some brackets are not paired correctly. Of course, you could use an array and remember an index, but the Stack class removes this excessive programming. 

Summary: **This software implementation of stack is very useful in specific situations and algorithms**, but you probably won’t use it in everyday code. **Even though JavaScript has its own implementation using an array, you might find this class more elegant.**

## Usage

### Import and create new stack

You can import the module using __import__ keyword or __require__ function. In TypeScript, the Stack class is a generic class ("<>" thingies).

```javascript
import { Stack } from "simple-lifo-stack";

//Instantiate new and empty Stack
var stack = new Stack();

//For TypeScript programmers: Stack in a generic class, so declaration in TypeScript would look like:
let stack = new Stack<string>(); //<string> or whatever data type you want to store and work with

```

```javascript
var S = require("simple-lifo-stack")

//Instantiate new and empty Stack
var stack = new S.Stack();

```

### Stack

Class Stack does not come with an iterator, because that would go against its logic. 

Working with the Stack is easy. Here are all implemented methods:


```javascript

//Instantiate new and empty Stack
var stack = new Stack();

stack.Top(); //Returns an element on the top (doesn't delete it)

stack.Push(); //Pushes (adds) new element on the top

stack.Pop(); //Removes (doesn't return) the top element
//In some other stack classes (other languages or implementations), the Pop() method removes the top element and also returns top value. This class doesn't because of efficiency. Of you handle for example large strings, it would have to copy it, even if you don’t need it. It's more efficient this way, but you may need one more line of a code.

stack.Empty(); //Returns True if the stack is empty (== no values inserted)

stack.Clear(); //Removes all values in the stack

stack.Size(); //Returns number of values in the stack (size of the stack)

```

### More examples

There is a testing file included in this module ("simple-lifo-stack/tests/stack_tests.ts" for TypeScript or "simple-lifo-stack/dist/tests/stack_tests.js" for JavaScript). You may find few useful examples there.

Sorry for my English, I hope it's readable.